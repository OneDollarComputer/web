# Firebase + GCP compiler (One Dollar Computer)

Same shape as One Dollar Board (`onedollarboard-1b26a`), new project for this product.

| | Board (legacy) | Computer (current) |
|--|----------------|--------------------|
| Firebase project | `onedollarboard-1b26a` | **`odc-files`** |
| RTDB | `onedollarboard-1b26a-default-rtdb` | `odc-files-default-rtdb` |
| Path | `/projects/{id}/code` | `/projects/{id}/code` |
| Cache | `/cache/{sha1}` | `/cache/{sha1}` |
| Compile | C / ch32fun (+ later Rust) | **Rust** via `wrap_odc` + Cargo |

Console: https://console.firebase.google.com/project/odc-files/overview

Public web config (safe to ship in the editor): `editor/firebase-public.json`.

Rules match the Board test DB (open read/write) in `editor/database.rules.json`. Deploy:

```bash
firebase deploy --only database --project odc-files
```

Worker (local, uses the same Cargo path as `serve.py`):

```bash
ODC_MONOREPO=~/Documents/GitHub/bootloader_odb python3 editor/firebase_worker.py
```
