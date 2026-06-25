import { useParams, Link, Navigate } from 'react-router-dom'
import { comparisons, comparisonOrder } from '../data/comparisons.js'
import PageMeta from '../components/PageMeta.jsx'

const MARK = { y: '✓', p: '~', n: '–' }

export default function CompareDetail() {
  const { slug } = useParams()
  const c = comparisons[slug]
  if (!c) return <Navigate to="/compare" replace />
  const others = comparisonOrder.filter((s) => s !== slug)

  return (
    <>
      <PageMeta title={`SuprAI vs ${c.name}`} description={c.sub} />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Comparison</div>
          <h1>SuprAI vs {c.name}</h1>
          <p className="lead">{c.sub}</p>
          <div className="hero-cta cc">
            <a className="btn btn-primary" href="#book">Book a demo</a>
            <Link className="btn btn-ghost" to="/pricing">Start free</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <p className="lead cmp-intro">{c.intro}</p>

          <div className="cmp">
            <div className="cmp-row cmp-head">
              <div>Capability</div>
              <div className="us">SuprAI</div>
              <div>{c.name}</div>
            </div>
            {c.rows.map(([feat, us, them]) => (
              <div className="cmp-row" key={feat}>
                <div className="cmp-feat">{feat}</div>
                <div className="cmp-cell cmp-us"><span className={`cmp-mark ${us[0]}`}>{MARK[us[0]]}</span>{us[1]}</div>
                <div className="cmp-cell"><span className={`cmp-mark ${them[0]}`}>{MARK[them[0]]}</span>{them[1]}</div>
              </div>
            ))}
          </div>
          <p className="micro" style={{ marginTop: 16 }}>✓ built for this · ~ partial or indirect · – not the focus. A fair read of where each tool is strongest.</p>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap center">
          <div className="kicker" style={{ justifyContent: 'center' }}>Keep comparing</div>
          <h2 className="xl mb20">Other comparisons</h2>
          <div className="logo-row" style={{ gap: 10 }}>
            {others.map((s) => (
              <Link key={s} className="cat-pill" to={`/compare/${s}`}>SuprAI vs {comparisons[s].name}</Link>
            ))}
            <Link className="cat-pill" to="/compare">All alternatives</Link>
          </div>
        </div>
      </section>

      <section className="endcta" id="book">
        <div className="wrap">
          <div className="final-card">
            <div className="kicker" style={{ justifyContent: 'center' }}>Get started</div>
            <h2>Give your company its AI operating system.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two apps and watch it run a real task, start to finish — in minutes.</p>
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
