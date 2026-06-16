import { Link } from 'react-router-dom'
import HeroArt from '../components/HeroArt.jsx'

const ICON = {
  grid: <svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7zM4 13h7v7H4z" /></svg>,
  clock: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  arrow: <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  globe: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>,
  bolt: <svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>,
  chart: <svg viewBox="0 0 24 24"><path d="M4 18l5-6 4 4 7-9" /><path d="M4 4v16h16" /></svg>,
}
const si = (slug) => `https://cdn.simpleicons.org/${slug}`
const rowA = ['shopify', 'meta', 'googleads', 'googleanalytics', 'klaviyo', 'stripe', 'salesforce', 'hubspot', 'amazon', 'woocommerce', 'zendesk', 'intercom']
const rowB = ['mailchimp', 'slack', 'whatsapp', 'razorpay', 'snowflake', 'googlebigquery', 'postgresql', 'notion', 'airtable', 'googlesheets', 'instagram', 'gmail']
const Tile = ({ s }) => (<div className="mtile"><img src={si(s)} alt={s} /></div>)

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Cross-tool intelligence</div>
            <h1>Unify everything.<br />Answer anything.<br /><span className="gt">Act.</span></h1>
            <p className="sub"><b>Your tools don't talk to each other.</b> SuprAI unifies your tools, data and context into one layer — real answers from real data, and the action to match. Copilot or autopilot.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/pricing">Start free — forever</Link>
              <a className="btn btn-ghost" href="#how">See how it works</a>
            </div>
            <p className="micro">No card required · Free forever · Use it from the AI you already have</p>
          </div>
          <HeroArt />
        </div>
      </header>

      {/* LOGOS */}
      <section className="logos">
        <div className="wrap">
          <p>Works across every tool you already run</p>
          <div className="logo-row">
            <img src={si('shopify')} alt="Shopify" />
            <img src={si('meta')} alt="Meta Ads" />
            <img src={si('googleads')} alt="Google Ads" />
            <img src={si('googleanalytics')} alt="Google Analytics" />
            <img src={si('klaviyo')} alt="Klaviyo" />
            <img src={si('stripe')} alt="Stripe" />
            <img src={si('salesforce')} alt="Salesforce" />
            <img src={si('hubspot')} alt="HubSpot" />
            <img src={si('amazon')} alt="Amazon" />
            <span className="cat-pill">+ Logistics</span>
            <span className="cat-pill">+ RevenueCat</span>
            <span className="cat-pill">+ POS &amp; legacy</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">The problem</div>
          <h2 className="big">Cross-tool coordination is broken.<br /><span className="muted2">You became the glue between your tools.</span></h2>
          <div className="grid-3 mt">
            <div className="card"><div className="ic">{ICON.grid}</div><h3>Scattered everywhere</h3><p>Every answer lives in a different tool — online and offline. Nothing is stitched together.</p></div>
            <div className="card"><div className="ic">{ICON.clock}</div><h3>Hours lost merging</h3><p>Exporting and stitching spreadsheets to answer one question — then doing it again to act.</p></div>
            <div className="card"><div className="ic">{ICON.arrow}</div><h3>Answers ≠ action</h3><p>By the time the analysis is done, the moment's gone. Knowing isn't the edge — acting first is.</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section band-warm" id="how">
        <div className="wrap center">
          <div className="eyebrow">How it works</div>
          <h2 className="big">One layer that understands your data — and acts on it.</h2>
          <p className="lead">SuprAI connects your tools and warehouses, builds a living understanding of what your data means, answers with real numbers, and takes the action. Every cycle makes it sharper.</p>
          <div className="loop">
            <div className="loop-step"><div className="n">01</div><h4>Connect</h4><p>Every tool + warehouse, online and in-store — including the legacy systems others can't reach.</p></div>
            <div className="loop-step"><div className="n">02</div><h4>Understand</h4><p>A unified data + semantic layer learns what your metrics mean and resolves identity across tools.</p></div>
            <div className="loop-step"><div className="n">03</div><h4>Act</h4><p>Answers from real data turn into action — launch the offer, sync the listing, message the team.</p></div>
            <div className="loop-step"><div className="n">04</div><h4>Learn</h4><p>Outcomes feed back. The longer it runs, the smarter it gets — and the harder it is to replace.</p></div>
          </div>
        </div>
      </section>

      {/* MEET THE WORKERS */}
      <section className="section">
        <div className="wrap center">
          <div className="eyebrow">Your AI workers</div>
          <h2 className="big">Specialized workers, ready in minutes</h2>
          <p className="lead">Each worker comes pretrained on real playbooks and the connectors it needs — pick one and it runs, copilot or autopilot.</p>
          <div className="grid-3 mt left">
            <div className="card"><div className="klabel">GROWTH</div><h3>Growth Worker</h3><p>Runs and optimizes ads, finds wasted spend, launches win-backs across your store, ads and CRM.</p></div>
            <div className="card"><div className="klabel">OPERATIONS</div><h3>Ops &amp; Logistics Worker</h3><p>Watches 3PLs, orders and inventory; flags late shipments and stockouts, and acts before they cost you.</p></div>
            <div className="card"><div className="klabel">REVENUE</div><h3>Revenue Worker</h3><p>Joins RevenueCat, billing and usage to predict churn, protect LTV, and trigger upsells automatically.</p></div>
            <div className="card"><div className="klabel">SUPPORT</div><h3>Support Worker</h3><p>Ties tickets to orders, shipments and billing — resolves with full context and triggers the fix.</p></div>
            <div className="card"><div className="klabel">ANALYTICS</div><h3>Analytics Worker</h3><p>Answers any cross-tool question with real numbers, builds reports, and ships them on a schedule.</p></div>
            <div className="card featured"><div className="klabel">CUSTOM</div><h3>Build your own</h3><p>Compose a worker from skills and connectors for the exact job your team runs every week.</p></div>
          </div>
        </div>
      </section>

      {/* ASK -> ACT */}
      <section className="section band-warm">
        <div className="wrap">
          <div className="grid-2 align">
            <div>
              <div className="eyebrow">Answers from real data — not documents</div>
              <h2 className="big">Ask once. It answers across every tool — and acts.</h2>
              <p className="lead mt18">No tab-switching, no exports. SuprAI queries the actual numbers across your stack, shows its work, and does the next step.</p>
              <ul className="lead list-plain mt18">
                <li>✓ Real data, not files or vague summaries</li>
                <li>✓ Patterns surfaced before you ask</li>
                <li>✓ Every answer turns into an action</li>
              </ul>
            </div>
            <div className="illus">§C1 — CHAT ILLUSTRATION (Higgsfield). A single chat panel on a white #FFFFFF card, 1px #EBE2D6 border, 16px radius, NO shadow, NO gradient, on the off-white #FCFAF6 grid stage. Three small dots (#EFD8C2) top-left. User bubble (fill #FBF6EF, ink #1F1813 text): "Which products are shipping late and hurting repeat orders?". Assistant bubble (white) with a #C2410C uppercase tag "SuprAI · Shopify + 3PL + RevenueCat": "3 SKUs from your Mumbai 3PL average 6-day delivery — and those buyers churn 2.3× faster." Then a solid black pill button (#1F1813, white text) "▶ Pause promo &amp; queue win-back". To the right, three faint connector chips (Shopify, a truck/3PL, RevenueCat) joined to the panel by thin 1px ink lines. Camera: 8° isometric tilt, soft zoom on the black action button. Strict palette: #FCFAF6, #F15A22, #1F1813, white. Flat, premium, minimal.</div>
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED (2x2) */}
      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">The platform</div>
          <h2 className="big">Everything you need to act across your tools</h2>
          <div className="grid-2 mt left">
            <div className="feat"><h3>Use it from any AI — no lock-in</h3><p>Run SuprAI inside Claude, ChatGPT or any MCP-compatible assistant, or our own app. Your AI of choice, now able to act across every tool.</p><div className="illus sm">§A2 — three model chips (Claude, OpenAI, Gemini) in white circles, thin 1px ink lines converging into the dark SuprAI core tile; off-white bg, orange dot accents, no gradient.</div></div>
            <div className="feat"><h3>Connect internal &amp; external data</h3><p>Modern APIs, MCP, warehouses, and the legacy + offline systems most tools ignore. If it holds your data, SuprAI sees it.</p>
              <div className="tile-grid" style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12 }}>
                {['shopify', 'googlesheets', 'slack', 'notion', 'hubspot', 'stripe'].map((s) => (<div className="mtile" key={s} style={{ width: 'auto', height: 64 }}><img src={si(s)} alt={s} /></div>))}
              </div>
            </div>
            <div className="feat"><h3>Autopilot the recurring grunt work</h3><p>Hand off boring cross-tool tasks — daily reports, win-back flows, spend reallocation. They run on a schedule or a trigger, in the background.</p><div className="illus sm">§A3 — minimal schedule list on a white card: "Daily report · 8:00 AM", "Win-back · on churn signal", "Spend check · every 6h", each with a small orange #F15A22 status dot; thin dividers, ink text, no gradient.</div></div>
            <div className="feat"><h3>A canvas to orchestrate workflows</h3><p>Chain steps across tools into one repeatable process — draft → generate asset → publish → report. A one-off prompt becomes a process.</p><div className="illus sm">§A4 — node canvas: four rounded ink-outlined nodes "Connect → Understand → Act → Report" joined by thin 1px ink connectors with a small orange cursor; off-white grid bg, no gradient.</div></div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">What you can do</div>
          <h2 className="big">Real questions. Real actions.</h2>
          <p className="lead">Not demos — the everyday cross-tool jobs that used to take a person and five tabs. Ask, and it acts.</p>
          <div className="grid-3 mt">
            <div className="card"><div className="klabel">FIND WASTED SPEND</div><h3>“Where am I burning ad budget?”</h3><p>Joins Meta + Google Ads + Shopify to find campaigns that drive clicks but not repeat buyers — and reallocates the spend.</p></div>
            <div className="card"><div className="klabel">PROTECT REVENUE</div><h3>“Who's about to churn — and why?”</h3><p>Ties RevenueCat + billing + support to spot at-risk cohorts early, then launches a win-back across your channels.</p></div>
            <div className="card"><div className="klabel">FIX OPERATIONS</div><h3>“Which orders are shipping late?”</h3><p>Watches your 3PL + orders, flags the SKUs hurting repeat rate, and pauses their promo before it costs more.</p></div>
            <div className="card"><div className="klabel">MOVE FIRST</div><h3>“What changed since yesterday?”</h3><p>Proactively surfaces the shift across every tool — and drafts the response — before you open a dashboard.</p></div>
            <div className="card"><div className="klabel">SELL MORE</div><h3>“Which cohorts should I upsell?”</h3><p>Segments buyers by behavior across store + CRM, then triggers the offer in your engagement tool.</p></div>
            <div className="card"><div className="klabel">REPORT ITSELF</div><h3>“Send me the weekly numbers.”</h3><p>Builds the cross-tool report on a schedule and drops it in Slack — autopilot, every Monday, no stitching.</p></div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS — marquee */}
      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">Integrations</div>
          <h2 className="big">Connect your whole stack</h2>
          <p className="lead">Hundreds of connectors across ads, commerce, payments, support, data and messaging — plus MCP and the legacy systems others can't reach.</p>
        </div>
        <div className="marquee">
          <div className="mrow a">{[...rowA, ...rowA].map((s, i) => <Tile s={s} key={'a' + i} />)}</div>
          <div className="mrow b">{[...rowB, ...rowB].map((s, i) => <Tile s={s} key={'b' + i} />)}</div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="wrap center">
          <div className="eyebrow">Why SuprAI</div>
          <h2 className="big">Not another dashboard. Not another bot.</h2>
          <div className="grid-3 mt left">
            <div className="card"><div className="ic">{ICON.globe}</div><h3>Connects what others can't</h3><p>Modern APIs, MCP, and the legacy + offline systems most tools ignore.</p></div>
            <div className="card"><div className="ic">{ICON.bolt}</div><h3>It acts, not just answers</h3><p>Analytics tools stop at the chart. SuprAI closes the loop — decision and action in one place.</p></div>
            <div className="card"><div className="ic">{ICON.chart}</div><h3>Smarter every day</h3><p>Maps your tools on day one, then learns from every decision and outcome — intelligence no one can hand back.</p></div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">Enterprise-ready</div>
          <h2 className="big">With enterprise-grade governance and security</h2>
          <div className="grid-3 mt left">
            <div className="card"><h3>Role-based access control</h3><p>Reusable roles, shared credentials and scoped access — agents act only within a user's permissions.</p></div>
            <div className="card"><h3>Private cloud &amp; on-prem</h3><p>Deploy SuprAI in our cloud, your VPC, or fully on-prem.</p></div>
            <div className="card"><h3>Bring your own model key</h3><p>Route premium model usage through your own keys and providers — no vendor lock-in.</p></div>
            <div className="card"><h3>Usage monitoring</h3><p>Track credit, event and tool-call usage in real time; set budgets and quotas to avoid surprises.</p></div>
            <div className="card"><h3>Full audit logging</h3><p>Every answer and action is traceable — back to the data, the definition, and who approved it.</p></div>
            <div className="card"><h3>SSO &amp; SCIM</h3><p>Integrate with your identity provider to extend your system of record to your AI workers.</p></div>
          </div>
        </div>
      </section>

      {/* WORK WHERE YOU WORK */}
      <section className="section">
        <div className="wrap">
          <div className="grid-2 align">
            <div>
              <div className="eyebrow">Meets you where you work</div>
              <h2 className="big">Tag it in Slack. Ask it in Claude. Let it run in the background.</h2>
              <p className="lead mt18">SuprAI lives in the tools your team already opens — chat from Claude or ChatGPT, @mention it in Slack, Teams or WhatsApp, or let workers run on autopilot while you sleep.</p>
              <div className="logo-row left">
                <img src={si('slack')} alt="Slack" />
                <img src={si('whatsapp')} alt="WhatsApp" />
                <img src={si('gmail')} alt="Gmail" />
                <img src={si('anthropic')} alt="Claude" />
                <img src={si('openai')} alt="ChatGPT" />
              </div>
            </div>
            <div className="illus">§C2 — SLACK CHAT ILLUSTRATION (Higgsfield). A Slack-style channel "#growth" rendered on a white #FFFFFF card, 1px #EBE2D6 border, 16px radius, NO shadow, NO gradient. A user message: "@SuprAI which channel had the best ROAS this week?". A reply from a small orange #F15A22 SuprAI avatar: "Meta drove 3.1× ROAS vs Google's 1.8× — but Google's repeat-purchase rate is 2× higher." Below it a solid black pill button (#1F1813, white text) "▶ Shift budget &amp; monitor". Real Slack mark visible top-left. Camera: straight-on, soft zoom toward the reply. Strict palette: #FCFAF6 bg, #F15A22 accent, #1F1813 ink, white surfaces. Flat, premium, minimal.</div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">Why SuprAI, not just…</div>
          <h2 className="big">The only one that does all three</h2>
          <div className="grid-3 mt left">
            <div className="card"><h3>Not just analytics</h3><p>Hex, Lopus and the BI tools answer questions and stop at the chart. SuprAI answers <em>and</em> acts.</p></div>
            <div className="card"><h3>Not just automation</h3><p>Zapier, n8n and the agent builders move data between apps, but don't understand it. SuprAI understands first, then acts.</p></div>
            <div className="card"><h3>Not just search</h3><p>Glean and RAG tools return documents. SuprAI returns the actual numbers — and takes the next step.</p></div>
          </div>
          <p className="lead center mt18">Intelligence + action across every tool — the combination none of them is built to own.</p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="wrap center">
          <div className="eyebrow">Why it matters</div>
          <h2 className="big">The cost of disconnected tools is real</h2>
          <div className="grid-3 mt">
            <div className="card center"><div className="stat-num">6+</div><p style={{ marginTop: 8 }}>tools the average team runs — none of which talk to each other</p></div>
            <div className="card center"><div className="stat-num">~15 hrs</div><p style={{ marginTop: 8 }}>lost per person every week to manual, cross-tool data work</p></div>
            <div className="card center"><div className="stat-num">$52B</div><p style={{ marginTop: 8 }}>AI-agents market by 2030 — value is moving to the layer that coordinates</p></div>
          </div>
          <p className="micro" style={{ marginTop: 16 }}>Sources: industry tooling surveys; MarketsandMarkets / Grand View AI-agents forecasts (2025–2030).</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">From the field</div>
          <h2 className="big">What early teams say</h2>
          <div className="grid-3 mt left">
            <div className="card"><p className="quote">“[ Design-partner quote — add real testimonial when available. ]”</p><p className="quote-by">— [ Name, Role, Brand ]</p></div>
            <div className="card"><p className="quote">“[ Design-partner quote — add real testimonial when available. ]”</p><p className="quote-by">— [ Name, Role, Brand ]</p></div>
            <div className="card"><p className="quote">“[ Design-partner quote — add real testimonial when available. ]”</p><p className="quote-by">— [ Name, Role, Brand ]</p></div>
          </div>
          <p className="micro" style={{ marginTop: 16 }}>Real quotes only — these are placeholders until design-partner results are in.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">FAQ</div>
          <h2 className="big mb20">Questions, answered</h2>
          <details className="faq"><summary>How is this different from an analytics tool like Hex?</summary><p>Analytics tools answer; they stop at the chart. SuprAI answers with real data <em>and</em> acts — it takes the next step across your tools, on copilot or autopilot.</p></details>
          <details className="faq"><summary>Do I need a data warehouse?</summary><p>No. If you have one, SuprAI queries it in place. If you don't — like most commerce teams — SuprAI unifies your tools directly. Either way, connectors are unlimited.</p></details>
          <details className="faq"><summary>Can I use it from Claude or ChatGPT?</summary><p>Yes. SuprAI runs inside Claude, ChatGPT or any MCP-compatible assistant, as well as our own app.</p></details>
          <details className="faq"><summary>Is it safe to let it act?</summary><p>You set the leash. Copilot means you approve every action; autopilot runs the safe, repetitive work on its own. Every action is governed, scoped and audited.</p></details>
          <details className="faq"><summary>How fast can we start?</summary><p>Connect two tools and watch a worker run a real task in minutes. Free forever to start; Starter is free for 15 days.</p></details>
        </div>
      </section>

      {/* BIG BOTTOM CTA ILLUSTRATION BAND */}
      <section className="endcta">
        <div className="wrap">
          <div className="illus">§A9 — BIG BOTTOM CTA ILLUSTRATION (Higgsfield), wide 16:6 banner. Centered dark rounded SuprAI core tile (#1F1813, small white mark). Above it, a radial arc of thin ink ticks (like a speedometer) with 5 real tool logos in white circular chips spaced along the arc (Shopify, HubSpot, Salesforce, Google Ads, Klaviyo), each joined to the core by a thin 1px line. Background: off-white #FCFAF6 with the faint orange grid; one soft solid-orange (#F15A22) halo behind the core (flat, NOT a gradient). Foreground bottom: a small answer card emitting from the core with a black "Act" pill. Camera: straight-on hero framing, gentle zoom. Strict palette: #FCFAF6, #F15A22, #1F1813, white. Flat, premium, minimal, crisp, NO gradients, NO shadows.</div>
          <div className="final-card">
            <div className="eyebrow">See it act on your data</div>
            <h2>Stop being the router. Let SuprAI run it.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two tools and watch a worker run a real task — start to finish, in minutes.</p>
            <div className="hero-cta cc">
              <Link className="btn btn-primary" to="/pricing">Start free — forever</Link>
              <a className="btn btn-ghost" href="#">Book a demo</a>
            </div>
            <div className="pillrow">
              <span className="tag-pill">Cross-tool intelligence</span>
              <span className="tag-pill">Copilot &amp; autopilot</span>
              <span className="tag-pill">Acts, not just answers</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
