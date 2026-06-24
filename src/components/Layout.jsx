import { Outlet, NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AskAI from './AskAI'
import Logo from './Logo.jsx'

export const DEMO_URL = 'https://api.whatsapp.com/send/?phone=918056088288&text=Hey%2C+I+just+checked+your+website+and+would+like+to+know+more+about+SuprEngage.+Can+we+schedule+a+meeting%3F&type=phone_number&app_absent=0'

const departments = [['All teams', 'all-teams'], ['Growth & Marketing', 'growth-marketing'], ['Sales', 'sales'], ['Support', 'support'], ['Operations', 'operations'], ['Engineering', 'engineering'], ['Finance', 'finance'], ['Analytics', 'analytics']]
const industries = [['D2C & Ecommerce', 'd2c-ecommerce'], ['Retail & QSR', 'retail-qsr'], ['Subscriptions & SaaS', 'subscriptions-saas'], ['Marketplaces', 'marketplaces'], ['Logistics', 'logistics'], ['Financial services', 'financial-services']]

const product = [
  ['/#grid', '⊞', 'The grid', 'Every tool you run — in one grid, one control center.'],
  ['/#grid', '◎', 'Ask', 'Answers across every app — real numbers, with sources.'],
  ['/#grid', '↗', 'Act', 'Typed, role-scoped, reversible actions across your tools.'],
  ['/#control', '⟳', 'Automate', 'Durable, scheduled and event-driven agents that report back.'],
  ['/#grid', '◈', 'Context', 'One unified context, resolved and kept current across every app.'],
  ['/#control', '🔒', 'Control', 'Org-wide auth, roles, scoped keys, and full request logs.'],
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <div className="announce">New · One shared context for your company across <b>100+ apps</b>, always in sync.</div>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-in">
          <Link className="brand" to="/" onClick={closeMenu}><img className="navlogo" src="/Logo.png" alt="SuprAI" /></Link>
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
            <NavLink to="/about">Docs</NavLink>
          </div>
          <div className="nav-cta">
            <Link className="btn btn-ghost" to="/pricing">Start free</Link>
            <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
          </div>
          <button
            className="navham"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <div className="navmobile">
            <a href="/#grid" onClick={closeMenu}>Product</a>
            <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
            <Link to="/compare" onClick={closeMenu}>Compare</Link>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
            <Link to="/about" onClick={closeMenu}>Docs</Link>
            <a className="btn btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Book a demo</a>
            <Link className="btn btn-ghost" to="/pricing" onClick={closeMenu}>Start free</Link>
          </div>
        )}
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
            <Link className="brand" to="/"><Logo /></Link>
            <p style={{ marginTop: 14, maxWidth: 300, fontSize: 14.5 }}>The AI operating system for your company. One place to ask, act, and automate — for every team.</p>
          </div>
          <div>
            <h5>Product</h5>
            <a href="/#grid">The grid</a>
            <a href="/#grid">Ask</a>
            <a href="/#grid">Act</a>
            <a href="/#control">Automate</a>
            <a href="/#grid">Context</a>
            <a href="/#connectors">Managed auth</a>
            <a href="/#connectors">Connectors</a>
            <a href="/#control">Control</a>
          </div>
          <div>
            <h5>Solutions</h5>
            <Link to="/solutions">By team</Link>
            <Link to="/solutions">By industry</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">Docs</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link to="/about">Company</Link>
            <a href="#book">Trust center</a>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
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
