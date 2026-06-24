import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import AppsActions from '../components/AppsActions.jsx'
import HeroDemo from '../components/HeroDemo.jsx'
import BrandImg from '../components/BrandImg.jsx'

const ARR = <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
const ICON = {
  lock: <svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
  eye: <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>,
  shield: <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /></svg>,
}

const intgA = ['google', 'slack', 'gmail', 'hubspot', 'salesforce', 'stripe', 'notion', 'zendesk', 'shopify', 'github']
const intgB = ['intercom', 'klaviyo', 'snowflake', 'postgresql', 'airtable', 'googlesheets', 'quickbooks', 'whatsapp', 'anthropic', 'googlegemini']

const swaps = [
  ['An AI for each person', 'One operating system for the company'],
  ['It finds and chats', 'It answers, acts, and automates'],
  ['The same answer for everyone', 'Answers by role and team structure'],
  ['A bill that balloons per seat', 'More value per question as you scale'],
  ['A six-month rollout', 'Live in days'],
]

const teamCards = [
  ['OPERATIONS', '“Set up the new hire everywhere and send the welcome.”', 'Done in one message — account created, groups added, email drafted and sent.'],
  ['SALES', '“Which deals went quiet this week — and nudge them.”', 'It finds the at-risk accounts and drafts the right follow-up for each.'],
  ['FINANCE', '“What did we spend on tools last month?”', 'Real numbers, pulled live, traceable to the source they came from.'],
  ['SUPPORT', '“Why is this customer upset?”', 'The full story across orders, tickets and billing — and the fix, ready to send.'],
]

const comparisons = [
  ['ChatGPT Enterprise', 'chatgpt-enterprise', 'A great assistant per person. SuprAI is one system for the whole company — role-aware, and it acts.'],
  ['Microsoft 365 Copilot', 'microsoft-365-copilot', 'Strong inside Microsoft. SuprAI is model-neutral and connects every app you run, not just one suite.'],
  ['Claude Enterprise', 'claude-enterprise', 'A powerful model. SuprAI powers Claude — and any model — with your apps, your roles, and the power to act.'],
]

const faqs = [
  ['Do we need a data team?', 'No. Connect your apps and it works — most teams are live in days, not a six-month rollout.'],
  ['Is our data safe?', 'Yes. Permission-aware access, a full audit trail, and your data stays yours. Everyone only ever sees what their role allows.'],
  ['Does it answer differently per person?', 'Yes — by role and team structure. Finance, sales and ops each get what fits their job, and only what they’re cleared to see.'],
  ['What if an app isn’t listed?', 'If it holds your data, we can connect it — modern apps, databases, and the awkward no-API sources alike.'],
  ['Won’t AI for everyone get expensive?', 'The opposite. It reads the right information once and reuses it across the company, so the cost per answer falls as you scale.'],
  ['Does it replace the AI we already use?', 'No — it powers the AI you already use (GPT, Claude, Gemini) and gives every team one system to ask, act and automate.'],
]

export default function Home() {
  return (
    <>
      {/* ═══ HERO — centered, with a live dashboard demo ═══ */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-center">
            <h1>The AI operating system<br />for your <span className="gt">company.</span></h1>
            <p className="sub">One place where every team’s apps, answers, and agents come together — so your company can <b>ask, act, and automate</b> as one.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href="#book">Book a demo</a>
              <a className="btn btn-ghost" href="#demo">See it in action</a>
            </div>
          </div>
          <Reveal as="div" className="dash" id="demo">
            <div className="dash-bar">
              <span className="d" style={{ background: '#ff5f57' }} />
              <span className="d" style={{ background: '#febc2e' }} />
              <span className="d" style={{ background: '#28c840' }} />
              <span className="dash-url">app.suprai.com</span>
              <span className="dash-live">● Live demo — click a role to try it</span>
            </div>
            <HeroDemo />
          </Reveal>
        </div>
      </header>

      {/* ═══ PROOF BAR ═══ */}
      <section className="logos">
        <div className="wrap">
          <p>Built for teams who want to run like a bigger one — across the apps they already use</p>
          <div className="logo-row">
            {['slack', 'google', 'hubspot', 'salesforce', 'stripe', 'notion', 'zendesk', 'shopify', 'github'].map((s) => (
              <BrandImg key={s} slug={s} />
            ))}
            <span className="cat-pill">+ 100 more</span>
          </div>
        </div>
      </section>

      {/* ═══ WHY NOW ═══ */}
      <section className="statement">
        <div className="wrap">
          <Reveal>
            <div className="kicker">Why now</div>
            <h2>Every team is using AI.<br /><span className="muted2">No company is running on it.</span></h2>
            <p>Right now AI shows up one person at a time — a private chatbot here, a clever prompt there. The company never moves as one. SuprAI puts every team on the same system, so the business moves at the pace of AI instead of falling behind it.</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ PLATFORM — asymmetric bento (illustration in every tile) ═══ */}
      <section className="section" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">The platform</div>
            <h2 className="xl">One operating system. Everything your company’s AI needs.</h2>
            <p className="lead">Connect your apps once, then ask, act, and automate across all of them — from wherever your team already works.</p>
          </Reveal>

          <div className="bento">
            {/* ASK — big 2×2 · illustration: bento-ask */}
            <Reveal as="div" className="bento-card accent ba-ask" id="ask" d={0}>
              <div className="bc-eyebrow">Ask</div>
              <h3>Ask anything across your company.</h3>
              <p>One plain-language question, answered across every connected app at once — real numbers and facts, every time, with the sources behind them.</p>
              <div className="bc-visual">
                <div className="askbar"><span className="ph">What did we spend on tools last month?</span><span className="cur" /><span className="go">↑</span></div>
                <div className="ask-answer">
                  <div className="big-num"><em>$48,210</em> across 23 tools</div>
                  <div className="cap">Up 12% on March — driven by 3 new seats in Sales.</div>
                  <div className="ask-sources">
                    <span className="ask-src"><BrandImg slug="stripe" />Stripe</span>
                    <span className="ask-src"><BrandImg slug="quickbooks" />QuickBooks</span>
                    <span className="ask-src">+ 14 sources</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ACT — wide 2×1 · illustration: bento-act */}
            <Reveal as="div" className="bento-card accent ba-act" id="act" d={1}>
              <div className="bc-eyebrow">Act</div>
              <h3>It acts in your tools.</h3>
              <p>Drafts, updates, creates and sends across your tools — on your say-so, or on autopilot.</p>
              <div className="bc-visual" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span className="tm-act" style={{ cursor: 'default' }}><span className="pl">▶</span> Send it</span>
                <span className="tm-chip"><BrandImg slug="google" />Google</span>
                <span className="tm-chip"><BrandImg slug="gmail" />Gmail</span>
                <span className="tm-chip"><BrandImg slug="hubspot" />HubSpot</span>
              </div>
            </Reveal>

            {/* AUTOMATE — tall 1×2 · illustration: bento-automate */}
            <Reveal as="div" className="bento-card ba-auto" id="automate" d={2}>
              <div className="bc-eyebrow">Automate</div>
              <h3>Automate what repeats.</h3>
              <p>Build a named agent once; it runs on a trigger or schedule, and reports what it did.</p>
              <div className="bc-visual">
                {['Trigger', 'Read', 'Think', 'Act'].map((s) => (
                  <div className="agent-step done" key={s} style={{ padding: '5px 0' }}>
                    <div className="rail"><div className="node" style={{ width: 20, height: 20 }}>✓</div><div className="line" /></div>
                    <div className="meta"><div className="t" style={{ fontSize: 13 }}>{s}</div></div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* EVERYWHERE — tall 1×2 · illustration: bento-everywhere */}
            <Reveal as="div" className="bento-card ba-whr" d={3}>
              <div className="bc-eyebrow">Everywhere</div>
              <h3>Works where your team works.</h3>
              <p>Use it from Slack, WhatsApp, the browser, or the AI your team already uses — no new app to learn.</p>
              <div className="bc-visual">
                <div className="surf"><BrandImg slug="slack" /><span>Slack</span><span className="nm">· @mention it</span></div>
                <div className="surf"><BrandImg slug="whatsapp" /><span>WhatsApp</span><span className="nm">· just text it</span></div>
                <div className="surf"><span className="ic">◷</span><span>Browser</span><span className="nm">· web &amp; extension</span></div>
                <div className="surf"><BrandImg slug="anthropic" /><BrandImg slug="openai" /><span className="nm">The AI you already use</span></div>
              </div>
            </Reveal>

            {/* CONNECT — wide 2×1 · illustration: bento-connect */}
            <Reveal as="div" className="bento-card ba-conn" d={1}>
              <div className="bc-eyebrow">Connect</div>
              <h3>Connect every app.</h3>
              <p>Modern apps, databases and files — and the awkward no-API sources alike. If it holds your data, we connect it.</p>
              <div className="bc-visual" style={{ display: 'flex', gap: 13, flexWrap: 'wrap' }}>
                {['google', 'slack', 'hubspot', 'stripe', 'notion', 'zendesk', 'shopify', 'github'].map((s) => <BrandImg key={s} slug={s} style={{ height: 22, opacity: .8 }} />)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ APPS & ACTIONS (signature) ═══ */}
      <section className="section band-warm" id="apps">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Apps &amp; actions</div>
            <h2 className="xl">Connect your apps. Unlock every action.</h2>
            <p className="lead">Every app you connect brings the actions it can take — create a user, issue a refund, move a deal, send the email. SuprAI knows them all, and only ever runs the ones a person’s role allows.</p>
          </Reveal>
          <Reveal><AppsActions /></Reveal>
        </div>
      </section>

      {/* ═══ ROLE ANSWERS ═══ */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Role-aware</div>
            <h2 className="xl">It answers like it knows who’s asking.</h2>
            <p className="lead">This is what makes it an operating system, not a chatbot. SuprAI reads your team structure and each person’s permissions, then shapes every answer to their role — and never shows what they aren’t cleared to see.</p>
          </Reveal>
          <div className="roles">
            {[
              ['Finance', '“What did we spend on tools last month?”', 'Gets the <b>real numbers</b>, traceable to source — and the budgets only finance can see.'],
              ['Sales', '“How’s the Acme deal tracking?”', 'Gets <b>pipeline, calls and usage</b> — but only for the accounts this rep owns.'],
              ['Ops', '“Set up the new contractor.”', 'It <b>acts</b> across the tools this role is allowed to touch — and logs every step.'],
            ].map(([role, q, a], i) => (
              <Reveal as="div" className="role" key={role} d={i + 1}>
                <div className="role-top">
                  <span className="role-chip">{role}</span>
                  <span className="role-lock">🔒 scoped</span>
                </div>
                <div className="q">{q}</div>
                <div className="a" dangerouslySetInnerHTML={{ __html: a }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGENTS DEEP DIVE ═══ */}
      <section className="section band-warm">
        <div className="wrap">
          <div className="grid-2 align">
            <Reveal>
              <div className="kicker">Automation</div>
              <h2 className="xl">Hand off the work your team repeats.</h2>
              <p className="lead mt18">Build a named agent for a job your team does over and over. It runs as copilot — you approve each step — or autopilot, on a schedule, telling you what it did. Shared with the team, so the knowledge stops living in one head.</p>
              <ul className="lead list-plain mt18">
                <li>✓ Triggered or scheduled — on an event, or every morning at 6</li>
                <li>✓ Copilot or autopilot — approve the sensitive steps, let the routine run</li>
                <li>✓ Shared, not solo — one agent every team uses, with full logs</li>
              </ul>
            </Reveal>
            <Reveal d={1}>
              <div className="agent">
                <div className="agent-head">
                  <div className="agent-name"><span className="bdot" />Monday Numbers</div>
                  <div className="toggle"><span>Copilot</span><span className="on">Autopilot</span></div>
                </div>
                {[
                  ['Trigger', 'Every Monday, 6:00 AM'],
                  ['Read', 'Pulls spend, pipeline & support across 9 apps'],
                  ['Think', 'Compares to last week, flags what moved'],
                  ['Act', 'Posts the report to #leadership in Slack'],
                ].map(([t, d]) => (
                  <div className="agent-step done" key={t}>
                    <div className="rail"><div className="node">✓</div><div className="line" /></div>
                    <div className="meta"><div className="t">{t}</div><div className="d">{d}</div></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS — 2 scrolling rows ═══ */}
      <section className="section" id="integrations">
        <div className="wrap sec-head cc">
          <Reveal>
            <div className="kicker" style={{ justifyContent: 'center' }}>Connected</div>
            <h2 className="xl">If it holds your data, we connect it.</h2>
          </Reveal>
        </div>
        <div className="intg">
          <div className="intg-row a">{[...intgA, ...intgA].map((s, i) => <div className="intg-tile" key={'a' + i}><BrandImg slug={s} /></div>)}</div>
          <div className="intg-row b">{[...intgB, ...intgB].map((s, i) => <div className="intg-tile" key={'b' + i}><BrandImg slug={s} /></div>)}</div>
        </div>
        <div className="wrap">
          <div className="grid-3 mt left">
            <Reveal as="div" className="card" d={1}><h3>Your apps</h3><p>Modern tools, connected over their own login in clicks — CRM, helpdesk, billing, docs, storage.</p></Reveal>
            <Reveal as="div" className="card" d={2}><h3>Your data</h3><p>Databases, warehouses, spreadsheets and files — the numbers and documents your business runs on.</p></Reveal>
            <Reveal as="div" className="card" d={3}><h3>Even the awkward ones</h3><p>Email, shared drives, and older systems with no real API. Nothing gets left out.</p></Reveal>
          </div>
          <p className="micro center" style={{ marginTop: 22 }}>One setup. Live in minutes — and it works where your team already does: Slack, WhatsApp, the browser, or the AI they already use.</p>
        </div>
      </section>

      {/* ═══ SECURITY — Glean two-column ═══ */}
      <section className="section band-warm" id="security">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Enterprise-grade</div>
          </Reveal>
          <Reveal as="div" className="secG">
            <div className="secG-list">
              <div className="secG-item">
                <span className="si">{ICON.lock}</span>
                <div><h4>Permission-aware access</h4><p>Users only see what they’re allowed to see.</p></div>
              </div>
              <div className="secG-item">
                <span className="si">{ICON.eye}</span>
                <div><h4>Full observability</h4><p>Track every question, answer, and action.</p></div>
              </div>
              <div className="secG-item">
                <span className="si">{ICON.shield}</span>
                <div><h4>Best-in-class data control</h4><p>Built for compliance-heavy environments.</p></div>
              </div>
            </div>
            <div className="secG-right">
              <h2>Built for enterprise from day one. AI only works in a company when answers are secure, explainable, and permission-aware.</h2>
              <a className="btn btn-primary" href="#book">Explore SuprAI security</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ MEMORY ═══ */}
      <section className="statement">
        <div className="wrap">
          <Reveal>
            <div className="kicker">Company memory</div>
            <h2>It learns your business.<br /><span className="muted2">And never starts from zero.</span></h2>
            <p>The more your teams use it, the more it knows — names, numbers, how you work. What one person teaches it, the company keeps. Every week builds on the last, not over it.</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ POWERS ANY AI ═══ */}
      <section className="section band-warm">
        <div className="wrap">
          <div className="grid-2 align">
            <Reveal>
              <div className="kicker">Model-neutral</div>
              <h2 className="xl">Bring any AI. We make it your company’s.</h2>
              <p className="lead mt18">SuprAI isn’t another chatbot to adopt — it works with the AI your team already uses and gives it your apps, your knowledge, your team structure, and the power to act.</p>
              <ul className="lead list-plain mt18">
                <li>✓ Any model — GPT, Claude, Gemini — use what you like, never locked in</li>
                <li>✓ Compare side by side — see how models answer the same task, then pick the best</li>
                <li>✓ One subscription — consolidate scattered AI seats into one system, at lower cost</li>
              </ul>
            </Reveal>
            <Reveal d={1}>
              <div className="triad" style={{ marginTop: 0, gridTemplateColumns: '1fr' }}>
                {[['openai', 'GPT'], ['anthropic', 'Claude'], ['googlegemini', 'Gemini']].map(([s, n]) => (
                  <div className="triad-col" key={n} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18 }}>
                    <BrandImg slug={s} style={{ height: 26 }} />
                    <div><div style={{ fontFamily: 'Sora', fontWeight: 600 }}>{n}</div><div style={{ fontSize: 12.5, color: 'var(--mute)' }}>Powered by SuprAI’s core</div></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ THIS NOT THAT ═══ */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">The shift</div>
            <h2 className="xl">Stop being the glue between your tools.</h2>
            <p className="lead">Today work is people-driven: someone remembers, someone chases, someone copies the number from one tool to the next. SuprAI makes it system-driven.</p>
          </Reveal>
          <Reveal as="div" className="swaps">
            <div className="swap swap-head">
              <div className="old">People-driven today</div>
              <div className="arr" />
              <div className="new">System-driven with SuprAI</div>
            </div>
            {swaps.map(([a, b]) => (
              <div className="swap" key={b}>
                <div className="old">{a}</div>
                <div className="arr">{ARR}</div>
                <div className="new">{b}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ═══ WHAT YOUR TEAMS CAN DO ═══ */}
      <section className="section band-warm">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">By team</div>
            <h2 className="xl">Real questions. Real actions.</h2>
            <p className="lead">The everyday jobs that used to take a person and five tabs. Ask, and it acts.</p>
          </Reveal>
          <div className="grid-2 mt left">
            {teamCards.map(([k, q, a], i) => (
              <Reveal as="div" className="card" key={k} d={(i % 2) + 1}>
                <div className="klabel">{k}</div>
                <h3 style={{ fontSize: 17 }}>{q}</h3>
                <p style={{ marginTop: 6 }}>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISONS ═══ */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Comparisons</div>
            <h2 className="xl">SuprAI vs the alternatives.</h2>
            <p className="lead">See how one operating system for the whole company compares to a per-person assistant.</p>
          </Reveal>
          <div className="grid-3 mt">
            {comparisons.map(([name, slug, blurb], i) => (
              <Reveal as={Link} className="sol" to={`/compare/${slug}`} key={slug} d={i + 1}>
                <div className="k">COMPARE</div>
                <h3>SuprAI vs {name}</h3>
                <p>{blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="section band-warm">
        <div className="wrap">
          <Reveal className="sec-head cc">
            <div className="kicker" style={{ justifyContent: 'center' }}>Why it matters</div>
            <h2 className="xl">One system beats a dozen logins.</h2>
          </Reveal>
          <div className="statrow">
            {[
              ['100+', 'apps and data sources connected through one setup'],
              ['Days', 'to go live — not a six-month enterprise rollout'],
              ['1', 'admin in control of every connection, answer and action'],
              ['20–100', 'the team size we’re built for — enterprise-grade, right-sized'],
            ].map(([n, l], i) => (
              <Reveal as="div" className="statbox" key={l} d={i + 1}>
                <div className="n"><em>{n}</em></div>
                <div className="l">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section">
        <div className="wrap center">
          <Reveal>
            <div className="kicker" style={{ justifyContent: 'center' }}>From the field</div>
            <h2 className="xl">What early teams say</h2>
          </Reveal>
          <div className="grid-3 mt left">
            {[0, 1, 2].map((i) => (
              <Reveal as="div" className="card" key={i} d={i + 1}>
                <p className="quote">“[ Design-partner quote — real testimonial added when available. ]”</p>
                <p className="quote-by">— [ Name, Role, Company ]</p>
              </Reveal>
            ))}
          </div>
          <p className="micro" style={{ marginTop: 16 }}>Real quotes only — these are placeholders until design-partner results are in.</p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="wrap">
          <div className="kicker">FAQ</div>
          <h2 className="xl mb20">Questions, answered.</h2>
          {faqs.map(([q, a]) => (
            <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="endcta" id="book">
        <div className="wrap">
          <Reveal className="final-card">
            <div className="kicker" style={{ justifyContent: 'center' }}>Get started</div>
            <h2>Give your company its AI operating system.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two apps and watch it run a real task, start to finish — in minutes.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href="#book">Book a demo</a>
              <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            </div>
            <div className="pillrow">
              <span className="tag-pill">Ask · Act · Automate</span>
              <span className="tag-pill">Answers by role</span>
              <span className="tag-pill">Enterprise-grade</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
