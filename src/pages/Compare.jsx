import { Link } from 'react-router-dom'
import { comparisons, comparisonOrder } from '../data/comparisons.js'
import PageMeta from '../components/PageMeta.jsx'

export default function Compare() {
  return (
    <>
      <PageMeta title="Compare" description="Most AI tools give each person an assistant. SuprAI is the system underneath the whole company — connecting every tool, working with any AI, and acting only where someone’s allowed. A fair read of how it compares." />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Comparisons</div>
          <h1>SuprAI vs other alternatives</h1>
          <p className="lead">Most AI tools give each person an assistant. SuprAI is the system underneath the whole company — connecting every tool, joining your data, working with any AI, and acting only where someone’s allowed. Here’s a fair read of how it compares.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="grid-3">
            {comparisonOrder.map((slug) => (
              <Link className="sol" to={`/compare/${slug}`} key={slug}>
                <div className="k">COMPARE</div>
                <h3>SuprAI vs {comparisons[slug].name}</h3>
                <p>{comparisons[slug].sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="endcta">
        <div className="wrap">
          <div className="final-card">
            <div className="kicker" style={{ justifyContent: 'center' }}>Get started</div>
            <h2>See it on your own stack.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two apps and watch SuprAI run a real task, start to finish.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href="#book">Book a demo</a>
              <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
