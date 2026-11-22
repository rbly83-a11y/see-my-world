import { DatabaseSync } from 'node:sqlite';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { validateTasks, transition, readyTasks } from './factory.js';
const sha = s => createHash('sha256').update(s).digest('hex');
const ZERO='0'.repeat(64);
export class Store {
  constructor(path) {
    this.db=new DatabaseSync(path);
    this.db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
      CREATE TABLE IF NOT EXISTS events(seq INTEGER PRIMARY KEY, prev_hash TEXT NOT NULL, hash TEXT NOT NULL, kind TEXT NOT NULL, payload TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS tasks(id TEXT PRIMARY KEY, body TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 0);
      CREATE TABLE IF NOT EXISTS approvals(id TEXT PRIMARY KEY, task_id TEXT NOT NULL REFERENCES tasks(id), kind TEXT NOT NULL, commit_sha TEXT NOT NULL, actor TEXT NOT NULL, signature TEXT NOT NULL);
      CREATE TABLE IF NOT EXISTS review_requests(id TEXT PRIMARY KEY, task_id TEXT NOT NULL REFERENCES tasks(id), commit_sha TEXT NOT NULL, requested_by TEXT NOT NULL, reviewer TEXT NOT NULL, status TEXT NOT NULL CHECK(status IN ('PENDING','APPROVED','CHANGES_REQUESTED')));
    `);
  }
  close(){this.db.close();}
  record(kind,payload){
    const prior=this.db.prepare('SELECT seq,hash FROM events ORDER BY seq DESC LIMIT 1').get();
    const seq=(prior?.seq??0)+1, prev_hash=prior?.hash??ZERO;
    const serialized=JSON.stringify(payload);
    const hash=sha(JSON.stringify({seq,prev_hash,kind,payload}));
    this.db.prepare('INSERT INTO events(seq,prev_hash,hash,kind,payload) VALUES(?,?,?,?,?)').run(seq,prev_hash,hash,kind,serialized);
    return {seq,hash};
  }
  verify(){let prev=ZERO,count=0;for(const e of this.db.prepare('SELECT * FROM events ORDER BY seq').all()){
    const payload=JSON.parse(e.payload);
    if(e.seq!==++count||e.prev_hash!==prev||e.hash!==sha(JSON.stringify({seq:e.seq,prev_hash:e.prev_hash,kind:e.kind,payload})))throw Error('Audit integrity failure');
    prev=e.hash;
  }return count;}
  initialize(tasks){validateTasks(tasks);this.db.exec('BEGIN IMMEDIATE');try{
    if(this.db.prepare('SELECT count(*) n FROM tasks').get().n)throw Error('Already initialized');
    const insert=this.db.prepare('INSERT INTO tasks(id,body) VALUES(?,?)');
    for(const t of tasks)insert.run(t.id,JSON.stringify(t));
    this.record('INITIALIZED',{tasks});this.db.exec('COMMIT');
  }catch(e){this.db.exec('ROLLBACK');throw e;}}
  tasks(){return this.db.prepare('SELECT body FROM tasks ORDER BY id').all().map(r=>JSON.parse(r.body));}
  addTask(task, actor) {
    if (!actor?.trim()) throw Error('Actor required');
    if (!task || typeof task !== 'object') throw Error('Invalid task');
    const allowed = ['id','title','owner','dependencies','status','risk'];
    if (Object.keys(task).some(k => !allowed.includes(k))) throw Error('Unknown task fields');
    if (task.status !== 'DRAFT') throw Error('New tasks must begin DRAFT');
    if (!/^[A-Z][A-Z0-9-]{2,39}$/.test(task.id ?? '')) throw Error('Invalid task id');
    if (typeof task.title !== 'string' || task.title.trim().length < 3 || task.title.length > 200) throw Error('Invalid title');
    if (typeof task.owner !== 'string' || !/^[A-Z][A-Z0-9_-]{1,39}$/.test(task.owner)) throw Error('Invalid owner');
    if (!Array.isArray(task.dependencies) || task.dependencies.length > 30 || new Set(task.dependencies).size !== task.dependencies.length) throw Error('Invalid dependencies');
    if (task.risk !== undefined && !['LOW','MEDIUM','HIGH','CRITICAL'].includes(task.risk)) throw Error('Invalid risk');
    this.db.exec('BEGIN IMMEDIATE');
    try {
      const all = this.tasks();
      validateTasks([...all,task]);
      this.db.prepare('INSERT INTO tasks(id,body) VALUES(?,?)').run(task.id,JSON.stringify(task));
      this.record('TASK_CREATED',{task,actor});
      this.db.exec('COMMIT');
      return task;
    } catch(e) {this.db.exec('ROLLBACK');throw e;}
  }

  change(taskId,next,actor){if(!actor?.trim())throw Error('Actor required');if(next==='ACCEPTED')throw Error('Acceptance requires authenticated evidence; not enabled');
    this.db.exec('BEGIN IMMEDIATE');try{
      const all=this.tasks(),task=all.find(t=>t.id===taskId);if(!task)throw Error('Unknown task');
      if(next==='RUNNING'&&!readyTasks(all).some(t=>t.id===taskId))throw Error('Dependencies not accepted');
      const updated=transition(task,next,actor);
      this.db.prepare('UPDATE tasks SET body=?,version=version+1 WHERE id=?').run(JSON.stringify(updated),taskId);
      this.record('TRANSITION',{taskId,next,actor});this.db.exec('COMMIT');return updated;
    }catch(e){this.db.exec('ROLLBACK');throw e;}
  }
  taskDossier(taskId){
    // Advisory evidence inventory; never an authorization to accept or merge.
    const task=this.tasks().find(t=>t.id===taskId);
    if(!task)throw Error('Unknown task');
    const verifiedEvents=this.verify();
    const reviews=this.reviewRequests().filter(r=>r.taskId===taskId);
    const approvals=this.db.prepare('SELECT id,kind,commit_sha AS commitSha,actor FROM approvals WHERE task_id=? ORDER BY id').all(taskId);
    const events=this.db.prepare('SELECT seq,kind,payload,hash FROM events ORDER BY seq').all().filter(e=>{
      const payload=JSON.parse(e.payload);
      return payload.taskId===taskId || payload.task?.id===taskId ||
        (e.kind==='INITIALIZED' && payload.tasks?.some(t=>t.id===taskId));
    }).map(e=>({seq:e.seq,kind:e.kind,hash:e.hash}));
    return {task,reviews,approvals,events,verifiedEvents,
      readiness:{independentReviewRecorded:reviews.some(r=>r.status==='APPROVED'),
      liveCiVerified:false,identityVerified:false,authorizedForMerge:false},
      warning:'Advisory local dossier only; no live CI, verified human identity or merge authorization'};
  }
  reviewRequests(){return this.db.prepare('SELECT id,task_id AS taskId,commit_sha AS commitSha,requested_by AS requestedBy,reviewer,status FROM review_requests ORDER BY id').all();}
  requestReview({id,taskId,commitSha,requestedBy,reviewer}){
    if(!/^RR-[A-Z0-9-]{3,50}$/.test(id??''))throw Error('Invalid review request id');
    if(!/^[a-f0-9]{40}$|^[a-f0-9]{64}$/.test(commitSha??''))throw Error('Invalid commit SHA');
    if(!/^[A-Z][A-Z0-9_-]{1,39}$/.test(reviewer??''))throw Error('Invalid reviewer');
    if(!/^[-_a-zA-Z0-9]{2,50}$/.test(requestedBy??''))throw Error('Invalid requester');
    this.db.exec('BEGIN IMMEDIATE');
    try{
      const task=this.tasks().find(t=>t.id===taskId);
      if(!task)throw Error('Unknown task');
      if(task.status!=='REVIEW')throw Error('Review request requires REVIEW status');
      if(task.owner===reviewer)throw Error('Self-review forbidden');
      this.db.prepare('INSERT INTO review_requests VALUES(?,?,?,?,?,?)').run(id,taskId,commitSha,requestedBy,reviewer,'PENDING');
      this.record('REVIEW_REQUESTED',{id,taskId,commitSha,requestedBy,reviewer});
      this.db.exec('COMMIT');return {id,taskId,commitSha,requestedBy,reviewer,status:'PENDING'};
    }catch(e){this.db.exec('ROLLBACK');throw e;}
  }
  decideReview({id, decision, reviewer, commitSha}) {
    if (!['APPROVED','CHANGES_REQUESTED'].includes(decision)) throw Error('Invalid review decision');
    if (!/^[A-Z][A-Z0-9_-]{1,39}$/.test(reviewer??'')) throw Error('Invalid reviewer');
    if (!/^[a-f0-9]{40}$|^[a-f0-9]{64}$/.test(commitSha??'')) throw Error('Invalid commit SHA');
    this.db.exec('BEGIN IMMEDIATE');
    try {
      const req=this.db.prepare('SELECT * FROM review_requests WHERE id=?').get(id);
      if (!req) throw Error('Unknown review request');
      if (req.status!=='PENDING') throw Error('Review already decided');
      if (req.reviewer!==reviewer) throw Error('Reviewer mismatch');
      if (req.commit_sha!==commitSha) throw Error('Commit mismatch');
      const task=this.tasks().find(t=>t.id===req.task_id);
      if (!task || task.status!=='REVIEW') throw Error('Task not in review');
      if (task.owner===reviewer) throw Error('Self-review forbidden');
      this.db.prepare('UPDATE review_requests SET status=? WHERE id=?').run(decision,id);
      this.record('REVIEW_DECIDED',{id,taskId:req.task_id,reviewer,commitSha,decision});
      this.db.exec('COMMIT');
      return {id,taskId:req.task_id,reviewer,commitSha,status:decision};
    } catch(e){this.db.exec('ROLLBACK');throw e;}
  }
  // HMAC is a local demonstration of authenticated evidence, not production user identity.
  addApproval({id,taskId,kind,commitSha,actor,signature},secret){
    if(!secret||secret.length<32)throw Error('Strong approval secret required');
    const msg=JSON.stringify({id,taskId,kind,commitSha,actor});
    const expected=createHmac('sha256',secret).update(msg).digest('hex');
    if(!/^[a-f0-9]{64}$/.test(signature)||!timingSafeEqual(Buffer.from(expected,'hex'),Buffer.from(signature,'hex')))throw Error('Invalid approval signature');
    if(!this.tasks().some(t=>t.id===taskId))throw Error('Unknown task');
    this.db.exec('BEGIN IMMEDIATE');try{
      this.db.prepare('INSERT INTO approvals VALUES(?,?,?,?,?,?)').run(id,taskId,kind,commitSha,actor,signature);
      this.record('APPROVAL',{id,taskId,kind,commitSha,actor});this.db.exec('COMMIT');
    }catch(e){this.db.exec('ROLLBACK');throw e;}
  }
}
export function signApproval(input,secret){if(!secret||secret.length<32)throw Error('Strong approval secret required');return createHmac('sha256',secret).update(JSON.stringify(input)).digest('hex');}
