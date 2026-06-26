import { useState } from 'react'
import PageMeta from '../components/PageMeta.jsx'
import { DEMO_URL } from '../components/Layout.jsx'

const PLANS = [
  { key: 'free', name: 'Free', monthly: 0, yearly: 0, blurb: 'Ask & act from your own AI', cta: 'Start free', style: 'ghost' },
  { key: 'essential', name: 'Essential', monthly: 300, yearly: 3000, blurb: 'For a team getting going', cta: 'Choose Essential', style: 'primary', pop: true },
  { key: 'scale', name: 'Scale', monthly: 1200, yearly: 12000, blurb: 'For scaling operations', cta: 'Choose Scale', style: 'ghost' },
  { key: 'enterprise', name: 'Enterprise', monthly: null, yearly: null, blurb: 'For 50+ & regulated teams', cta: 'Talk to us', style: 'ghost' },
]

// label → [free, essential, scale, enterprise]
const ROWS = [
  ['Users', ['1', 'Unlimited', 'Unlimited', 'Unlimited']],
  ['Team-wide context', ['Personal', '✓ team-wide', '✓ org-wide', '✓ advanced']],
  ['Connectors', ['Any 5 (live read)', 'Up to 15', 'Unlimited', 'Unlimited']],
  ['Data capacity', ['—', '25 GB', '250 GB', 'From 1 TB']],
  ['AI credits / mo', ['Auto mode only · free', '2,500', '25,000', 'From 250,000']],
  ['Active agents', ['—', 'Unlimited', 'Unlimited', 'Unlimited']],
  ['Automations', ['—', 'Basic', 'Advanced', 'Advanced + custom']],
  ['Live retention', ['—', '90 days', '365 days', 'Custom / legal hold']],
  ['BYOK / BYOC', ['—', 'Optional', 'Default', 'Required']],
  ['Controls', ['—', 'SSO, roles', 'SSO/SCIM, audit', 'SAML, scoped keys, SLAs']],
  ['Support', ['Community', 'Standard', 'Priority', 'Dedicated']],
]

function priceParts(plan, yearly) {
  if (plan.monthly === 0) return ['$0', 'forever']
  if (plan.monthly == null) return ['Custom', '']
  if (yearly) return [`$${Math.round(plan.yearly / 12).toLocaleString()}`, `/mo · billed $${plan.yearly.toLocaleString()}/yr`]
  return [`$${plan.monthly.toLocaleString()}`, '/mo']
}

function Cell({ v }) {
  if (v === '—') return <span className="pc-dash">—</span>
  if (typeof v === 'string' && v.startsWith('✓')) return <span className="pc-yes"><b>✓</b>{v.slice(1)}</span>
  return <span>{v}</span>
}

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <>
      <PageMeta title="Pricing" description="Every plan is the full system — auto mode free on every plan, any AI you like, role-shaped answers and actions, everything on the record. Monthly or yearly; extra data and Claude usage are pay-as-you-go." />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1>The whole control plane,<br />priced for your size.</h1>
          <p className="lead">Every plan is the full system — auto mode free on every plan, any AI you like, role-shaped answers and actions, everything on the record. Enterprise-grade from day one, priced for your size — not the enterprise. Start free forever; Essential free for 15 days, no card required.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="billtoggle">
            <button className={!yearly ? 'on' : ''} onClick={() => setYearly(false)}>Monthly</button>
            <button className={yearly ? 'on' : ''} onClick={() => setYearly(true)}>Yearly<span className="bt-save">save ~17%</span></button>
          </div>

          <div className="ptable-wrap">
            <table className="ptable">
              <thead>
                <tr>
                  <th className="pt-corner" />
                  {PLANS.map((p) => {
                    const [big, small] = priceParts(p, yearly)
                    return (
                      <th key={p.key} className={p.pop ? 'pt-pop' : ''}>
                        {p.pop && <span className="pt-badge">Most popular</span>}
                        <div className="pt-name">{p.name}</div>
                        <div className="pt-price">{big}{small && <small> {small}</small>}</div>
                        <div className="pt-blurb">{p.blurb}</div>
                        <a className={`btn btn-${p.style} pt-cta`} href={DEMO_URL} target="_blank" rel="noopener noreferrer">{p.cta}</a>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, vals]) => (
                  <tr key={label}>
                    <td className="pt-rowlabel">{label}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={PLANS[i].pop ? 'pt-pop' : ''}><Cell v={v} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pnotes">
            <p><span className="pn-star">★</span><b>Auto mode is completely free</b> on every plan — you only spend AI credits when an agent uses a premium model like Claude.</p>
            <p>Extra data storage and Claude / AI model usage beyond your plan are <b>pay-as-you-go</b> — usage is live and you can cap it anytime.</p>
            <p><b>BYOC</b> (bring your own cloud) is <b>priced separately</b> from the plans above — talk to us for a quote.</p>
          </div>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h2 className="big">Two simple parts</h2>
          <div className="grid-2 mt">
            <div className="card"><h3>A plan — monthly or yearly</h3><p>Your subscription to SuprAI — unlimited apps, answers by role and team, your agents, and everything the system does. Each plan includes a generous allowance of data and AI credits. Yearly saves ~17%.</p></div>
            <div className="card"><h3>Credits — fuel for the AI</h3><p>Auto mode runs completely free. You only spend credits when an agent uses a premium model for heavier tasks. Extra data and model usage are pay-as-you-go — you see usage live and can set caps.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="big mb20">Common questions</h2>
          <details className="faq"><summary>Is Free really free?</summary><p>Yes — Free is free forever, not a trial. Connect your apps and ask and act from your own Claude, GPT or Gemini for as long as you like. Auto mode is free; agents, team-wide context and AI credits come with the paid plans.</p></details>
          <details className="faq"><summary>What does “auto mode is free” mean?</summary><p>Routine, rule-based work — auto mode — runs free on every plan. You only spend AI credits when an agent calls a premium model like Claude for a heavier task. So the everyday automation never adds to your bill.</p></details>
          <details className="faq"><summary>How do extra data and Claude usage work?</summary><p>Pay-as-you-go. Each plan includes a data allowance and a monthly pool of AI credits; anything beyond that — extra storage, or premium model usage like Claude — is billed as you use it. You see usage live and can cap it.</p></details>
          <details className="faq"><summary>What about BYOC?</summary><p>Bring-your-own-cloud is available on Scale (default) and Enterprise (required). BYOC is priced separately from the standard plans — talk to us and we’ll quote it for your setup.</p></details>
          <details className="faq"><summary>Monthly or yearly?</summary><p>Either. Yearly billing saves ~17% (about two months free). You can switch the toggle above to see the difference, and change your billing period anytime.</p></details>
          <details className="faq"><summary>Can we use our own AI model key?</summary><p>Yes. SuprAI powers any AI — GPT, Claude or Gemini — so you’re never locked in. On Scale and Enterprise you can bring your own key and pay your AI provider directly, and cost per answer drops as you scale.</p></details>
          <details className="faq"><summary>Do you charge per app?</summary><p>Never. Connectors are generous on every paid plan and we don’t charge for connecting your tools.</p></details>
          <details className="faq"><summary>Is it secure and enterprise-grade?</summary><p>Yes — enterprise-grade from day one. Access is permission-aware, every answer and action has a full audit trail, and it’s compliance-ready, all run by one admin.</p></details>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <h2>Put every team on one AI.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Book a demo, or start free forever — try Essential free for 15 days, no card required.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <a className="btn btn-ghost" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Start free</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
