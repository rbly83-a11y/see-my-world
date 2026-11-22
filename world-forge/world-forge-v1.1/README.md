# WORLD FORGE v1.1 — bounded preflight and live GitHub evidence command

This release builds on v1.0. It adds a **non-executing** agent-assignment preflight (`src/preflight.js`) and an explicit, read-only GitHub evidence CLI (`src/github-cli.js`). Neither addition runs autonomous agents, merges PRs, verifies real user identities, or authorizes production deployment.

## Requirements
Node.js >=22.13, including built-in `node:sqlite`.

## Local test and dashboard
```sh
npm test
mkdir -p local
npm run demo
export WORLD_FORGE_TOKEN="$(node -e 'console.log(require("node:crypto").randomBytes(32).toString("hex"))')"
export WORLD_FORGE_OPERATOR_TOKEN="$(node -e 'console.log(require("node:crypto").randomBytes(32).toString("hex"))')"
export WORLD_FORGE_REVIEWER_TOKEN="$(node -e 'console.log(require("node:crypto").randomBytes(32).toString("hex"))')"
npm run serve
```
Open the displayed loopback URL followed by `/dashboard`.

## Real GitHub evidence retrieval (optional)
Provide a **read-only** GitHub token as an environment variable and an explicit repository, pull request, task ID and required check names:
```sh
export GITHUB_TOKEN='YOUR_READ_ONLY_GITHUB_TOKEN'
node src/github-cli.js OWNER/REPO 123 WF-002 'unit-tests' 'typecheck'
```
This performs GitHub API GET requests and fails closed if the PR is not eligible or a named check is missing or unsuccessful. The tool does **not** query branch protection rules, attest to reviewer identity, or prove the configured checks are exhaustive. It does not store the token. Do not commit secrets.

## Execution preflight (no process launch)
Import `prepareExecutionPlan(tasks, assignment)` from `src/preflight.js`. It validates the specialist, READY status and dependencies, restricted relative writable paths, and denied network, secret and production access. It produces a `PREFLIGHT_ONLY` plan with `executionAuthorized:false`. It is **not a sandbox** and must not be used as an authorization to execute untrusted code.

## Security limits
Shared role tokens are not individual identity. Audit hash chaining is not independently anchored. The local server must remain on loopback. The dossier is advisory. Task acceptance and merging remain disabled. Real repository connection and isolated agent execution remain future work.
