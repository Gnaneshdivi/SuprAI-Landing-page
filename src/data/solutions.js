// Content for every Solutions page (departments + industries).
// One entry per slug; SolutionDetail.jsx renders it.

export const teamOrder = ['all-teams', 'growth-marketing', 'sales', 'support', 'operations', 'engineering', 'finance', 'analytics']
export const industryOrder = ['d2c-ecommerce', 'retail-qsr', 'subscriptions-saas', 'marketplaces', 'logistics', 'financial-services']

export const solutions = {
  // ---------- DEPARTMENTS ----------
  'all-teams': {
    kind: 'Departments', name: 'All teams',
    headline: 'One layer for every team',
    sub: 'Connect the tools each team already runs, get answers from real data, and let workers act — copilot or autopilot. Same engine, tuned playbooks.',
    problem: 'Every team runs on its own stack, and the work between those tools falls on a person.',
    jobs: [
      { t: 'Unify the stack', b: 'Connect each team’s tools and warehouses into one layer that understands what the data means.' },
      { t: 'Answer with real data', b: 'Ask anything across the tools and get the actual numbers back — not documents, not guesses.' },
      { t: 'Act, on your terms', b: 'Approve each action in copilot, or hand the repetitive work to autopilot.' },
    ],
    connectors: ['shopify', 'salesforce', 'hubspot', 'slack', 'stripe', 'notion'],
    cta: 'Find your team’s worker.',
  },
  'growth-marketing': {
    kind: 'Departments', name: 'Growth & Marketing',
    headline: 'SuprAI for Growth & Marketing',
    sub: 'Run the funnel, not the dashboards. Unify ads, store, CRM and analytics, see what’s working, and act on it.',
    problem: 'Spend, store, CRM and analytics never line up — so you optimize half-blind and act a day late.',
    jobs: [
      { t: 'Find wasted spend', b: 'Joins Meta, Google Ads and Shopify to surface campaigns that drive clicks but not repeat buyers — then reallocates.' },
      { t: 'Win back lapsing customers', b: 'Spots at-risk cohorts across store and CRM and launches a win-back in your engagement tool.' },
      { t: 'Report on autopilot', b: 'Builds the weekly cross-tool report and drops it in Slack — every Monday, no stitching.' },
    ],
    connectors: ['meta', 'googleads', 'shopify', 'klaviyo', 'googleanalytics', 'hubspot'],
    cta: 'Put a growth worker on it.',
  },
  'sales': {
    kind: 'Departments', name: 'Sales',
    headline: 'SuprAI for Sales',
    sub: 'A pipeline that updates itself. Join CRM, calls and product usage, and act where the deals live.',
    problem: 'Your CRM, call notes and product usage live in three places, so risk and next steps stay hidden.',
    jobs: [
      { t: 'Surface at-risk deals', b: 'Combines CRM stage, engagement and usage to flag deals going quiet before they slip.' },
      { t: 'Next-best action', b: 'Suggests the move and takes it in your CRM — update the stage, queue the follow-up, alert the rep.' },
      { t: 'Auto-brief before calls', b: 'Pulls the full account context across tools into a one-screen brief, on schedule.' },
    ],
    connectors: ['salesforce', 'hubspot', 'slack', 'gmail', 'stripe'],
    cta: 'Let it run your pipeline hygiene.',
  },
  'support': {
    kind: 'Departments', name: 'Support',
    headline: 'SuprAI for Support',
    sub: 'Answers from the whole customer. Tie tickets to orders, shipments and billing, resolve faster, and trigger the fix.',
    problem: 'Tickets don’t know the customer’s orders, shipments or billing — so agents dig through five tabs per case.',
    jobs: [
      { t: 'Resolve with full context', b: 'Joins the ticket to orders, 3PL status and billing so the answer is in front of the agent.' },
      { t: 'Spot recurring issues', b: 'Clusters tickets across tools to surface the pattern behind the volume — before it spikes.' },
      { t: 'Trigger the fix', b: 'Issues the refund, reships the order, or flags the cohort for follow-up — with approval.' },
    ],
    connectors: ['zendesk', 'intercom', 'shopify', 'stripe', 'slack'],
    cta: 'Give support the full picture.',
  },
  'operations': {
    kind: 'Departments', name: 'Operations',
    headline: 'SuprAI for Operations',
    sub: 'See the breakages before they cost you. Connect logistics, inventory and orders, and act across tools automatically.',
    problem: 'Logistics, inventory and orders sit in separate tools, so late shipments and stockouts show up in the P&L, not in time.',
    jobs: [
      { t: 'Flag late shipments', b: 'Watches 3PL status against orders and surfaces the SKUs and lanes hurting repeat rate.' },
      { t: 'Predict stockouts', b: 'Joins sales velocity and inventory to warn before you sell out — and drafts the reorder.' },
      { t: 'Act across tools', b: 'Pauses promos on at-risk SKUs and alerts the right team, on autopilot.' },
    ],
    connectors: ['shopify', 'stripe', 'googlesheets', 'slack', 'amazon'],
    cta: 'Catch it before the refund.',
  },
  'engineering': {
    kind: 'Departments', name: 'Engineering',
    headline: 'SuprAI for Engineering',
    sub: 'Sprint and performance, unified. Join GitHub, issues and product metrics, and automate the reporting grunt work.',
    problem: 'Velocity lives in GitHub, reliability in dashboards, and the weekly update gets assembled by hand.',
    jobs: [
      { t: 'Track velocity & reliability', b: 'Joins commits, PRs, issues and product metrics into one live view of how the team is shipping.' },
      { t: 'Auto status reports', b: 'Writes the sprint and reliability summary and posts it to Slack — no manual roll-up.' },
      { t: 'Flag regressions', b: 'Ties a metric dip back to the release or change that caused it, and alerts the owner.' },
    ],
    connectors: ['github', 'slack', 'notion', 'googlebigquery', 'postgresql'],
    cta: 'Automate the status update.',
  },
  'finance': {
    kind: 'Departments', name: 'Finance',
    headline: 'SuprAI for Finance',
    sub: 'Numbers you can trust, every time. One semantic layer over billing, revenue and spend, with traceable answers.',
    problem: 'Revenue, billing and spend are defined differently in every tool, so two reports rarely agree.',
    jobs: [
      { t: 'One source for metrics', b: 'A confirmed semantic layer defines revenue, margin and spend once — every answer uses the same math.' },
      { t: 'Traceable answers', b: 'Every number shows its work, back to the source table and the definition behind it.' },
      { t: 'Board-ready reports', b: 'Assembles the monthly pack across tools on schedule — reconciled, not re-keyed.' },
    ],
    connectors: ['stripe', 'quickbooks', 'salesforce', 'googlesheets'],
    cta: 'Make every number reconcile.',
  },
  'analytics': {
    kind: 'Departments', name: 'Analytics & Data',
    headline: 'SuprAI for Analytics & Data',
    sub: 'Answer any cross-tool question with real numbers, build reports, and keep the semantic layer alive.',
    problem: 'Every new question means another manual join, and the backlog of “quick asks” never clears.',
    jobs: [
      { t: 'Real-data answers', b: 'Ask in plain language across warehouses and tools; get the query, the result, and the assumptions.' },
      { t: 'Reports on a schedule', b: 'Productionizes the recurring asks so the team stops rebuilding the same dashboards.' },
      { t: 'A semantic layer that learns', b: 'Definitions you confirm are reused everywhere and improve with each correction.' },
    ],
    connectors: ['snowflake', 'googlebigquery', 'postgresql', 'googlesheets'],
    cta: 'Clear the data backlog.',
  },

  // ---------- INDUSTRIES ----------
  'd2c-ecommerce': {
    kind: 'Industries', name: 'D2C & Ecommerce',
    headline: 'SuprAI for D2C & Ecommerce',
    sub: 'Shopify, ads, logistics and marketplaces — coordinated. Find the patterns no single tool shows, and act before your competitors.',
    problem: 'Your store, paid channels, 3PLs and marketplaces each tell a different story, and none of them talk.',
    jobs: [
      { t: 'Cross-channel patterns', b: 'One view across store, ads and marketplaces surfaces what’s really driving repeat revenue.' },
      { t: 'Protect repeat rate', b: 'Ties shipping and support issues to churn, and acts before they cost you a cohort.' },
      { t: 'Act on offers', b: 'Launches and pauses promos across channels from one place, on copilot or autopilot.' },
    ],
    connectors: ['shopify', 'meta', 'googleads', 'klaviyo', 'amazon', 'stripe'],
    cta: 'Coordinate every channel.',
  },
  'retail-qsr': {
    kind: 'Industries', name: 'Retail & QSR',
    headline: 'SuprAI for Retail & QSR',
    sub: 'Online and in-store, finally in one view. Join POS, ecommerce, loyalty and footfall, and turn signals into offers.',
    problem: 'POS and ecommerce never meet, so in-store and online customers look like two different businesses.',
    jobs: [
      { t: 'A phygital view', b: 'Unifies POS, online orders and loyalty so one customer is one customer, in-store or online.' },
      { t: 'Footfall meets sales', b: 'Connects store traffic and sales to see which locations and times actually convert.' },
      { t: 'Offers to the right store', b: 'Triggers the right promo for the right location and acts on it automatically.' },
    ],
    connectors: ['shopify', 'stripe', 'googleanalytics', 'klaviyo'],
    cta: 'Unite online and in-store.',
  },
  'subscriptions-saas': {
    kind: 'Industries', name: 'Subscriptions & SaaS',
    headline: 'SuprAI for Subscriptions & SaaS',
    sub: 'RevenueCat, billing and lifecycle, joined. Predict churn, protect LTV, and trigger win-backs automatically.',
    problem: 'Churn hides across billing, product usage and support — by the time it shows in MRR, it’s already gone.',
    jobs: [
      { t: 'Predict churn early', b: 'Joins subscriptions, payments and usage to spot at-risk accounts weeks before they cancel.' },
      { t: 'Protect LTV', b: 'Connects failed payments and support friction to retention, and acts to recover both.' },
      { t: 'Trigger win-backs', b: 'Fires the right lifecycle campaign across your channels the moment risk appears.' },
    ],
    connectors: ['stripe', 'hubspot', 'intercom', 'googlebigquery'],
    cta: 'Protect your recurring revenue.',
  },
  'marketplaces': {
    kind: 'Industries', name: 'Marketplaces & Multi-brand',
    headline: 'SuprAI for Marketplaces & Multi-brand',
    sub: 'Every channel, one intelligence. Coordinate listings, pricing and promos across marketplaces and your own store.',
    problem: 'Listings, pricing and promos are managed channel-by-channel, so winners and leaks are impossible to see.',
    jobs: [
      { t: 'Sync listings', b: 'Keeps catalog, pricing and availability consistent across marketplaces and your store.' },
      { t: 'Coordinate pricing', b: 'Spots where price and promo are eroding margin across channels and acts to fix it.' },
      { t: 'Find the winners', b: 'Surfaces the SKUs and channels driving real profit, not just gross orders.' },
    ],
    connectors: ['amazon', 'shopify', 'meta', 'googleads', 'stripe'],
    cta: 'Run every channel as one.',
  },
  'logistics': {
    kind: 'Industries', name: 'Logistics',
    headline: 'SuprAI for Logistics',
    sub: 'See the breakages before the refunds. Connect 3PLs, orders and support, and act on delays early.',
    problem: 'Delivery delays surface as refunds and angry tickets long after the shipment actually went wrong.',
    jobs: [
      { t: 'Flag late shipments', b: 'Watches 3PL performance against promised delivery and surfaces the lanes and SKUs slipping.' },
      { t: 'Tie delays to churn', b: 'Connects late deliveries to repeat rate so you can see what slow shipping actually costs.' },
      { t: 'Act early', b: 'Pauses promos on affected SKUs and alerts ops before the refunds land.' },
    ],
    connectors: ['shopify', 'stripe', 'slack', 'googlesheets'],
    cta: 'Fix delays before they cost you.',
  },
  'financial-services': {
    kind: 'Industries', name: 'Financial services',
    headline: 'SuprAI for Financial services',
    sub: 'Governed intelligence across your systems. Answer with real data, keep a full audit trail, and act within policy.',
    problem: 'Data is siloed and every answer has to be defensible — so analysis is slow and tightly gated.',
    jobs: [
      { t: 'Governed answers', b: 'Permission-aware access means each user only ever sees what they’re allowed to — with answers from real data.' },
      { t: 'Full audit trail', b: 'Every answer and action is traceable to the source, the definition and who approved it.' },
      { t: 'Act within policy', b: 'Workers operate inside role-based controls, so automation stays compliant by design.' },
    ],
    connectors: ['salesforce', 'snowflake', 'postgresql', 'stripe'],
    cta: 'Move fast, stay governed.',
  },
}
