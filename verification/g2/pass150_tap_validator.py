#!/usr/bin/env python3
"""Fail-closed parser for Node's top-level TAP output (not a backend test)."""
import re, hashlib
from pathlib import Path

SUMMARY = re.compile(r'^# (tests|pass|fail|cancelled|skipped|todo) (\d+)$')
TOP = re.compile(r'^(ok|not ok) (\d+)(?:\s+-\s+.*)?$')
PLAN = re.compile(r'^1\.\.(\d+)$')

def validate_tap(path, exit_code):
    raw = Path(path).read_bytes()
    lines = raw.decode('utf-8', errors='replace').splitlines()
    summaries = {}
    outcomes = []
    plans = []
    errors = []
    if not any(re.fullmatch(r'TAP version 13', l) for l in lines[:4]):
        errors.append('missing TAP version 13 header')
    for line in lines:
        sm = SUMMARY.fullmatch(line)
        if sm:
            k, v = sm.group(1), int(sm.group(2))
            if k in summaries: errors.append('duplicate summary: ' + k)
            summaries[k] = v
        m = TOP.fullmatch(line)
        if m: outcomes.append((m.group(1), int(m.group(2))))
        p = PLAN.fullmatch(line)
        if p: plans.append(int(p.group(1)))
    for k in ('tests','pass','fail','cancelled','skipped','todo'):
        if k not in summaries: errors.append('missing summary: ' + k)
    if len(plans) != 1: errors.append('expected one top-level plan')
    if summaries.get('tests',0) < 1: errors.append('zero tests')
    if len(plans) == 1 and plans[0] != summaries.get('tests'): errors.append('plan/summary mismatch')
    if len(outcomes) != summaries.get('tests'): errors.append('outcome count mismatch')
    if [x[1] for x in outcomes] != list(range(1,len(outcomes)+1)):
        errors.append('nonconsecutive test numbers')
    if any(status != 'ok' for status,_ in outcomes): errors.append('failed outcome')
    if summaries.get('pass',-1) != len(outcomes): errors.append('pass/outcome mismatch')
    if any(summaries.get(k,-1) != 0 for k in ('fail','cancelled','skipped','todo')):
        errors.append('nonzero fail/cancelled/skipped/todo')
    if exit_code != 0: errors.append('nonzero process exit')
    return {'pass':not errors,'errors':errors,'summary':summaries,'sha256':hashlib.sha256(raw).hexdigest(),'exit_code':exit_code}
