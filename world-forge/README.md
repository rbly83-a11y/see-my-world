# WORLD FORGE v1.2 — bounded preflight, GitHub evidence and experimental container test runner

This release builds on v1.1. It adds a **non-executing** agent-assignment preflight (`src/preflight.js`) and an explicit, read-only GitHub evidence CLI (`src/github-cli.js`). Neither addition runs autonomous agents, merges PRs, verifies real user identities, or authorizes production deployment.

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

## v1.2 — explicit Docker-based test runner (experimental)
The new `src/runner.js` creates a **dry-run by default** Docker invocation. It requires a SHA256-pinned container image, canonical existing directory, fixed `npm test` or `node --version` command, and a task ID. The container uses a read-only source mount, no network, dropped capabilities, non-root user, no-new-privileges, resource caps and read-only root filesystem. It does not mount the Docker socket or pass secrets. Run `npm test` for unit tests; Docker is not needed for these tests.

```sh
node src/runner-cli.js /absolute/path/to/workspace 'example/ci@sha256:REPLACE_WITH_REAL_64_HEX_DIGEST' WF-002
# After reviewing the generated plan, with Docker installed and a trusted image:
node src/runner-cli.js /absolute/path/to/workspace 'example/ci@sha256:REAL_64_HEX_DIGEST' WF-002 --execute
```

**Security limits:** Docker is not installed in the build environment, so container isolation has **not** been exercised live. Docker daemon and kernel hardening are outside this code. A compromised host or privileged Docker daemon defeats these controls. This is a **test runner**, not an autonomous AI agent or a production security boundary. A workspace is mounted read-only, so commands that require writes to the repository will fail; the container can write only to its bounded `/tmp`. Execution is an explicit CLI opt-in and is not wired into the Founder Dashboard or task acceptance. Image trust and Docker daemon authorization must be independently established. The earlier v1.1 limitations remain in force.

## v1.3 — Persistent execution job ledger

The new `src/jobs.js` provides `JobLedger` and `inventoryArtifacts`. This is a local prototype; do not expose its database or API to untrusted users.

- `new JobLedger(store)` creates a SQLite `execution_jobs` table in the existing Store database.
- `enqueue({tasks, assignment, sourceSha})` requires an eligible specialist/task preflight, validates the source SHA format, and records a `QUEUED` job and audit event.
- `cancel(jobId)` cancels **queued jobs only**; it does not stop an executing container.
- `execute(jobId, {execute:true, output, ...runnerConfig})` marks a queued job `RUNNING`, calls the existing OCI runner, hashes output file contents, and records `COMPLETED` or `FAILED` with an audit event.
- `inventoryArtifacts(output)` refuses symlinks, special files, oversized artifact sets and files; default limits are 100 files and 10 MB total.

### Example (programmatic, not a CLI)

```js
import { Store } from './src/store.js';
import { JobLedger } from './src/jobs.js';
const store = new Store('./local/store.db');
const jobs = new JobLedger(store);
const tasks = store.tasks();
const assignment = {
  taskId: 'WF-002', agentId: 'FORGE', writablePaths: ['src/example.js'],
  maxAttempts: 1, networkAccess: false, secretAccess: false, productionAccess: false
};
// Only works if the selected task exists, belongs to FORGE, and is READY.
const job = jobs.enqueue({ tasks, assignment, sourceSha: 'a'.repeat(40) });
console.log(job.id, job.status);
store.close();
```

### Safety limitations

1. **No automatic agent execution.** Enqueueing is inert. Execution requires `execute:true`, an explicit caller, and the OCI runner's own explicit opt-in.
2. **No live Docker isolation verification.** Automated execution tests use a mock runner. Test the real Docker environment on a disposable host before trusting isolation.
3. **Source revision not cryptographically bound to mounted workspace.** A job records a SHA string but does not yet inspect or attest the source tree. Never treat this as verified provenance.
4. **No crash recovery or running-job cancellation.** A process interruption can leave `RUNNING` records; cancellation only handles `QUEUED` jobs.
5. **Artifact inventory is not an immutable snapshot.** File contents may change after hashing, and concurrent modifications are not fully prevented. A hardened implementation should copy into immutable storage and revalidate before review.
6. **Local shared credentials are not verified user identity.** There is no merge authorization and no production-ready deployment.

### Validation

Run `npm test` with Node.js 22.13+. The complete v1.3 suite has 108 passing automated tests in the development environment. No live GitHub or Docker integration tests were run.

## v1.4 — crash recovery, source attestation, and artifact snapshots

New exports in `src/jobs.js`:

- `JobLedger.recoverInterrupted({confirmedContainersStopped:true})`: explicitly marks lingering RUNNING records INTERRUPTED and writes audit events. **It does not stop containers**. Operators must independently confirm container cleanup first. Interrupted work cannot be silently accepted or retried.
- `attestSourceRevision(workspace, expectedSha)`: checks that workspace is the Git repository root, HEAD matches the full 40-character SHA-1 revision, and the working tree is clean. Does not establish remote provenance; Git SHA-256 repositories are not supported by this helper.
- `snapshotArtifacts(source,destination)`: copies bounded regular files into a separate new destination and verifies content hashes. The caller must protect the destination against subsequent modifications; it is not an immutable object store. A failed snapshot can leave partial files, which must not be trusted.

These helpers are **not automatically wired into the runner**, and v1.4 does not provide live running-container cancellation, verified identity, remote repository attestation, or production-grade sandbox isolation. They are foundation primitives for a future integrated execution controller.

Run `npm test` to execute all 114 local automated tests. No live Docker isolation test is included.

## v1.5 — Verified execution controller

`src/controller.js` exports `executeVerifiedJob(ledger, jobId, config, dependencies?)`. It coordinates previously separate safeguards: validates the queued job and disjoint execution paths, requires an empty output directory, attests the exact clean Git revision before starting, invokes the existing job ledger and restricted runner, snapshots successful outputs into a unique directory, verifies snapshot hashes, and records failure when snapshotting fails. A job is never automatically accepted or merged.

For real use, provide `config={execute:true,workspace,output,snapshotParent,image,command,timeoutMs}` and configure Docker according to the runner guide. The controller does **not** provide an AI coding provider, enforce exclusive workspace locks, independently verify remote Git provenance, guarantee cleanup of live containers after crashes, or guarantee immutable snapshot storage. Use a dedicated disposable host and independent security review before untrusted code execution. Unit tests use injected fake runners; no live Docker test has been performed.

## v1.6: Execution supervisor leases

`src/supervisor.js` introduces exclusive, durable per-job leases, heartbeat renewal, expiry inspection, explicit attach and release, and an allowlisted Docker container removal helper. Leases are **not yet wired to the execution controller**; therefore they do not currently guarantee exclusive live execution. Expired leases are never automatically stolen. Operators must reconcile and stop orphan containers before confirming release. `stopContainer()` requires a working Docker daemon; tests use a mock executor. There is no live Docker isolation test or automatic orphan cleanup in this release.

## v1.7 supervised execution and recovery

`src/execution-service.js` exports `executeSupervisedJob` and `recoveryQueue`.
The supervised wrapper claims a durable lease before invoking `executeVerifiedJob`, renews the lease while awaiting execution, and requires a supplied **trusted** `cleanup` callback to return exactly `true` before releasing the lease. The callback must independently inspect and reconcile actual container state; it is not implemented as a live Docker verifier in this release. Failed or unconfirmed cleanup retains the lease for manual reconciliation. Heartbeats are process-local timers and do not provide hard cancellation or fencing of a runaway process. A failed heartbeat is reported but does not automatically stop the runner.

The local API adds `GET /api/recovery` with the operator bearer token. It reports expired leases and jobs in RUNNING state, but does not mutate jobs, stop containers, or automatically recover anything. The endpoint is restricted to the existing localhost-only prototype.

The test suite includes five additional mock-based execution-service tests. No real Docker integration, remote GitHub verification, verified user identities, or autonomous AI agent dispatch has been performed. Do not treat this as a production-safe sandbox or authorization to execute untrusted code.

## v1.8 — Read-only Docker inspection and operator recovery view

- `inspectContainer(name, {exec})` reads Docker container state with a validated WORLD FORGE name. Missing Docker, malformed responses, and failures are **unverified**, not proof of cleanup.
- `requestContainerStop(name, {exec})` is an explicitly invoked destructive operation: checks identity, issues `docker rm --force`, then checks a separate Docker listing. It only returns `confirmed: true` if that listing succeeds and the container name is absent. This is not exposed by the HTTP API or dashboard.
- `/dashboard` adds an operator-only recovery queue display using the existing `/api/recovery` endpoint. The dashboard never kills or restarts containers.
- Added seven Docker inspection and cancellation unit tests. All 136 local tests passed; Docker itself was simulated and **no live Docker isolation or termination test was performed**.

### Limitations

Docker container names are not cryptographic identities. The stop helper has no lease ownership authorization and must not be exposed to untrusted callers. There is no automatic cleanup, real-time cancellation endpoint, verified human identity, live project repository integration, or autonomous AI provider. Only use this on disposable, operator-controlled development hosts after independent review.

## v1.9: Operator cancellation reconciliation

`src/cancellation.js` adds `cancelActiveJob(store, {jobId, owner, leaseToken, containerName, stop})`. The caller **must authenticate and authorize the operator** before invoking this function. It requires an ACTIVE lease bound to the same owner, token and container name, a RUNNING/FAILED/INTERRUPTED job, and positive cleanup evidence from the Docker stop verifier. It then atomically marks the job INTERRUPTED, releases the lease and appends an audit event. Unverified cleanup never changes the records. A concurrent job/lease state change fails closed and requires operator reconciliation.

This is a service primitive, **not a remotely exposed cancellation API**. Local shared role tokens do not prove human identity. No real Docker tests have been run; all cancellation tests use simulated stop callbacks. The controller can still race with cancellation, and the execution runner has not been instrumented for cooperative cancellation. Do not use this as production-safe termination or grant untrusted agents access to Docker. Next: durable cancellation intent, controller fencing tokens, Docker-label ownership verification, authenticated operator API, and live disposable-host integration tests.

## v2.0: execution fencing (incremental)

Version 2.0 adds optional `fence` callbacks to `JobLedger.execute` and `executeVerifiedJob`. The supervised execution service now passes a fence that checks the current lease token, owner, active state, expiry, and job status before and after work. The job ledger also uses a `RUNNING` compare-and-set at completion, refusing to overwrite a job that an operator has already interrupted. This reduces stale-worker result acceptance; it does **not** terminate an executing process, prevent writes made by a stale worker, or establish an authenticated cancellation API. A failed fence at finalization leaves the job `RUNNING` for operator reconciliation. Source snapshots, Docker, and GitHub access are not live-verified in these tests. Three new regression tests cover a valid fence, concurrent interruption, and revoked lease.

### Important remaining security gaps

The fencing callback is cooperative and not an OS-level fencing token. Do not use this prototype to execute untrusted AI code against a valuable repository. Container ownership labels, atomic cancellation requests, authenticated user identities, actual Docker integration tests, and source provenance remain necessary. The supervisor's cleanup callback must verify the real runtime independently.

## v2.1 — Durable cancellation requests

The new `src/cancel-requests.js` persists operator cancellation **intent** in SQLite and records it in the audit chain. A request is accepted only for a RUNNING job with an ACTIVE lease and attached container name. A partial unique index prevents duplicate pending requests. The lease token is never returned by the API or recorded in the audit event.

The loopback server adds `GET /api/cancellations` and `POST /api/cancellations` (body `{ "jobId": "JOB-..." }`), both requiring the existing operator bearer token. POST returns HTTP 202 to signify a *pending* request, **not** a stopped container. No Docker stop command is executed by this endpoint. A trusted cancellation worker, verified Docker ownership labels, completion reconciliation, and real Docker tests remain necessary. Local shared tokens are not verified individual identities.

Run `npm test` to verify the regression suite. The v2.1 tests cover persistence, duplicate prevention, audit recording, and rejecting requests without an active container lease. No live Docker integration was performed.

## v2.2 — trusted local cancellation worker
`src/cancellation-worker.js` exports `processCancellation(store,{requestId,stop})`. It atomically claims a durable PENDING cancellation request, checks the current lease token fingerprint and bound container, calls the existing verified-stop reconciliation, then marks the request RECONCILED with an audit event. A duplicate concurrent worker cannot claim the same request. An unverified stop leaves the request PENDING. This is an **internal trusted-local API**, not a remotely exposed endpoint; callers must enforce operator authorization. The default stop implementation invokes Docker; unit tests inject a fake stop. A process crash between verified container removal and request reconciliation can leave an unresolved claim requiring manual intervention. No real Docker tests or AI agent execution were performed.

Run `npm test` (151 tests in this release).


## v2.3 — fail-closed cancellation crash inspection

New `src/cancellation-recovery.js` exports `inspectCancellationRecovery(store,{inspect})`. It lists abandoned cancellation claims and cross-references the current request, job, lease, and optional Docker inspection. It does **not** delete claims, retry termination, infer container absence, or change job state. Every claim is flagged `MANUAL_RECONCILIATION_REQUIRED`. This deliberately favors operator investigation over unsafe automated replay after a crash.

Use Node.js 22.13+ and `npm test`. This version does not demonstrate live Docker isolation, authenticated operator identity, or autonomous agent execution.

## v2.4: Docker ownership verification (experimental)

`src/container-ownership.js` provides `ownershipLabels`, `verifyContainerOwnership`, and `stopOwnedContainer`. It checks Docker's actual container ID, name, and immutable creation-time labels for the expected job and SHA-256 lease fingerprint. The stop helper targets the inspected 64-character container ID rather than an untrusted name, then requires a successful Docker listing confirming absence. Inspection errors, mismatched labels, and post-stop failures fail closed.

**Integration limitation:** The existing sandbox runner does **not yet attach these ownership labels**, and the cancellation worker does **not yet use** `stopOwnedContainer` by default. To use this verifier in a real execution path, add the generated labels at Docker container creation and wire the trusted stop helper into cancellation. Never replace the current worker's stop implementation without providing a matching trusted job/lease identity. Docker daemon execution has not been tested here. Tests use a simulated `exec` adapter.

## v2.5 — runner ownership labels and cancellation integration

The Docker runner now accepts a paired `jobId` and `leaseToken` in the execution configuration and adds `world-forge.job-id` and `world-forge.lease-sha256` labels to the container invocation. It refuses partial or malformed identities. The raw lease token is not added to the Docker command line. The cancellation worker's default stop path now uses `stopOwnedContainer` with the request's job ID and the active lease token, rejecting containers whose labels do not match. New tests verify the generated Docker arguments and invalid identities.

**Remaining integration caveat:** The supervised execution controller does not yet guarantee that every caller supplies these identity fields to the runner, nor does it bind the generated container name back to the lease atomically. This version therefore does **not** establish a complete end-to-end verified lifecycle. Docker is unavailable in the test environment; all Docker behavior is mocked. Do not use this as a production sandbox or unattended cancellation service.

## v2.6 — supervised lease-to-runner binding

The supervised execution service now supplies the claimed `jobId`, private `leaseToken`, and `onContainerPrepared` callback to its execution controller. The Docker runner invokes that callback with its generated `world-forge-<uuid>` container name **before** spawning Docker, allowing `ExecutionSupervisor.attach()` to persist the intended container name and ACTIVE lease. An attachment failure prevents Docker spawn. The runner's existing ownership-label logic fingerprints the lease token when both identifiers are provided.

**Limits:** This is an intent-to-create record, not evidence that Docker created the container. If spawning fails, a lease may remain ACTIVE until cleanup verification or operator reconciliation. The default execution controller still does not directly attest the created container ID. There is no real Docker integration test, guaranteed physical termination, or fully atomic cancellation/completion coordination. Custom injected execution callbacks must honor the passed identity and attachment callback. No AI provider or SEE MY WORLD product repository is connected.

Verification: 166 local Node automated tests passed (three new binding tests). Run `npm test`.

## v2.7 — Read-only Docker lifecycle evidence

`src/container-lifecycle.js` exports `inspectExecutionLifecycle(lease, identity, {exec})`.
It distinguishes a claimed lease without a registered container, a Docker-owned running
container, a Docker-owned present-but-not-running container, an absent container proven
by a responsive Docker listing, and ambiguous/unverified conditions. It validates
job/lease ownership labels before accepting a present container as verified.

**Important:** `ABSENT` means only that a responsive Docker daemon does not list the
registered name; it does not prove that a previously launched process was safely
terminated or that cancellation was reconciled. A registered container name remains
an intent, not a Docker creation acknowledgement. This inspector is read-only,
not a cancellation worker or continuous service. The suite uses mocked Docker responses;
real Docker integration remains outstanding.

## v2.8 — Durable Docker CLI startup observations

This release adds `src/execution-observations.js`, storing `CONTAINER_PREPARED` and `DOCKER_CLI_SPAWNED` events in SQLite with lease-token checks and an audit chain. The supervised execution service wires these observations into the runner. A preparation event is recorded after lease attachment, before Docker is launched; the CLI spawn event is recorded when Node reports the Docker client process spawned. The runner aborts on callback failure. Five new regression tests cover observation ordering, audit, wrong tokens and duplicates. **These observations do not establish that Docker created a container.** The runner still uses `docker run --rm` and does not capture a verified container ID or container-created acknowledgment. Live Docker integration, lifecycle recovery, and cancellation/completion race safety remain outstanding.

## v2.9 — independently inspected container creation acknowledgment

`src/container-acknowledgment.js` provides `ContainerAcknowledgments.verifyAndRecord(jobId, leaseToken, {exec})`. It requires an active registered lease and a recorded Docker CLI spawn, then independently inspects Docker and validates job/lease ownership labels, name and full 64-character container ID. It rechecks job RUNNING state, active unexpired lease and unchanged binding in a database transaction before persisting the observed container ID and a hash-chained `DOCKER_CONTAINER_VERIFIED` audit event. Repeat observations of the same ID are idempotent; changed IDs are rejected. Inspection failure or label mismatch does not create an acknowledgment.

**Integration boundary:** This is an explicit acknowledgment operation, not an automatic background poller. Docker CLI startup does not prove container creation, and a verified observation is a point-in-time snapshot rather than proof of ongoing isolation or termination. Tests mock Docker inspection; live Docker has not been tested. An operator must invoke this after the container is created and before treating it as verified.

## v3.0 — integrated startup acknowledgment gate

The supervised execution service accepts an optional trusted `acknowledge` callback. When configured, it is invoked after the Docker CLI spawn event and **must return `{verified:true}`** before successful execution may be accepted. The callback receives `{store,jobId,leaseToken,containerName,verify}`; `verify({exec})` calls `ContainerAcknowledgments.verifyAndRecord()` to perform the independent Docker inspection and persist the verified container ID. Production integrations should call `verify`, not merely return `{verified:true}`. This hook is intentionally optional to preserve pre-existing simulated and local execution flows; it is **not yet a mandatory runtime security gate**.

`runIsolated()` now awaits an asynchronous `onDockerCliSpawned` callback, even if the Docker CLI exits before the callback settles. If the callback rejects, the runner fails closed and attempts to kill the CLI child. A CLI kill is not proof of container cleanup. A verified runtime cleanup callback remains mandatory for supervised execution.

New integration tests cover acknowledgment handoff, unverified acknowledgment rejection, asynchronous gating, and asynchronous rejection. Tests mock the Docker CLI; no real Docker daemon or AI coding provider was exercised. This is an integration milestone for startup coordination, **not** proof of complete end-to-end container execution. A future release must enforce a non-bypassable verification callback, poll for actual container creation while the process runs, and run on a disposable Docker host.

## v3.1 — Mandatory Docker startup acknowledgment

For supervised execution configurations specifying a Docker runner `command`, the execution service now performs its own bounded, repeated Docker ownership inspection and persists the verified container ID before accepting the CLI-start callback. The legacy optional acknowledgment callback cannot bypass this check. The service exposes `dockerExec`, `ackTimeoutMs` (1–30000 ms; default 3000) and `ackPollMs` (1–timeout; default 100) for controlled integration and testing. Failed or timed-out verification fails closed and still requires independently verified cleanup.

**Limitations:** This mandatory path applies to the `config.command`-identified Docker execution route; custom execution callbacks without that property are not guaranteed to use Docker. Docker verification is mocked in the automated suite; a real Docker daemon was not available. There is no guaranteed physical termination on startup-verification failure, and operator identity and AI-provider integrations remain outstanding. A successful Docker inspection is a point-in-time acknowledgment, not proof of continuous isolation.


## v3.2 — custom executor startup-evidence guard

Supervised executions configured with a Docker `command` now require a persisted, independently verified container acknowledgment even when the injected executor returns successfully without invoking runner callbacks. The service checks matching job/lease/container bindings before accepting the result and runs the cleanup verifier on failure. This closes a callback-bypass path, **not** a live Docker integration gap. Docker daemon behavior is still untested in this environment.

## v3.3 — Opt-in live Docker acceptance harness

`npm run test:docker-live` exercises actual Docker **create → inspect → ownership mismatch rejection → start → inspect → verified removal**. It is **not** included in `npm test`, does not pull images, and requires a running Docker daemon and an existing local pinned image:

```sh
export WORLD_FORGE_TEST_IMAGE='your-local-image@sha256:<64 lowercase hex>'
npm run test:docker-live
```

Use a disposable Docker host and an image containing `node`. The test creates one uniquely named container with `--network none`, restricted privileges and resources, then removes it only after checking ownership. If ownership or cleanup verification fails, inspect the printed container name manually. This is a narrow container-lifecycle acceptance test; it does not yet exercise the full job ledger, cancellation API, or AI coding provider. A Docker daemon is not available in the build environment, so the live test has **not** been run here.

## v3.4 — live Docker cancellation acceptance

This release adds `integration/docker-live-cancellation.mjs`, an **opt-in** end-to-end test that combines a real Docker container with a temporary SQLite job ledger, lease, durable cancellation request, the default ownership-verifying cancellation worker, and post-cancellation audit verification. It never pulls images, and it uses a random container name and a disposable database. It requires an existing locally cached digest-pinned Node.js image and a disposable Docker host:

```bash
export WORLD_FORGE_TEST_IMAGE='repository/name@sha256:<64-lowercase-hex-digest>'
npm run test:docker-live-cancellation
```

This is **not** part of `npm test`; do not interpret passing mocked tests as a live Docker pass. The harness attempts cleanup only after re-verifying the exact container ID and ownership. If it cannot verify ownership, it reports manual cleanup instead of deleting an unknown container. The harness does not yet prove cancellation/completion race safety or durable recovery after a host crash. A production rollout remains blocked on those checks, individual authentication, and a real AI coding provider.

## v3.5 — Cancellation/completion race regression tests

Added `tests/cancellation-completion-race.test.js` with four real asynchronous interleaving tests against the SQLite-backed `JobLedger` and `cancelActiveJob` implementation:

1. Cancellation wins while a runner is paused; a stale successful result cannot overwrite `INTERRUPTED`.
2. Completion wins before cancellation; cancellation is rejected before invoking the container stop callback.
3. Completion occurs while an asynchronous stop callback is pending; cancellation's post-stop state check rejects the overwrite and retains the active lease for manual reconciliation.
4. An unverified stop leaves a running execution untouched, allowing normal completion.

All four tests use a simulated stop callback and a deterministic deferred runner. They do not test Docker or establish production-safe concurrency across separate processes. The known risk of an actual container being removed after the job commits success still requires runtime coordination and operator recovery. This release intentionally adds no automatic cleanup or production cancellation endpoint.

Local verification: `npm test` — 198 passed, 0 failed (Node.js test runner).


## v3.6 — Verified-stop conflict evidence

If a verified container removal races with a ledger transition, cancellation now preserves an `execution_conflicts` record and an audit event instead of overwriting the new job state. The operator-only read-only `GET /api/execution-conflicts` endpoint and Founder Dashboard panel expose unresolved conflicts. These records do **not** establish that Docker is stopped beyond the supplied verified-stop adapter, and they do not automatically reconcile, retry, or restart execution. In the event that recording the conflict fails, the caller receives an AggregateError and must investigate manually. This is a local prototype with simulated Docker behavior.
