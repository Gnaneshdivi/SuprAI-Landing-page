import Reveal from './Reveal.jsx'

/* The onboarding pipeline, made visible. Straight from SuprAI_Features.docx §1d —
   every source comes online the same way, usually in minutes. */
const STEPS = [
  ['1', 'Connect', 'Sign in once through the tool’s own secure login — the one your team already uses. No password sharing.', 'its own login'],
  ['2', 'Understand', 'It learns how that tool is laid out, and recognises the same person, customer or order across your other tools.', 'joins your data'],
  ['3', 'Keep in sync', 'It reads the data, makes your files answerable, and quietly keeps everything up to date.', 'always fresh'],
  ['4', 'Apply your rules', 'It keeps the tool’s own access rules, so no one sees through SuprAI what they couldn’t see in the tool.', 'your rules, kept'],
  ['5', 'Go live', 'Now you can ask it questions and let it act — no data team, no big project.', 'minutes, not months'],
]

export default function Pipeline() {
  return (
    <div className="pipe">
      {STEPS.map(([n, step, body, meta], i) => (
        <Reveal as="div" className="pipe-step" key={step} d={Math.min(i + 1, 5)}>
          {i < STEPS.length - 1 && <span className="pipe-arrow">→</span>}
          <div className="pn"><span className="dot">{n}</span><span className="step">{step}</span></div>
          <p>{body}</p>
          <div className="meta">{meta}</div>
        </Reveal>
      ))}
    </div>
  )
}
