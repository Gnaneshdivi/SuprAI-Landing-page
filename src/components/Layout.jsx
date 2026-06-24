import { Outlet, NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AskAI from './AskAI'

const departments = [['All teams', 'all-teams'], ['Growth & Marketing', 'growth-marketing'], ['Sales', 'sales'], ['Support', 'support'], ['Operations', 'operations'], ['Engineering', 'engineering'], ['Finance', 'finance'], ['Analytics', 'analytics']]
const industries = [['D2C & Ecommerce', 'd2c-ecommerce'], ['Retail & QSR', 'retail-qsr'], ['Subscriptions & SaaS', 'subscriptions-saas'], ['Marketplaces', 'marketplaces'], ['Logistics', 'logistics'], ['Financial services', 'financial-services']]

const product = [
  ['/#ask', '◎', 'Ask', 'Answers across every app — real numbers, with sources.'],
  ['/#act', '↗', 'Act', 'It does the work in your tools — drafts, updates, sends.'],
  ['/#automate', '⟳', 'Automate', 'Agents run the work your team repeats, on a schedule.'],
  ['/#security', '🔒', 'Security', 'Permission-aware access, full audit trail, compliance-ready.'],
  ['/#apps', '⊞', 'Apps & Actions', 'Connect every app; unlock the actions it can take.'],
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <div className="announce">New — put every team on one AI. <b>Ask, act and automate</b> across your apps, run by one admin.</div>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-in">
          <Link className="logo" to="/">Supr<span>AI</span></Link>
          <div className="nav-links">
            <div className="has-mega">
              <Link className="navtrigger" to="/">Product <span className="car">▾</span></Link>
              <div className="mega wide">
                {product.map(([href, ic, t, d]) => (
                  <a className="mega-feature" href={href} key={t}>
                    <span className="mf-ic">{ic}</span>
                    <span><span className="mf-t">{t}</span><span className="mf-d" style={{ display: 'block' }}>{d}</span></span>
                  </a>
                ))}
              </div>
            </div>
            <div className="has-mega">
              <Link className="navtrigger" to="/solutions">Solutions <span className="car">▾</span></Link>
              <div className="mega">
                <div className="mega-grid">
                  <div>
                    <div className="mega-h">By team</div>
                    {departments.map(([t, slug]) => (
                      <Link key={slug} to={`/solutions/${slug}`}><span className="mi">·</span>{t}</Link>
                    ))}
                  </div>
                  <div>
                    <div className="mega-h">By industry</div>
                    {industries.map(([t, slug]) => (
                      <Link key={slug} to={`/solutions/${slug}`}><span className="mi">·</span>{t}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/compare">Compare</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">Company</NavLink>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            <a className="btn btn-primary" href="#book">Book a demo</a>
          </div>
        </div>
      </nav>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" to="/">Supr<span>AI</span></Link>
            <p style={{ marginTop: 12, maxWidth: 300, fontSize: 14.5 }}>The AI operating system for your company. One place to ask, act, and automate — for every team.</p>
          </div>
          <div>
            <h5>Product</h5>
            <a href="/#ask">Ask</a>
            <a href="/#act">Act</a>
            <a href="/#automate">Automate</a>
            <a href="/#security">Security</a>
            <a href="/#apps">Apps &amp; Actions</a>
          </div>
          <div>
            <h5>Solutions</h5>
            <Link to="/solutions">By team</Link>
            <Link to="/solutions">By industry</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link to="/about">About</Link>
            <Link to="/about#vision">Vision</Link>
            <a href="#book">Book a demo</a>
            <Link to="/pricing">Start free</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 SuprAI</span>
          <span>The AI operating system for your company.</span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <AskAI />
    </>
  )
}
