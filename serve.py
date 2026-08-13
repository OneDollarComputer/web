#!/usr/bin/env python3
"""Local site + editor (Cargo compile / host flash).

    python3 serve.py
    → http://127.0.0.1:8080/                 marketing site
    → http://127.0.0.1:8080/editor/?projectID=demo
"""
from pathlib import Path
import os
import sys

editor = Path(__file__).resolve().parent / "editor" / "serve.py"
os.execv(sys.executable, [sys.executable, "-u", str(editor), *sys.argv[1:]])
