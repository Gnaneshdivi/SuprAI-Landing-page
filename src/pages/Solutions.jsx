import { Link } from 'react-router-dom'

const teams = [
  ['GROWTH & MARKETING', 'Run the funnel, not the dashboards', 'Unify ads, store, CRM and analytics. Spot what’s converting, reallocate spend, launch win-backs — copilot or autopilot.', 'growth-marketing'],
  ['SALES', 'Pipeline that updates itself', 'Join CRM, calls and product usage. Surface at-risk deals and next-best actions, and act on them in your CRM.', 'sales'],
  ['SUPPORT', 'Answers from the whole customer', 'Tie tickets to orders, shipments and billing. Resolve faster with the full context, and trigger the fix.', 'support'],
  ['OPERATIONS', 'See the breakages before they cost you', 'Connect logistics, inventory and orders. Catch late shipments and stockouts, and act across tools automatically.', 'operations'],
  ['ENGINEERING / DEV', 'Sprint & performance, unified', 'Join GitHub, issues and product metrics. Track velocity and reliability, and automate the reporting grunt work.', 'engineering'],
  ['FINANCE & ANALYTICS', 'Real numbers, every time', 'One semantic layer over billing, revenue and spend. Trusted definitions, traceable answers, no manual stitching.', 'finance'],
]
const industries = [
  ['D2C & ECOMMERCE', 'Shopify + ads + logistics + marketplaces, coordinated', 'One view across your store, paid channels, 3PLs and marketplaces. Find the patterns no single tool shows — and act before your competitors.', 'd2c-ecommerce'],
  ['RETAIL & QSR', 'Online and in-store, finally in one view', 'Join POS, ecommerce, loyalty and footfall. Phygital signals most tools can’t see — turned into offers and actions.', 'retail-qsr'],
  ['SUBSCRIPTIONS & SAAS', 'RevenueCat + billing + lifecycle, joined', 'Connect subscriptions, payments and product usage. Predict churn, trigger win-backs, and protect LTV automatically.', 'subscriptions-saas'],
  ['MARKETPLACES & MULTI-BRAND', 'Every channel, one intelligence', 'Coordinate listings, pricing and promos across marketplaces and your own store — synced and acted on from one layer.', 'marketplaces'],
]

export default function Solutions() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Solutions</div>
          <h1>One layer. Every team. Every industry.</h1>
          <p className="lead">SuprAI connects the tools each team already runs, answers across them with real data, and acts. Pick your team or your industry — the engine is the same; the playbooks are tuned.</p>
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
          <h2 className="big">Built for the people drowning in tabs</h2>
          <p className="lead">Every team runs on its own stack and loses hours stitching it together. SuprAI gives each one a worker that answers and acts across their tools.</p>
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
          <p className="lead">We start where the tools are most fragmented and the data is densest — multi-channel commerce — then extend.</p>
          <div className="grid-2 mt">
            {industries.map(([k, h, p, slug]) => (
              <Link className="sol" to={`/solutions/${slug}`} key={k}><div className="k">{k}</div><h3>{h}</h3><p>{p}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <div className="eyebrow">One layer, infinite applications</div>
          <h2 className="big">Same engine. Every team's job.</h2>
          <p className="lead">Whatever the team or industry, SuprAI does the same four things — only the connectors and playbooks change.</p>
          <div className="loop">
            <div className="loop-step"><div className="n">01</div><h4>Connect</h4><p>Plug in the tools that team already runs — in clicks, not an integration project.</p></div>
            <div className="loop-step"><div className="n">02</div><h4>Understand</h4><p>The semantic layer learns that team's metrics and resolves identity across their tools.</p></div>
            <div className="loop-step"><div className="n">03</div><h4>Act</h4><p>Answers become actions in their tools — copilot to approve, or autopilot to run.</p></div>
            <div className="loop-step"><div className="n">04</div><h4>Learn</h4><p>Every outcome tunes the worker to how that team actually thinks.</p></div>
          </div>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap">
          <div className="grid-2 align">
            <div>
              <div className="eyebrow">Example — growth team</div>
              <h2 className="big">A week of a Growth Worker</h2>
              <p className="lead mt18">It watches ads, store and CRM all week; reallocates wasted spend on Tuesday, spots a churn spike Thursday, and ships the weekly report Monday — all without you opening a dashboard.</p>
              <ul className="lead list-plain mt18">
                <li>✓ Connects Meta, Google Ads, Shopify, Klaviyo</li>
                <li>✓ Copilot for spend changes, autopilot for reports</li>
                <li>✓ Every action logged and reversible</li>
              </ul>
            </div>
            <div className="illus">§A8 — "a week of a worker" timeline: Mon report, Tue spend shift, Thu churn alert, Fri win-back — across tool logos, light pastel grid.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="big mb20">Common questions</h2>
          <details className="faq"><summary>Do I have to pick a team or industry?</summary><p>No — it's one platform. The framing just gives you the right playbooks and connectors out of the box. You can run workers across several teams at once.</p></details>
          <details className="faq"><summary>What if my tools aren't listed?</summary><p>Connectors are unlimited, and SuprAI reaches modern APIs, MCP, warehouses and legacy systems. If it holds your data, we can connect it.</p></details>
          <details className="faq"><summary>Can different teams have different permissions?</summary><p>Yes — role-based access control scopes every worker to a user's permissions, with full audit logging.</p></details>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <div className="eyebrow">Get started</div>
            <h2>Find your team's worker.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two tools and watch SuprAI run a real task for your team — start to finish.</p>
            <div className="hero-cta cc">
              <Link className="btn btn-primary" to="/pricing">Start free</Link>
              <a className="btn btn-ghost" href="#">Book a demo</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
