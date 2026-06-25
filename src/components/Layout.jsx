import { Outlet, NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AskAI from './AskAI'
import Logo from './Logo.jsx'

export const DEMO_URL = 'https://api.whatsapp.com/send/?phone=918056088288&text=Hey%2C+I+just+checked+your+website+and+would+like+to+know+more+about+SuprEngage.+Can+we+schedule+a+meeting%3F&type=phone_number&app_absent=0'

const departments = [['All teams', 'all-teams'], ['Growth & Marketing', 'growth-marketing'], ['Sales', 'sales'], ['Support', 'support'], ['Operations', 'operations'], ['Engineering', 'engineering'], ['Finance', 'finance'], ['Analytics', 'analytics']]
const industries = [['D2C & Ecommerce', 'd2c-ecommerce'], ['Retail & QSR', 'retail-qsr'], ['Subscriptions & SaaS', 'subscriptions-saas'], ['Marketplaces', 'marketplaces'], ['Logistics', 'logistics'], ['Financial services', 'financial-services'], ['Real estate', 'real-estate'], ['Healthcare', 'healthcare'], ['Manufacturing', 'manufacturing']]


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
      <div className="announce">New · The AI layer across your company’s <b>100+ apps</b>, always in sync.</div>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-in">
          <Link className="brand" to="/" onClick={closeMenu}><img className="navlogo" src="/Logo.png" alt="SuprAI" /></Link>
          <div className="nav-links">
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
            <NavLink to="/contact">Contact</NavLink>
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
            <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
            <Link to="/compare" onClick={closeMenu}>Compare</Link>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
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
            <a href="/#ask">What it does</a>
            <a href="/#where">Where it lives</a>
            <a href="/#control">Enterprise control</a>
            <Link to="/solutions">Solutions & workflows</Link>
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
            <Link to="/about">Company</Link>
            <Link to="/contact">Contact us</Link>
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
    </>
  )
}
