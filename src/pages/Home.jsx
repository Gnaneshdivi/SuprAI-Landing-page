import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import BrandImg from '../components/BrandImg.jsx'
import { DEMO_URL } from '../components/Layout.jsx'
import {
  SecMark, HeroDemoCard, SlackThread, ScenarioTiles,
  AutomateTimeline, RoleAnswers, ControlDashboard, CompareGrid,
} from '../components/v3art.jsx'

const ICON = {
  store: <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
  sync: <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 3v5h-5" /></svg>,
  entity: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" /></svg>,
}

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

const useCases = [
  ['Operations', 'Onboard a new hire across Slack, Google, Notion and Zendesk — in one message.'],
  ['Sales', 'Three deals went quiet this week. SuprAI spotted them and drafted the nudges. You review and send.'],
  ['Customer success', 'It catches a customer about to churn — before they leave.'],
  ['Finance', 'Close the month without the copy-paste between tools.'],
  ['Leadership', 'A Monday brief from five tools, ready before you ask.'],
  ['Support', 'The full customer story — orders, tickets and billing — in one answer.'],
  ['IT / Security', 'Reset someone’s access the moment they leave.'],
  ['Anywhere', 'Turn a Slack thread into a tracked task.'],
]

const faqs = [
  ['How fast to value?', 'Connect two apps and put your first agent to work in one afternoon. Most teams are live in days.'],
  ['How is it cheaper?', 'It reads your company’s context once and reuses it, instead of paying for a separate AI seat per person.'],
  ['Can we use our own models / cloud?', 'Yes — bring your own model keys (BYOK) and deploy in your own cloud (BYOC). Your keys, your cloud.'],
  ['How is it controlled?', 'Org-wide access controls, roles, and a full activity log — everything on the record, from one console.'],
  ['Which apps?', '100+ today — your everyday apps, your databases and files, even the older systems without an easy way in.'],
  ['Does it replace the AI we use?', 'No — it powers GPT, Claude or any model with your apps, your context, and the power to act.'],
]

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <header className="hero">
        <div className="wrap hero-split">
          <Reveal className="hero-copy">
            <div className="kicker">One shared AI for your whole company</div>
            <h1>The operating layer for <span className="gt">enterprise AI.</span></h1>
            <p className="sub">Other AI gives each person an assistant. SuprAI gives your company <b>one shared AI</b> that knows your tools, your context, and your org — and executes across all of it, governed centrally, audited at every step.</p>
            <p className="hero-time">Teams reclaim <b>6–10 hours a week</b> they used to spend switching tools and chasing answers.</p>
            <div className="herostat">
              <span>saves your team <b>hours, not clicks</b></span>
              <span><b>AI workforce</b> in minutes</span>
              <span>always on, <b>always synced</b></span>
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <a className="btn btn-ghost" href="#ask">Watch a 2-min demo →</a>
            </div>
            <a className="hero-sec" href="#control">Explore SuprAI security →</a>
          </Reveal>
          <Reveal as="div" className="hero-demo-wrap" d={1}><HeroDemoCard /></Reveal>
        </div>
      </header>

      {/* ═══ PROOF BAR ═══ */}
      <section className="logos">
        <div className="wrap">
          <p>Built with teams in commerce &amp; ops who want to run like a bigger one</p>
          <div className="proof-chips">
            <span className="cat-pill">100+ apps &amp; data sources</span>
            <span className="cat-pill">Live in days</span>
            <span className="cat-pill">~8 hrs/week saved per teammate</span>
          </div>
          <div className="intg" style={{ marginTop: 30 }}>
            <div className="intg-row a">{[...marqueeA, ...marqueeA].map((s, i) => <div className="intg-tile" key={'a' + i}><BrandImg slug={s} /></div>)}</div>
            <div className="intg-row b">{[...marqueeB, ...marqueeB].map((s, i) => <div className="intg-tile" key={'b' + i}><BrandImg slug={s} /></div>)}</div>
          </div>
        </div>
      </section>

      {/* ═══ THE OPERATOR (problem + stats bento) ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <h2 className="xl">Your team has tools.<br />What it doesn’t have is an <span className="gt">operator.</span></h2>
            <p className="lead">Your team runs 8–15 different platforms for operations, sales, finance, and customer work. Every tool has data. None of them talk to each other. SuprAI sits across all of them — planning, executing, and reporting from a single command.</p>
          </Reveal>
          <div className="opbento">
            <Reveal as="div" className="op-quote" style={{ gridArea: 'img' }}>
              <span className="op-qmark">“</span>
              <p>Your team stops searching.<br />It starts deciding.</p>
              <span className="op-qby">— SuprAI</span>
            </Reveal>
            <Reveal as="div" className="op-card" style={{ gridArea: 'c70' }} d={1}>
              <div className="op-stat">70%</div>
              <div className="op-label">Time Lost to Coordination</div>
              <p className="op-body">Most teams spend the majority of their day moving information between tools — not doing the actual work. SuprAI handles the movement so your team handles the decisions.</p>
            </Reveal>
            <Reveal as="div" className="op-card orange" style={{ gridArea: 'c0' }} d={2}>
              <div className="op-stat">0</div>
              <div className="op-label">Manual Logins Required</div>
              <p className="op-body">Run tasks, pull reports, and act across your entire stack from Slack or Teams — without opening a single dashboard.</p>
            </Reveal>
            <Reveal as="div" className="op-card" style={{ gridArea: 'c90' }} d={1}>
              <div className="op-stat">90%</div>
              <div className="op-label">Lower Cost Than Per-Seat AI</div>
              <p className="op-body">Give every employee their own AI subscription and the bill scales with headcount. SuprAI reads context once and reuses it across your whole team — so it gets cheaper as you grow, not more expensive.</p>
            </Reveal>
            <Reveal as="div" className="op-card dark" style={{ gridArea: 'c50' }} d={2}>
              <div className="op-stat">50+</div>
              <div className="op-label">Platforms. One Agent.</div>
              <div className="op-logos">{['shopify', 'razorpay', 'whatsapp', 'meta', 'stripe', 'zendesk'].map((s) => <BrandImg key={s} slug={s} />)}</div>
              <p className="op-body">SuprAI connects your existing stack — Shopify, Razorpay, MoEngage, CleverTap, WhatsApp, and more — and executes across all of them from a single command.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHERE IT LIVES ═══ */}
      <section className="section lined" id="where">
        <div className="wrap">
          <SecMark label="Where it lives" />
          <div className="grid-2 align">
            <Reveal>
              <h2 className="xl">It lives where your team already works.</h2>
              <p className="lead mt18">No new app to open. @mention SuprAI in Slack, Microsoft Teams, or WhatsApp — it answers and gets the work done right there, in the thread.</p>
              <Bullets items={[
                ['One message, done', 'ask in plain words; it carries out every step and reports back.'],
                ['Where your team is', 'Slack, Microsoft Teams, WhatsApp — or the AI you already use.'],
              ]} />
            </Reveal>
            <Reveal d={1}><SlackThread /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOUR TEAM ASKS — the wow moment ═══ */}
      <section className="section full" id="ask">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>What your team asks</div>
            <h2 className="xl">See what your team would actually ask.</h2>
            <p className="lead">Your team asked. SuprAI already has the answer — pulled from the tools they already use.</p>
          </Reveal>
          <Reveal><ScenarioTiles /></Reveal>
        </div>
      </section>

      {/* ═══ ASK / ACT / AUTOMATE / CONTEXT ═══ */}
      <section className="section band-warm full">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>What it does</div>
            <h2 className="xl">Everything your company’s AI needs, in one place.</h2>
          </Reveal>
          <div className="bento4">
            <Reveal as="div" className="bento-card accent" d={1}>
              <div className="bc-eyebrow">Ask</div>
              <h3>Ask anything across your apps.</h3>
              <p>Real numbers and facts, joined across every tool — with the sources behind them.</p>
              <div className="bc-visual">
                <div className="askbar"><span className="ph">What did we spend on tools last month?</span><span className="cur" /><span className="go">↑</span></div>
              </div>
            </Reveal>
            <Reveal as="div" className="bento-card accent" d={2}>
              <div className="bc-eyebrow">Act</div>
              <h3>It gets the work done, not just the answer.</h3>
              <p>SuprAI drafts, confirms, then acts across your tools — and never without your say-so.</p>
              <div className="bc-visual" style={{ display: 'flex', gap: 9, flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="tm-act" style={{ cursor: 'default' }}><span className="pl">▶</span> Send it</span>
                <span className="tm-chip"><BrandImg slug="gmail" />Gmail</span>
                <span className="tm-chip"><BrandImg slug="hubspot" />HubSpot</span>
              </div>
            </Reveal>
            <Reveal as="div" className="bento-card" d={1}>
              <div className="bc-eyebrow">Automate</div>
              <h3>It runs while you’re in meetings.</h3>
              <p>Set a trigger, define the outcome — SuprAI handles the steps in the background and reports what it did.</p>
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
              <p>One shared memory — the same customer, order or person, resolved across every tool and kept current.</p>
              <div className="bc-visual" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['google', 'slack', 'hubspot', 'stripe', 'notion', 'zendesk'].map((s) => (
                  <span className="ctx-chip" key={s} style={{ padding: 7 }}><BrandImg slug={s} /></span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ AUTOMATE TIMELINE ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="Automate" />
          <Reveal className="sec-head">
            <h2 className="xl">Hand off the work your team repeats.</h2>
            <p className="lead">Build a named agent once. It runs on a schedule or a trigger, in the background — and tells you what it did.</p>
          </Reveal>
          <Reveal><AutomateTimeline /></Reveal>
        </div>
      </section>

      {/* ═══ ROLE-AWARE ═══ */}
      <section className="section band-warm lined">
        <div className="wrap">
          <SecMark label="Role-aware" />
          <Reveal className="sec-head">
            <h2 className="xl">It answers like it knows your org chart.</h2>
            <p className="lead">Same question, different answer — shaped by who’s asking and what they’re allowed to see.</p>
          </Reveal>
          <Reveal><RoleAnswers /></Reveal>
        </div>
      </section>

      {/* ═══ UNIFIED CONTEXT ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="It just knows your company" />
          <Reveal as="div" className="secG">
            <div className="secG-list">
              <div className="secG-item">
                <span className="si">{ICON.store}</span>
                <div><h4>One memory, always current</h4><p>Everything your teams know, in one place — behind Slack, WhatsApp, or any AI.</p></div>
              </div>
              <div className="secG-item">
                <span className="si">{ICON.sync}</span>
                <div><h4>Synced automatically</h4><p>The moment something changes in a tool, SuprAI knows. No manual imports, no stale answers.</p></div>
              </div>
              <div className="secG-item">
                <span className="si">{ICON.entity}</span>
                <div><h4>It connects the dots</h4><p>The same customer, account and order, recognised across every tool — and it gets sharper every week.</p></div>
              </div>
            </div>
            <div className="secG-right">
              <h2>One context for your whole company. <span className="muted2">It just knows.</span></h2>
              <div className="ctxlogos">
                {['gmail', 'hubspot', 'stripe', 'notion', 'slack', 'zendesk', 'shopify', 'quickbooks'].map((s) => (
                  <span className="ctxlogo" key={s}><BrandImg slug={s} /><span className="ctxlogo-dot" /></span>
                ))}
              </div>
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">See how context works →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">What your company can hand off</div>
            <h2 className="xl">Real jobs, off your team’s plate.</h2>
          </Reveal>
          <div className="handoff mt">
            {useCases.map(([k, v], i) => (
              <Reveal as="div" className="ho-card" key={k} d={(i % 4) + 1}>
                <div className="ho-k">{k}</div>
                <p>{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROACTIVE ═══ */}
      <section className="statement lined">
        <div className="wrap">
          <SecMark label="Coming soon" />
          <Reveal>
            <h2>It notices things <span className="muted2">before you ask.</span></h2>
            <p>SuprAI flagged that three customers hadn’t received their orders. Your support lead didn’t ask — it just knew. <span className="soon">Proactive alerts · coming soon</span></p>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS (cost) ═══ */}
      <section className="statement lined">
        <div className="wrap">
          <SecMark label="Why it matters" />
          <Reveal>
            <h2>Turn your company’s apps into action —<br /><span className="muted2">without a runaway AI bill.</span></h2>
            <p>Give everyone their own AI and the bill climbs with every seat. SuprAI reads your context once and reuses it across the whole company — so it gets cheaper per answer as you grow, not more expensive.</p>
            <div className="costlist">
              {[
                ['Hours back every week', 'no more switching tools and chasing answers across tabs.'],
                ['Less waste', 'one system, not a dozen per-person subscriptions.'],
                ['Lower cost per answer', 'context reused, not re-bought for every seat.'],
              ].map(([h, p]) => (
                <div className="costrow-item" key={h}><b>{h}</b><span>{p}</span></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ TRUST RIBBON ═══ */}
      <section className="section full trust-sec">
        <div className="wrap cc">
          <Reveal>
            <div className="trust-ribbon">
              <span>multi-region</span><span>BYOK</span><span>BYOC</span><span>SOC 2 Type II — in progress</span><span>data stays in your cloud</span>
            </div>
            <a className="tlink" href="#control" style={{ margin: '18px auto 0' }}>Explore SuprAI security →</a>
          </Reveal>
        </div>
      </section>

      {/* ═══ ENTERPRISE CONTROL ═══ */}
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
                ['Org-wide access', 'single sign-on and access by role across the company.'],
                ['Everyone sees only their own', 'people only ever see what they’re cleared to.'],
                ['Everything on the record', 'usage, activity and a full audit trail — one console.'],
              ]} />
              <blockquote className="pullquote">“We cut our Monday ops review from 45 minutes to 10. SuprAI just has the brief ready.”<span>— Head of Ops, D2C brand</span></blockquote>
            </Reveal>
            <Reveal d={1}><ControlDashboard /></Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CONNECTORS STRIP ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>Connectors</div>
            <h2 className="xl">100+ apps. Zero manual syncing.</h2>
            <p className="lead">Connect your apps once. SuprAI keeps everything in sync and brings the real actions each tool can take.</p>
          </Reveal>
          <div className="conn-actions">
            {['Send the welcome email', 'Issue a refund', 'Move a deal', 'Reset access', 'Post the weekly numbers', 'Draft the follow-up'].map((a) => (
              <span className="conn-action" key={a}>{a}</span>
            ))}
          </div>
          <div className="intg" style={{ marginTop: 34 }}>
            <div className="intg-row a">{[...marqueeB, ...marqueeB].map((s, i) => <div className="intg-tile" key={'c' + i}><BrandImg slug={s} /></div>)}</div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARE ═══ */}
      <section className="section band-warm full">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>Compare</div>
            <h2 className="xl">One operating system for the company — not one assistant per person.</h2>
          </Reveal>
          <Reveal><CompareGrid /></Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section lined">
        <div className="wrap">
          <SecMark label="FAQ" />
          <h2 className="xl mb20">Questions, answered.</h2>
          {faqs.map(([q, a]) => (
            <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="endcta" id="book">
        <div className="wrap">
          <SecMark label="Get started" />
          <Reveal className="final-card">
            <h2>Connect two apps. Put your first agent to work.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>In one afternoon — no code, no setup project.</p>
            <div className="steps3">
              <div className="step3"><span className="s3-n">1</span>Connect your tools <em>· 2 min</em></div>
              <div className="step3"><span className="s3-n">2</span>Define what you want <em>· 5 min</em></div>
              <div className="step3"><span className="s3-n">3</span>Your agent runs <em>· 24/7</em></div>
            </div>
            <div className="hero-cta cc" style={{ marginTop: 26 }}>
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            </div>
            <div className="trust-ribbon mini">
              <span>SOC 2 — in progress</span><span>BYOK · BYOC</span><span>data stays in your cloud</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
