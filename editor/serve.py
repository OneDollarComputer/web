#!/usr/bin/env python3
"""OneDollarComputer editor server.

Same HTML for both modes — only startup chooses the backend:

  ./serve.py                 # local JSON + Cargo (default)
  ./serve.py --mode local
  ./serve.py --mode firebase # serve static UI; editor uses Firebase

Env:
  ODC_EDITOR_HOST (default 127.0.0.1)
  ODC_EDITOR_PORT (default 8080)
  ODC_EDITOR_MODE (local|firebase) — overridden by --mode
  ODC_MONOREPO — path to bootloader_odb (firmware + FlashingPro + wrap_odc).
    Auto-detected when editor sits inside the monorepo or under common clone paths.
"""

from __future__ import annotations

import argparse
import base64
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

ROOT = Path(__file__).resolve().parent
PROJECTS_DIR = ROOT / "projects"
# When editor/ lives inside the marketing site, serve the whole site so
# /editor/?projectID=demo, logos, and /api/* all work on one local port.
_SITE_CANDIDATE = ROOT.parent
SITE_ROOT = (
    _SITE_CANDIDATE
    if (_SITE_CANDIDATE / "index.html").is_file()
    and (_SITE_CANDIDATE / "editor" / "index.html").is_file()
    else ROOT
)


def discover_monorepo() -> Path:
    """Locate bootloader_odb monorepo (firmware + FlashingPro + wrap_odc).

    Order:
      1. ODC_MONOREPO env
      2. parent of editor/ when layout is monorepo/editor
      3. well-known local clone paths
    """
    env = os.environ.get("ODC_MONOREPO", "").strip()
    if env:
        p = Path(env).expanduser().resolve()
        if (p / "onedollarcomputer" / "firmware").is_dir():
            return p
        raise SystemExit(f"ODC_MONOREPO has no onedollarcomputer/firmware: {p}")

    parent = ROOT.parent
    if (parent / "onedollarcomputer" / "firmware").is_dir():
        return parent

    home = Path.home()
    for candidate in (
        home / "Documents" / "GitHub" / "bootloader_odb",
        home / "github" / "bootloader_odb",
        home / "GitHub" / "bootloader_odb",
    ):
        if (candidate / "onedollarcomputer" / "firmware").is_dir():
            return candidate.resolve()

    return parent


REPO_ROOT = discover_monorepo()
PHYSICALAI_DIR = REPO_ROOT / "physicalai"
PHYSICALAI_UPSTREAM = os.environ.get("PHYSICALAI_UPSTREAM", "http://127.0.0.1:8090").rstrip("/")
FIRMWARE_DIR = REPO_ROOT / "onedollarcomputer" / "firmware"
PRO_DIR = REPO_ROOT / "onedollarcomputer" / "pro" / "rv32e"
FLASHINGPRO = PRO_DIR / "target" / "release" / "flashingpro"
BIN_NAME = "editor_local"
BIN_SRC = FIRMWARE_DIR / "src" / "bin" / f"{BIN_NAME}.rs"
TARGET = "riscv32e-unknown-none-elf"
HOST = os.environ.get("ODC_EDITOR_HOST", "127.0.0.1")
PORT = int(os.environ.get("ODC_EDITOR_PORT", "8080"))
FLASH_WAIT_SEC = int(os.environ.get("ODC_FLASH_WAIT_SEC", "90"))

# FlashingPro opens the ODC HID exclusively. Concurrent /api/device polls
# (ThreadingHTTPServer + 1s browser poll) otherwise flicker as "disconnected".
_HID_LOCK = threading.Lock()
_HID_CACHE: dict = {"at": 0.0, "payload": None}
_HID_CACHE_TTL_SEC = 1.5

sys.path.insert(0, str(REPO_ROOT / "onedollarcomputer"))
try:
    from wrap_odc import wrap_odc_source  # noqa: E402
except ImportError:
    wrap_odc_source = None  # type: ignore

FIREBASE_PUBLIC = {
    "apiKey": "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
    "authDomain": "auth.onedollarcomputer.com",
    "databaseURL": "https://odc-files-default-rtdb.firebaseio.com",
    "projectId": "odc-files",
    "storageBucket": "odc-files.firebasestorage.app",
    "messagingSenderId": "1086912562723",
    "appId": "1:1086912562723:web:d158f4ce5c08d1ceb95396",
}

DEFAULT_CODE = """//! Example: blink the LED on the One Dollar Computer.

use odc::*; // board helpers: pins, delay, LED, …

fn main() {
    // Configure pin 19 (LED) as output
    pin_output(LED);

    // Repeat forever
    loop {
        pin_set(LED);   // turn LED on
        delay(200);     // wait 200 ms

        pin_clear(LED); // turn LED off
        delay(200);
    }
}
"""

MODE = "local"


def ensure_layout() -> None:
    PROJECTS_DIR.mkdir(parents=True, exist_ok=True)
    if MODE != "local":
        return
    if not FIRMWARE_DIR.is_dir():
        raise SystemExit(
            "firmware dir not found: "
            f"{FIRMWARE_DIR}\n"
            "Set ODC_MONOREPO to your bootloader_odb checkout "
            "(must contain onedollarcomputer/firmware), or use --mode firebase."
        )
    if wrap_odc_source is None:
        raise SystemExit(
            f"cannot import wrap_odc from {REPO_ROOT / 'onedollarcomputer'}\n"
            "Set ODC_MONOREPO to a complete bootloader_odb tree."
        )


def project_path(project_id: str) -> Path:
    safe = re.sub(r"[^a-zA-Z0-9._-]", "_", project_id)[:80] or "default"
    return PROJECTS_DIR / f"{safe}.json"


def load_project(project_id: str) -> dict:
    path = project_path(project_id)
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {
        "projectID": project_id,
        "name": "Untitled Project",
        "language": "rust",
        "content": DEFAULT_CODE,
        "code": DEFAULT_CODE,
        "created": None,
        "updated": None,
        "compilationStatus": None,
    }


def save_project(project_id: str, data: dict) -> dict:
    from datetime import datetime, timezone

    now = datetime.now(timezone.utc).isoformat()
    existing = load_project(project_id)
    merged = {**existing, **data}
    merged["projectID"] = project_id
    merged["language"] = "rust"
    merged["code"] = merged.get("content") or merged.get("code") or DEFAULT_CODE
    merged["content"] = merged["code"]
    merged["updated"] = now
    merged["lastModified"] = now
    if not merged.get("created"):
        merged["created"] = now
    merged["timestamp"] = int(datetime.now(timezone.utc).timestamp() * 1000)
    merged["size"] = len(merged["content"])

    # Keep Flash validity: binarySavedAt must not lag behind project timestamp.
    # Auto-save after compile used to bump timestamp while leaving an older binarySavedAt.
    if (
        merged.get("compilationStatus") == "success"
        and merged.get("binaryHash")
        and merged.get("binary")
    ):
        merged["binarySavedAt"] = now
        merged["compilationUpdatedAt"] = now

    path = project_path(project_id)
    path.write_text(json.dumps(merged, indent=2) + "\n", encoding="utf-8")
    return merged


def ensure_cargo_bin() -> None:
    cargo = FIRMWARE_DIR / "Cargo.toml"
    text = cargo.read_text(encoding="utf-8")
    if f'name = "{BIN_NAME}"' in text:
        return
    block = f'''
[[bin]]
name = "{BIN_NAME}"
path = "src/bin/{BIN_NAME}.rs"
'''
    cargo.write_text(text.rstrip() + "\n" + block + "\n", encoding="utf-8")


def clean_code_for_hash(code: str) -> str:
    code = re.sub(r"//.*?$", "", code, flags=re.M)
    code = re.sub(r"/\*.*?\*/", "", code, flags=re.S)
    return re.sub(r"\s+", " ", code).strip()


def code_hash(code: str) -> str:
    cleaned = clean_code_for_hash(code)
    return hashlib.sha1(cleaned.encode("utf-8")).hexdigest()


def reject_chip_pin_names(content: str):
    """Return an error message if user code uses MCU pad names / legacy GPIO helpers."""
    cleaned = clean_code_for_hash(content)
    for needle in ("gpio_pd", "gpio_pa", "gpio_pc", "gpio_pb"):
        if needle in cleaned:
            return (
                "MCU-named GPIO helpers are forbidden. "
                "Use board pins 0..=19: pin_output(LED), pin_set(LED), pin_clear(LED). "
                "LED = 19, BUTTON = 13."
            )
    m = re.search(r"\bP[ABCD]\d+\b", cleaned)
    if m:
        return (
            f"MCU pad name '{m.group(0)}' is forbidden in user firmware. "
            "Use board pin numbers 0..=19 (LED = 19, BUTTON = 13)."
        )
    return None


def compile_rust(content: str) -> dict:
    if wrap_odc_source is None:
        return {
            "ok": False,
            "compilationStatus": "error",
            "compilationError": "wrap_odc not available; set ODC_MONOREPO",
        }
    bad = reject_chip_pin_names(content)
    if bad:
        return {
            "ok": False,
            "compilationStatus": "error",
            "compilationError": bad,
        }
    try:
        build_src = wrap_odc_source(content)
    except ValueError as e:
        return {
            "ok": False,
            "compilationStatus": "error",
            "compilationError": str(e),
        }
    ensure_cargo_bin()
    BIN_SRC.write_text(build_src, encoding="utf-8")
    build = subprocess.run(
        [
            "cargo",
            "build",
            "--release",
            "--bin",
            BIN_NAME,
            "--target",
            TARGET,
        ],
        cwd=FIRMWARE_DIR,
        capture_output=True,
        text=True,
    )
    if build.returncode != 0:
        return {
            "ok": False,
            "compilationStatus": "error",
            "compilationError": (build.stderr or build.stdout or "cargo build failed")[-8000:],
        }

    elf = FIRMWARE_DIR / "target" / TARGET / "release" / BIN_NAME
    with tempfile.NamedTemporaryFile(suffix=".bin", delete=False) as tmp:
        bin_path = Path(tmp.name)
    try:
        objcopy = subprocess.run(
            ["riscv64-unknown-elf-objcopy", "-O", "binary", str(elf), str(bin_path)],
            capture_output=True,
            text=True,
        )
        if objcopy.returncode != 0:
            return {
                "ok": False,
                "compilationStatus": "error",
                "compilationError": objcopy.stderr or "objcopy failed",
            }
        raw = bin_path.read_bytes()
    finally:
        bin_path.unlink(missing_ok=True)

    return {
        "ok": True,
        "compilationStatus": "success",
        "binary": base64.b64encode(raw).decode("ascii"),
        "binarySize": len(raw),
        "binaryHash": code_hash(content),
        "elfSize": elf.stat().st_size if elf.exists() else None,
    }


def ensure_flashingpro() -> Path:
    if FLASHINGPRO.is_file() and os.access(FLASHINGPRO, os.X_OK):
        return FLASHINGPRO
    build = subprocess.run(
        ["cargo", "build", "--release"],
        cwd=PRO_DIR,
        capture_output=True,
        text=True,
    )
    if build.returncode != 0 or not FLASHINGPRO.is_file():
        raise RuntimeError(
            "FlashingPro build failed:\n" + (build.stderr or build.stdout or "")[-4000:]
        )
    return FLASHINGPRO


def probe_hid_device() -> dict:
    """Return whether ODC HID bootloader is present on USB."""
    now = time.time()
    cached = _HID_CACHE.get("payload")
    if cached is not None and (now - float(_HID_CACHE["at"])) < _HID_CACHE_TTL_SEC:
        return dict(cached)

    with _HID_LOCK:
        now = time.time()
        cached = _HID_CACHE.get("payload")
        if cached is not None and (now - float(_HID_CACHE["at"])) < _HID_CACHE_TTL_SEC:
            return dict(cached)

        try:
            tool = ensure_flashingpro()
            # FlashingPro -i can hang forever on some macOS/HID states; never block /api/device.
            probe = subprocess.run(
                [str(tool), "-C", "hid", "-i"],
                capture_output=True,
                text=True,
                timeout=3,
            )
        except subprocess.TimeoutExpired as e:
            out = ((e.stdout or "") + (e.stderr or "")).strip() if hasattr(e, "stdout") else ""
            payload = {
                "present": False,
                "error": "FlashingPro probe timed out",
                "detail": (out or "")[-2000:],
                "timeout": True,
            }
            _HID_CACHE["at"] = time.time()
            _HID_CACHE["payload"] = payload
            return dict(payload)
        except Exception as e:
            # Must not raise: ThreadingHTTPServer leaves an empty reply if do_GET throws,
            # and the editor treats that as "ODC disconnected".
            payload = {"present": False, "error": str(e)}
            _HID_CACHE["at"] = time.time()
            _HID_CACHE["payload"] = payload
            return dict(payload)

        out = ((probe.stdout or "") + (probe.stderr or "")).strip()
        # Another FlashingPro/WebHID hold means the board is on USB, just busy.
        busy = "exclusive access" in out.lower() or "0xe00002c5" in out.lower()
        payload = {
            "present": probe.returncode == 0 or busy,
            "detail": out[-2000:],
            "flashingpro": str(tool),
            **({"busy": True} if busy and probe.returncode != 0 else {}),
        }
        _HID_CACHE["at"] = time.time()
        _HID_CACHE["payload"] = payload
        return dict(payload)


def wait_for_hid_device(wait_sec: int) -> dict:
    deadline = time.time() + max(1, wait_sec)
    last = {"present": False}
    while time.time() < deadline:
        last = probe_hid_device()
        if last.get("present"):
            return last
        time.sleep(0.5)
    last["timedOut"] = True
    return last


def flash_project(project_id: str, wait_sec: int | None = None) -> dict:
    """Wait until ODC bootloader appears on USB, then flash via FlashingPro."""
    project = load_project(project_id)
    binary_b64 = project.get("binary")
    if not binary_b64 or project.get("compilationStatus") != "success":
        return {"ok": False, "error": "No compiled binary for this project. Compile first."}

    try:
        raw = base64.b64decode(binary_b64)
    except Exception as e:
        return {"ok": False, "error": f"Invalid binary data: {e}"}

    wait = FLASH_WAIT_SEC if wait_sec is None else int(wait_sec)
    probe = wait_for_hid_device(wait)
    if not probe.get("present"):
        return {
            "ok": False,
            "error": (
                "OneDollarComputer bootloader not detected on USB. "
                "Press the physical ODC button to enter bootloader, then retry."
            ),
            "detail": probe.get("detail"),
            "waitedSec": wait,
        }

    try:
        tool = ensure_flashingpro()
    except Exception as e:
        return {"ok": False, "error": str(e)}

    with tempfile.NamedTemporaryFile(suffix=".bin", delete=False) as tmp:
        bin_path = Path(tmp.name)
        bin_path.write_bytes(raw)
    try:
        with _HID_LOCK:
            _HID_CACHE["payload"] = None
            flash = subprocess.run(
                [str(tool), "-C", "hid", "-w", str(bin_path), "flash", "-b"],
                capture_output=True,
                text=True,
            )
            _HID_CACHE["payload"] = None
            _HID_CACHE["at"] = 0.0
    finally:
        bin_path.unlink(missing_ok=True)

    if flash.returncode != 0:
        return {
            "ok": False,
            "error": "FlashingPro failed",
            "detail": (flash.stderr or flash.stdout or "")[-4000:],
        }

    return {
        "ok": True,
        "binarySize": len(raw),
        "projectID": project_id,
        "output": (flash.stdout or "")[-2000:],
    }


def config_payload() -> dict:
    payload = {
        "ok": True,
        "mode": MODE,
        "label": "Local JSON + Cargo + host flash" if MODE == "local" else "Firebase",
        "flashPath": "host-wait-bootloader" if MODE == "local" else "webhid",
        "flashWaitSec": FLASH_WAIT_SEC if MODE == "local" else None,
    }
    if MODE == "local":
        payload["firmware"] = str(FIRMWARE_DIR)
        payload["projectsDir"] = str(PROJECTS_DIR)
        payload["flashingpro"] = str(FLASHINGPRO)
    else:
        payload["firebase"] = FIREBASE_PUBLIC
    return payload


USERNAME_RE = re.compile(r"^[a-z][a-z0-9-]*$")
PROJECT_SLUG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
PROFILE_RESERVED = frozenset(
    {
        "about",
        "brand",
        "project",
        "projects",
        "editor",
        "docs",
        "seo",
        "3d",
        "electronics",
        "download",
        "js",
        "guides",
        "api",
        "physicalai",
        "profile",
        "login",
        "signup",
        "users",
        "user",
        "u",
        "admin",
        "www",
        "static",
        "assets",
        "css",
        "img",
        "images",
        "favicon",
        "robots",
        "sitemap",
        "llms",
        "humans",
        "ai",
        "index",
        "agents",
        "well-known",
        "blog",
        "shop",
        "store",
        "support",
        "help",
        "legal",
        "privacy",
        "account",
        "settings",
        "new",
        "curriculum",
    }
)


def is_user_profile_path(path: str) -> bool:
    parts = [p for p in path.split("/") if p]
    if not parts or len(parts) > 2:
        return False
    if any("." in p for p in parts):
        return False
    if parts[0] in PROFILE_RESERVED:
        return False
    if not USERNAME_RE.fullmatch(parts[0]):
        return False
    if len(parts) == 2 and not PROJECT_SLUG_RE.fullmatch(parts[1]):
        return False
    return True


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE_ROOT), **kwargs)

    def _proxy_physicalai(self, method: str) -> bool:
        """Serve Physical AI UI + proxy its API under /physicalai/ (Chrome agent uses :8080)."""
        parsed = urlparse(self.path)
        path = parsed.path
        if path in ("/physicalai", "/physicalai/"):
            index = PHYSICALAI_DIR / "index.html"
            if not index.is_file():
                self._send_json(404, {"error": "physicalai/index.html missing"})
                return True
            data = index.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)
            return True

        if path.startswith("/physicalai/api/"):
            upstream = PHYSICALAI_UPSTREAM + path[len("/physicalai") :]
            if parsed.query:
                upstream += "?" + parsed.query
            length = int(self.headers.get("Content-Length") or 0)
            body = self.rfile.read(length) if length else None
            headers = {"Content-Type": self.headers.get("Content-Type") or "application/json"}
            req = Request(upstream, data=body, headers=headers, method=method)
            try:
                with urlopen(req, timeout=180) as resp:
                    raw = resp.read()
                    self.send_response(resp.status)
                    self.send_header(
                        "Content-Type",
                        resp.headers.get("Content-Type", "application/json"),
                    )
                    self.send_header("Content-Length", str(len(raw)))
                    self.send_header("Cache-Control", "no-store")
                    self.end_headers()
                    self.wfile.write(raw)
            except HTTPError as e:
                raw = e.read()
                self.send_response(e.code)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(raw)))
                self.end_headers()
                self.wfile.write(raw)
            except URLError as e:
                self._send_json(
                    502,
                    {
                        "ok": False,
                        "error": f"Physical AI upstream unreachable at {PHYSICALAI_UPSTREAM}: {e}",
                    },
                )
            return True

        if path.startswith("/physicalai/"):
            rel = path[len("/physicalai/") :]
            if ".." in rel or rel.startswith("/"):
                self._send_json(400, {"error": "bad path"})
                return True
            target = (PHYSICALAI_DIR / rel).resolve()
            if not str(target).startswith(str(PHYSICALAI_DIR.resolve())) or not target.is_file():
                self._send_json(404, {"error": "not found"})
                return True
            data = target.read_bytes()
            ctype = "application/octet-stream"
            if target.suffix == ".html":
                ctype = "text/html; charset=utf-8"
            elif target.suffix == ".js":
                ctype = "application/javascript"
            elif target.suffix == ".css":
                ctype = "text/css"
            elif target.suffix == ".json":
                ctype = "application/json"
            self.send_response(200)
            self.send_header("Content-Type", ctype)
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return True

        return False

    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write("[%s] %s\n" % (self.log_date_time_string(), fmt % args))

    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict:
        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        return json.loads(raw.decode("utf-8") or "{}")

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self) -> None:
        if self._proxy_physicalai("GET"):
            return
        parsed = urlparse(self.path)
        path = parsed.path

        if path in ("/api/config", "/api/health"):
            self._send_json(200, config_payload())
            return

        if MODE != "local":
            if path.startswith("/api/"):
                self._send_json(404, {"error": "local API disabled in firebase mode"})
                return
            if is_user_profile_path(path):
                self.path = "/profile/"
            super().do_GET()
            return

        if path == "/api/device":
            self._send_json(200, {"ok": True, **probe_hid_device()})
            return

        if path == "/api/projects":
            items = []
            for p in sorted(PROJECTS_DIR.glob("*.json")):
                try:
                    data = json.loads(p.read_text(encoding="utf-8"))
                    items.append(
                        {
                            "projectID": data.get("projectID") or p.stem,
                            "name": data.get("name"),
                            "updated": data.get("updated"),
                            "size": data.get("size"),
                            "file": p.name,
                        }
                    )
                except Exception as e:
                    items.append({"file": p.name, "error": str(e)})
            self._send_json(200, {"projects": items})
            return

        m = re.fullmatch(r"/api/projects/([^/]+)", path)
        if m:
            self._send_json(200, load_project(m.group(1)))
            return

        if path.startswith("/api/"):
            self._send_json(404, {"error": "not found"})
            return

        # Convenience: /?projectID=… opens the editor, not the marketing home.
        if SITE_ROOT != ROOT and path in ("/", "") and "projectID=" in (parsed.query or ""):
            self.send_response(302)
            self.send_header("Location", "/editor/?" + parsed.query)
            self.end_headers()
            return

        if is_user_profile_path(path):
            self.path = "/profile/"
            super().do_GET()
            return

        super().do_GET()

    def do_PUT(self) -> None:
        if MODE != "local":
            self._send_json(404, {"error": "local API disabled in firebase mode"})
            return
        parsed = urlparse(self.path)
        m = re.fullmatch(r"/api/projects/([^/]+)", parsed.path)
        if not m:
            self._send_json(404, {"error": "not found"})
            return
        saved = save_project(m.group(1), self._read_json())
        self._send_json(200, saved)

    def do_POST(self) -> None:
        if self._proxy_physicalai("POST"):
            return
        if MODE != "local":
            self._send_json(404, {"error": "local API disabled in firebase mode"})
            return
        parsed = urlparse(self.path)
        path = parsed.path
        data = self._read_json()

        if path == "/api/flash":
            project_id = data.get("projectID") or "default"
            wait_sec = data.get("waitSec")
            result = flash_project(project_id, None if wait_sec is None else int(wait_sec))
            status = 200 if result.get("ok") else 400
            self._send_json(status, result)
            return

        if path != "/api/compile":
            self._send_json(404, {"error": "not found"})
            return

        project_id = data.get("projectID") or "default"
        content = data.get("content") or data.get("code") or ""
        if not content.strip():
            self._send_json(400, {"ok": False, "error": "empty content"})
            return

        from datetime import datetime, timezone

        save_project(
            project_id,
            {
                "content": content,
                "compilationStatus": "pending",
                "compilationRequestedAt": datetime.now(timezone.utc).isoformat(),
            },
        )

        t0 = time.time()
        result = compile_rust(content)
        elapsed = time.time() - t0
        now = datetime.now(timezone.utc).isoformat()
        print(
            f"[compile] {project_id} ok={result.get('ok')} "
            f"{result.get('binarySize') or 0}B in {elapsed:.1f}s",
            flush=True,
        )
        if not result.get("ok"):
            project = save_project(
                project_id,
                {
                    "content": content,
                    "compilationStatus": "error",
                    "compilationError": result.get("compilationError"),
                    "compilationUpdatedAt": now,
                },
            )
            self._send_json(200, {**project, **result})
            return

        project = save_project(
            project_id,
            {
                "content": content,
                "compilationStatus": "success",
                "compilationError": None,
                "binary": result["binary"],
                "binarySize": result["binarySize"],
                "binaryHash": result["binaryHash"],
                "binarySavedAt": now,
                "compilationUpdatedAt": now,
                "compilationResult": {
                    "size": result["binarySize"],
                    "elfSize": result.get("elfSize"),
                },
            },
        )
        self._send_json(200, {**project, **result})


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="OneDollarComputer editor server")
    p.add_argument(
        "--mode",
        choices=("local", "firebase"),
        default=os.environ.get("ODC_EDITOR_MODE", "local"),
        help="Backend mode (default: local)",
    )
    p.add_argument("--host", default=HOST)
    p.add_argument("--port", type=int, default=PORT)
    return p.parse_args()


def main() -> None:
    global MODE, HOST, PORT
    args = parse_args()
    MODE = args.mode
    HOST = args.host
    PORT = args.port

    ensure_layout()
    os.chdir(SITE_ROOT)
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    editor_url = (
        f"http://{HOST}:{PORT}/editor/?projectID=demo"
        if SITE_ROOT != ROOT
        else f"http://{HOST}:{PORT}/?projectID=demo"
    )
    print(f"ODC editor [{MODE}]: {editor_url}")
    if SITE_ROOT != ROOT:
        print(f"  site:     http://{HOST}:{PORT}/")
    if MODE == "local":
        print(f"  monorepo: {REPO_ROOT}")
        print(f"  projects: {PROJECTS_DIR}")
        print(f"  firmware: {FIRMWARE_DIR}")
    else:
        print("  backend:  Firebase (cloud compiler)")
        print(f"  monorepo: {REPO_ROOT} (not required in firebase mode)")
    print("Ctrl+C to stop")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nbye")


if __name__ == "__main__":
    main()
