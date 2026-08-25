#!/usr/bin/env python3
"""Firebase compile worker for One Dollar Computer.

Canonical copy: github.com/OneDollarComputer/compiler (`worker.py` + `compile_odc.py`).
This mirror lets the site tree run a worker without that checkout.

Polls /compileQueue (public) then reads/writes /projects/{id}/code —
same contract as onedollarcomputer.com/editor.
"""

from __future__ import annotations

import json
import os
import sys
import time
import traceback
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
from serve import compile_rust, code_hash  # noqa: E402

FIREBASE_URL = os.environ.get(
    "FIREBASE_URL", "https://odc-files-default-rtdb.firebaseio.com"
).rstrip("/")
POLL_SEC = float(os.environ.get("ODC_WORKER_POLL_SEC", "2"))
WORKER_ID = os.environ.get("WORKER_ID") or f"odc-worker-{os.uname().nodename}"


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def rtdb(path: str, method: str = "GET", body: dict | None = None):
    url = f"{FIREBASE_URL}/{path.lstrip('/')}.json"
    data = None if body is None else json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        method=method,
        headers={"Content-Type": "application/json"} if data else {},
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read().decode("utf-8")
            return json.loads(raw) if raw else None
    except urllib.error.HTTPError as e:
        err = e.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"RTDB {method} {path}: HTTP {e.code} {err}") from e


def patch(path: str, body: dict):
    return rtdb(path, "PATCH", body)


def put(path: str, body: dict):
    return rtdb(path, "PUT", body)


def delete(path: str):
    return rtdb(path, "DELETE")


def code_path(project_id: str) -> str:
    return f"projects/{project_id}/code"


def queue_path(project_id: str) -> str:
    return f"compileQueue/{project_id}"


def extract_code_node(project_val):
    """Accept nested {code: {...}} or a flat project object."""
    if not isinstance(project_val, dict):
        return None
    nested = project_val.get("code")
    if isinstance(nested, dict) and (
        nested.get("content") or nested.get("compilationStatus")
    ):
        return nested
    if project_val.get("content") or project_val.get("compilationStatus"):
        return project_val
    return None


def process_job(project_id: str, data: dict) -> None:
    content = data.get("content") or data.get("code") or ""
    if isinstance(content, dict):
        content = content.get("content") or ""
    if not str(content).strip():
        patch(
            code_path(project_id),
            {
                "compilationStatus": "error",
                "compilationError": "empty content",
                "compilationRequested": False,
                "compilationUpdatedAt": now_iso(),
            },
        )
        delete(queue_path(project_id))
        return

    print(f"[compile] {project_id} claimed by {WORKER_ID}", flush=True)
    patch(
        code_path(project_id),
        {
            "compilationRequested": False,
            "workerId": WORKER_ID,
            "processingStartedAt": now_iso(),
        },
    )

    result = compile_rust(str(content))
    if not result.get("ok"):
        patch(
            code_path(project_id),
            {
                "compilationStatus": "error",
                "compilationError": result.get("compilationError") or "compile failed",
                "compilationRequested": False,
                "workerId": None,
                "processingStartedAt": None,
                "compilationUpdatedAt": now_iso(),
            },
        )
        delete(queue_path(project_id))
        print(f"[compile] {project_id} error", flush=True)
        return

    h = result.get("binaryHash") or code_hash(str(content))
    put(
        f"cache/{h}",
        {
            "binary": result["binary"],
            "binarySize": result["binarySize"],
            "createdAt": now_iso(),
        },
    )
    patch(
        code_path(project_id),
        {
            "compilationStatus": "success",
            "compilationError": None,
            "compilationRequested": False,
            "binaryHash": h,
            "binarySize": result["binarySize"],
            "binary": result["binary"],
            "binarySavedAt": now_iso(),
            "compilationUpdatedAt": now_iso(),
            "compilationResult": {
                "size": result["binarySize"],
                "elfSize": result.get("elfSize"),
            },
            "workerId": None,
            "processingStartedAt": None,
        },
    )
    delete(queue_path(project_id))
    print(f"[compile] {project_id} ok {result['binarySize']}B hash={h}", flush=True)


def claim_queued_jobs() -> None:
    queue = rtdb("compileQueue") or {}
    if not isinstance(queue, dict) or not queue:
        return
    for project_id in list(queue.keys()):
        try:
            raw = rtdb(code_path(project_id))
            data = extract_code_node({"code": raw}) if raw is not None else None
            if data is None and isinstance(raw, dict):
                data = extract_code_node(raw)
            if not data:
                delete(queue_path(project_id))
                continue
            if data.get("compilationStatus") == "pending" or data.get(
                "compilationRequested"
            ):
                process_job(str(project_id), data)
            else:
                # Stale queue entry after a finished job.
                delete(queue_path(project_id))
        except Exception:
            traceback.print_exc()


def main() -> int:
    print(f"ODC Firebase worker {WORKER_ID}", flush=True)
    print(f"  rtdb: {FIREBASE_URL}", flush=True)
    print("  queue: /compileQueue", flush=True)
    while True:
        try:
            claim_queued_jobs()
        except Exception:
            traceback.print_exc()
        time.sleep(POLL_SEC)


if __name__ == "__main__":
    raise SystemExit(main())
