// ════════════════════════════════════════════════════════════════════
// v3 signature illustrations — built as real UI components (not stock art).
// Each uses the monospace "text inside the illustration" copy from the
// SuprAI Landing Page v3 spec, verbatim. Reuses BrandImg for real logos.
// ════════════════════════════════════════════════════════════════════
import BrandImg from './BrandImg.jsx'

/* Blueprint section marker — mono label + ruled line + [NN / 24] counter.
   Mirrors the Glean reference's ") ENTERPRISE … [6/9]" divider rows. */
export function SecMark({ label }) {
  return (
    <div className="secmark">
      <span className="sm-l"><span className="sm-caret">›</span>{label}</span>
      <span className="sm-line" />
    </div>
  )
}

/* §04 — The application grid: app tiles (each w/ a "memory" chip) → sync
   lines → one shared-context bar → team-controls frame + action badges. */
export function GridArt() {
  const tools = ['slack', 'gmail', 'hubspot', 'stripe', 'notion', 'googledrive', 'zendesk']
  return (
    <div className="gridart">
      <div className="ga-frame">
        <div className="ga-frame-k">your tools · always connected</div>
        <div className="ga-tiles">
          {tools.map((s) => (
            <div className="ga-tile" key={s}>
              <BrandImg slug={s} />
              <span className="ga-dot" title="connected" />
            </div>
          ))}
          <div className="ga-tile more">+92</div>
        </div>
        <div className="ga-sync">connected &amp; kept in sync<span className="ga-arrow">synced ↓</span></div>
        <div className="ga-bar">one shared context · everything your company knows</div>
        <div className="ga-foot">
          <span className="ga-badge">100+ actions</span>
          <span className="ga-badge ghost">access by role</span>
        </div>
      </div>
    </div>
  )
}

/* §06 — Surface-vs-pipeline "waterline": strategy above, engineered
   machinery below the line. */
export function Waterline() {
  const pipeline = ['connectors', 'memory index', 'managed auth', 'agents', 'apps']
  return (
    <div className="water">
      <div className="water-top">
        <div className="water-person"><span className="wp-av">YT</span>your team — ask, decide, strategise</div>
        <div className="ask-answer" style={{ marginTop: 14 }}>
          <div className="big-num"><em>$48,210</em> across 23 tools</div>
          <div className="cap">A clean answer. None of the machinery underneath.</div>
        </div>
      </div>
      <div className="water-line"><span>the surface</span></div>
      <div className="water-bot">
        <div className="water-chips">
          {pipeline.map((p) => <span className="water-chip" key={p}>{p}</span>)}
        </div>
        <div className="water-tag">engineered &amp; maintained by SuprAI</div>
      </div>
    </div>
  )
}

/* §07 — Unified context hub: apps flow IN → a "company context" core →
   surfaces (Slack / WhatsApp / any AI) pull OUT. */
export function ContextHub() {
  const ins = ['gmail', 'hubspot', 'stripe', 'notion', 'slack']
  return (
    <div className="ctxhub">
      <div className="ctx-col">
        <div className="ctx-k">in</div>
        {ins.map((s) => <div className="ctx-chip" key={s}><BrandImg slug={s} /></div>)}
      </div>
      <div className="ctx-flow in" />
      <div className="ctx-core"><span>company<br />context</span></div>
      <div className="ctx-flow out" />
      <div className="ctx-col">
        <div className="ctx-k">out</div>
        <div className="ctx-chip"><BrandImg slug="slack" />Slack</div>
        <div className="ctx-chip"><BrandImg slug="whatsapp" />WhatsApp</div>
        <div className="ctx-chip"><span className="ctx-any">✦</span>any AI</div>
        <div className="ctx-same">same answer, everywhere</div>
      </div>
    </div>
  )
}

/* §08 — Chat surfaces: Slack / Teams / WhatsApp, each a one-line @SuprAI
   ask + a reply with an action. */
export function ChatSurfaces() {
  const cards = [
    ['slack', 'Slack', '@SuprAI set up the new hire', '✓ done'],
    ['microsoftteams', 'Microsoft Teams', '@SuprAI Monday numbers', 'posted to #leadership'],
    ['whatsapp', 'WhatsApp', 'what did we spend on tools?', '$48,210'],
  ]
  return (
    <div className="chatsurf">
      {cards.map(([slug, name, ask, reply], i) => (
        <div className="cs-card" key={name}>
          <div className="cs-head"><BrandImg slug={slug} /><span>{name}</span></div>
          <div className="cs-ask">{ask}</div>
          <div className="cs-reply"><span className="cs-arr">→</span>{reply}</div>
        </div>
      ))}
    </div>
  )
}

/* §09 — AI workforce: named agent cards, each "● 24/7 · running" + apps. */
export function WorkforceGrid() {
  const agents = [
    ['Ops Agent', ['google', 'slack']],
    ['Sales Agent', ['hubspot', 'gmail']],
    ['Finance Agent', ['stripe', 'quickbooks']],
    ['Support Agent', ['zendesk', 'shopify']],
  ]
  return (
    <div className="wforce">
      {agents.map(([name, apps]) => (
        <div className="wf-card" key={name}>
          <div className="wf-top">
            <span className="wf-name">{name}</span>
            <span className="wf-live"><span className="bdot" />24/7</span>
          </div>
          <div className="wf-apps">
            {apps.map((s) => <span className="wf-app" key={s}><BrandImg slug={s} /></span>)}
            <span className="wf-run">running</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* §11 — Control dashboard: usage chart + members/roles + scoped API keys
   + a monospace request-log table with status dots. */
export function ControlDashboard() {
  const bars = [38, 52, 44, 67, 59, 78, 71]
  /* human-readable activity — no API method names, no key management */
  const log = [
    ['09:24', 'Maya', 'Finance', 'asked about Q3 tool spend'],
    ['09:21', 'DevOps', 'IT', 'provisioned new hire access'],
    ['09:18', 'Sam', 'Sales', 'pulled the pipeline summary'],
  ]
  return (
    <div className="ctrl">
      <div className="ctrl-top">
        <div className="ctrl-stat">
          <div className="cs-k">usage · last 7 days <span className="ctrl-up">▲ 18%</span></div>
          <div className="ctrl-bars">{bars.map((h, i) => <span className="ctrl-bar" key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
        <div className="ctrl-stat">
          <div className="cs-k">team</div>
          <div className="ctrl-big">24 <small>members · 6 roles</small></div>
        </div>
        <div className="ctrl-stat">
          <div className="cs-k">requests today</div>
          <div className="ctrl-big">12,481</div>
          <div className="ctrl-health"><span className="ctrl-dot ok" />healthy</div>
        </div>
      </div>
      <div className="ctrl-roles">
        <span className="cs-k">roles</span>
        {[['Admin', 3], ['Editor', 9], ['Viewer', 12]].map(([r, n]) => (
          <span className="ctrl-rolechip" key={r}>{r} · {n}</span>
        ))}
      </div>
      <div className="ctrl-log">
        <div className="cs-k" style={{ marginBottom: 4 }}>recent activity</div>
        {log.map((row) => (
          <div className="ctrl-logrow" key={row[0]}>
            <span className="cl-t">{row[0]}</span>
            <span className="cl-who">{row[1]} <em>({row[2]})</em></span>
            <span className="cl-act">{row[3]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* §13 — Managed-auth vault: people → a SuprAI vault (padlock + token chips)
   → app logos, with OAuth / scope / revoke callouts. */
export function ManagedVault() {
  const apps = ['slack', 'google', 'hubspot', 'stripe', 'zendesk']
  return (
    <div className="vault">
      <div className="vault-flow">
        <div className="vault-people">
          <span className="vp">PA</span><span className="vp">SM</span><span className="vp">+22</span>
          <div className="vault-cap">your team</div>
        </div>
        <div className="vault-core">
          <span className="vault-lock">🔒</span>
          <div className="vault-toks"><span className="vtok" /><span className="vtok" /><span className="vtok" /></div>
          <div className="vault-cap">keys held by SuprAI</div>
        </div>
        <div className="vault-apps">
          {apps.map((s) => <span className="va" key={s}><BrandImg slug={s} /></span>)}
          <div className="vault-cap">your apps</div>
        </div>
      </div>
      <div className="vault-row">
        <BrandImg slug="slack" style={{ height: 16 }} />
        <span>Slack</span>
        <span className="vr-sep">·</span><span className="vr-status">Connected</span>
        <span className="vr-sep">·</span><span className="vr-mono">OAuth 2.0</span>
        <span className="vr-sep">·</span><span className="vr-mono">🔒 keys held by SuprAI</span>
        <span className="vr-revoke">revoke ↺</span>
      </div>
    </div>
  )
}

/* §16 — Model gateway: a gateway box in front of GPT / Claude / Gemini /
   open-weights chips, a router, and a "−30% tokens" badge. */
export function ModelGateway() {
  const models = [['openai', 'GPT'], ['anthropic', 'Claude'], ['googlegemini', 'Gemini'], [null, 'open-weights']]
  return (
    <div className="gateway">
      <div className="gw-box">
        <span className="gw-k">model gateway</span>
        <span className="gw-arr">→</span>
      </div>
      <div className="gw-models">
        {models.map(([slug, name]) => (
          <div className="gw-model" key={name}>
            {slug ? <BrandImg slug={slug} /> : <span className="gw-glyph">◇</span>}
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className="gw-router">
        <span className="gw-rk">router</span>
        <span>by task · latency · cost</span>
        <span className="gw-tag">fallback ↺</span>
        <span className="gw-tag">BYOK ✓</span>
        <span className="gw-badge">−30% tokens</span>
      </div>
    </div>
  )
}

/* HERO — expanded answer card: shows the multi-source pull, then the total. */
export function HeroDemoCard() {
  const rows = [
    ['stripe', 'Stripe', '$28,410'],
    ['quickbooks', 'QuickBooks', '$11,200'],
    ['expensify', 'Expensify', '$5,800'],
    [null, '+20 more', '$2,800'],
  ]
  return (
    <div className="hpx">
      <div className="hpx-q"><span className="hp-tag">Q</span>What did we spend on tools last month?</div>
      <div className="hpx-status"><span className="bdot" />Pulling from 23 sources…</div>
      <div className="hpx-rows">
        {rows.map(([slug, name, amt]) => (
          <div className="hpx-row" key={name}>
            <span className="hpx-src">{slug ? <BrandImg slug={slug} /> : <span className="hpx-more">+</span>}{name}</span>
            <span className="hpx-line" />
            <span className="hpx-amt">{amt}</span>
          </div>
        ))}
      </div>
      <div className="hpx-total">
        <span className="hp-tag a">A</span>
        <div className="hpx-tnum"><em>$48,210</em> total <span className="hp-up">▲ +12% vs last month</span></div>
      </div>
      <div className="hpx-srcs">
        <span className="hp-label">sources</span>
        <span className="hp-chip"><BrandImg slug="stripe" />Stripe</span>
        <span className="hp-chip"><BrandImg slug="quickbooks" />QuickBooks</span>
        <span className="hp-chip">+21</span>
      </div>
    </div>
  )
}

/* WHAT YOUR TEAM ASKS — role scenario tiles (the "wow moment"). */
const SCENARIOS = [
  ['Finance', 'What did we spend on SaaS last month?', ['stripe', 'quickbooks', 'expensify'], '$48,210 across 23 tools. ▲ 12% vs prior month.'],
  ['Sales', 'Which deals haven’t moved in 10+ days? Draft the follow-ups.', ['salesforce', 'gmail'], '3 deals flagged. Drafts ready for your review.'],
  ['Operations', 'Onboard Priya — she starts Monday.', ['slack', 'notion', 'google', 'zendesk'], 'Done. 5 tools set up in 40 seconds.'],
  ['Leadership', 'Prep my Monday brief — pipeline, support, team.', ['hubspot', 'zendesk', 'slack'], 'Brief ready. Pulled from 8 tools.'],
  ['Support', 'Pull the full history on this customer.', ['zendesk', 'stripe', 'shopify', 'gmail'], '3 orders, 2 tickets, 1 open refund.'],
]
export function ScenarioTiles() {
  return (
    <div className="scen">
      {SCENARIOS.map(([role, q, apps, a]) => (
        <div className="scen-tile" key={role}>
          <span className="scen-role">{role}</span>
          <div className="scen-q">“{q}”</div>
          <div className="scen-apps">{apps.map((s) => <BrandImg key={s} slug={s} />)}</div>
          <div className="scen-a"><span className="scen-arr">→</span>{a}</div>
        </div>
      ))}
    </div>
  )
}

/* AUTOMATE — horizontal timeline of a background run. */
export function AutomateTimeline() {
  const steps = [
    ['8:45 AM', 'Trigger', 'Slack message received'],
    ['', 'Read', 'pulls from 5 tools, silently'],
    ['', 'Compose', 'formats the summary'],
    ['9:02 AM', 'Delivered', 'posted to #leadership'],
  ]
  return (
    <div className="atl">
      <div className="atl-rail">
        {steps.map((s, i) => (
          <div className="atl-node" key={i}>
            <span className="atl-when">{s[0] || ' '}</span>
            <span className="atl-dot" />
            <span className="atl-t">{s[1]}</span>
            <span className="atl-d">{s[2]}</span>
          </div>
        ))}
      </div>
      <div className="atl-cap">It ran while you were in the standup.</div>
    </div>
  )
}

/* ROLE-AWARE — one question, three role-shaped answers. */
export function RoleAnswers() {
  const cols = [
    ['Sales', [['Stage', 'Proposal'], ['Last touch', '8 days ago']], 'Draft a nudge'],
    ['Finance', [['Invoice', '$24k due Nov 15'], ['Risk', 'Medium']], 'Send reminder'],
    ['Support', [['Open tickets', '2'], ['Last reply', '3 days ago']], 'View tickets'],
  ]
  return (
    <div className="rolex">
      <div className="rolex-q">Question asked: <b>“What’s the status on Acme Corp?”</b></div>
      <div className="rolex-cols">
        {cols.map(([role, rows, btn]) => (
          <div className="rolex-card" key={role}>
            <span className="role-chip">{role}</span>
            <div className="rolex-rows">
              {rows.map(([k, v]) => (
                <div className="rolex-row" key={k}><span>{k}</span><b>{v}</b></div>
              ))}
            </div>
            <span className="rolex-btn">{btn}</span>
          </div>
        ))}
      </div>
      <div className="rolex-cap">Same question. Each person sees only what their role allows.</div>
    </div>
  )
}

/* COMPARE — scannable capability grid. */
const CMP_ROWS = [
  ['Shared company context', '✗', 'partial', '✓'],
  ['Role-aware answers', '✗', 'partial', '✓'],
  ['Acts across all your apps', 'partial', 'MS only', '✓'],
  ['Works in Slack / Teams / WhatsApp', '✗', 'Teams', '✓'],
  ['Background agents', '✗', '✗', '✓'],
  ['Model-agnostic', 'GPT only', 'partial', '✓'],
  ['Cost scales sub-linearly', '✗', 'per seat', '✓'],
]
const cgCell = (v) => v === '✓' ? 'cg-y' : v === '✗' ? 'cg-n' : 'cg-p'
export function CompareGrid() {
  return (
    <div className="cgrid">
      <div className="cgrid-row cgrid-head">
        <div className="cgrid-feat" />
        <div>ChatGPT Enterprise</div>
        <div>M365 Copilot</div>
        <div className="us">SuprAI</div>
      </div>
      {CMP_ROWS.map(([f, a, b, c]) => (
        <div className="cgrid-row" key={f}>
          <div className="cgrid-feat">{f}</div>
          <div className={cgCell(a)}>{a}</div>
          <div className={cgCell(b)}>{b}</div>
          <div className={`us ${cgCell(c)}`}>{c}</div>
        </div>
      ))}
    </div>
  )
}

/* WHERE IT LIVES — full Slack thread simulation. */
export function SlackThread() {
  const steps = [
    'Slack workspace — invited',
    'Notion access — team workspace',
    'Google Workspace — account created',
    'Zendesk — support role assigned',
    'HubSpot — added to Sales team',
  ]
  return (
    <div className="slk">
      <div className="slk-head"><BrandImg slug="slack" /><span>#ops-team</span></div>
      <div className="slk-msg">
        <span className="slk-av u">PA</span>
        <div className="slk-body">
          <div className="slk-who">Priya <span>9:03 AM</span></div>
          <div className="slk-text"><b>@SuprAI</b> onboard Rahul — he starts Monday</div>
        </div>
      </div>
      <div className="slk-msg">
        <span className="slk-av b">S</span>
        <div className="slk-body">
          <div className="slk-who">SuprAI <span className="slk-done">✓ done</span></div>
          <div className="slk-card">
            <div className="slk-card-t">Onboarding Rahul Kumar</div>
            {steps.map((s) => <div className="slk-step" key={s}><span className="slk-tick">✓</span>{s}</div>)}
            <div className="slk-fin">Done. Rahul can start Monday.</div>
          </div>
        </div>
      </div>
      <div className="slk-msg">
        <span className="slk-av u">PA</span>
        <div className="slk-body">
          <div className="slk-who">Priya <span>9:04 AM</span></div>
          <div className="slk-text">That’s it??</div>
        </div>
      </div>
      <div className="slk-foot"><BrandImg slug="slack" /><BrandImg slug="microsoftteams" /><BrandImg slug="whatsapp" /><span>works across all three</span></div>
    </div>
  )
}
