#!/bin/zsh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

PORT=4001
URL="http://localhost:${PORT}"

echo "Iniciando Angular em ${URL}..."

npm start -- --port "${PORT}" &
SERVER_PID=$!

cleanup() {
  if kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT INT TERM

for _ in {1..60}; do
  if curl -s "$URL" >/dev/null 2>&1; then
    open "$URL"
    wait "$SERVER_PID"
    exit $?
  fi
  sleep 1
done

echo "O servidor nao respondeu em ${URL} dentro do tempo esperado."
wait "$SERVER_PID"
