import { useParams, Link, Navigate } from 'react-router-dom'
import { solutions, teamOrder, industryOrder } from '../data/solutions.js'
import { WORKFLOWS, SOLUTION_WORKFLOWS } from '../data/workflows.js'
import BrandImg from '../components/BrandImg.jsx'

export default function SolutionDetail() {
  const { slug } = useParams()
  const s = solutions[slug]
  if (!s) return <Navigate to="/solutions" replace />

  const siblings = (s.kind === 'Industries' ? industryOrder : teamOrder).filter((x) => x !== slug)
  const workflows = (SOLUTION_WORKFLOWS[slug] || []).filter((x) => WORKFLOWS[x])

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">{s.kind} · {s.name}</div>
          <h1>{s.headline}</h1>
          <p className="lead">{s.sub}</p>
          <div className="hero-cta cc">
            <a className="btn btn-primary" href="#">Book a demo</a>
            <Link className="btn btn-ghost" to="/pricing">Start free</Link>
          </div>
        </div>
      </section>

      {workflows.length > 0 && (
        <section className="section" id="workflows">
          <div className="wrap">
            <div className="eyebrow">Workflows</div>
            <h2 className="big">What SuprAI runs for {s.name.toLowerCase()}</h2>
            <p className="lead" style={{ marginTop: 14 }}>Real workflows it runs end-to-end — including the portals nothing else can reach.</p>
            <div className="wf-cards mt">
              {workflows.map((x) => {
                const w = WORKFLOWS[x]
                return (
                  <Link className="wf-card2" to={`/solutions/${slug}/${x}`} key={x}>
                    <div className="wf-card2-tags"><span className="scn-tag fn">{w.fn}</span></div>
                    <h3>{w.title}</h3>
                    <p>{w.summary}</p>
                    <div className="wf-tools">{w.tools.map((t) => <BrandImg key={t} slug={t} />)}</div>
                    <div className="wf-card2-foot"><span className="wf-kpi">moves {w.kpi}</span><span className="wf-arrow">See the use case →</span></div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">Connectors</div>
          <h2 className="big">Plugs into the apps you already run</h2>
          <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 14 }}>Your apps, files and databases — and even the older systems without an easy way in.</p>
          <div className="logo-row mt">
            {s.connectors.map((c) => (<BrandImg key={c} slug={c} />))}
            <span className="cat-pill">+ unlimited apps</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap center">
          <div className="eyebrow">Explore</div>
          <h2 className="big mb20">More {s.kind.toLowerCase()}</h2>
          <div className="logo-row" style={{ gap: '10px' }}>
            {siblings.map((x) => (
              <Link key={x} className="cat-pill" to={`/solutions/${x}`}>{solutions[x].name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="endcta">
        <div className="wrap">
          <div className="final-card">
            <div className="eyebrow">Get started</div>
            <h2>{s.cta || 'See it act on your data.'}</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Connect two apps and watch SuprAI ask, act and automate a real task — start to finish, in minutes.</p>
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
