import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1>Pay for the product,<br />plus the AI you actually use.</h1>
          <p className="lead">Unlimited connectors on every plan. Start free forever — try Starter free for 15 days. No card required.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="price-grid">
            <div className="plan">
              <div className="pname">Free</div>
              <div className="pp">$0<small> forever</small></div>
              <div className="inr">Act from your own AI</div>
              <ul>
                <li><span className="ck">✓</span> Unlimited connectors</li>
                <li><span className="ck">✓</span> Use from Claude / GPT</li>
                <li><span className="ck">✓</span> Act on your tools</li>
                <li><span className="ck">✓</span> 500 tool calls / mo</li>
                <li><span className="ck">✓</span> Bring your own AI</li>
              </ul>
              <a className="btn btn-ghost" href="#">Start free</a>
            </div>
            <div className="plan">
              <div className="pname">Starter</div>
              <div className="pp">$49<small>/mo</small></div>
              <div className="inr">₹3,999 · 15-day free trial</div>
              <ul>
                <li><span className="ck">✓</span> Everything in Free</li>
                <li><span className="ck">✓</span> Answer across your tools</li>
                <li><span className="ck">✓</span> 2 AI workers</li>
                <li><span className="ck">✓</span> 5,000 credits · 1M events</li>
                <li><span className="ck">✓</span> 10k tool calls · 30-day history</li>
              </ul>
              <a className="btn btn-ghost" href="#">Try free</a>
            </div>
            <div className="plan pop">
              <div className="badge">Most popular</div>
              <div className="pname">Growth</div>
              <div className="pp">$199<small>/mo</small></div>
              <div className="inr">₹15,999</div>
              <ul>
                <li><span className="ck">✓</span> Everything in Starter</li>
                <li><span className="ck">✓</span> Proactive — patterns &amp; alerts</li>
                <li><span className="ck">✓</span> 6 AI workers · Autopilot</li>
                <li><span className="ck">✓</span> 25,000 credits · 10M events</li>
                <li><span className="ck">✓</span> 100k tool calls · 12-mo history · BYO key</li>
              </ul>
              <a className="btn btn-primary" href="#">Get Growth</a>
            </div>
            <div className="plan">
              <div className="pname">Scale</div>
              <div className="pp">Custom</div>
              <div className="inr">For larger brands</div>
              <ul>
                <li><span className="ck">✓</span> Unlimited workers</li>
                <li><span className="ck">✓</span> Predictive / custom analytics</li>
                <li><span className="ck">✓</span> Committed credits &amp; events</li>
                <li><span className="ck">✓</span> RBAC · SSO · on-prem</li>
                <li><span className="ck">✓</span> Dedicated support + SLAs</li>
              </ul>
              <a className="btn btn-ghost" href="#">Talk to us</a>
            </div>
          </div>
          <p className="micro center" style={{ marginTop: 24 }}>Routine work is free — premium tasks use a few credits each. Top up anytime, or bring your own AI key. Save ~15–20% annually.</p>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h2 className="big">Two simple parts</h2>
          <div className="grid-2 mt">
            <div className="card"><h3>A monthly plan</h3><p>Your subscription to SuprAI — unlimited connectors, your analytics, your AI workers, and everything the platform does. Each plan includes a generous monthly allowance of tool calls and data.</p></div>
            <div className="card"><h3>Credits — fuel for the AI</h3><p>Routine work runs free. You only spend credits when a worker uses a premium AI model for heavier tasks. You always see usage live and can set limits. Top up anytime, or bring your own key.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="big mb20">Common questions</h2>
          <details className="faq"><summary>Is Free really free?</summary><p>Yes — Free is free forever, not a trial. Connect your tools and use SuprAI from your own Claude or ChatGPT for as long as you like. Analytics, AI workers and credits come with the paid plans.</p></details>
          <details className="faq"><summary>What's the 15-day trial?</summary><p>When you're ready for the full experience, try Starter free for 15 days — analytics, a worker and credits included, no card required.</p></details>
          <details className="faq"><summary>Will I get a surprise bill?</summary><p>No. Paid plans include a set amount of credits, data and tool calls; you see usage live and can cap spending. Anything beyond is your choice.</p></details>
          <details className="faq"><summary>Can we use our own AI model key?</summary><p>Yes — on Growth and Scale you can bring your own key and pay your AI provider directly.</p></details>
          <details className="faq"><summary>Do you charge per connector?</summary><p>Never. Connectors are unlimited on every plan — we don't charge for connecting your tools.</p></details>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <h2>Start free, forever.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Or try Starter free for 15 days — no card required.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href="#">Start free</a>
              <a className="btn btn-ghost" href="#">Book a demo</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
