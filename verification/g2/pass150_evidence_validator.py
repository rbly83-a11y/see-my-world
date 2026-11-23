#!/usr/bin/env python3
"""Validate Node TAP evidence and emit a fail-closed G2 manifest."""
import datetime, hashlib, json, os, re, sys
from pathlib import Path

def digest(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()

from pass150_tap_validator import validate_tap

def suite(path, exit_code):
    return validate_tap(path, int(exit_code))

def main(args):
    if len(args)!=7:
        print('Usage: validator OUTPUT_DIR SHA NODE CANONICAL_EXIT SUPPLEMENTAL_EXIT APP HARNESS',file=sys.stderr)
        return 2
    out,sha,node,ca,su,app,harness=args
    out=Path(out);app=Path(app)
    canonical=suite(out/'canonical.tap',ca)
    supplemental=suite(out/'supplemental.tap',su)
    hashes={f:digest(app/f) for f in ['package.json','src/server.js','src/service.js','src/storage.js','src/domain.js','src/fixtures.js','src/reducer.js','test/acceptance.test.js','test/helpers/crash-writer.mjs','test/helpers/dump-state.mjs','test/helpers/visitor-probe.mjs','test/helpers/wal-writer.mjs']}
    hashes['supplemental_harness']=digest(harness)
    manifest={'timestamp_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),
      'baseline_commit':sha,'node_version':node,'source_hashes':hashes,
      'canonical':canonical,'supplemental':supplemental,
      'manual_accessibility':'pending','founder_g2_approval':'not granted',
      'backend_evidence_pass':canonical['pass'] and supplemental['pass']}
    (out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
    print(json.dumps({'backend_evidence_pass':manifest['backend_evidence_pass'],'canonical':canonical,'supplemental':supplemental},indent=2))
    return 0 if manifest['backend_evidence_pass'] else 1

if __name__=='__main__':sys.exit(main(sys.argv[1:]))
