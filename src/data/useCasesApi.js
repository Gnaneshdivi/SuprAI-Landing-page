// Thin client for the SuprAI use-cases (workflow templates) API.
// Base URL is overridable via env so the host can be swapped without a code change.
const BASE =
  import.meta.env.VITE_USECASES_BASE ||
  'https://faster-seed-hispanic-shower.trycloudflare.com/api/v1'

async function get(path) {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`API ${res.status} for ${path}`)
  return res.json()
}

// CSV of values, OR within a param. Values have no commas of their own, so a
// literal comma is a safe separator once each value is percent-encoded.
const csv = (arr) => arr.map(encodeURIComponent).join(',')

// facets → { teams:[{slug,label}], industries:[string], connectors:[string] }
export const getFacets = () => get('/use-cases/facets')

export function getUseCases({ teams = [], industries = [], connectors = [], offset = 0, limit = 20 } = {}) {
  const parts = [`offset=${offset}`, `limit=${limit}`]
  if (teams.length) parts.push(`team=${csv(teams)}`)
  if (industries.length) parts.push(`industry=${csv(industries)}`)
  if (connectors.length) parts.push(`connector=${csv(connectors)}`)
  return get(`/use-cases?${parts.join('&')}`)
}

export const getUseCase = (id) => get(`/use-cases/${id}`)

// Best-effort map from an app/connector name to a Simple Icons slug.
// BrandImg falls back to the real favicon when a slug isn't in Simple Icons,
// so this only needs to get the common multi-word brands right.
const ICON_OVERRIDES = {
  openai: 'openai', 'facebook lead ads': 'facebook', 'facebook pages': 'facebook',
  'facebook ads': 'facebook', 'facebook conversions': 'facebook', 'facebook custom audiences': 'facebook',
  'facebook insights': 'facebook', 'instagram for business': 'instagram', instagram: 'instagram',
  'google sheets': 'googlesheets', 'google docs': 'googledocs', 'google drive': 'googledrive',
  'google ads': 'googleads', 'google calendar': 'googlecalendar', 'google forms': 'googleforms',
  'google contacts': 'google', 'google business profile': 'google', 'google cloud': 'googlecloud',
  'google gemini': 'googlegemini', 'anthropic claude': 'anthropic', 'hubspot crm': 'hubspot',
  'bigin by zoho crm': 'zoho', 'zoho crm': 'zoho', 'amazon ses': 'amazonaws', 'mailerlite classic': 'mailerlite',
  'mailchimp': 'mailchimp', 'linkedin ads reports': 'linkedin', 'linkedin lead forms': 'linkedin',
  'linkedin conversions': 'linkedin', 'linkedin matched audiences': 'linkedin', 'apple ios': 'apple',
  'microsoft office': 'microsoftoffice', 'html/css to image': 'html5',
}

export function iconSlug(name = '') {
  const clean = name.toLowerCase().split('(')[0].trim()
  for (const key in ICON_OVERRIDES) if (clean.startsWith(key)) return ICON_OVERRIDES[key]
  return clean.replace(/[^a-z0-9]/g, '')
}
