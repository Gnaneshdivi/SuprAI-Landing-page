import { Outlet, NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const departments = [['All teams', 'all-teams'], ['Growth & Marketing', 'growth-marketing'], ['Sales', 'sales'], ['Support', 'support'], ['Operations', 'operations'], ['Engineering', 'engineering'], ['Finance', 'finance'], ['Analytics', 'analytics']]
const industries = [['D2C & Ecommerce', 'd2c-ecommerce'], ['Retail & QSR', 'retail-qsr'], ['Subscriptions & SaaS', 'subscriptions-saas'], ['Marketplaces', 'marketplaces'], ['Logistics', 'logistics'], ['Financial services', 'financial-services']]

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
      <div className="announce">New — use SuprAI from <b>Claude, ChatGPT or any AI</b>. Cross-tool intelligence, now anywhere you work.</div>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-in">
          <Link className="logo" to="/">Supr<span>AI</span></Link>
          <div className="nav-links">
            <div className="has-mega">
              <Link className="navtrigger" to="/solutions">Solutions <span className="car">▾</span></Link>
              <div className="mega">
                <div className="mega-grid">
                  <div>
                    <div className="mega-h">Departments</div>
                    {departments.map(([t, slug]) => (
                      <Link key={slug} to={`/solutions/${slug}`}><span className="mi">·</span>{t}</Link>
                    ))}
                  </div>
                  <div>
                    <div className="mega-h">Industries</div>
                    {industries.map(([t, slug]) => (
                      <Link key={slug} to={`/solutions/${slug}`}><span className="mi">·</span>{t}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <Link className="btn btn-primary" to="/pricing">Start free</Link>
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
            <p style={{ marginTop: 12, maxWidth: 300, fontSize: 14.5 }}>The cross-tool intelligence that acts — unify your tools, see the patterns, and move before your competitors.</p>
          </div>
          <div>
            <h5>Product</h5>
            <Link to="/">How it works</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link to="/about">About</Link>
            <Link to="/about">Vision</Link>
            <a href="#">Careers</a>
          </div>
          <div>
            <h5>Get started</h5>
            <Link to="/pricing">Start free</Link>
            <a href="#">Book a demo</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 SuprAI</span>
          <span>Cross-tool intelligence that acts.</span>
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
