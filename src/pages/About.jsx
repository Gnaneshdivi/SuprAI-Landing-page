import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'

export default function About() {
  return (
    <>
      <PageMeta title="About" description="Every team is using AI. No company is running on it. SuprAI brings every team’s apps, answers and agents into one place — the shift from people-driven work to system-driven work." />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1>We're building the AI operating<br />system for your company.</h1>
          <p className="lead">Every team is using AI. No company is running on it. SuprAI brings every team's apps, answers and agents into one place — so the whole company can Ask, Act and Automate as one. The shift from people-driven work to system-driven work.</p>
        </div>
      </section>

      <section className="wrap" style={{ padding: '10px 28px 0' }} />

      <section className="section">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 46, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">The problem we solve</div>
              <h2 className="big">Every team is using AI. No company is running on it.</h2>
            </div>
            <div>
              <p className="lead maxnone">Each app got its own AI, but a company runs on many apps, and none of them work together. So people do the work between them — exporting, merging and tab-switching to answer one question, then doing it again to act.</p>
              <p className="lead maxnone" style={{ marginTop: 14 }}>SuprAI is one system the whole company shares. It connects the apps you already run, answers anything with real numbers and sources, does the work in your tools, and lets agents run what your teams repeat. It doesn't replace your apps — it puts every team on one AI, run by one admin.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-warm" id="vision">
        <div className="wrap">
          <div className="eyebrow">Where we're going</div>
          <h2 className="big">From people-driven work to system-driven work</h2>
          <p className="lead">First, every app got an AI. Next, every team gets agents — and they'll be just as siloed. SuprAI is the one system every team shares, so the company moves at the pace of AI, not the pace of people.</p>
          <div className="grid-3 mt">
            <div className="card"><h3>One system, every team</h3><p>Connect every app you run — modern, legacy and offline — so finance, sales, ops, support, growth and engineering all ask, act and automate in one place.</p></div>
            <div className="card"><h3>Run by one admin</h3><p>Permission-aware access, a full audit trail, compliance-ready. Enterprise-grade from day one, without the enterprise project — set up and controlled by one admin.</p></div>
            <div className="card"><h3>Moves at the pace of AI</h3><p>Every decision and outcome makes the system sharper, and it powers any AI — GPT, Claude or Gemini. The longer it runs, the more it knows your business.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">What we believe</div>
          <h2 className="big">How we build</h2>
          <p className="lead">We build the system underneath, not a chat box on top — a set of working parts that connect your tools, join your data, pick the right AI, act on your behalf and keep it all on the record. The beliefs below decide how each one works.</p>
          <div className="grid-3 mt">
            <div className="card peach"><h3>Act, don't just answer</h3><p>An answer that doesn't turn into action is a tab you still have to open. The Action Engine does the work in your tools — Ask, then Act, then Automate — scoped to your role and logged.</p></div>
            <div className="card lilac"><h3>Real data, shown openly</h3><p>Answers come from your actual numbers, joined across tools by Entity Resolution, with the sources shown and a full audit trail. Trust is earned, not claimed.</p></div>
            <div className="card sky"><h3>Control, never lock-in</h3><p>Keep your apps and your AI of choice — the Model Router runs any model on your own keys. The Permission Mirror means your access rules, not ours. Open and portable.</p></div>
          </div>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">The team</div>
          <h2 className="big">Operators and builders</h2>
          <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>A small team that has lived the pain of fragmented tools first-hand — and decided to build the system that ends it.</p>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <h2>Come build the AI operating system with us.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>See it on your own stack, or join the team.</p>
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
