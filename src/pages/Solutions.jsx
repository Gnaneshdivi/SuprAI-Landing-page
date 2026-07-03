import PageMeta from '../components/PageMeta.jsx'
import WorkflowLibrary from './Library.jsx'

export default function Solutions() {
  return (
    <>
      <PageMeta title="Solutions & workflows" description="One AI for every team and industry. Browse the workflows SuprAI runs end-to-end — filter by team, industry and the tools you already use." />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Solutions</div>
          <h1>One operating system. Every team.</h1>
          <p className="lead">Every team’s apps, answers and agents in one place. Pick your team or your industry — the system is the same, the playbooks are tuned.</p>
          <div className="hero-cta cc">
            <a className="btn btn-primary" href="#library">Browse all workflows</a>
            <a className="btn btn-ghost" href="#">Book a demo</a>
          </div>
        </div>
      </section>

      <WorkflowLibrary />
    </>
  )
}
