import { useParams, Link, Navigate } from 'react-router-dom'
import { solutions, teamOrder, industryOrder } from '../data/solutions.js'
import BrandImg from '../components/BrandImg.jsx'

export default function SolutionDetail() {
  const { slug } = useParams()
  const s = solutions[slug]
  if (!s) return <Navigate to="/solutions" replace />

  const siblings = (s.kind === 'Industries' ? industryOrder : teamOrder).filter((x) => x !== slug)

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

      <section className="section band-warm">
        <div className="wrap">
          <div className="eyebrow">The problem</div>
          <h2 className="big maxnone" style={{ maxWidth: 800 }}>{s.problem}</h2>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">Ask · Act · Automate</div>
          <h2 className="big">What it does for {s.name.toLowerCase()}</h2>
          <div className="grid-3 mt">
            {s.jobs.map((j) => (
              <div className="card" key={j.t}><h3>{j.t}</h3><p>{j.b}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">Apps it plugs into · Connector Fabric</div>
          <h2 className="big">Plugs into the apps you already run</h2>
          <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 14 }}>Connected through the Connector Fabric, with each tool’s own secure login — your apps, your files, your databases, and even the older systems without an easy way in.</p>
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
