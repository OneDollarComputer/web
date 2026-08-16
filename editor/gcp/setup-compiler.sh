#!/bin/bash
# Bootstrap the ODC compile worker on a Debian GCE VM (system systemd).
set -euo pipefail

ODC_MONOREPO="${ODC_MONOREPO:-$HOME/bootloader_odb}"
EDITOR_DIR="${EDITOR_DIR:-$HOME/odc-editor}"
FIREBASE_URL="${FIREBASE_URL:-https://odc-files-default-rtdb.firebaseio.com}"
USER_NAME="$(id -un)"
USER_HOME="$HOME"

sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential python3 curl gcc-riscv64-unknown-elf

if [[ ! -x "$USER_HOME/.cargo/bin/rustup" ]]; then
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain nightly
fi
# shellcheck disable=SC1091
source "$USER_HOME/.cargo/env"
rustup default nightly
rustup component add rust-src --toolchain nightly

sudo tee /etc/systemd/system/odc-compiler.service > /dev/null <<EOF
[Unit]
Description=One Dollar Computer Firebase compile worker
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=$USER_NAME
WorkingDirectory=$EDITOR_DIR
Environment=HOME=$USER_HOME
Environment=ODC_MONOREPO=$ODC_MONOREPO
Environment=FIREBASE_URL=$FIREBASE_URL
Environment=PATH=$USER_HOME/.cargo/bin:/usr/bin:/bin
Restart=always
RestartSec=5
ExecStart=/usr/bin/python3 $EDITOR_DIR/firebase_worker.py

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now odc-compiler.service
sudo systemctl status odc-compiler.service --no-pager
