import { useState } from 'react'
import BrandImg from './BrandImg.jsx'

// SuprAI connects "Apps" (your tools); each app exposes "Actions" it can take.
// Outcomes only — every action is a verb your team would actually ask for.
const APPS = [
  {
    slug: 'google', name: 'Google Workspace', tag: 'Identity · Email · Docs', count: 40,
    blurb: 'Run your workspace by message — onboarding, access and email.',
    actions: [
      ['Create', 'Set up a new hire'], ['Grant', 'Add to the right groups'],
      ['Send', 'Draft & send the welcome'], ['Reset', 'Reset a password'],
      ['Share', 'Share a doc with a team'], ['Revoke', 'Offboard a leaver'],
    ],
  },
  {
    slug: 'slack', name: 'Slack', tag: 'Messaging', count: 24,
    blurb: 'Move work forward in the channels your team already lives in.',
    actions: [
      ['Post', 'Send the weekly numbers'], ['Alert', 'Flag an at-risk account'],
      ['Create', 'Spin up an incident channel'], ['Remind', 'Nudge the deal owner'],
    ],
  },
  {
    slug: 'hubspot', name: 'HubSpot', tag: 'CRM', count: 36,
    blurb: 'Keep the pipeline current without anyone touching the CRM.',
    actions: [
      ['Update', 'Move a deal stage'], ['Create', 'Log a new contact'],
      ['Assign', 'Route a lead to a rep'], ['Draft', 'Queue the follow-up email'],
    ],
  },
  {
    slug: 'stripe', name: 'Stripe', tag: 'Payments', count: 28,
    blurb: 'Handle billing exceptions the moment they happen.',
    actions: [
      ['Refund', 'Issue a refund'], ['Create', 'Send an invoice'],
      ['Pause', 'Pause a subscription'], ['Update', 'Fix a failed payment'],
    ],
  },
  {
    slug: 'salesforce', name: 'Salesforce', tag: 'CRM', count: 44,
    blurb: 'Update opportunities and tasks straight from the conversation.',
    actions: [
      ['Update', 'Advance an opportunity'], ['Create', 'Open a follow-up task'],
      ['Convert', 'Convert a qualified lead'], ['Log', 'Record the call notes'],
    ],
  },
  {
    slug: 'zendesk', name: 'Zendesk', tag: 'Support', count: 22,
    blurb: 'Resolve tickets with the full customer story behind them.',
    actions: [
      ['Reply', 'Draft the resolution'], ['Set', 'Re-prioritise the queue'],
      ['Assign', 'Route to the right agent'], ['Close', 'Close with a summary'],
    ],
  },
  {
    slug: 'shopify', name: 'Shopify', tag: 'Commerce', count: 32,
    blurb: 'Act on orders, refunds and customers in one message.',
    actions: [
      ['Update', 'Edit an order'], ['Refund', 'Process a return'],
      ['Tag', 'Segment a customer'], ['Pause', 'Pull a promo that’s leaking'],
    ],
  },
  {
    slug: 'notion', name: 'Notion', tag: 'Docs & wiki', count: 18,
    blurb: 'Turn answers into living docs your team can find.',
    actions: [
      ['Create', 'Write up the report'], ['Update', 'Sync a tracker'],
      ['Comment', 'Leave the next step'], ['Find', 'Pull the right playbook'],
    ],
  },
]

export default function AppsActions() {
  const [active, setActive] = useState(0)
  const app = APPS[active]
  return (
    <div className="aa">
      <div className="aa-apps">
        <div className="aa-apps-h"><span>Your apps</span><span>{APPS.length} of 100+</span></div>
        {APPS.map((a, i) => (
          <button key={a.slug} className={`aa-app${i === active ? ' sel' : ''}`} onClick={() => setActive(i)}>
            <span className="ic"><BrandImg slug={a.slug} /></span>
            <span>
              <span className="nm" style={{ display: 'block' }}>{a.name}</span>
              <span className="ct">{a.tag}</span>
            </span>
            <span className="meta"><span className="ct">{a.count} actions</span></span>
          </button>
        ))}
      </div>
      <div className="aa-panel">
        <div className="aa-panel-h">
          <span className="logo-chip"><BrandImg slug={app.slug} /></span>
          <div>
            <h4>{app.name}</h4>
            <p>{app.blurb}</p>
          </div>
        </div>
        <div className="aa-actions" key={app.slug}>
          {app.actions.map(([verb, label], i) => (
            <div className="aa-action" key={label} style={{ animationDelay: `${i * 40}ms` }}>
              <span className="verb">{verb}</span>
              <span className="lbl">{label}</span>
            </div>
          ))}
        </div>
        <div className="aa-foot">
          <span>↳</span><span><b>{app.count} actions</b> on {app.name} alone — and SuprAI only ever takes the ones a person’s role allows.</span>
        </div>
      </div>
    </div>
  )
}
