import { useState } from 'react'

const si = (s) => `https://cdn.simpleicons.org/${s}`

// The hero teammate-chat: someone asks in plain words, SuprAI does the work
// across apps and offers the final action. Click "Send it" to complete.
export default function TeammateChat({ inHero = false }) {
  const [sent, setSent] = useState(false)
  return (
    <div className={`tmcard${inHero ? ' in-hero' : ''}`}>
      <div className="tm-top">
        <span className="tm-dot" /><span className="tm-dot" /><span className="tm-dot" />
        <span className="tm-chan">#people-ops</span>
      </div>

      <div className="tm-msg">
        <span className="tm-av user">PA</span>
        <div className="tm-body">
          <div className="tm-name">Priya A. <span>9:24</span></div>
          <div className="tm-text"><b>@SuprAI</b> set up the new hire in Google &amp; send the welcome.</div>
        </div>
      </div>

      <div className="tm-msg">
        <span className="tm-av bot">S</span>
        <div className="tm-body">
          <div className="tm-name">SuprAI <span>Google Workspace · Gmail</span></div>
          <div className="tm-text">Done — created the account and added the groups. Welcome email is drafted.</div>
          <div className="tm-steps">
            <div className="tm-step"><span className="tick">✓</span>Created account for dev@acme.co</div>
            <div className="tm-step"><span className="tick">✓</span>Added to Engineering · All-staff · GitHub</div>
            <div className="tm-step"><span className="tick">✓</span>Drafted the welcome email</div>
          </div>
          {sent ? (
            <button className="tm-act" style={{ background: '#1f7a3f' }} disabled>
              <span className="pl" style={{ color: '#bfe8cd' }}>✓</span> Sent — logged to the audit trail
            </button>
          ) : (
            <button className="tm-act" onClick={() => setSent(true)}>
              <span className="pl">▶</span> Send it
            </button>
          )}
          <div className="tm-chips">
            <span className="tm-chip"><img src={si('google')} alt="" />Google</span>
            <span className="tm-chip"><img src={si('gmail')} alt="" />Gmail</span>
            <span className="tm-chip"><img src={si('github')} alt="" />GitHub</span>
          </div>
        </div>
      </div>
    </div>
  )
}
