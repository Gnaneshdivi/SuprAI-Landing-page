import { useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'
import WorkflowLibrary from './Library.jsx'
import { solutions } from '../data/solutions.js'

// Each team/industry slug → the library facet it should pre-select.
// Values are OR'd within a facet; teams and industries are exact facet strings.
const SLUG_FILTER = {
  // teams
  'all-teams': {},
  'growth-marketing': { teams: ['Marketing'] },
  'sales': { teams: ['Sales'] },
  'support': { teams: ['Customer Support'] },
  'operations': { teams: ['Operations'] },
  'engineering': { teams: ['Product & Engineering'] },
  'finance': { teams: ['Finance & Accounting'] },
  'analytics': { teams: ['Operations'] },
  // industries
  'd2c-ecommerce': { industries: ['E-commerce / D2C'] },
  'retail-qsr': { industries: ['Retail'] },
  'subscriptions-saas': { industries: ['SaaS / Technology'] },
  'marketplaces': { industries: ['E-commerce / D2C'] },
  'logistics': { industries: ['Logistics'] },
  'financial-services': { industries: ['FinTech', 'BFSI'] },
  'real-estate': { industries: ['Real Estate'] },
  'healthcare': { industries: ['Healthcare'] },
  'manufacturing': { industries: ['Logistics'] },
}

export default function SolutionLibrary() {
  const { slug } = useParams()
  const sol = solutions[slug]
  const filter = SLUG_FILTER[slug] || {}

  const title = sol?.headline || 'Workflows'
  const sub = sol?.sub || 'Filter by team, industry and the tools you already use — then set any workflow live.'
  const eyebrow = sol?.kind || 'Solutions'

  return (
    <>
      <PageMeta title={sol ? `${sol.name} · Workflows` : 'Workflows'} description={sub} />
      <section className="phero">
        <div className="wrap">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="lead">{sub}</p>
          <div className="hero-cta cc">
            <a className="btn btn-primary" href="#library">Browse workflows</a>
            <a className="btn btn-ghost" href="#">Book a demo</a>
          </div>
        </div>
      </section>

      {/* key forces a fresh mount (and re-seeded filters) when the slug changes */}
      <WorkflowLibrary key={slug} initialTeams={filter.teams} initialIndustries={filter.industries} />
    </>
  )
}
