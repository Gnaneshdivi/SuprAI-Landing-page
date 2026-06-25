import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import BrandImg from '../components/BrandImg.jsx'
import { DEMO_URL } from '../components/Layout.jsx'
import HeroScene from '../components/HeroScene.jsx'
import {
  SecMark, HeroDemoCard, SlackThread, ScenarioSwitcher,
  RoleAnswers, ControlDashboard, CompareGrid,
} from '../components/v3art.jsx'

const ICON = {
  store: <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
  sync: <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 3v5h-5" /></svg>,
  entity: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 10.8l7.4-3.6M8.3 13.2l7.4 3.6" /></svg>,
}

const TICON = {
  shield: <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  cloud: <svg viewBox="0 0 24 24"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 18z" /></svg>,
  key: <svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" /><path d="M11 12l8-8M16 4l3 3M14 6l2 2" /></svg>,
  lock: <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
  eye: <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>,
  user: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6 1.6 0 3.1.3 4.3.9" /><path d="M16 18l2 2 3.5-3.5" /></svg>,
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
      {/* ═══ HERO — centered copy + animated product scene below ═══ */}
      <header className="hero hero-centered">
        <div className="wrap">
          <Reveal className="hero-copy cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>One shared AI for your whole company</div>
            <h1>The operating layer for <span className="gt">enterprise AI.</span></h1>
            <p className="sub">Other AI gives each person an assistant. SuprAI gives your company <b>one shared AI</b> that knows your tools, your context, and your org — and executes across all of it, governed centrally, audited at every step.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            </div>
          </Reveal>
        </div>
        <div className="wrap hero-scene-wrap">
          <Reveal as="div" className="hero-scene">
            <HeroScene />
          </Reveal>
          <Reveal as="div" className="hero-scene-fallback" d={1}><HeroDemoCard /></Reveal>
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
            <Reveal as="div" className="op-card op-statement" style={{ gridArea: 'c90' }} d={1}>
              <div className="op-headline">Unified layer.<br /><span className="muted2">Not 20 detached subscriptions.</span></div>
              <p className="op-body">Every tool your team uses — connected, synced, and operating as one. No more switching tabs, re-explaining context, or paying for AI that only knows half the picture.</p>
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
          <Reveal><ScenarioSwitcher /></Reveal>
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
              <h3>Hand off the work your team repeats.</h3>
              <p>Build a named agent once — it runs on a schedule or a trigger, in the background, and reports what it did.</p>
              <div className="bc-visual">
                <div className="auto-head"><span className="auto-name"><span className="bdot" />Monday Numbers</span><span className="auto-badge">SCHEDULE · Mon 6 AM</span></div>
                {['Reads spend & pipeline across 9 tools', 'Compares to last week, flags what moved', 'Posts the brief to #leadership'].map((s) => (
                  <div className="auto-step" key={s}><span className="auto-tick">✓</span>{s}</div>
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

      {/* ═══ ENTERPRISE TRUST BAND ═══ */}
      <section className="section full">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>Enterprise-grade</div>
            <h2 className="xl">Secure, governed, and yours.</h2>
          </Reveal>
          <div className="trustcards">
            {[
              [TICON.shield, 'SOC 2 Type II', 'independent audit — in progress'],
              [TICON.cloud, 'Data residency', 'your data stays in your cloud'],
              [TICON.key, 'BYOK · BYOC', 'your keys, your cloud account'],
              [TICON.lock, 'SSO / SAML / SCIM', 'org-wide access by role'],
              [TICON.eye, 'Full audit trail', 'every answer & action on record'],
              [TICON.user, 'Permission-aware', 'people see only what they’re cleared to'],
            ].map(([ic, t, d]) => (
              <Reveal as="div" className="trustcard" key={t}>
                <span className="trustcard-ic">{ic}</span>
                <div><b>{t}</b><span>{d}</span></div>
              </Reveal>
            ))}
          </div>
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
