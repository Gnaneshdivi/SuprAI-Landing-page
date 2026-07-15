// Single source of truth for per-route <title>/description, shared by the
// React <PageMeta> component (client) and scripts/prerender.mjs (build-time).
// Plain data only — no JSX, no browser APIs — safe to import from a Node script.
export const ROUTE_META = {
  '/privacy': {
    title: 'Privacy Policy',
    description: 'How Stopngage Solutions Pvt. Limited (SuprAI) collects, uses, stores, shares, and protects information in connection with the SuprAI platform, dashboard, APIs, connectors, and related services.',
  },
  '/terms': {
    title: 'Terms of Service',
    description: 'The Terms of Service governing access to and use of the SuprAI platform, dashboard, APIs, connectors, and related services, operated by Stopngage Solutions Pvt. Limited.',
  },
}
