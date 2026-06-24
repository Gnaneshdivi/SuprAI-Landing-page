import { Link } from 'react-router-dom'

const teams = [
  ['GROWTH & MARKETING', 'Run the funnel, not the dashboards', 'Ask across ads, store, CRM and analytics. See what’s converting, act on it, and let agents run the win-backs and reports.', 'growth-marketing'],
  ['SALES', 'Pipeline that updates itself', 'Ask across CRM, calls and product usage. Surface at-risk deals and next-best actions, and act on them in your CRM.', 'sales'],
  ['SUPPORT', 'Answers from the whole customer', 'Ask across tickets, orders, shipments and billing. Resolve faster with the full context, and automate the fix.', 'support'],
  ['OPERATIONS', 'See the breakages before they cost you', 'Ask across logistics, inventory and orders. Catch late shipments and stockouts, and let agents act across apps.', 'operations'],
  ['ENGINEERING / DEV', 'Sprint & performance, unified', 'Ask across GitHub, issues and product metrics. Track velocity and reliability, and automate the reporting grunt work.', 'engineering'],
  ['FINANCE & ANALYTICS', 'Real numbers, every time', 'Ask across billing, revenue and spend. Trusted definitions, traceable answers, no manual stitching.', 'finance'],
]
const industries = [
  ['D2C & ECOMMERCE', 'Store + ads + logistics + marketplaces, coordinated', 'One view across your store, paid channels, shipping and marketplaces. Ask the questions no single app answers — and act before your competitors.', 'd2c-ecommerce'],
  ['RETAIL & QSR', 'Online and in-store, finally in one view', 'Ask across POS, ecommerce, loyalty and footfall. Signals most apps can’t see — turned into offers and actions.', 'retail-qsr'],
  ['SUBSCRIPTIONS & SAAS', 'Billing + usage + lifecycle, joined', 'Ask across subscriptions, payments and product usage. Spot churn, trigger win-backs, and protect LTV automatically.', 'subscriptions-saas'],
  ['MARKETPLACES & MULTI-BRAND', 'Every channel, one operating system', 'Coordinate listings, pricing and promos across marketplaces and your own store — asked, acted on and synced from one place.', 'marketplaces'],
]

export default function Solutions() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Solutions</div>
          <h1>One operating system. Every team.</h1>
          <p className="lead">SuprAI is the AI operating system for your company. Every team’s apps, answers and agents in one place — so the whole company can Ask, Act and Automate as one. Pick your team or your industry; the system is the same, the playbooks are tuned.</p>
          <div className="hero-cta cc">
            <a className="btn btn-ghost" href="#teams">By team</a>
            <a className="btn btn-ghost" href="#industries">By industry</a>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: '30px 28px 0' }}>
        <div className="illus sm">§A5 — split diagram: left "By team" (growth, sales, support, dev, finance), right "By industry" (commerce, retail, subscriptions), both feeding one SuprAI core. Pastel, light orangish grid bg.</div>
      </section>

      <section className="section" id="teams">
        <div className="wrap">
          <div className="eyebrow">By team</div>
          <h2 className="big">One AI every team can Ask, Act and Automate with</h2>
          <p className="lead">At a 20–100 person company, every team runs on its own apps and loses hours stitching them together. SuprAI gives each one a place to ask anything, act in their tools, and put their repeat work on agents.</p>
          <div className="grid-3 mt">
            {teams.map(([k, h, p, slug]) => (
              <Link className="sol" to={`/solutions/${slug}`} key={k}><div className="k">{k}</div><h3>{h}</h3><p>{p}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-warm" id="industries">
        <div className="wrap">
          <div className="eyebrow">By industry</div>
          <h2 className="big">Tuned for how your business actually runs</h2>
          <p className="lead">Enterprise-grade from day one, without the enterprise project. We start where the apps are most fragmented and the data is densest — multi-channel commerce — then extend across every team.</p>
          <div className="grid-2 mt">
            {industries.map(([k, h, p, slug]) => (
              <Link className="sol" to={`/solutions/${slug}`} key={k}><div className="k">{k}</div><h3>{h}</h3><p>{p}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <div className="eyebrow">One system, infinite applications</div>
          <h2 className="big">Connect. Ask. Act. Automate.</h2>
          <p className="lead">Whatever the team or industry, SuprAI does the same four things — only the apps and playbooks change.</p>
          <div className="loop">
            <div className="loop-step"><div className="n">01</div><h4>Connect</h4><p>Plug in the apps that team already runs — in clicks, not an integration project. Live in days.</p></div>
            <div className="loop-step"><div className="n">02</div><h4>Ask</h4><p>Ask anything across those apps and get real numbers and facts back, with sources — answered by role and team.</p></div>
            <div className="loop-step"><div className="n">03</div><h4>Act</h4><p>It does the work in their tools — drafts, updates, creates, sends — on your say-so or on autopilot.</p></div>
            <div className="loop-step"><div className="n">04</div><h4>Automate</h4><p>Named agents run the workflows that team repeats, on a trigger or a schedule. Permission-aware, fully audited.</p></div>
          </div>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap">
          <div className="grid-2 align">
            <div>
              <div className="eyebrow">Example — growth team</div>
              <h2 className="big">A week of a Growth agent</h2>
              <p className="lead mt18">It watches ads, store and CRM all week; reallocates wasted spend on Tuesday, spots a churn spike Thursday, and ships the weekly report Monday — all without you opening a dashboard.</p>
              <ul className="lead list-plain mt18">
                <li>✓ Connects Meta, Google Ads, Shopify, Klaviyo</li>
                <li>✓ Acts on your say-so for spend changes, on autopilot for reports</li>
                <li>✓ Every action permission-aware, logged and reversible</li>
              </ul>
            </div>
            <div className="illus">§A8 — "a week of an agent" timeline: Mon report, Tue spend shift, Thu churn alert, Fri win-back — across app logos, light pastel grid.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="big mb20">Common questions</h2>
          <details className="faq"><summary>Do I have to pick a team or industry?</summary><p>No — it's one operating system for the whole company. The framing just gives you the right playbooks and apps out of the box. You can run agents across several teams at once, all under one admin.</p></details>
          <details className="faq"><summary>What if my apps aren't listed?</summary><p>Apps are unlimited, and SuprAI reaches modern APIs, warehouses and legacy systems. If it holds your data, we can connect it.</p></details>
          <details className="faq"><summary>Can different teams have different permissions?</summary><p>Yes — access is permission-aware and scoped to each user's role, with a full audit trail. Compliance-ready, run by one admin.</p></details>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <div className="eyebrow">Get started</div>
            <h2>Put every team on one AI.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two apps and watch SuprAI ask, act and automate a real task for your team — start to finish.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href="#">Book a demo</a>
              <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
