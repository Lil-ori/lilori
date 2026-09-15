#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/site"
DOMAIN="${LILORI_DOMAIN:-lilori.local}"
PORT="${LILORI_PORT:-80}"

ensure_hosts() {
  if grep -Eq "^[[:space:]]*127\\.0\\.0\\.1[[:space:]].*\\b${DOMAIN}\\b" /etc/hosts; then
    return 0
  fi
  echo "Adding ${DOMAIN} to /etc/hosts (requires sudo)…"
  if command -v sudo >/dev/null 2>&1; then
    echo "127.0.0.1 ${DOMAIN}" | sudo tee -a /etc/hosts >/dev/null
  else
    echo "127.0.0.1 ${DOMAIN}" >> /etc/hosts
  fi
}

ensure_hosts

cd "$SITE"

if [ "$PORT" = "80" ]; then
  echo "Serving ${SITE} at http://${DOMAIN}/"
  if command -v sudo >/dev/null 2>&1; then
    exec sudo python3 -m http.server 80 --bind 127.0.0.1
  fi
  exec python3 -m http.server 80 --bind 127.0.0.1
fi

echo "Serving ${SITE} at http://${DOMAIN}:${PORT}/"
exec python3 -m http.server "$PORT" --bind 127.0.0.1
