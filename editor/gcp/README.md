# Firebase + GCP compiler (One Dollar Computer)

Same shape as One Dollar Board (`onedollarboard-1b26a`), new project for this product.

| | Board (legacy) | Computer (current) |
|--|----------------|--------------------|
| Firebase project | `onedollarboard-1b26a` | **`odc-files`** |
| RTDB | `onedollarboard-1b26a-default-rtdb` | `odc-files-default-rtdb` |
| Path | `/projects/{id}/code` | `/projects/{id}/code` |
| Queue | (Board listener) | **`/compileQueue/{id}`** |
| Cache | `/cache/{sha1}` | `/cache/{sha1}` |
| Compile | C / ch32fun | **Rust** via `wrap_odc` + Cargo |

**Canonical cloud worker:** repo `compiler` (`worker.py` + `DEPLOY_GCP.md`).  
This folder keeps a mirror (`firebase_worker.py`) that imports `serve.compile_rust`.

Console: https://console.firebase.google.com/project/odc-files/overview

Public web config (safe to ship in the editor): `editor/firebase-public.json`.

Worker (local, same Cargo path as `serve.py`):

```bash
ODC_MONOREPO=~/Documents/GitHub/bootloader_odb python3 editor/firebase_worker.py
```

Or from the compiler repo (preferred for GCP):

```bash
ODC_MONOREPO=~/Documents/GitHub/bootloader_odb python3 worker.py
```
