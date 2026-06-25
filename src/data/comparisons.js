// Comparison pages. Positive, factual framing — acknowledge each tool's
// strength, then show SuprAI's different shape. y = strong, p = partial, n = no.
export const comparisonOrder = ['chatgpt-enterprise', 'microsoft-365-copilot', 'claude-enterprise']

export const comparisons = {
  'chatgpt-enterprise': {
    name: 'ChatGPT Enterprise',
    sub: 'A great assistant for each person. SuprAI is one operating system for the whole company — role-aware, connected to your apps, and able to act.',
    intro: 'ChatGPT Enterprise gives every employee a powerful, secure assistant and company knowledge. SuprAI is a different shape: instead of an assistant per person, it’s one system the whole company runs on — answering by role, acting across your tools, and automating the work that repeats. The two sit happily together: SuprAI can even power the GPT models your team already likes.',
    rows: [
      ['Built for', ['y', 'The whole company on one system'], ['p', 'A capable assistant per person']],
      ['Answers by role & team structure', ['y', 'Shaped to each person’s role and permissions'], ['p', 'Same assistant for everyone']],
      ['Acts in your tools', ['y', 'Create users, issue refunds, update the CRM, send the email'], ['p', 'Limited actions via connectors']],
      ['Automate with team agents', ['y', 'Named agents run on a trigger or schedule, used by the whole team'], ['p', 'Custom GPTs, no scheduled cross-tool runs']],
      ['Works with any model', ['y', 'GPT, Claude, Gemini — pick the best per job'], ['n', 'OpenAI models only']],
      ['Connects every app & data source', ['y', 'Every kind of system — apps, files, databases and older tools'], ['p', 'A growing set of connectors']],
      ['Joins your data across every tool', ['y', 'One customer, order or person, lined up across every app'], ['n', 'Not the focus — one assistant at a time']],
      ['Keeps each tool’s own access rules', ['y', 'Everyone sees only what their role allows, per person and team'], ['p', 'Its own enterprise permissions']],
      ['Everything on the record', ['y', 'Who, what, when — every question and action kept'], ['p', 'Usage and conversation logs']],
      ['Priced & deployed for 20–100 people', ['y', 'Live in days, run by one admin'], ['p', 'Per-seat enterprise plans']],
    ],
  },
  'microsoft-365-copilot': {
    name: 'Microsoft 365 Copilot',
    sub: 'Strong inside Microsoft 365. SuprAI is model-neutral and connects every app you run — not just one suite.',
    intro: 'Microsoft 365 Copilot is excellent if your company lives inside Word, Excel, Teams and the Microsoft Graph. SuprAI is built for the reality that most teams run far more than Microsoft — so it connects every app, stays neutral on the model, and acts and automates across all of them, governed by one admin.',
    rows: [
      ['Built for', ['y', 'Every app your company runs'], ['p', 'Best inside the Microsoft 365 suite']],
      ['Answers by role & team structure', ['y', 'Across all your apps and data'], ['p', 'Within Microsoft Graph permissions']],
      ['Acts in your tools', ['y', 'Across every connected app'], ['p', 'Mostly within Microsoft apps']],
      ['Automate with team agents', ['y', 'Cross-app agents on a schedule'], ['p', 'Copilot Studio, Microsoft-centric']],
      ['Works with any model', ['y', 'GPT, Claude, Gemini — your choice'], ['n', 'OpenAI models, via Microsoft']],
      ['Connects every app & data source', ['y', 'Every kind of system, neutral across your whole stack'], ['p', 'Deepest with the Microsoft stack']],
      ['Joins your data across every tool', ['y', 'Across your whole stack, not one suite'], ['p', 'Within the Microsoft world']],
      ['Keeps each tool’s own access rules', ['y', 'Everyone sees only what their role allows, in every tool'], ['p', 'Within Microsoft permissions']],
      ['Everything on the record', ['y', 'Every action across every app, kept — who, what, when'], ['p', 'Microsoft-centric logging']],
      ['Priced & deployed for 20–100 people', ['y', 'Right-sized, live in days'], ['p', 'Per-seat add-on to M365']],
    ],
  },
  'claude-enterprise': {
    name: 'Claude Enterprise',
    sub: 'A powerful model and assistant. SuprAI powers Claude — and any model — with your apps, your roles, and the power to act.',
    intro: 'Claude Enterprise gives your team one of the best assistants available, with large context and strong security. SuprAI doesn’t compete with it — it powers it: bring Claude’s models and give them your company’s apps, knowledge, team structure, and the ability to act and automate across every tool, for everyone, under one admin.',
    rows: [
      ['Built for', ['y', 'The whole company on one system'], ['p', 'A strong assistant per person, with projects']],
      ['Answers by role & team structure', ['y', 'Shaped to each person’s role'], ['n', 'Same assistant for everyone']],
      ['Acts in your tools', ['y', 'Writes, updates and sends across your apps'], ['p', 'Limited tool use']],
      ['Automate with team agents', ['y', 'Scheduled, team-wide, with full logs'], ['p', 'Manual, per-conversation']],
      ['Works with any model', ['y', 'Powers Claude — and GPT, Gemini'], ['n', 'Claude models only']],
      ['Connects every app & data source', ['y', 'Every kind of system — apps, files, databases and older tools'], ['p', 'Connectors and files']],
      ['Resolves identity across your tools', ['y', 'One entity joined across every connected app'], ['n', 'Not the focus — single-assistant context']],
      ['Permissions inherited from each source', ['y', 'Mirrors each tool’s own access rules, per person and team'], ['p', 'Its own enterprise permissions']],
      ['Audit trail for every action', ['y', 'Who, what, when across your tools'], ['p', 'Usage and conversation logs']],
      ['Priced & deployed for 20–100 people', ['y', 'Live in days, run by one admin'], ['p', 'Per-seat enterprise plans']],
    ],
  },
}
