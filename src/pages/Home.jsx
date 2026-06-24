import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import BrandImg from '../components/BrandImg.jsx'
import AppsActions from '../components/AppsActions.jsx'
import { DEMO_URL } from '../components/Layout.jsx'
import {
  SecMark, GridArt, Waterline, ChatSurfaces,
  WorkforceGrid, ControlDashboard, ManagedVault, ModelGateway,
} from '../components/v3art.jsx'

const ICON = {
  store: <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
  sync: <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 3v5h-5" /></svg>,
  entity: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" /></svg>,
}

/* small reusable bullet list (outcome-led headline above, proof in bullets) */
function Bullets({ items }) {
  return (
    <ul className="lead list-plain mt18">
      {items.map(([b, rest]) => (
        <li key={b}><b>{b}</b>{rest ? ` — ${rest}` : ''}</li>
      ))}
    </ul>
  )
}

const marqueeA = ['slack', 'google', 'gmail', 'hubspot', 'salesforce', 'stripe', 'notion', 'zendesk', 'shopify', 'github', 'intercom', 'klaviyo']
const marqueeB = ['snowflake', 'postgresql', 'airtable', 'quickbooks', 'whatsapp', 'anthropic', 'openai', 'googlegemini', 'figma', 'asana', 'dropbox', 'microsoftteams']

const handoffs = [
  ['Operations', 'Onboard a new hire across every tool, in one message.'],
  ['Sales', 'Chase the deals that went quiet, and draft the nudge.'],
  ['Customer success', 'Catch a churning customer before they leave.'],
  ['Finance', 'Close the month without the copy-paste.'],
  ['Leadership', 'Get a Monday brief from five tools, on its own.'],
  ['Support', 'Answer with the full customer story across orders, tickets and billing.'],
  ['IT / Security', 'Reset access the moment someone leaves.'],
  ['Anywhere', 'Turn a Slack thread into a tracked task.'],
]

const departments = [
  ['Operations', '“Set up the new hire everywhere and send the welcome.”', ['google', 'slack']],
  ['Sales', '“Which deals went quiet — and nudge them.”', ['hubspot', 'gmail']],
  ['Finance', '“What did we spend on tools last month?”', ['stripe', 'quickbooks']],
  ['Support', '“Why is this customer upset?”', ['zendesk', 'shopify', 'stripe']],
]

const scale = [
  ['01', 'Globally distributed', 'multi-region, elastic autoscaling with your workload.'],
  ['02', 'Bring your own keys', 'BYOK — your own model keys and provider accounts.'],
  ['03', 'Bring your own cloud', 'BYOC — deploy in your own VPC / cloud account.'],
  ['04', 'Data residency', 'encryption in transit & at rest; your data stays in your boundary.'],
]

const comparisons = [
  ['ChatGPT Enterprise', 'chatgpt-enterprise', 'An assistant per person. SuprAI is one operating system, with shared context, that acts.'],
  ['Microsoft 365 Copilot', 'microsoft-365-copilot', 'Strong inside Microsoft. SuprAI is model-agnostic and connects every app you run.'],
  ['Claude Enterprise', 'claude-enterprise', 'A powerful model. SuprAI powers it — with your apps, your context, your actions.'],
]

const faqs = [
  ['How fast to value?', 'Build your first agent in minutes; most teams are live in days.'],
  ['How is it cheaper?', 'It reuses context instead of re-sending it — about 30% fewer tokens.'],
  ['Can we use our own models / cloud?', 'Yes — BYOK and BYOC. Your keys, your cloud.'],
  ['How is it controlled?', 'Org-wide access controls, roles, scoped keys, and full request logs from one console.'],
  ['Which apps?', '100+ today; any REST / GraphQL / webhook / MCP source, even non-API ones.'],
  ['Does it replace the AI we use?', 'No — it powers GPT, Claude or any model with your apps, your context, and the power to act.'],
]

export default function Home() {
  return (
    <>
      {/* ═══ 02 · HERO (full-width, boxed product panel) ═══ */}
      <header className="hero">
        <div className="wrap hero-split">
          <Reveal className="hero-copy">
            <div className="kicker">The AI operating system</div>
            <h1>The AI operating system for your <span className="gt">company.</span></h1>
            <p className="sub">The connective layer over every tool your company runs: one synced context, one set of controls, and AI that can act across all of it.</p>
            <div className="herostat">
              <span><b>30%</b> fewer tokens</span>
              <span><b>AI workforce</b> in minutes</span>
              <span>works <b>24/7</b></span>
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <a className="btn btn-ghost" href="#grid">See it in action →</a>
            </div>
          </Reveal>
          <Reveal as="div" className="hero-panel" d={1}>
            <div className="hp-q"><span className="hp-tag">Q</span>What did we spend on tools last month?</div>
            <div className="hp-a">
              <span className="hp-tag a">A</span>
              <div>
                <div className="hp-num"><em>$48,210</em> across 23 tools <span className="hp-up">+12%</span></div>
                <div className="hp-src">
                  <span className="hp-label">sources</span>
                  <span className="hp-chip"><BrandImg slug="stripe" />Stripe</span>
                  <span className="hp-chip"><BrandImg slug="quickbooks" />QuickBooks</span>
                  <span className="hp-chip">+14</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ═══ 03 · PROOF BAR (full-width) ═══ */}
      <section className="logos">
        <div className="wrap">
          <p>Built with teams in commerce &amp; ops who want to run like a bigger one</p>
          <div className="proof-chips">
            <span className="cat-pill">100+ apps &amp; data sources</span>
            <span className="cat-pill">Days to go live</span>
            <span className="cat-pill">shared context</span>
          </div>
          <div className="intg" style={{ marginTop: 30 }}>
            <div className="intg-row a">{[...marqueeA, ...marqueeA].map((s, i) => <div className="intg-tile" key={'a' + i}><BrandImg slug={s} /></div>)}</div>
            <div className="intg-row b">{[...marqueeB, ...marqueeB].map((s, i) => <div className="intg-tile" key={'b' + i}><BrandImg slug={s} /></div>)}</div>
          </div>
        </div>
      </section>

      {/* ═══ 04 · THE APPLICATION GRID (railed — blends in) ═══ */}
      <section className="section lined" id="grid">
        <div className="wrap">
          <SecMark label="The application grid" />
          <div className="grid-2 align">
            <Reveal>
              <h2 className="xl">Every tool you run — in one grid.</h2>
              <p className="lead mt18">One operating system, where your teams and AI work together. <b>Every team, every tool — one interface, one control center.</b></p>
              <p className="lead mt18">Your company&rsquo;s memory isn&rsquo;t in one place — it lives scattered across every tool. Connect them to the grid, and we sync it into one, so your AI and your team act as one.</p>
              <Bullets items={[
                ['All your tools, one grid', 'connect what every team already uses; REST, GraphQL, webhooks, MCP.'],
                ['Scattered memory, synced into one', 'real-time sync (CDC) into a unified context store; semantic + structured memory.'],
                ['Team controls on top', 'RBAC: roles, scopes, least-privilege by default.'],
                ['Typed actions built in', 'every connector exposes typed, role-scoped actions.'],
              ]} />
            </Reveal>
            <Reveal d={1}><GridArt /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 05 · WHAT IT DOES — bento (full-width, boxed) ═══ */}
      <section className="section band-warm full">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>What it does</div>
            <h2 className="xl">Everything your company&rsquo;s AI needs, in one place.</h2>
          </Reveal>
          <div className="bento4">
            <Reveal as="div" className="bento-card accent" d={1}>
              <div className="bc-eyebrow">Ask</div>
              <h3>Ask anything across your apps.</h3>
              <p>Answers joined across sources with permission-aware retrieval — real numbers and facts, with the sources behind them.</p>
              <div className="bc-visual">
                <div className="askbar"><span className="ph">What did we spend on tools last month?</span><span className="cur" /><span className="go">↑</span></div>
              </div>
            </Reveal>
            <Reveal as="div" className="bento-card accent" d={2}>
              <div className="bc-eyebrow">Act</div>
              <h3>It gets the work done, not just the answer.</h3>
              <p>Typed, role-scoped, reversible actions across your tools — and never without your say-so.</p>
              <div className="bc-visual" style={{ display: 'flex', gap: 9, flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="tm-act" style={{ cursor: 'default' }}><span className="pl">▶</span> Send it</span>
                <span className="tm-chip"><BrandImg slug="gmail" />Gmail</span>
                <span className="tm-chip"><BrandImg slug="hubspot" />HubSpot</span>
              </div>
            </Reveal>
            <Reveal as="div" className="bento-card" d={1}>
              <div className="bc-eyebrow">Automate</div>
              <h3>Automate what repeats.</h3>
              <p>Durable, scheduled and event-driven agents that run in the background, retry on failure, and report back.</p>
              <div className="bc-visual">
                {['Trigger', 'Read', 'Think', 'Act'].map((s) => (
                  <div className="agent-step done" key={s} style={{ padding: '4px 0' }}>
                    <div className="rail"><div className="node" style={{ width: 20, height: 20 }}>✓</div><div className="line" /></div>
                    <div className="meta"><div className="t" style={{ fontSize: 13 }}>{s}</div></div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal as="div" className="bento-card" d={2}>
              <div className="bc-eyebrow">Context</div>
              <h3>It just knows your company.</h3>
              <p>One unified context — cross-source identity resolved, kept current across every app.</p>
              <div className="bc-visual" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['google', 'slack', 'hubspot', 'stripe', 'notion', 'zendesk'].map((s) => (
                  <span className="ctx-chip" key={s} style={{ padding: 7 }}><BrandImg slug={s} /></span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 06 · PRODUCTION-GRADE INFRASTRUCTURE (railed — blends in) ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="The pipeline, handled" />
          <div className="grid-2 align">
            <Reveal d={1} className="order-art"><Waterline /></Reveal>
            <Reveal>
              <h2 className="xl">Production-grade AI infrastructure, out of the box.</h2>
              <p className="lead mt18">Connecting tools, syncing memory, indexing data, setting up auth, building agents, apps and the interface — that&rsquo;s a hard engineering pipeline most teams can&rsquo;t staff. An operating system hides all of it.</p>
              <Bullets items={[
                ['Memory & data indexing', 'ingestion, indexing and retrieval kept in sync; you never wire an ETL or a vector store.'],
                ['Connectors & managed auth', 'connectors, OAuth brokering and token rotation, built and maintained for you.'],
                ['Agents, apps & the interface', 'ready to use, not to assemble.'],
                ['Like GitHub or AWS', 'you use the pipeline; you don’t build your own.'],
              ]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 07 · UNIFIED CONTEXT (railed — separators) ═══ */}
      <section className="section band-warm lined">
        <div className="wrap">
          <SecMark label="Unified context" />
          <Reveal as="div" className="secG">
            <div className="secG-list">
              <div className="secG-item">
                <span className="si">{ICON.store}</span>
                <div><h4>One unified context store</h4><p>Behind Slack, WhatsApp, or any AI — not a fresh start each time.</p></div>
              </div>
              <div className="secG-item">
                <span className="si">{ICON.sync}</span>
                <div><h4>Always current</h4><p>Incremental CDC sync with dedup and freshness SLAs; no manual imports, no stale exports.</p></div>
              </div>
              <div className="secG-item">
                <span className="si">{ICON.entity}</span>
                <div><h4>Entity-resolved &amp; continually learned</h4><p>People, accounts and orders resolved across tools; the context compounds every week.</p></div>
              </div>
            </div>
            <div className="secG-right">
              <h2>One context for your whole company. <span className="muted2">It just knows.</span></h2>
              <p className="lead" style={{ marginTop: 16 }}>SuprAI builds one shared understanding of how your business works — from every app you connect — and keeps it current.</p>
              <a className="btn btn-primary" href="#book">See how context works →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 08 · RIGHT WHERE YOUR TEAM WORKS (full-width, boxed) ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Where your team works</div>
            <h2 className="xl">In the tools your team already lives in.</h2>
            <p className="lead">Connected to your team&rsquo;s tools — Slack, Microsoft Teams, WhatsApp. @mention it or message it, and it answers and acts right there. No new app to open.</p>
          </Reveal>
          <Reveal><ChatSurfaces /></Reveal>
        </div>
      </section>

      {/* ═══ 09 · AI WORKFORCE (full-width, boxed) ═══ */}
      <section className="section band-warm full">
        <div className="wrap">
          <div className="grid-2 align">
            <Reveal>
              <div className="kicker">AI workforce</div>
              <h2 className="xl">Your AI workforce. Built in minutes. Works 24/7.</h2>
              <p className="lead mt18">Your people move up to strategy and planning — your AI workforce handles the execution.</p>
              <Bullets items={[
                ['People plan, AI executes', 'your team decides; the workforce carries it out.'],
                ['No new tool, no knowledge transfer', 'it works where your team already does, and already knows the business.'],
                ['Built in minutes', 'hire an agent for any job, in minutes, not months.'],
                ['Works 24/7, shared', 'it runs while you sleep, and the whole team can use it.'],
              ]} />
            </Reveal>
            <Reveal d={1}><WorkforceGrid /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 10 · WHAT YOUR COMPANY CAN HAND OFF (full-width, boxed) ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Possibilities</div>
            <h2 className="xl">What your company can hand off.</h2>
          </Reveal>
          <div className="handoff mt">
            {handoffs.map(([k, v], i) => (
              <Reveal as="div" className="ho-card" key={k} d={(i % 4) + 1}>
                <div className="ho-k">{k}</div>
                <p>{v}</p>
              </Reveal>
            ))}
          </div>
          <Reveal><a className="tlink" href="#book">See all use cases →</a></Reveal>
        </div>
      </section>

      {/* ═══ 11 · ORGANIZATION-WIDE CONTROL (railed — blends in) ═══ */}
      <section className="section band-warm lined" id="control">
        <div className="wrap">
          <SecMark label="Enterprise control" />
          <Reveal className="sec-head">
            <blockquote className="bigquote">Built for enterprise from day one. AI only works in a company when answers are secure, explainable, and permission-aware.</blockquote>
            <h2 className="xl" style={{ marginTop: 22 }}>One control center for the whole organization.</h2>
          </Reveal>
          <div className="grid-2 align" style={{ marginTop: 38 }}>
            <Reveal>
              <Bullets items={[
                ['Org-wide auth & access', 'SSO / SAML / SCIM and organization-wide access controls (RBAC).'],
                ['Roles & scoped keys', 'multi-member orgs, granular roles, and scoped API keys.'],
                ['A control dashboard', 'usage analytics, ingestion monitoring, request logs and execution traces.'],
                ['One console', 'key management, audit and governance.'],
              ]} />
              <a className="tlink" href="#book">Explore SuprAI security →</a>
            </Reveal>
            <Reveal d={1}><ControlDashboard /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 12 · COST & EFFICIENCY (railed — separator list) ═══ */}
      <section className="statement lined">
        <div className="wrap">
          <SecMark label="Why it matters" />
          <Reveal>
            <h2>Turn your company&rsquo;s apps into action —<br /><span className="muted2">without a runaway AI bill.</span></h2>
            <p>Give everyone their own AI and the bill climbs with every seat. SuprAI reads context once and reuses it across the whole company — so it gets cheaper per answer as you grow, not more expensive.</p>
            <div className="costlist">
              {[
                ['30% fewer tokens', 'context is reused, not re-sent on every request.'],
                ['Less waste', 'one system, not a dozen per-person subscriptions.'],
                ['Lower cost per answer', 'more value from every ask, as the whole team comes on.'],
              ].map(([h, p]) => (
                <div className="costrow-item" key={h}><b>{h}</b><span>{p}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 13 · MANAGED AUTH (railed — blends in) ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="Managed auth" />
          <div className="grid-2 align">
            <Reveal d={1} className="order-art"><ManagedVault /></Reveal>
            <Reveal>
              <h2 className="xl">Connect once. Nobody ever sees a key.</h2>
              <p className="lead mt18">Set up a connection once and share it with the right people. They get to work; the keys stay locked down and never leave SuprAI.</p>
              <Bullets items={[
                ['Fully managed OAuth 2.0', 'auth flows, token refresh and rotation handled; no auth code to write.'],
                ['Delegated, least-privilege access', 'granular scopes, encrypted token vault, per role.'],
                ['Revoke & rotate any time', 'per person, per app, per scope.'],
              ]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 14 · ROLE-AWARE (full-width, boxed) ═══ */}
      <section className="section band-warm full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Role-aware</div>
            <h2 className="xl">It answers like it knows your org chart.</h2>
            <p className="lead">Every person gets answers shaped to their role — and never sees what they aren&rsquo;t cleared to see.</p>
          </Reveal>
          <div className="roles">
            {[
              ['Finance', 'budgets & spend, traceable to source'],
              ['Sales', 'pipeline — only the accounts this rep owns'],
              ['Ops', 'acts only on tools this role may touch'],
            ].map(([role, a], i) => (
              <Reveal as="div" className="role" key={role} d={i + 1}>
                <div className="role-top">
                  <span className="role-chip">{role}</span>
                  <span className="role-lock">🔒 scoped</span>
                </div>
                <div className="a" style={{ borderTop: 'none', paddingTop: 0 }}>{a}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 15 · AUTOMATE (railed — separators) ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="Automate" />
          <div className="grid-2 align">
            <Reveal>
              <h2 className="xl">Hand off the work your team repeats.</h2>
              <p className="lead mt18">Build a named agent once; it reports back what it did, and the whole team can reuse it.</p>
              <Bullets items={[
                ['Event-driven or scheduled', 'webhooks, cron schedules, or on-demand.'],
                ['Copilot or autopilot', 'human-in-the-loop gates on the sensitive steps; let the routine run.'],
                ['Durable & replayable', 'retries with backoff, idempotency, and full execution traces.'],
              ]} />
            </Reveal>
            <Reveal d={1}>
              <div className="triggers">
                {[
                  ['Monday Numbers', 'SCHEDULE', 'every Mon 6:00 AM'],
                  ['Enrich new lead', 'EVENT', 'new HubSpot contact'],
                  ['Deploy summary', 'WEBHOOK', '/deploy completes'],
                ].map(([name, kind, when]) => (
                  <div className="trig" key={name}>
                    <span className="trig-name">{name}</span>
                    <span className={`trig-kind ${kind.toLowerCase()}`}>{kind}</span>
                    <span className="trig-when">{when}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 16 · MODEL-AGNOSTIC (railed — blends in) ═══ */}
      <section className="section band-warm lined">
        <div className="wrap">
          <SecMark label="Model-agnostic · provider-agnostic" />
          <div className="grid-2 align">
            <Reveal d={1} className="order-art"><ModelGateway /></Reveal>
            <Reveal>
              <h2 className="xl">AI-agnostic by design.</h2>
              <p className="lead mt18">One gateway sits in front of every frontier LLM — so you route each request to the right model and never get locked in.</p>
              <Bullets items={[
                ['Provider-agnostic', 'any frontier LLM (OpenAI, Anthropic, Google, or open-weights), hot-swappable with zero rework.'],
                ['Intelligent model routing', 'each request routed by task, latency and cost, with automatic fallback / failover.'],
                ['BYOK', 'bring your own model keys and provider accounts; no lock-in.'],
                ['No wasted context', 'prompt caching and reuse send only what each request actually needs.'],
              ]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 17 · BUILT FOR SCALE (full-width, boxed) ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Scale & deployment</div>
            <h2 className="xl">Runs everywhere. Scales with your team.</h2>
          </Reveal>
          <div className="grid-4 mt">
            {scale.map(([num, h, p], i) => (
              <Reveal as="div" className="feat" key={h} d={(i % 4) + 1} style={{ minHeight: 188 }}>
                <div className="fnum"><span>{num}</span><span className="fn-i">/</span><span>{h}</span></div>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <p className="micro center" style={{ marginTop: 24 }}>globally distributed · elastic · BYOK · BYOC · your cloud, your keys</p>
        </div>
      </section>

      {/* ═══ 18 · CONNECTORS & ACTIONS (railed — blends in) ═══ */}
      <section className="section band-warm lined" id="connectors">
        <div className="wrap">
          <SecMark label="Connectors & actions" />
          <Reveal className="sec-head">
            <h2 className="xl">Connect your apps. Stay in sync.</h2>
            <p className="lead">Every connector you add brings the real actions it can take, and stays current automatically — no manual imports, no stale exports. If it has an API — REST, GraphQL, gRPC, webhooks or MCP — we connect it and keep it in sync with real-time CDC. Even non-API sources.</p>
          </Reveal>
          <Reveal><AppsActions /></Reveal>
        </div>
      </section>

      {/* ═══ 19 · BY DEPARTMENT (full-width, boxed) ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">For every team</div>
            <h2 className="xl">One operating system. Every team&rsquo;s job.</h2>
          </Reveal>
          <div className="grid-2 mt left">
            {departments.map(([k, q, apps], i) => (
              <Reveal as="div" className="card" key={k} d={(i % 2) + 1}>
                <div className="klabel">{k}</div>
                <h3 style={{ fontSize: 17 }}>{q}</h3>
                <div className="dept-apps">{apps.map((s) => <BrandImg key={s} slug={s} style={{ height: 18, opacity: .8 }} />)}</div>
              </Reveal>
            ))}
          </div>
          <p className="lead mt18"><b>Marketing / IT / HR</b> — add as we go; same engine, tuned playbooks.</p>
        </div>
      </section>

      {/* ═══ 20 · COMPARISON (full-width, boxed) ═══ */}
      <section className="section band-warm full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Compare</div>
            <h2 className="xl">One operating system for the company — not one assistant per person.</h2>
          </Reveal>
          <div className="grid-3 mt">
            {comparisons.map(([name, slug, blurb], i) => (
              <Reveal as={Link} className="sol" to={`/compare/${slug}`} key={slug} d={i + 1}>
                <div className="k">VS {name.toUpperCase()}</div>
                <p>{blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 21 · NUMBERS (full-width, boxed) ═══ */}
      <section className="section full">
        <div className="wrap">
          <div className="statrow" style={{ marginTop: 0 }}>
            {[
              ['30%', 'fewer tokens as the team scales'],
              ['24/7', 'your AI workforce, always on'],
              ['100+', 'apps connected through one setup'],
              ['1', 'operating system for the whole company'],
            ].map(([n, l], i) => (
              <Reveal as="div" className="statbox" key={l} d={i + 1}>
                <div className="n"><em>{n}</em></div>
                <div className="l">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 22 · FAQ (railed — separators) ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="FAQ" />
          <h2 className="xl mb20">Questions, answered.</h2>
          {faqs.map(([q, a]) => (
            <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      {/* ═══ 23 · FINAL CTA ═══ */}
      <section className="endcta" id="book">
        <div className="wrap">
          <SecMark label="Get started" />
          <Reveal className="final-card">
            <h2>Give your company its AI operating system.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two apps and put your first agent to work — in minutes.</p>
            <div className="hero-cta cc" style={{ marginTop: 26 }}>
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            </div>
            <div className="pillrow">
              <span className="tag-pill">One synced context</span>
              <span className="tag-pill">Ask · Act · Automate</span>
              <span className="tag-pill">Permission-aware</span>
              <span className="tag-pill">Any model</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
