import Reveal from './Reveal.jsx'

/* Show, don't tell — but in plain words. One real question, and the named
   subsystems that quietly handle it. No code, no jargon; the shape of the work. */
const STEPS = [
  ['Someone asks', null, <>&ldquo;What did we spend on tools last month?&rdquo; <span className="et-who">— Priya, Finance</span></>, true],
  ['Permission Mirror', 'Checks', <>Confirms Priya&rsquo;s role can see finance — and nothing she can&rsquo;t.</>],
  ['Connector Fabric', 'Gathers', <>Pulls the live numbers from <b>Stripe</b>, <b>QuickBooks</b> and 14 more places.</>],
  ['Entity Resolution', 'Joins', <>Lines them all up into one figure: <b>$48,210</b> across 23 tools, up 12%.</>],
  ['Action Engine', 'Offers', <>Drafts a summary to post in <b>#finance</b> — ready when she says go.</>],
  ['Control Plane', 'Records', <>Logs who asked, what happened and when — on the record, automatically.</>],
]

export default function ExecTrace() {
  return (
    <Reveal as="div" className="trace">
      <div className="trace-bar">
        <span className="d" style={{ background: '#ff5f57' }} />
        <span className="d" style={{ background: '#febc2e' }} />
        <span className="d" style={{ background: '#28c840' }} />
        <span className="lbl">What happens when someone asks</span>
        <span className="live">live</span>
      </div>
      <div className="trace-steps">
        {STEPS.map(([name, verb, body, isAsk], i) => (
          <div className={`et-step${isAsk ? ' ask' : ''}`} key={i}>
            <span className="et-rail"><span className="et-node">{isAsk ? '?' : '✓'}</span></span>
            <div className="et-body">
              <div className="et-head">
                <span className="et-name">{name}</span>
                {verb && <span className="et-verb">{verb}</span>}
              </div>
              <div className="et-text">{body}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="trace-foot">
        <b>Every</b> question takes the same path — checked, gathered, joined, acted on, and recorded.
      </div>
    </Reveal>
  )
}
