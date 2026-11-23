#!/usr/bin/env bash
# PARAVEX Pass 151: fail-closed, isolated, dependency-complete backend verification.
set -euo pipefail
if (( $# != 3 )); then echo 'Usage: pass151_verify_g2.sh CHECKOUT_ROOT HARNESS_PATH OUTPUT_DIR' >&2; exit 2; fi
ROOT=$(cd "$1" 2>/dev/null && pwd -P) || { echo 'Checkout unavailable' >&2; exit 2; }
HARNESS=$(realpath -e "$2" 2>/dev/null) || { echo 'Harness unavailable' >&2; exit 2; }
EXPECTED='83a300f1c658c1730fc01e6dc0efdc1dce978bf4'
APP="$ROOT/apps/see-my-world"
for c in git node python3 sha256sum mktemp timeout realpath; do command -v "$c" >/dev/null || { echo "Missing $c" >&2; exit 2; }; done
REQUIRED=(package.json src/server.js src/service.js src/storage.js src/domain.js src/fixtures.js src/reducer.js test/acceptance.test.js test/helpers/crash-writer.mjs test/helpers/dump-state.mjs test/helpers/visitor-probe.mjs test/helpers/wal-writer.mjs)
for f in "${REQUIRED[@]}"; do [[ -f "$APP/$f" ]] || { echo "Missing required application file: $f" >&2; exit 2; }; done
SHA=$(git -C "$ROOT" rev-parse --verify HEAD 2>/dev/null) || exit 3
[[ "$SHA" == "$EXPECTED" ]] || { echo "Unreviewed commit $SHA" >&2; exit 3; }
[[ -z "$(git -C "$ROOT" status --porcelain --untracked-files=no)" ]] || { echo 'Dirty tracked checkout' >&2; exit 3; }
[[ "$(git -C "$ROOT" rev-parse --show-toplevel)" == "$ROOT" ]] || { echo 'Root is not checkout root' >&2; exit 3; }
NODE_OK=$(node -p 'const [a,b]=process.versions.node.split(".").map(Number);Number(a>22||(a===22&&b>=13))')
[[ "$NODE_OK" == 1 ]] || { echo 'Node >=22.13 required' >&2; exit 2; }
OUT=$(realpath -m "$3")
case "$OUT/" in "$ROOT/"*) echo 'Output directory must be outside checkout' >&2; exit 3;; esac
case "$HARNESS" in "$ROOT/"*) echo 'Harness must be outside checkout' >&2; exit 3;; esac
mkdir -p "$OUT"
OUT=$(cd "$OUT" && pwd -P)
case "$OUT/" in "$ROOT/"*) echo 'Output directory must be outside checkout' >&2; exit 3;; esac
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$TMP/test"
cp -R "$APP/src" "$TMP/src"
cp -R "$APP/test/helpers" "$TMP/test/helpers"
cp "$APP/test/acceptance.test.js" "$TMP/test/acceptance.test.js"
cp "$HARNESS" "$TMP/test/pass143_backend_extra.test.mjs"
cp "$APP/package.json" "$TMP/package.json"
# Reject incomplete isolated copies before recording any test run as evidence.
for f in "${REQUIRED[@]}"; do
  [[ -f "$TMP/$f" ]] || { echo "Isolated copy missing $f" >&2; exit 4; }
  cmp -s "$APP/$f" "$TMP/$f" || { echo "Isolated copy differs from source: $f" >&2; exit 4; }
done
node --check "$TMP/test/pass143_backend_extra.test.mjs"
node --check "$TMP/src/reducer.js"
set +e
(cd "$TMP" && timeout --signal=TERM --kill-after=5s 180s node --disable-warning=ExperimentalWarning --test test/acceptance.test.js) >"$OUT/canonical.tap" 2>&1
CANONICAL=$?
(cd "$TMP" && timeout --signal=TERM --kill-after=5s 180s node --disable-warning=ExperimentalWarning --test test/pass143_backend_extra.test.mjs) >"$OUT/supplemental.tap" 2>&1
SUPPLEMENTAL=$?
set -e
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)
python3 "$SCRIPT_DIR/pass150_evidence_validator.py" "$OUT" "$SHA" "$(node --version)" "$CANONICAL" "$SUPPLEMENTAL" "$APP" "$HARNESS"
