import { useState, useEffect, useRef } from 'react'
import { jsPDF } from 'jspdf'

// ── data ──────────────────────────────────────────────────────────
const ROLES        = ['Founder / CXO', 'Marketing', 'Operations / Supply Chain', 'Sales / RevOps', 'Customer Service', 'IT / Engineering', 'Agency / Consultant']
const INDUSTRIES   = ['D2C / E-commerce', 'Retail & FMCG', 'QSR / Food', 'Real Estate', 'BFSI', 'Healthcare', 'Education', 'Logistics', 'Travel / Hospitality', 'Manufacturing', 'SaaS / Tech', 'Agency']
const COMPANY_SIZES= ['1–10', '11–50', '51–200', '201–1,000', '1,000+']
const TOOL_GROUPS  = [
  { cat: 'E-commerce',      tools: ['Shopify', 'WooCommerce', 'Magento', 'Custom store'] },
  { cat: 'CRM',             tools: ['Salesforce', 'HubSpot', 'Zoho CRM', 'LeadSquared', 'Sell.Do', 'Freshsales'] },
  { cat: 'Logistics',       tools: ['Shadowfax', 'Delhivery', 'Shiprocket', 'Bluedart', 'Xpressbees', 'ClickPost'] },
  { cat: 'Payments',        tools: ['Razorpay', 'GoKwik', 'Cashfree', 'PayU', 'PhonePe', 'Stripe'] },
  { cat: 'Messaging',       tools: ['Wati', 'Interakt', 'AiSensy', 'Gupshup', 'Twilio', 'SMS / Email'] },
  { cat: 'Helpdesk',        tools: ['Zendesk', 'Freshdesk', 'Intercom', 'Gorgias'] },
  { cat: 'Analytics / CDP', tools: ['MoEngage', 'CleverTap', 'WebEngage', 'Mixpanel', 'Amplitude', 'GA4'] },
  { cat: 'ERP / Finance',   tools: ['SAP', 'NetSuite', 'MS Dynamics', 'Tally', 'Unicommerce'] },
]
const PAINS = [
  { id: 'lead-followup',   label: 'Lead follow-up',    desc: 'Slow responses, leads going cold' },
  { id: 'order-tracking',  label: 'Order tracking',     desc: 'Customers asking "where is my order?"' },
  { id: 'returns-rto',     label: 'Returns / RTO',      desc: 'High return rates eating margins' },
  { id: 'win-back',        label: 'Win-back',           desc: 'Churned customers never re-engaged' },
  { id: 'support-replies', label: 'Support replies',    desc: 'Ticket queues growing too fast' },
  { id: 'reporting',       label: 'Reporting',          desc: 'Hours lost pulling data across tools' },
  { id: 'approvals',       label: 'Internal approvals', desc: 'Ops bottlenecks slowing the team' },
  { id: 'reconciliation',  label: 'Reconciliation',     desc: 'Orders, payments & inventory out of sync' },
]
const SOLUTIONS = [
  'Lead qualification & routing',
  'Customer onboarding',
  'Post-purchase / order tracking',
  'RTO / COD-risk reduction',
  'Retention / win-back / loyalty',
  'Support / ticket triage',
  'Marketing campaigns & journeys',
  'Reconciliation (orders / payments)',
  'Reporting & dashboards',
  'Internal approvals / ops',
]
const LOAD_MSGS = [
  'Analysing your app stack…',
  'Mapping what each team can Ask, Act and Automate…',
  'Estimating your impact…',
  'Finalising your personalised plan…',
  'Almost there…',
]

// ── conversation steps ────────────────────────────────────────────
const STEPS = [
  { key: 'name',      type: 'text',              placeholder: 'Your first name…', valid: v => v.trim().length > 1,
    bot: "Hi! 👋 I'm SuprAI's guide.\n\nIn under 2 minutes I'll show you how SuprAI becomes your company's AI operating system — one place for every team to Ask, Act and Automate.\n\nWhat's your first name?" },
  { key: 'email',     type: 'text',              placeholder: 'you@company.com',  valid: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    bot: d => `Great, ${d.name}! 🙌\n\nWhat's your work email? I'll send the plan there too.` },
  { key: 'role',      type: 'chips',             options: ROLES,
    bot: 'What best describes your role?' },
  { key: 'industry',  type: 'chips',             options: INDUSTRIES,
    bot: 'Which industry is your company in?' },
  { key: 'size',      type: 'bands',             options: COMPANY_SIZES,
    bot: 'How big is your team?' },
  { key: 'tools',     type: 'multichips-grouped',groups: TOOL_GROUPS,
    bot: 'Which tools does your team already run?\n\nTap all that apply, then hit Done.' },
  { key: 'pain',      type: 'cards',             options: PAINS,
    bot: "What's the most painful manual work your team deals with right now?" },
  { key: 'solutions', type: 'multichips',        options: SOLUTIONS,
    bot: d => `Got it — ${d.pain?.label} is a real one.\n\nWhat solutions are you most interested in? Tap all that apply.` },
]

// ── AI call ───────────────────────────────────────────────────────
async function callAI(intake) {
  const key        = import.meta.env.VITE_AZURE_OPENAI_KEY
  const endpoint   = import.meta.env.VITE_AZURE_ENDPOINT
  const deployment = import.meta.env.VITE_AZURE_DEPLOYMENT || 'gpt-4.1'
  const apiVersion = import.meta.env.VITE_AZURE_API_VERSION || '2024-12-01-preview'
  if (!key || !endpoint) throw new Error('No API config')

  const res = await fetch(
    `${endpoint}openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': key },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You are SuprAI's solution architect AI. SuprAI is the AI operating system for a company: one place where every team's apps, answers and agents come together, so the company can Ask (ask anything across connected apps and get real numbers and facts with sources), Act (do the work in their tools — draft, update, create, send — on their say-so or on autopilot), and Automate (named agents run the workflows a team repeats, on a trigger or schedule). Your ONLY task is to generate a personalised plan for putting a prospect's teams on one AI. Never answer questions outside this scope.

LIVE CONNECTORS: Shopify, WooCommerce, Magento, Salesforce, HubSpot, Zoho CRM, LeadSquared, Sell.Do, Freshsales, Shadowfax, Delhivery, Shiprocket, Bluedart, Xpressbees, ClickPost, EasyEcom, Razorpay, GoKwik, Cashfree, PayU, PhonePe, Stripe, Wati, Interakt, AiSensy, Gupshup, Twilio, Zendesk, Freshdesk, Intercom, Gorgias, MoEngage, CleverTap, WebEngage, Mixpanel, Amplitude, GA4, SAP, NetSuite, Tally, Unicommerce.

OUTPUT strict JSON only (no markdown):
{
  "situation": "2-sentence bespoke summary of their situation using their industry, pain, and actual tools",
  "currentSetup": "1-2 sentences describing how their team currently operates and where humans are doing manual work",
  "problemDetail": "2-3 sentences describing the specific pain and its business cost in their industry context",
  "workflows": [
    { "title": "Automation name", "how": "Step-by-step explanation of exactly what SuprAI does using their actual tools", "tags": ["Tool1","Tool2"] }
  ],
  "connectors": ["their", "tools", "to", "wire"],
  "impact": "Quantified indicative estimate in rupees or hours matched to their volume"
}

Rules: max 3 workflows; frame each as something a team can Ask, Act on, or have an agent Automate across their apps; each must reference their actual apps; never invent integrations; be specific to their industry.`,
          },
          {
            role: 'user',
            content: `Prospect:\nName: ${intake.name}\nEmail: ${intake.email}\nRole: ${intake.role}\nIndustry: ${intake.industry}\nTeam: ${intake.size} people\nTools: ${(intake.tools||[]).join(', ')||'not specified'}\nPain: ${intake.pain?.label||'not specified'}\nSolutions needed: ${(intake.solutions||[]).join(', ')||'not specified'}\n\nOutput only valid JSON.`,
          },
        ],
        max_tokens: 1000,
        temperature: 0.35,
      }),
    }
  )
  if (!res.ok) throw new Error(`API ${res.status}`)
  const data = await res.json()
  return JSON.parse(data.choices[0].message.content)
}

// ── fallback ──────────────────────────────────────────────────────
function buildFallback(intake) {
  const { pain, tools = [], solutions = [], industry, name } = intake
  const lsp  = tools.find(t => ['Shadowfax','Delhivery','Shiprocket','Bluedart'].includes(t))
  const pay  = tools.find(t => ['GoKwik','Razorpay','Cashfree','PayU'].includes(t))
  const msg  = tools.find(t => ['Wati','Interakt','AiSensy','Gupshup'].includes(t)) || 'WhatsApp'
  const crm  = tools.find(t => ['Salesforce','HubSpot','Zoho CRM','LeadSquared','Sell.Do'].includes(t))
  const desk = tools.find(t => ['Zendesk','Freshdesk','Intercom','Gorgias'].includes(t))
  const ec   = tools.find(t => ['Shopify','WooCommerce','Magento'].includes(t))
  const workflows = []

  if (lsp) workflows.push({ title: 'RTO risk prediction + proactive nudge', how: `When an order ships via ${lsp}${pay?` and ${pay} flags COD risk`:''}, SuprAI predicts failed-delivery risk and triggers a proactive ${msg} confirmation to the customer before the delivery attempt.`, tags: [lsp, pay, msg].filter(Boolean) })
  if (crm || solutions.some(s=>s.includes('Lead'))) workflows.push({ title: 'Lead qualification & instant routing', how: `New leads arrive in ${crm||'your CRM'}${ec?` via ${ec}`:''}. SuprAI scores them against your ICP, enriches with firmographic data, and routes hot leads to the right rep via Slack or ${msg} — in under 60 seconds.`, tags: [crm, ec].filter(Boolean) })
  if (desk || solutions.some(s=>s.includes('Support'))) workflows.push({ title: 'Intelligent ticket triage & auto-reply', how: `Incoming tickets in ${desk||'your helpdesk'} are classified by SuprAI agents. Standard queries get an AI-drafted reply queued for approval; escalations surface immediately — cutting first-response time by 60–80%.`, tags: [desk, msg].filter(Boolean) })
  if (!workflows.length) workflows.push({ title: solutions[0]||'Workflow automation', how: `SuprAI watches ${tools.slice(0,3).join(', ')||'your stack'} in real time, detects trigger conditions, and executes the action — no engineer or manual step required.`, tags: tools.slice(0,3) })

  return {
    situation: `${name?name+', your':'Your'} ${industry||''} team is losing time on ${pain?.label?.toLowerCase()||'manual ops'} and needs to automate ${solutions.slice(0,2).join(' and ').toLowerCase()||'key workflows'} across ${tools.slice(0,3).join(', ')||'your current stack'}.`,
    currentSetup: `Your team currently handles ${pain?.label?.toLowerCase()||'these workflows'} manually — tracking across ${tools.slice(0,2).join(' and ')||'multiple tools'}, updating records by hand, and responding reactively rather than proactively.`,
    problemDetail: `This manual approach creates delays, inconsistencies, and a growing backlog. At ${intake.size||'your'} team size, the cost compounds — every hour spent on repetitive work is an hour not spent on growth.`,
    workflows: workflows.slice(0, 3),
    connectors: tools.slice(0, 6),
    impact: '10–20 hours / week saved across your team — confirmed on the walkthrough.',
  }
}

// ── pain detail copy ──────────────────────────────────────────────
const PAIN_DETAIL = {
  'lead-followup':   'Lead response delays kill conversions. Research shows leads contacted within 5 minutes are 9× more likely to qualify — yet most teams respond in hours. Manual outreach is inconsistent, prioritisation is guesswork, and your best leads go cold before anyone notices.',
  'order-tracking':  '"Where is my order?" accounts for 30–40% of all support tickets in D2C. Each manually handled WISMO query consumes 3–8 minutes of agent time. At scale, this overwhelms your support team, delays real issues, and frustrates customers at exactly the moment they should feel confident in your brand.',
  'returns-rto':     'Return to Origin (RTO) is one of the largest hidden costs in D2C logistics. Failed COD deliveries trigger reverse logistics fees, unsold inventory holding costs, and repeat customer communication — all of which compound quickly. Industry averages run 15–25% RTO on COD orders without any intervention.',
  'win-back':        'Churned customers who receive a well-timed, personalised re-engagement message convert at 10–20% — far higher than cold acquisition. But manual win-back campaigns are poorly timed, inconsistent across segments, and resource-intensive, so most churned revenue is simply written off.',
  'support-replies': 'Support queues grow faster than teams scale. Without intelligent triage, agents spend equal time on trivial queries and critical escalations. Missed SLAs, slow first-response, and agent burnout follow — damaging both customer satisfaction scores and team morale.',
  'reporting':       'Data spread across Shopify, your logistics partner, payments gateway, and CRM means someone spends 5–15 hours a week just pulling numbers together. By the time the report is ready, the decision window has closed. Leadership is flying blind on slightly stale data.',
  'approvals':       'Internal ops decisions stuck in Slack threads and email chains create 1–3 day delays on workflows that should take minutes. Accountability is unclear, nothing has an audit trail, and exceptions pile up because there\'s no structured way to route, escalate, or close them.',
  'reconciliation':  'Order counts, payment settlements, and inventory numbers rarely match perfectly across tools. Each discrepancy requires manual investigation. Undetected gaps lead to 2–6% revenue leakage through duplicate payouts, missed refunds, or inventory write-offs that could have been avoided.',
}

// ── tool → category map ───────────────────────────────────────────
const TOOL_CAT = {
  Shopify:'E-commerce', WooCommerce:'E-commerce', Magento:'E-commerce', 'Custom store':'E-commerce',
  Salesforce:'CRM', HubSpot:'CRM', 'Zoho CRM':'CRM', LeadSquared:'CRM', 'Sell.Do':'CRM', Freshsales:'CRM',
  Shadowfax:'Logistics', Delhivery:'Logistics', Shiprocket:'Logistics', Bluedart:'Logistics', Xpressbees:'Logistics', ClickPost:'Logistics',
  Razorpay:'Payments', GoKwik:'Payments', Cashfree:'Payments', PayU:'Payments', PhonePe:'Payments', Stripe:'Payments',
  Wati:'Messaging', Interakt:'Messaging', AiSensy:'Messaging', Gupshup:'Messaging', Twilio:'Messaging', 'SMS / Email':'Messaging',
  Zendesk:'Helpdesk', Freshdesk:'Helpdesk', Intercom:'Helpdesk', Gorgias:'Helpdesk',
  MoEngage:'Analytics', CleverTap:'Analytics', WebEngage:'Analytics', Mixpanel:'Analytics', Amplitude:'Analytics', GA4:'Analytics',
  SAP:'ERP / Finance', NetSuite:'ERP / Finance', 'MS Dynamics':'ERP / Finance', Tally:'ERP / Finance', Unicommerce:'ERP / Finance',
}

// ── PDF generation ────────────────────────────────────────────────
function generatePDF(proposal, intake) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const PW = 210, PH = 297, ML = 22, MR = 22, CW = PW - ML - MR

  // colour helpers
  const C = {
    orange: [241, 90, 34], deep: [194, 65, 12], dark: [31, 24, 19],
    muted:  [107, 98, 90], line: [235, 226, 214], warm: [251, 246, 239],
    white:  [255, 255, 255], gray: [150, 138, 125], nearblack: [20, 15, 10],
  }
  const tc  = k => doc.setTextColor(...C[k])
  const fc  = k => doc.setFillColor(...C[k])
  const dc  = k => doc.setDrawColor(...C[k])
  const lw  = n => doc.setLineWidth(n)
  const fnt = (f, s) => { doc.setFont('helvetica', f); doc.setFontSize(s) }

  let y = 0, pages = 0

  function addPage() {
    if (pages > 0) doc.addPage()
    pages++
    y = 0
    drawPageHeader()
    y = 50
  }

  function drawPageHeader() {
    // dark header band
    fc('nearblack'); doc.rect(0, 0, PW, 42, 'F')
    // orange accent line
    fc('orange');    doc.rect(0, 42, PW, 1.5, 'F')

    // SuprAI logo
    fnt('bold', 24); tc('white')
    doc.text('Supr', ML, 22)
    const sw = doc.getTextWidth('Supr')
    tc('orange')
    doc.text('AI', ML + sw, 22)

    // Subtitle
    fnt('normal', 9); doc.setTextColor(170, 155, 138)
    doc.text('Personalised Solution Plan', ML, 31)

    // Right: name / email / date
    const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    fnt('normal', 8); doc.setTextColor(140, 128, 115)
    doc.text(intake.name  || '', PW - MR, 20, { align: 'right' })
    doc.text(intake.email || '', PW - MR, 27, { align: 'right' })
    doc.text(date,               PW - MR, 34, { align: 'right' })
  }

  function secHeader(label) {
    needSpace(18)
    fnt('bold', 7.5); tc('deep')
    doc.text(label, ML, y)
    y += 3
    dc('line'); lw(0.3); doc.line(ML, y, PW - MR, y)
    y += 7
  }

  function needSpace(h) {
    if (y + h > PH - 20) addPage()
  }

  function tagRow(tags, indent = 0) {
    if (!tags?.length) return
    let tx = ML + indent
    fnt('bold', 7.5)
    tags.filter(Boolean).forEach(tag => {
      const tw = doc.getTextWidth(tag) + 10
      if (tx + tw > PW - MR) { tx = ML + indent; y += 8 }
      fc('warm'); dc('deep'); lw(0.25)
      doc.roundedRect(tx, y - 3.8, tw, 6, 1.5, 1.5, 'FD')
      tc('deep'); doc.text(tag, tx + 5, y + 0.5)
      tx += tw + 5
    })
    y += 9
  }

  function bullet(text, indent = 6) {
    needSpace(7)
    fc('orange'); doc.circle(ML + indent - 2, y - 1.2, 1.5, 'F')
    fnt('normal', 9.5); tc('muted')
    const lines = doc.splitTextToSize(text, CW - indent - 4)
    doc.text(lines, ML + indent + 2, y)
    y += lines.length * 5 + 1
  }

  function bodyText(text, indent = 0) {
    fnt('normal', 9.5); tc('muted')
    const lines = doc.splitTextToSize(text, CW - indent)
    doc.text(lines, ML + indent, y)
    y += lines.length * 5 + 2
  }

  // ═══ PAGE 1 ═══════════════════════════════════════════════════
  addPage()

  // ── 1. EXISTING SETUP ────────────────────────────────────────
  secHeader('1 · YOUR EXISTING SETUP')

  // Profile chips: industry / size / role
  const profile = [intake.industry, intake.size ? intake.size + ' people' : null, intake.role].filter(Boolean)
  let cx = ML
  fnt('normal', 8.5)
  profile.forEach(chip => {
    const tw = doc.getTextWidth(chip) + 10
    if (cx + tw > PW - MR) { cx = ML; y += 9 }
    fc('warm'); dc('line'); lw(0.3)
    doc.roundedRect(cx, y - 4.5, tw, 7, 2, 2, 'FD')
    tc('dark'); doc.text(chip, cx + 5, y + 0.5)
    cx += tw + 5
  })
  y += 12

  // Current setup description
  if (proposal.currentSetup) { bodyText(proposal.currentSetup); y += 3 }

  // Tools by category table
  const toolsByCat = {}
  ;(intake.tools || []).forEach(t => {
    const cat = TOOL_CAT[t] || 'Other'
    if (!toolsByCat[cat]) toolsByCat[cat] = []
    toolsByCat[cat].push(t)
  })

  if (Object.keys(toolsByCat).length > 0) {
    needSpace(10)
    fnt('bold', 8); tc('muted')
    doc.text('TOOLS YOUR TEAM RUNS', ML, y); y += 5

    Object.entries(toolsByCat).forEach(([cat, tools]) => {
      needSpace(7)
      fnt('bold', 9); tc('dark'); doc.text(cat, ML, y)
      fnt('normal', 9); tc('muted'); doc.text(tools.join('  ·  '), ML + 40, y)
      y += 5.5
    })
    y += 4
  }

  // ── 2. WHERE THE PROBLEMS EXIST ─────────────────────────────
  needSpace(60)
  secHeader('2 · WHERE THE PROBLEMS EXIST')

  // Pain highlight box
  const painBoxH = 26
  fc('orange')
  doc.rect(ML, y, 2.5, painBoxH, 'F')           // left orange bar
  fc('warm'); dc('line'); lw(0.3)
  doc.roundedRect(ML + 2.5, y, CW - 2.5, painBoxH, 2, 2, 'FD')
  fnt('bold', 7); tc('deep')
  doc.text('PRIMARY PAIN POINT', ML + 9, y + 7)
  fnt('bold', 14); tc('orange')
  doc.text(intake.pain?.label || 'Manual Operations', ML + 9, y + 17)
  y += painBoxH + 6

  // Full pain detail
  const painCopy = PAIN_DETAIL[intake.pain?.id] || proposal.problemDetail || 'Manual work is slowing your team and costing real money.'
  bodyText(painCopy); y += 5

  // What they need to automate
  if ((intake.solutions || []).length > 0) {
    needSpace(8 + intake.solutions.length * 7)
    fnt('bold', 9); tc('dark')
    doc.text('What needs to be automated:', ML, y); y += 6
    ;(intake.solutions || []).forEach(s => bullet(s))
    y += 4
  }

  // ═══ PAGE 2 ═══════════════════════════════════════════════════
  addPage()

  // ── 3. HOW SUPRAI SOLVES THIS ────────────────────────────────
  secHeader('3 · HOW SUPRAI SOLVES THIS')

  ;(proposal.workflows || []).forEach((wf, i) => {
    needSpace(50)

    // Number circle
    fc('orange'); doc.circle(ML + 5, y + 4, 5.5, 'F')
    fnt('bold', 11); tc('white')
    doc.text(String(i + 1), ML + 5, y + 4 + 1.5 * (11 / 28.35 / 2), { align: 'center' })

    // Title
    fnt('bold', 13); tc('dark')
    doc.text(wf.title, ML + 14, y + 5)
    y += 14

    // How it works — as step bullets
    const howText = wf.how || wf.desc || ''
    fnt('bold', 8); tc('deep')
    doc.text('HOW IT WORKS', ML + 14, y); y += 5
    bodyText(howText, 14)
    y += 2

    // Connects
    if (wf.tags?.length) {
      needSpace(12)
      fnt('bold', 8); tc('deep')
      doc.text('CONNECTS', ML + 14, y); y += 5
      const prevY = y
      tagRow(wf.tags.filter(Boolean), 14)
      if (y === prevY) y += 9
    }

    // divider
    if (i < proposal.workflows.length - 1) {
      needSpace(10)
      dc('line'); lw(0.3); doc.line(ML, y, PW - MR, y); y += 8
    } else y += 6
  })

  // ── 4. CONNECTORS ────────────────────────────────────────────
  if ((proposal.connectors || []).length > 0) {
    needSpace(24)
    secHeader('4 · WHAT WE\'D CONNECT')
    tagRow(proposal.connectors, 0); y += 2
  }

  // ── 5. EXPECTED IMPACT ───────────────────────────────────────
  needSpace(38)
  secHeader('5 · EXPECTED IMPACT')

  fc('nearblack'); doc.roundedRect(ML, y, CW, 32, 3, 3, 'F')
  fnt('bold', 7); tc('gray')
  doc.text('INDICATIVE — CONFIRMED ON WALKTHROUGH', ML + 8, y + 8)
  fnt('bold', 17); tc('orange')
  const impLines = doc.splitTextToSize(proposal.impact || '', CW - 16)
  doc.text(impLines[0], ML + 8, y + 18)
  if (impLines[1]) { doc.text(impLines[1], ML + 8, y + 26) }
  y += 38

  // ── 6. NEXT STEP ─────────────────────────────────────────────
  needSpace(36)
  secHeader('6 · YOUR NEXT STEP')

  fnt('bold', 11); tc('dark')
  doc.text('Book a 20-min walkthrough to see this live in your stack.', ML, y); y += 7
  fnt('normal', 9.5); tc('muted')
  doc.text('WhatsApp: wa.me/919999999999', ML, y); y += 5
  doc.text('Email: hello@suprengage.com', ML, y); y += 5
  doc.text('Or just reply to the email we sent you.', ML, y)

  // ── FOOTER ON ALL PAGES ──────────────────────────────────────
  const totalPages = doc.getNumberOfPages()
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p)
    fc('nearblack'); doc.rect(0, PH - 11, PW, 11, 'F')
    fnt('normal', 7.5); doc.setTextColor(110, 100, 90)
    doc.text('© 2026 SuprAI · suprengage.com', ML, PH - 4)
    doc.text('The AI operating system for your company.', PW / 2, PH - 4, { align: 'center' })
    doc.text(`Page ${p} of ${totalPages}`, PW - MR, PH - 4, { align: 'right' })
  }

  doc.save(`SuprAI-Plan-${(intake.name || 'Your').replace(/\s+/g,'-')}.pdf`)
}

// ── email (mailto fallback) ───────────────────────────────────────
function emailPlan(proposal, intake) {
  const subject = encodeURIComponent('Your SuprAI Personalised Plan')
  const body = encodeURIComponent(
    `Hi ${intake.name},\n\nHere's your personalised SuprAI plan:\n\n` +
    `SITUATION\n${proposal.situation}\n\n` +
    `HOW SUPRAI SOLVES THIS\n` +
    (proposal.workflows||[]).map(wf => `• ${wf.title}\n  ${wf.how||wf.desc}`).join('\n\n') +
    `\n\nEXPECTED IMPACT\n${proposal.impact}\n\n` +
    `Ready to see it live? Book a 20-min walkthrough:\nhttps://wa.me/919999999999\n\n— The SuprAI team`
  )
  window.open(`mailto:${intake.email}?subject=${subject}&body=${body}`)
}

// ── component ──────────────────────────────────────────────────────
export default function AskAI() {
  const [open,      setOpen]      = useState(false)
  const [phase,     setPhase]     = useState('chat')
  const [messages,  setMessages]  = useState([])
  const [stepIdx,   setStepIdx]   = useState(-1)
  const [isTyping,  setIsTyping]  = useState(false)
  const [intake,    setIntake]    = useState({})
  const [textInput, setTextInput] = useState('')
  const [multiSel,  setMultiSel]  = useState([])
  const [loadPct,   setLoadPct]   = useState(0)
  const [loadMsgIdx,setLoadMsgIdx]= useState(0)
  const [proposal,  setProposal]  = useState(null)
  const chatEndRef = useRef(null)
  const inputRef   = useRef(null)

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, isTyping])
  useEffect(() => {
    if (stepIdx >= 0 && STEPS[stepIdx]?.type === 'text') setTimeout(() => inputRef.current?.focus(), 120)
  }, [stepIdx, isTyping])

  function addMsg(from, text) {
    setMessages(prev => [...prev, { from, text, id: Date.now() + Math.random() }])
  }

  function startStep(idx, curIntake) {
    if (idx >= STEPS.length) { startLoading(curIntake); return }
    setStepIdx(idx); setMultiSel([]); setTextInput(''); setIsTyping(true)
    const step = STEPS[idx]
    const text = typeof step.bot === 'function' ? step.bot(curIntake) : step.bot
    setTimeout(() => { setIsTyping(false); addMsg('bot', text) }, 600)
  }

  function submit(value, display, curIntake) {
    addMsg('user', display || String(value))
    const updated = { ...curIntake, [STEPS[stepIdx].key]: value }
    setIntake(updated)
    setTimeout(() => startStep(stepIdx + 1, updated), 350)
  }

  function handleText() {
    const step = STEPS[stepIdx]
    if (!step.valid(textInput)) return
    submit(textInput.trim(), textInput.trim(), intake)
  }

  function handleMultiDone() {
    if (!multiSel.length) return
    submit(multiSel, multiSel.join(', '), intake)
  }

  async function startLoading(finalIntake) {
    setPhase('loading'); setLoadPct(0); setLoadMsgIdx(0)
    const start = Date.now(), duration = 5000
    const timerDone = new Promise(resolve => {
      const iv = setInterval(() => {
        const e = Date.now() - start
        setLoadPct(Math.min(100, Math.round((e / duration) * 100)))
        setLoadMsgIdx(Math.min(LOAD_MSGS.length - 1, Math.floor((e / duration) * LOAD_MSGS.length)))
        if (e >= duration) { clearInterval(iv); resolve() }
      }, 80)
    })
    const [result] = await Promise.all([
      callAI(finalIntake).catch(() => buildFallback(finalIntake)),
      timerDone,
    ])
    setProposal(result); setPhase('proposal')
  }

  function openWidget() {
    setOpen(true)
    if (messages.length === 0) setTimeout(() => startStep(0, {}), 120)
  }

  function restart() {
    setMessages([]); setStepIdx(-1); setIntake({}); setProposal(null)
    setPhase('chat'); setMultiSel([]); setTextInput('')
    setTimeout(() => startStep(0, {}), 120)
  }

  const step = STEPS[stepIdx]

  return (
    <>
      {/* floating tab */}
      {!open && (
        <div className="askai-bar" onClick={openWidget} role="button">
          <span className="askai-bar-dot" />
          <span className="askai-bar-label">Get your plan · <span>SuprAI</span></span>
          <span className="askai-bar-arr">↑</span>
        </div>
      )}

      {open && <div className="askai-overlay" onClick={() => setOpen(false)} />}

      {open && (
        <div className="askai-panel">
          {/* drag handle */}
          <div className="askai-drag-handle" onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} title="Close" />

          {/* header */}
          <div className="askai-head">
            <div className="askai-head-left">
              <div className="askai-avatar-sm">S</div>
              <div>
                <div className="askai-head-name">SuprAI Guide</div>
                <div className="askai-head-sub">
                  {phase === 'chat'     && stepIdx >= 0 && `Step ${stepIdx + 1} of ${STEPS.length}`}
                  {phase === 'loading'  && 'Personalising…'}
                  {phase === 'proposal' && 'Your plan is ready'}
                </div>
              </div>
            </div>
            <button className="askai-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* ── chat ── */}
          {phase === 'chat' && (
            <>
              <div className="askai-chat-area">
                {messages.map(m => (
                  <div key={m.id} className={`chat-msg chat-msg-${m.from}`}>
                    {m.from === 'bot' && <div className="chat-avatar">S</div>}
                    <div className={`chat-bubble chat-bubble-${m.from}`}>
                      {m.text.split('\n').map((line, i, arr) =>
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="chat-msg chat-msg-bot">
                    <div className="chat-avatar">S</div>
                    <div className="chat-bubble chat-bubble-bot chat-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {!isTyping && step && (
                <div className="askai-input-area">
                  {step.type === 'text' && (
                    <div className="askai-text-row">
                      <input ref={inputRef} type={step.key === 'email' ? 'email' : 'text'}
                        className="askai-text-field" placeholder={step.placeholder}
                        value={textInput} onChange={e => setTextInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleText()} />
                      <button className="askai-send-btn" disabled={!step.valid(textInput)} onClick={handleText}>↑</button>
                    </div>
                  )}
                  {step.type === 'chips' && (
                    <div className="askai-opt-scroll">
                      <div className="askai-chips">
                        {step.options.map(o => <button key={o} className="askai-chip" onClick={() => submit(o, o, intake)}>{o}</button>)}
                      </div>
                    </div>
                  )}
                  {step.type === 'bands' && (
                    <div className="askai-opt-scroll">
                      <div className="askai-bands">
                        {step.options.map(o => <button key={o} className="askai-band" onClick={() => submit(o, o + ' people', intake)}>{o} people</button>)}
                      </div>
                    </div>
                  )}
                  {step.type === 'cards' && (
                    <div className="askai-opt-scroll">
                      <div className="askai-cards">
                        {step.options.map(o => (
                          <button key={o.id} className="askai-card" onClick={() => submit(o, o.label, intake)}>
                            <div className="ac-label">{o.label}</div>
                            <div className="ac-desc">{o.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {step.type === 'multichips' && (
                    <div className="askai-opt-scroll">
                      <div className="askai-chips askai-chips-col">
                        {step.options.map(o => (
                          <button key={o} className={`askai-chip askai-chip-block${multiSel.includes(o)?' sel':''}`}
                            onClick={() => setMultiSel(p => p.includes(o) ? p.filter(x=>x!==o) : [...p,o])}>{o}</button>
                        ))}
                      </div>
                      {multiSel.length > 0 && (
                        <button className="btn btn-primary askai-done-btn" onClick={handleMultiDone}>Done — {multiSel.length} selected →</button>
                      )}
                    </div>
                  )}
                  {step.type === 'multichips-grouped' && (
                    <div className="askai-opt-scroll">
                      {step.groups.map(({ cat, tools }) => (
                        <div key={cat} className="askai-cat">
                          <div className="askai-cat-h">{cat}</div>
                          <div className="askai-chips">
                            {tools.map(t => (
                              <button key={t} className={`askai-chip${multiSel.includes(t)?' sel':''}`}
                                onClick={() => setMultiSel(p => p.includes(t) ? p.filter(x=>x!==t) : [...p,t])}>{t}</button>
                            ))}
                          </div>
                        </div>
                      ))}
                      {multiSel.length > 0 && (
                        <button className="btn btn-primary askai-done-btn" onClick={handleMultiDone}>Done — {multiSel.length} selected →</button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ── loading ── */}
          {phase === 'loading' && (
            <div className="askai-loading-phase">
              <div className="ai-ring">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="26" stroke="#EBE2D6" strokeWidth="5"/>
                  <circle cx="32" cy="32" r="26" stroke="#F15A22" strokeWidth="5"
                    strokeDasharray={`${2*Math.PI*26}`}
                    strokeDashoffset={`${2*Math.PI*26*(1-loadPct/100)}`}
                    strokeLinecap="round"
                    style={{transformOrigin:'32px 32px',transform:'rotate(-90deg)',transition:'stroke-dashoffset .1s linear'}}/>
                  <text x="32" y="37" textAnchor="middle" fill="#F15A22" fontSize="14" fontWeight="700" fontFamily="monospace">{loadPct}%</text>
                </svg>
              </div>
              <div className="ai-load-msg">{LOAD_MSGS[loadMsgIdx]}</div>
              <div className="ai-load-sub">Building your personalised plan with AI</div>
            </div>
          )}

          {/* ── proposal ── */}
          {phase === 'proposal' && proposal && (
            <div className="askai-proposal-area">
              <div className="askai-proposal">
                <div className="prop-section">
                  <div className="prop-h">Situation</div>
                  <div className="prop-box prop-situation">{proposal.situation}</div>
                </div>
                <div className="prop-section">
                  <div className="prop-h">Recommended automations</div>
                  <div className="prop-box">
                    {(proposal.workflows||[]).map((wf,i) => (
                      <div key={i} className="prop-wf">
                        <div className="prop-wf-title">{wf.title}</div>
                        <div className="prop-wf-desc">{wf.how||wf.desc}</div>
                        {wf.tags?.length>0 && <div className="prop-tags">{wf.tags.filter(Boolean).map(t=><span key={t} className="prop-tag">{t}</span>)}</div>}
                      </div>
                    ))}
                  </div>
                </div>
                {(proposal.connectors||[]).length>0 && (
                  <div className="prop-section">
                    <div className="prop-h">What we'd connect</div>
                    <div className="prop-tags">{proposal.connectors.map(c=><span key={c} className="prop-tag">{c}</span>)}</div>
                  </div>
                )}
                <div className="prop-section">
                  <div className="prop-h">Expected impact</div>
                  <div className="prop-box">
                    <div className="prop-impact">{proposal.impact}</div>
                    <div className="prop-caveat">Indicative — confirmed on the walkthrough.</div>
                  </div>
                </div>
              </div>

              <div className="prop-actions-sticky">
                <button className="btn btn-primary askai-dl-btn" onClick={() => generatePDF(proposal, intake)}>↓ Download PDF</button>
                <button className="btn btn-ghost askai-dl-btn"   onClick={() => emailPlan(proposal, intake)}>✉ Email to me</button>
                <a className="askai-wa-link" href="https://wa.me/919999999999?text=Hi%2C+I+just+got+my+SuprAI+plan+and+want+to+book+a+walkthrough." target="_blank" rel="noopener noreferrer">
                  Book a 20-min walkthrough on WhatsApp →
                </a>
                <button className="askai-restart" onClick={restart}>Start over</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
