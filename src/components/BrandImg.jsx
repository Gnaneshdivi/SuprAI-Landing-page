// Resilient brand logo. Tries Simple Icons (crisp monochrome); if the brand
// was removed from Simple Icons (Slack, Salesforce, OpenAI, etc. were pulled
// for trademark reasons), falls back to the real favicon — never a broken
// image, always a real logo (never AI-faked, per brand guidelines).
import { useState } from 'react'

// brands whose simpleicons slug differs or that need a specific favicon domain
const DOMAIN = {
  slack: 'slack.com', salesforce: 'salesforce.com', openai: 'openai.com',
  klaviyo: 'klaviyo.com', google: 'google.com', gmail: 'gmail.com',
  anthropic: 'anthropic.com', googlegemini: 'gemini.google.com',
  whatsapp: 'whatsapp.com', quickbooks: 'quickbooks.intuit.com',
  hubspot: 'hubspot.com', stripe: 'stripe.com', notion: 'notion.so',
  zendesk: 'zendesk.com', shopify: 'shopify.com', github: 'github.com',
  intercom: 'intercom.com', airtable: 'airtable.com', snowflake: 'snowflake.com',
  postgresql: 'postgresql.org', googlesheets: 'google.com',
  meta: 'meta.com', mailchimp: 'mailchimp.com', dropbox: 'dropbox.com',
  asana: 'asana.com', jira: 'atlassian.com', linear: 'linear.app',
  figma: 'figma.com', googleads: 'ads.google.com', amazon: 'amazon.com',
  microsoftoffice: 'office.com', microsoft: 'microsoft.com',
}

const simple = (s) => `https://cdn.simpleicons.org/${s}`
const favicon = (s) => `https://www.google.com/s2/favicons?sz=64&domain=${DOMAIN[s] || `${s}.com`}`

export default function BrandImg({ slug, alt = '', style, className }) {
  const [failed, setFailed] = useState(false)
  return (
    <img
      src={failed ? favicon(slug) : simple(slug)}
      alt={alt || slug}
      loading="lazy"
      className={className}
      style={style}
      onError={() => { if (!failed) setFailed(true) }}
    />
  )
}
