import Reveal from './Reveal.jsx'
import BrandImg from './BrandImg.jsx'

/* The named control plane. Every subsystem maps to a real feature in
   SuprAI_Features.docx — nothing invented, no metrics, no badges. */
const SYS = [
  ['01', 'Connector Fabric', 'Connect', <>One fabric that reaches <b>every kind of system</b> — your apps, your files, your databases, and even the older tools that never had an easy way in.</>],
  ['02', 'Entity Resolution', 'Join', <>Recognises the same customer, person or order <b>across every connected tool</b>, and joins them into one clear answer — not six scattered lookups.</>],
  ['03', 'Model Router', 'Route', <>Picks <b>the right AI for each job</b> — a fast one for routine work, a powerful one when it counts. Bring your own GPT, Claude or Gemini; never locked in.</>],
  ['04', 'Permission Mirror', 'Scope', <>Keeps <b>each tool&rsquo;s own access rules</b>. No one sees through SuprAI what they couldn&rsquo;t see in the tool itself — shaped by person and team.</>],
  ['05', 'Action Engine', 'Act', <>Does the work in your tools — <b>on your say-so, or on autopilot</b>. Every action is recorded, and undone with one click wherever the tool allows.</>],
  ['06', 'Agent Runtime', 'Automate', <>Named, shared agents run the work that repeats — on a trigger or a schedule — <b>carrying the full story</b> and reporting back what they did.</>],
  ['07', 'Control Plane', 'Oversee', <>One place for <b>every connection, permission, agent and action</b> — all on the record, all run by a single admin.</>],
  ['08', 'Company Memory', 'Learn', <>What one person teaches it, <b>the whole company keeps</b>. It reads the right information once and reuses it — so every week builds on the last.</>],
]

function ArchFlow({ down }) {
  // animated dashed dataflow between bands — reuses the dash technique site-wide
  const xs = [55, 150, 215, 280, 375]
  return (
    <div className="arch-flow" aria-hidden="true">
      <svg viewBox="0 0 430 30" preserveAspectRatio="none">
        {xs.map((x, i) => {
          const cx = 215
          const x2 = down ? x + (x - cx) * 0.18 : cx + (x - cx) * 0.82
          return (
            <path key={x} className={i % 2 ? 'fl live' : 'fl'} d={`M${x} 0 C ${x} 14, ${x2} 16, ${x2} 30`} style={{ animationDelay: `${i * 0.13}s` }} />
          )
        })}
      </svg>
    </div>
  )
}

export default function Architecture() {
  return (
    <div className="arch-wrap">
      {/* layered diagram: surfaces → control plane → your systems */}
      <Reveal as="div" className="arch-diagram">
        <div className="arch-band">
          <div className="ab-k">Where your team works</div>
          <div className="arch-row">
            <span className="arch-pill"><BrandImg slug="slack" />Slack</span>
            <span className="arch-pill"><BrandImg slug="whatsapp" />WhatsApp</span>
            <span className="arch-pill"><span className="ic">◷</span>Browser</span>
            <span className="arch-pill"><BrandImg slug="openai" /><BrandImg slug="anthropic" />Any model</span>
          </div>
        </div>

        <ArchFlow />

        <div className="arch-engine">
          <div className="ab-k">The SuprAI <b>Control Plane</b></div>
          <div className="arch-sub">
            <span className="arch-subpill">Connector Fabric</span>
            <span className="arch-subpill">Entity Resolution</span>
            <span className="arch-subpill">Model Router</span>
            <span className="arch-subpill">Permission Mirror</span>
            <span className="arch-subpill">Action Engine</span>
            <span className="arch-subpill">Agent Runtime</span>
          </div>
        </div>

        <ArchFlow down />

        <div className="arch-band">
          <div className="ab-k">Everything your company runs on</div>
          <div className="arch-row">
            <span className="arch-pill"><BrandImg slug="salesforce" />Your apps</span>
            <span className="arch-pill"><span className="ic">⚡</span>Live updates</span>
            <span className="arch-pill"><BrandImg slug="notion" />Files &amp; docs</span>
            <span className="arch-pill"><BrandImg slug="postgresql" />Databases</span>
            <span className="arch-pill"><BrandImg slug="snowflake" />Data vaults</span>
            <span className="arch-pill"><span className="ic">⊟</span>Older systems</span>
          </div>
        </div>
      </Reveal>

      {/* named subsystems with one precise sentence each */}
      <div className="arch-list">
        {SYS.map(([no, name, tag, body], i) => (
          <Reveal as="div" className="arch-sys" key={name} d={Math.min((i % 4) + 1, 4)}>
            <div className="as-no">{no}</div>
            <div>
              <h4>{name} <span className="tag">{tag}</span></h4>
              <p>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
