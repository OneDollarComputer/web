# Firebase + GCP compiler (One Dollar Computer)

Firebase project: **`odc-files`** (replaced the legacy One Dollar Board project, deleted 2026-09).

| | Computer (current) |
|--|--------------------|
| Firebase project | **`odc-files`** |
| RTDB | `odc-files-default-rtdb` |
| Path | `/projects/{id}/code` |
| Cache | `/cache/{sha1}` |
| Compile | **Rust** via `wrap_odc` + Cargo |

Console: https://console.firebase.google.com/project/odc-files/overview

Public web config (safe to ship in the editor): `editor/firebase-public.json`.

Rules match the Board test DB (open read/write) in `editor/database.rules.json`. Deploy:

```bash
firebase deploy --only database --project odc-files
```

**Curriculum agent API** — `https://api.onedollarcomputer.com` (Firebase Hosting site `odc-files-api` → Cloud Function `curriculumAgent`).

1. Deploy: `firebase deploy --only hosting:odc-files-api,functions:curriculumAgent --project odc-files`
2. Firebase Console → Hosting → **odc-files-api** → Add custom domain → `api.onedollarcomputer.com`
3. Add the DNS records Firebase shows (usually CNAME `api` → `odc-files-api.web.app`)

Until DNS is live, the API also works at `https://odc-files-api.web.app`.

Worker (local, uses the same Cargo path as `serve.py`):

```bash
ODC_MONOREPO=~/Documents/GitHub/bootloader_odb python3 editor/firebase_worker.py
```
