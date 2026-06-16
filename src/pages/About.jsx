import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1>We're building the layer<br />that makes your tools act together.</h1>
          <p className="lead">Every company runs on a dozen tools that don't talk. SuprAI unifies them into one intelligence — and acts on it. So people spend their time on judgment, not stitching tabs.</p>
        </div>
      </section>

      <section className="wrap" style={{ padding: '30px 28px 0' }}>
        <div className="illus sm">§A6 — warm, human mission illustration in light pastel with orange-gradient accent (people + connected tools motif). Use real team photos when ready — no AI-generated faces.</div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid-2" style={{ gap: 46, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">The problem we solve</div>
              <h2 className="big">Intelligence lives between tools — and no one owns it.</h2>
            </div>
            <div>
              <p className="lead maxnone">Each tool got its own AI, but a business runs on many tools, and none of them coordinate. So people become the router — exporting, merging and tab-switching to answer one question, then doing it again to act.</p>
              <p className="lead maxnone" style={{ marginTop: 14 }}>SuprAI sits on top of the stack you already run, unifies the data and context no one's stitching together, answers with real numbers, and takes the action. It doesn't replace your tools — it makes them act together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-warm" id="vision">
        <div className="wrap">
          <div className="eyebrow">Where we're going</div>
          <h2 className="big">From coordinating tools to coordinating agents</h2>
          <p className="lead">First, every tool got an AI. Next, every tool gets its own agent — and they'll be just as siloed. SuprAI is the layer that orchestrates across them.</p>
          <div className="grid-3 mt">
            <div className="card"><h3>Unify the tools</h3><p>Connect everything you run — modern, legacy and offline — into one living layer that understands your data.</p></div>
            <div className="card"><h3>Orchestrate the agents</h3><p>As incumbents ship agents, we don't compete with them — we coordinate them, condensing their responses into one answer and action. The conductor, not another instrument.</p></div>
            <div className="card"><h3>Compound the intelligence</h3><p>Every decision and outcome makes your layer sharper. The longer it runs, the more it knows your business — and the harder it is to replace.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">What we believe</div>
          <h2 className="big">How we build</h2>
          <div className="grid-3 mt">
            <div className="card peach"><h3>Act, don't just answer</h3><p>An insight that doesn't turn into action is a tab you still have to open. We close the loop.</p></div>
            <div className="card lilac"><h3>Real data, shown openly</h3><p>Answers come from your actual numbers, with the work shown. Trust is earned, not claimed.</p></div>
            <div className="card sky"><h3>Sit on top, never lock in</h3><p>Keep your tools and your AI of choice. We're the neutral layer above them — open and portable.</p></div>
          </div>
        </div>
      </section>

      <section className="section band-warm">
        <div className="wrap center">
          <div className="eyebrow">The team</div>
          <h2 className="big">Operators and builders</h2>
          <p className="lead">A small team that has lived the pain of fragmented tools first-hand.</p>
          <div className="illus sm mt">§A7 — team grid placeholder: real team photos (do not use AI-generated faces). Swap in actual headshots when ready.</div>
        </div>
      </section>

      <section className="section final">
        <div className="wrap">
          <div className="final-card">
            <h2>Come build the layer with us.</h2>
            <p className="lead" style={{ margin: '18px auto 0' }}>Try it on your own stack, or join the team.</p>
            <div className="hero-cta cc">
              <Link className="btn btn-primary" to="/pricing">Start free</Link>
              <a className="btn btn-ghost" href="#">See open roles</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
