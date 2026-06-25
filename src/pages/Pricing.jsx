import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'

export default function Pricing() {
  return (
    <>
      <PageMeta title="Pricing" description="Every plan is the full system — unlimited connections, any AI you like, role-shaped answers and actions, everything on the record. Enterprise-grade, priced for your size. Start free." />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1>The whole control plane,<br />priced for your size.</h1>
          <p className="lead">Every plan is the full system — unlimited connections to every kind of tool, any AI you like, answers and actions shaped by role, and everything on the record. Enterprise-grade from day one, priced for your size, not the enterprise. Start free forever; try Starter free for 15 days. No card required.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="price-grid">
            <div className="plan">
              <div className="pname">Free</div>
              <div className="pp">$0<small> forever</small></div>
              <div className="inr">Ask & Act from your own AI</div>
              <ul>
                <li><span className="ck">✓</span> Unlimited apps</li>
                <li><span className="ck">✓</span> Ask across your apps</li>
                <li><span className="ck">✓</span> Act in your tools</li>
                <li><span className="ck">✓</span> 500 actions / mo</li>
                <li><span className="ck">✓</span> Powers any AI (GPT, Claude, Gemini)</li>
              </ul>
              <a className="btn btn-ghost" href="#">Start free</a>
            </div>
            <div className="plan">
              <div className="pname">Starter</div>
              <div className="pp">$49<small>/mo</small></div>
              <div className="inr">₹3,999 · 15-day free trial</div>
              <ul>
                <li><span className="ck">✓</span> Everything in Free</li>
                <li><span className="ck">✓</span> Answers by role &amp; team</li>
                <li><span className="ck">✓</span> 2 agents</li>
                <li><span className="ck">✓</span> 5,000 credits · 1M events</li>
                <li><span className="ck">✓</span> 10k actions / mo · 30-day history</li>
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
                <li><span className="ck">✓</span> Automate — triggers &amp; schedules</li>
                <li><span className="ck">✓</span> 6 agents · Autopilot</li>
                <li><span className="ck">✓</span> 25,000 credits · 10M events</li>
                <li><span className="ck">✓</span> 100k actions / mo · 12-mo history · BYO key</li>
              </ul>
              <a className="btn btn-primary" href="#">Get Growth</a>
            </div>
            <div className="plan">
              <div className="pname">Scale</div>
              <div className="pp">Custom</div>
              <div className="inr">For larger brands</div>
              <ul>
                <li><span className="ck">✓</span> Unlimited agents</li>
                <li><span className="ck">✓</span> Custom answers &amp; automations</li>
                <li><span className="ck">✓</span> Committed credits &amp; events</li>
                <li><span className="ck">✓</span> Permission-aware · audit trail · SSO · on-prem</li>
                <li><span className="ck">✓</span> Dedicated support + SLAs</li>
              </ul>
              <a className="btn btn-ghost" href="#">Talk to us</a>
            </div>
          </div>
          <p className="micro center" style={{ marginTop: 24 }}>Routine work is free — heavier tasks use a few credits each. SuprAI powers any AI (GPT, Claude, Gemini), so cost per answer drops as you scale. Top up anytime, or bring your own AI key. Save ~15–20% annually.</p>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h2 className="big">Two simple parts</h2>
          <div className="grid-2 mt">
            <div className="card"><h3>A monthly plan</h3><p>Your subscription to SuprAI — unlimited apps, answers by role and team, your agents, and everything the system does. Each plan includes a generous monthly allowance of actions and data.</p></div>
            <div className="card"><h3>Credits — fuel for the AI</h3><p>Routine work runs free. You only spend credits when an agent uses a premium AI model for heavier tasks. You always see usage live and can set limits. Top up anytime, or bring your own key.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="big mb20">Common questions</h2>
          <details className="faq"><summary>Is Free really free?</summary><p>Yes — Free is free forever, not a trial. Connect your apps and ask and act from your own Claude, GPT or Gemini for as long as you like. Answers by role, agents and credits come with the paid plans.</p></details>
          <details className="faq"><summary>What's the 15-day trial?</summary><p>When you're ready for the full experience, try Starter free for 15 days — answers by team, an agent and credits included, no card required.</p></details>
          <details className="faq"><summary>Will I get a surprise bill?</summary><p>No. Paid plans include a set amount of credits, data and actions; you see usage live and can cap spending. Anything beyond is your choice.</p></details>
          <details className="faq"><summary>Can we use our own AI model key?</summary><p>Yes. SuprAI powers any AI — GPT, Claude or Gemini — so you're never locked in. On Growth and Scale you can bring your own key and pay your AI provider directly, and cost per answer drops as you scale.</p></details>
          <details className="faq"><summary>Do you charge per app?</summary><p>Never. Apps are unlimited on every plan — we don't charge for connecting your tools.</p></details>
          <details className="faq"><summary>Is it secure and enterprise-grade?</summary><p>Yes — enterprise-grade from day one. Access is permission-aware, every answer and action has a full audit trail, and it's compliance-ready, all run by one admin.</p></details>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <h2>Put every team on one AI.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Book a demo, or start free forever — try Starter free for 15 days, no card required.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href="#">Book a demo</a>
              <a className="btn btn-ghost" href="#">Start free</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
