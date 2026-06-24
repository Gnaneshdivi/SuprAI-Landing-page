import { useState } from 'react'
import BrandImg from './BrandImg.jsx'

// Interactive hero — a testable SuprAI dashboard. Tabs swap the main panel.
// Dummy data throughout; everything is clickable.

const TABS = [
  ['ask', '◎', 'Ask'],
  ['connectors', '▦', 'Connectors'],
  ['skills', '✦', 'Skills'],
  ['agents', '◍', 'Agents'],
  ['workflows', '⟲', 'Workflows'],
  ['teams', '⧉', 'Teams'],
  ['audit', '⚿', 'Audit'],
]

// ── Ask ──
const SCEN = [
  { role: 'Finance', q: 'What did we spend on tools last month?', kind: 'num', big: '$48,210',
    sub: 'across 23 tools — up 12% on March, driven by 3 new Sales seats.',
    sources: [['stripe', 'Stripe'], ['quickbooks', 'QuickBooks'], [null, '+14 sources']],
    action: 'Post summary to #finance', done: 'Posted to #finance' },
  { role: 'Operations', q: 'Set up the new hire in Google & send the welcome.', kind: 'steps',
    steps: ['Created account for dev@acme.co', 'Added to Engineering · All-staff · GitHub', 'Drafted the welcome email'],
    sources: [['google', 'Google'], ['gmail', 'Gmail']], action: 'Send it', done: 'Sent — logged to audit' },
  { role: 'Sales', q: 'Which deals went quiet — and nudge them.', kind: 'text',
    txt: '3 accounts idle 7+ days: Acme ($42k), Globex ($28k), Initech ($15k). A follow-up is drafted for each owner.',
    sources: [['hubspot', 'HubSpot'], ['gmail', 'Gmail']], action: 'Queue 3 follow-ups', done: '3 follow-ups queued' },
  { role: 'Support', q: 'Why is this customer upset?', kind: 'text',
    txt: 'Order #4821 shipped 6 days late and the refund is still pending. Reply + refund are ready.',
    sources: [['shopify', 'Shopify'], ['zendesk', 'Zendesk'], ['stripe', 'Stripe']], action: 'Issue refund & reply', done: 'Refund issued · reply sent' },
]

const CONNECTORS = [
  ['google', 'Google Workspace', 'Identity', true], ['slack', 'Slack', 'Messaging', true],
  ['hubspot', 'HubSpot', 'CRM', true], ['salesforce', 'Salesforce', 'CRM', false],
  ['stripe', 'Stripe', 'Payments', true], ['shopify', 'Shopify', 'Commerce', true],
  ['zendesk', 'Zendesk', 'Support', true], ['notion', 'Notion', 'Docs', true],
  ['github', 'GitHub', 'Engineering', true], ['quickbooks', 'QuickBooks', 'Finance', false],
  ['snowflake', 'Snowflake', 'Data', true], ['airtable', 'Airtable', 'Data', false],
]

// ── Skills: capabilities you attach to agents, shared across a team ──
const SKILLS = [
  ['Onboarding', 'Provision accounts, access & welcome', 3],
  ['Support', 'Resolve tickets with full context', 2],
  ['Competitor analysis', 'Track rivals’ pricing, launches & share', 2],
  ['Lead qualification', 'Score and route inbound leads', 1],
  ['Reporting', 'Build & post the numbers on a schedule', 3],
  ['Refunds', 'Issue & log refunds within policy', 1],
  ['Reconciliation', 'Match orders, payments & inventory', 1],
  ['Anomaly detection', 'Flag spend & usage outliers', 1],
]
const SKILL_NAMES = SKILLS.map((s) => s[0])

// ── Agents: name · team · role · skills · who they coordinate with ──
const TEAMS = ['Sales', 'Finance', 'Ops', 'Support', 'Marketing']
const AGENTS0 = [
  { name: 'Ben', team: 'Ops', role: 'Onboarding agent', av: 'B', skills: ['Onboarding', 'Reporting'],
    coord: [['Ben', 'Ada', 'New hire starts Monday — flag any support access needed.'], ['Ada', 'Ben', 'Added them to the queue, read-only. ✓']] },
  { name: 'Maya', team: 'Sales', role: 'Pipeline agent', av: 'M', skills: ['Lead qualification', 'Competitor analysis'],
    coord: [['Maya', 'Ben', 'Globex just signed — provision their workspace?'], ['Ben', 'Maya', 'Accounts created, welcome sent. Looping Otto for billing.'], ['Otto', 'Maya', 'Invoice scheduled. ✓']] },
  { name: 'Otto', team: 'Finance', role: 'Spend agent', av: 'O', skills: ['Reporting', 'Reconciliation', 'Anomaly detection'],
    coord: [['Otto', 'Maya', '2 duplicate SaaS charges on a Sales tool — pause one?'], ['Maya', 'Otto', 'Yes, cancel the unused seat. ✓']] },
  { name: 'Ada', team: 'Support', role: 'Resolution agent', av: 'A', skills: ['Support', 'Refunds'],
    coord: [['Ada', 'Otto', 'Refund on #4821 — confirm it’s within policy?'], ['Otto', 'Ada', 'Approved, logged to audit. ✓']] },
  { name: 'Rex', team: 'Marketing', role: 'Research agent', av: 'R', skills: ['Competitor analysis', 'Reporting'],
    coord: [['Rex', 'Maya', 'Rival dropped price 15% — heads up for renewals.'], ['Maya', 'Rex', 'Thanks — flagging at-risk accounts now.']] },
]
const teamColor = { Sales: '#2563eb', Finance: '#1f7a3f', Ops: '#C2410C', Support: '#7c3aed', Marketing: '#db2777' }

// ── Workflows: n8n-style node graphs ──
const NODE_W = 176, NODE_H = 60
const GLYPH = { bolt: '⚡', cond: '◇', clock: '◷' }
const accentFor = (app) => app === 'bolt' ? '#F15A22' : app === 'cond' ? '#B8862A' : app === 'clock' ? '#C2410C' : '#CDBFB0'
const C0 = 8, C1 = 212, C2 = 416, C3 = 620   // column x
const YM = 86, YH = 8, YL = 164              // mid / high / low rows
const WF = [
  { name: 'New-hire onboarding',
    nodes: [
      { id: 't', x: C0, y: YM, app: 'bolt', title: 'New hire added', sub: 'HR system' },
      { id: 'a', x: C1, y: YM, app: 'google', title: 'Create account', sub: 'Google Workspace' },
      { id: 'b', x: C2, y: YH, app: 'github', title: 'Add to GitHub', sub: 'GitHub' },
      { id: 'c', x: C2, y: YL, app: 'gmail', title: 'Draft welcome', sub: 'Gmail' },
      { id: 'd', x: C3, y: YM, app: 'slack', title: 'Notify the team', sub: 'Slack' },
    ], edges: [['t', 'a'], ['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'd']] },
  { name: 'Churn watch',
    nodes: [
      { id: 't', x: C0, y: YM, app: 'bolt', title: 'Risk signal', sub: 'Usage drop' },
      { id: 'r', x: C1, y: YM, app: 'stripe', title: 'Read usage', sub: 'Stripe + product' },
      { id: 's', x: C2, y: YM, app: 'cond', title: 'At risk?', sub: 'Branch on score' },
      { id: 'w', x: C3, y: YH, app: 'hubspot', title: 'Draft win-back', sub: 'HubSpot' },
      { id: 'n', x: C3, y: YL, app: 'slack', title: 'Alert the owner', sub: 'Slack' },
    ], edges: [['t', 'r'], ['r', 's'], ['s', 'w'], ['s', 'n']] },
  { name: 'Monday Numbers',
    nodes: [
      { id: 't', x: C0, y: YM, app: 'clock', title: 'Monday 6:00 AM', sub: 'Schedule' },
      { id: 'r', x: C1, y: YM, app: 'snowflake', title: 'Read 9 apps', sub: 'Warehouse' },
      { id: 'c', x: C2, y: YM, app: 'bolt', title: 'Compare', sub: 'vs last week' },
      { id: 'p', x: C3, y: YM, app: 'slack', title: 'Post the report', sub: '#leadership' },
    ], edges: [['t', 'r'], ['r', 'c'], ['c', 'p']] },
]

// ── Teams tree ──
const TREE = [
  { dept: 'Sales', people: [['Maya R.', 'Sales Lead', ['HubSpot', 'Gmail', 'All accounts']], ['Sam K.', 'Account Exec', ['HubSpot', 'Gmail', 'Own accounts']]] },
  { dept: 'Finance', people: [['Otto B.', 'Controller', ['Stripe', 'QuickBooks', 'Spend reports']]] },
  { dept: 'Ops & Support', people: [['Ben A.', 'Ops Lead', ['Google Admin', 'GitHub']], ['Ada L.', 'Support', ['Zendesk', 'Shopify', 'Refunds']]] },
]

const AUDIT = [
  ['Ben', 'Created user dev@acme.co', '2m ago'],
  ['Maya', 'Queued 3 sales follow-ups', '14m ago'],
  ['Otto', 'Posted spend summary to #finance', '1h ago'],
  ['Ada', 'Issued refund on order #4821', '3h ago'],
  ['Admin', 'Added “Sales” role to Sam R.', '5h ago'],
]

function WorkflowCanvas({ wf }) {
  const byId = Object.fromEntries(wf.nodes.map((n) => [n.id, n]))
  const W = Math.max(...wf.nodes.map((n) => n.x)) + NODE_W + 12
  const H = Math.max(...wf.nodes.map((n) => n.y)) + NODE_H + 12
  return (
    <div className="wfcanvas" style={{ width: W, height: H }}>
      <svg className="wfedges" width={W} height={H}>
        {wf.edges.map(([a, b], i) => {
          const A = byId[a], B = byId[b]
          const sx = A.x + NODE_W, sy = A.y + NODE_H / 2, ex = B.x, ey = B.y + NODE_H / 2
          const d = `M${sx},${sy} C${sx + 46},${sy} ${ex - 46},${ey} ${ex},${ey}`
          return (
            <g key={i}>
              <path d={d} className="wfedge" />
              <circle cx={sx} cy={sy} r="3" className="wfdot" />
              <circle cx={ex} cy={ey} r="3" className="wfdot" />
            </g>
          )
        })}
      </svg>
      {wf.nodes.map((n) => (
        <div key={n.id} className="wfnode" style={{ left: n.x, top: n.y, width: NODE_W, height: NODE_H }}>
          <span className="wfn-strip" style={{ background: accentFor(n.app) }} />
          <span className="wfn-ic">{GLYPH[n.app] ? <span className="wfn-glyph">{GLYPH[n.app]}</span> : <BrandImg slug={n.app} />}</span>
          <span className="wfn-meta"><span className="wfn-t">{n.title}</span><span className="wfn-s">{n.sub}</span></span>
        </div>
      ))}
    </div>
  )
}

export default function HeroDemo() {
  const [tab, setTab] = useState('ask')
  const [sel, setSel] = useState(0)
  const [acted, setActed] = useState(false)
  const [conn, setConn] = useState(() => CONNECTORS.map((c) => c[3]))
  const [flow, setFlow] = useState(0)
  // agents
  const [agents, setAgents] = useState(AGENTS0)
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState('grid')      // grid | detail | create
  const [open, setOpen] = useState(0)
  const [draft, setDraft] = useState({ name: '', team: 'Sales', skills: [] })

  const s = SCEN[sel]
  const shown = agents.filter((a) => filter === 'All' || a.team === filter)

  const createAgent = () => {
    if (!draft.name.trim()) return
    setAgents((p) => [...p, { name: draft.name.trim(), team: draft.team, role: 'Custom agent', av: draft.name.trim()[0].toUpperCase(), skills: draft.skills, coord: [] }])
    setDraft({ name: '', team: 'Sales', skills: [] }); setView('grid'); setFilter(draft.team)
  }

  return (
    <div className="demo">
      <aside className="demo-side">
        <div className="brand">Supr<span>AI</span></div>
        <div className="demo-nav">
          {TABS.map(([id, ic, label]) => (
            <button key={id} className={tab === id ? 'on' : ''} onClick={() => { setTab(id); setView('grid') }}>
              <span className="ni">{ic}</span>{label}
            </button>
          ))}
        </div>
        <div className="demo-ws"><span className="demo-ws-dot" />Acme Inc · 1 admin</div>
      </aside>

      <div className="demo-main">
        {/* ── ASK ── */}
        {tab === 'ask' && (
          <div className="demo-body">
            <div className="demo-ask"><span className="q">{s.q}</span><span className="send">↑</span></div>
            <div className="demo-chips">
              {SCEN.map((sc, i) => <button key={i} className={`demo-chip${i === sel ? ' on' : ''}`} onClick={() => { setSel(i); setActed(false) }}>{sc.role}</button>)}
            </div>
            <div className="demo-ans">
              <span className="demo-role">🔒 {s.role} · scoped to role</span>
              {s.kind === 'num' && <div className="big"><em>{s.big}</em> {s.sub}</div>}
              {s.kind === 'text' && <div className="txt">{s.txt}</div>}
              {s.kind === 'steps' && <div className="demo-steps">{s.steps.map((st) => <div className="demo-step" key={st}><span className="t">✓</span>{st}</div>)}</div>}
              <div className="demo-src">{s.sources.map(([slug, label]) => <span className="demo-srcchip" key={label}>{slug && <BrandImg slug={slug} />}{label}</span>)}</div>
              <div className="demo-act">
                {acted ? <button className="demo-actbtn done">✓ {s.done}</button> : <button className="demo-actbtn" onClick={() => setActed(true)}>▶ {s.action}</button>}
                <span className="demo-hint">{acted ? 'Recorded in the audit trail.' : 'Approve to run — or let it run on autopilot.'}</span>
              </div>
            </div>
          </div>
        )}

        {/* ── CONNECTORS ── */}
        {tab === 'connectors' && (
          <div className="demo-body">
            <div className="demo-h"><b>Connectors</b><span>{conn.filter(Boolean).length} of {CONNECTORS.length} connected · 100+ available</span></div>
            <div className="demo-conn">
              {CONNECTORS.map(([slug, name, cat], i) => (
                <button key={slug} className="demo-conntile" onClick={() => setConn((p) => p.map((v, j) => j === i ? !v : v))}>
                  <span className="ct-ic"><BrandImg slug={slug} /></span>
                  <span className="ct-meta"><span className="ct-name">{name}</span><span className="ct-cat">{cat}</span></span>
                  <span className={`ct-status${conn[i] ? ' on' : ''}`}>{conn[i] ? '● Connected' : '+ Connect'}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── SKILLS ── */}
        {tab === 'skills' && (
          <div className="demo-body">
            <div className="demo-h"><b>Skills</b><span>Capabilities you add to agents — shared across a team</span></div>
            <div className="demo-conn">
              {SKILLS.map(([name, desc, used]) => (
                <div className="skillcard" key={name}>
                  <div className="sc-top"><span className="sc-mark">✦</span><span className="sc-name">{name}</span></div>
                  <div className="sc-desc">{desc}</div>
                  <div className="sc-foot">Used by {used} agent{used > 1 ? 's' : ''}<span className="sc-add">＋ Add to agent</span></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AGENTS: grid ── */}
        {tab === 'agents' && view === 'grid' && (
          <div className="demo-body">
            <div className="ag-bar">
              <b>Agents</b>
              <div className="ag-bar-r">
                <label className="ag-sort">Sort by team
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option>All</option>{TEAMS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <button className="ag-new" onClick={() => setView('create')}>＋ Create agent</button>
              </div>
            </div>
            <div className="ag-grid">
              {shown.map((a) => (
                <button className="ag-card" key={a.name} onClick={() => { setOpen(agents.indexOf(a)); setView('detail') }}>
                  <span className="ag-av" style={{ background: teamColor[a.team] }}>{a.av}</span>
                  <span className="ag-card-meta">
                    <span className="ag-nm">{a.name}</span>
                    <span className="ag-rl">{a.role}</span>
                  </span>
                  <span className="ag-team" style={{ color: teamColor[a.team], borderColor: teamColor[a.team] }}>{a.team}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── AGENTS: detail ── */}
        {tab === 'agents' && view === 'detail' && (
          <div className="demo-body">
            <button className="ag-back" onClick={() => setView('grid')}>← Agents</button>
            <div className="ag-dethead">
              <span className="ag-av lg" style={{ background: teamColor[agents[open].team] }}>{agents[open].av}</span>
              <div><div className="ag-detname">{agents[open].name}</div><div className="ag-detrole">{agents[open].role} · <span style={{ color: teamColor[agents[open].team] }}>{agents[open].team}</span></div></div>
            </div>
            <div className="ag-sec">Skills</div>
            <div className="ag-skills">{agents[open].skills.length ? agents[open].skills.map((sk) => <span className="ag-skill" key={sk}>✦ {sk}</span>) : <span className="ag-empty">No skills yet</span>}</div>
            <div className="ag-sec">How they coordinate</div>
            <div className="coord">
              {agents[open].coord.length ? agents[open].coord.map(([from, to, text], i) => (
                <div className="coord-row" key={i}>
                  <span className="coord-from">{from}</span><span className="coord-arr">→</span><span className="coord-to">{to}</span>
                  <span className="coord-text">{text}</span>
                </div>
              )) : <span className="ag-empty">This agent works solo for now.</span>}
            </div>
          </div>
        )}

        {/* ── AGENTS: create ── */}
        {tab === 'agents' && view === 'create' && (
          <div className="demo-body">
            <button className="ag-back" onClick={() => setView('grid')}>← Agents</button>
            <div className="demo-h"><b>Create an agent</b><span>Name it, pick a team, add skills</span></div>
            <input className="ag-input" placeholder="Agent name (e.g. Nova)" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            <div className="ag-field">Team
              <select value={draft.team} onChange={(e) => setDraft({ ...draft, team: e.target.value })}>{TEAMS.map((t) => <option key={t}>{t}</option>)}</select>
            </div>
            <div className="ag-field">Skills</div>
            <div className="ag-skills">
              {SKILL_NAMES.map((sk) => (
                <button key={sk} className={`ag-skill pick${draft.skills.includes(sk) ? ' on' : ''}`} onClick={() => setDraft((d) => ({ ...d, skills: d.skills.includes(sk) ? d.skills.filter((x) => x !== sk) : [...d.skills, sk] }))}>✦ {sk}</button>
              ))}
            </div>
            <button className="demo-actbtn" style={{ marginTop: 18, alignSelf: 'flex-start' }} onClick={createAgent}>Create agent</button>
          </div>
        )}

        {/* ── WORKFLOWS ── */}
        {tab === 'workflows' && (
          <div className="demo-body">
            <div className="ag-bar"><b>Workflows</b><span className="wf-sub">Build it once — it runs on autopilot</span></div>
            <div className="demo-wfchips">
              {WF.map((f, i) => <button key={f.name} className={`demo-chip${i === flow ? ' on' : ''}`} onClick={() => setFlow(i)}>{f.name}</button>)}
            </div>
            <div className="wfscroll"><WorkflowCanvas wf={WF[flow]} /></div>
            <div className="flow-foot">Drag-and-drop nodes · every step logged · reports back when done.</div>
          </div>
        )}

        {/* ── TEAMS ── */}
        {tab === 'teams' && (
          <div className="demo-body">
            <div className="demo-h"><b>Teams &amp; access</b><span>People · roles · what each can access</span></div>
            <div className="tree">
              <div className="tree-root"><span className="tr-ic">⧉</span> Acme Inc <span className="tr-meta">Workspace · 1 admin</span></div>
              {TREE.map((d) => (
                <div className="tree-dept" key={d.dept}>
                  <div className="tree-deptname">{d.dept}</div>
                  {d.people.map(([name, role, access]) => (
                    <div className="tree-person" key={name}>
                      <span className="tp-av">{name[0]}</span>
                      <span className="tp-name">{name}</span>
                      <span className="tp-role">{role}</span>
                      <span className="tp-access">{access.map((a) => <span className="tp-chip" key={a}>{a}</span>)}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AUDIT ── */}
        {tab === 'audit' && (
          <div className="demo-body">
            <div className="demo-h"><b>Audit trail</b><span>Every question, answer and action — who, what, when</span></div>
            <div className="demo-audit">
              {AUDIT.map(([who, what, when], i) => (
                <div className="au-row" key={i}><span className="au-who">{who}</span><span className="au-what">{what}</span><span className="au-when">{when}</span></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
