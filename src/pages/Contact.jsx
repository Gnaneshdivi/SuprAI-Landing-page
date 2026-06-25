import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DEMO_URL } from '../components/Layout.jsx'
import PageMeta from '../components/PageMeta.jsx'

const WA_PHONE = '918056088288'

export default function Contact() {
  const [f, setF] = useState({ name: '', company: '', email: '', message: '' })
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }))

  const waHref = () => {
    const lines = [
      'Hi SuprAI team,',
      '',
      `Name: ${f.name}`,
      `Company: ${f.company}`,
      `Email: ${f.email}`,
      '',
      f.message,
    ].join('\n')
    return `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${encodeURIComponent(lines)}&type=phone_number&app_absent=0`
  }

  return (
    <>
      <PageMeta title="Contact" description="Tell us what your team is trying to automate. We’ll show you SuprAI running it on your own stack — usually within a week. Book a demo or message us on WhatsApp." />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Let’s talk.</h1>
          <p className="lead">Tell us what your team is trying to automate. We’ll show you SuprAI running it on your own stack — usually within a week.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="contactx">
            <form
              className="contact-form"
              onSubmit={(e) => { e.preventDefault(); window.open(waHref(), '_blank', 'noopener') }}
            >
              <label>Name<input value={f.name} onChange={set('name')} placeholder="Your name" required /></label>
              <label>Company<input value={f.company} onChange={set('company')} placeholder="Company name" /></label>
              <label>Work email<input type="email" value={f.email} onChange={set('email')} placeholder="you@company.com" required /></label>
              <label>What do you want to automate?<textarea value={f.message} onChange={set('message')} rows={4} placeholder="e.g. reconcile marketplace settlements and chase short-payments" /></label>
              <button className="btn btn-primary" type="submit">Send on WhatsApp →</button>
              <span className="contact-note">Opens WhatsApp with your message ready to send — no inbox to wait on.</span>
            </form>

            <aside className="contact-side">
              <div className="contact-card">
                <h4>Book a demo</h4>
                <p>See SuprAI act on a real workflow, live on your stack.</p>
                <a className="btn btn-ghost" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              </div>
              <div className="contact-card">
                <h4>WhatsApp us</h4>
                <p>+91 80560 88288 — fastest way to reach the team.</p>
                <a className="btn btn-ghost" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Message us</a>
              </div>
              <div className="contact-card">
                <h4>Start free</h4>
                <p>Connect two apps and put your first agent to work today.</p>
                <Link className="btn btn-ghost" to="/pricing">Start free</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
