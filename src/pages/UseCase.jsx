import { useParams, Link, Navigate } from 'react-router-dom'
import { solutions } from '../data/solutions.js'
import { WORKFLOWS, SOLUTION_WORKFLOWS } from '../data/workflows.js'
import { DEMO_URL } from '../components/Layout.jsx'
import BrandImg from '../components/BrandImg.jsx'

export default function UseCase() {
  const { slug, wf } = useParams()
  const sol = solutions[slug]
  const w = WORKFLOWS[wf]
  if (!sol || !w) return <Navigate to="/solutions" replace />

  const related = (SOLUTION_WORKFLOWS[slug] || []).filter((x) => x !== wf && WORKFLOWS[x]).slice(0, 3)

  return (
    <>
      <section className="phero uc-hero">
        <div className="wrap">
          <Link className="uc-back" to={`/solutions/${slug}`}>← {sol.name}</Link>
          <div className="uc-tags">
            <span className="scn-tag fn">{w.fn}</span>
            <span className="scn-tag">Owner: {w.owner}</span>
            <span className="scn-tag">KPI: {w.kpi}</span>
          </div>
          <h1>{w.title}</h1>
          <p className="lead">{w.summary}</p>
          <div className="uc-trigger"><b>Trigger</b> · {w.trigger}</div>
          <div className="uc-tools"><span className="uc-tools-k">Tools involved</span>{w.tools.map((t) => <BrandImg key={t} slug={t} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="uc-grid">
            <div className="uc-col problem">
              <div className="uc-k">The problem today</div>
              <p>{w.problem}</p>
            </div>
            <div className="uc-col solution">
              <div className="uc-k does">What SuprAI does</div>
              <ul className="uc-steps">
                {w.steps.map((s) => <li key={s}><span className="uc-tick">✓</span>{s}</li>)}
              </ul>
            </div>
          </div>

          <div className="uc-outcome">
            <span className="uc-out-k">Outcome</span>
            <p>{w.outcome}</p>
            <span className="uc-kpi">moves: {w.kpi}</span>
          </div>

          <div className="uc-prompt">
            <div className="uc-prompt-k">Describe it once</div>
            <p>“{w.prompt}”</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section band-warm">
          <div className="wrap">
            <div className="eyebrow">More for {sol.name}</div>
            <h2 className="big mb20">Related workflows</h2>
            <div className="grid-3 mt">
              {related.map((x) => (
                <Link className="sol" to={`/solutions/${slug}/${x}`} key={x}>
                  <div className="k">{WORKFLOWS[x].fn.toUpperCase()}</div>
                  <h3>{WORKFLOWS[x].title}</h3>
                  <p>{WORKFLOWS[x].summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="endcta">
        <div className="wrap">
          <div className="final-card">
            <div className="eyebrow">Get started</div>
            <h2>See it run this workflow in under a week.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Pick one painful, high-volume process. We connect SuprAI, run it end-to-end under your governance, and measure the KPI it moves from day one.</p>
            <div className="hero-cta cc">
              <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <Link className="btn btn-ghost" to={`/solutions/${slug}`}>See all {sol.name} workflows</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
