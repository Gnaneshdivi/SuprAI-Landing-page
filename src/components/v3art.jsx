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
        <div className="ga-frame-k">team controls · roles · scoped access</div>
        <div className="ga-tiles">
          {tools.map((s) => (
            <div className="ga-tile" key={s}>
              <BrandImg slug={s} />
              <span className="ga-mem">memory</span>
            </div>
          ))}
          <div className="ga-tile more">+92</div>
        </div>
        <div className="ga-sync">each holds a piece of your memory<span className="ga-arrow">synced ↓</span></div>
        <div className="ga-bar">one shared context · all your company&rsquo;s data &amp; memory</div>
        <div className="ga-foot">
          <span className="ga-badge">actions · 100+</span>
          <span className="ga-badge ghost">RBAC · least-privilege</span>
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
  const log = [
    ['09:24', 'maya', 'answered', 'finance.spend', 'sources:14', 'ok'],
    ['09:21', 'devops', 'acted', 'google.create_user', 'scoped', 'ok'],
    ['09:18', 'sam', 'answered', 'sales.pipeline', 'sources:6', 'ok'],
  ]
  return (
    <div className="ctrl">
      <div className="ctrl-top">
        <div className="ctrl-stat">
          <div className="cs-k">usage</div>
          <div className="ctrl-bars">{bars.map((h, i) => <span className="ctrl-bar" key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
        <div className="ctrl-stat">
          <div className="cs-k">ingestion</div>
          <div className="ctrl-health"><span className="ctrl-dot ok" />healthy</div>
        </div>
        <div className="ctrl-stat">
          <div className="cs-k">requests</div>
          <div className="ctrl-big">12,481 <small>today</small></div>
        </div>
      </div>
      <div className="ctrl-cols">
        <div className="ctrl-panel">
          <div className="cs-k">members · 24 · roles</div>
          {[['admin', 3], ['editor', 9], ['viewer', 12]].map(([r, n]) => (
            <div className="ctrl-mrow" key={r}><span>{r}</span><span className="ctrl-n">{n}</span></div>
          ))}
        </div>
        <div className="ctrl-panel">
          <div className="cs-k">API keys · 6 scoped</div>
          {['sk·live·finance', 'sk·live·sales', 'sk·live·ops'].map((k) => (
            <div className="ctrl-mrow key" key={k}><span>{k}</span><span className="ctrl-rev">revoke</span></div>
          ))}
        </div>
      </div>
      <div className="ctrl-log">
        {log.map((row) => (
          <div className="ctrl-logrow" key={row[0]}>
            <span className="cl-t">{row[0]}</span>
            <span className="cl-who">{row[1]}</span>
            <span className="cl-act">{row[2]}</span>
            <span className="cl-res">{row[3]}</span>
            <span className="cl-src">{row[4]}</span>
            <span className="cl-ok"><span className="ctrl-dot ok" />{row[5]}</span>
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
