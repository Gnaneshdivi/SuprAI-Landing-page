import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'
import LegalLayout from '../components/LegalLayout.jsx'
import { ROUTE_META } from '../pageMeta.js'

const TOC = [
  ['overview', 'Overview'],
  ['definitions', '1 · Definitions'],
  ['service', '2 · The Service'],
  ['accounts', '3 · Accounts'],
  ['connectors', '4 · Connectors & data access'],
  ['ai-clients', '5 · Connected AI Clients'],
  ['data-protection', '6 · Processing roles & data protection'],
  ['acceptable-use', '7 · Acceptable use'],
  ['ai-output', '8 · AI output, training & isolation'],
  ['beta', '9 · Beta features'],
  ['fees', '10 · Fees & payment'],
  ['ip', '11 · Intellectual property; feedback'],
  ['confidentiality', '12 · Confidentiality'],
  ['publicity', '13 · Publicity'],
  ['warranties', '14 · Disclaimer of warranties'],
  ['liability', '15 · Limitation of liability'],
  ['indemnification', '16 · Indemnification'],
  ['termination', '17 · Term, suspension & termination'],
  ['force-majeure', '18 · Force majeure'],
  ['governing-law', '19 · Governing law & disputes'],
  ['general', '20 · General'],
  ['contact', '21 · Contact'],
]

export default function Terms() {
  return (
    <>
      <PageMeta {...ROUTE_META['/terms']} />
      <LegalLayout
        title="Terms of Service"
        effective="June 15, 2026"
        updated="June 15, 2026"
        lead="These Terms govern access to and use of the SuprAI platform, dashboard, APIs, connectors, and related services, operated by Stopngage Solutions Pvt. Limited."
        toc={TOC}
      >
        <section id="overview">
          <h2>Overview</h2>
          <p>These Terms of Service ("Terms") govern access to and use of the SuprAI platform, dashboard, APIs, connectors, and related services (the "Service"), operated by <b>Stopngage Solutions Pvt. Limited</b> ("SuprAI," "we," "us"). By creating an account or using the Service, you agree to these Terms and acknowledge our <Link to="/privacy">Privacy Policy</Link>. If you use the Service on behalf of an organization, you represent that you are authorized to bind it, and "Customer" refers to that organization.</p>
          <p>If Customer has signed a separate agreement or order form with us, that agreement controls to the extent of any conflict with these Terms.</p>
        </section>

        <section id="definitions">
          <div className="legal-num">Section 1</div>
          <h2>Definitions</h2>
          <ul>
            <li><b>Customer</b> — the organization with a SuprAI account</li>
            <li><b>Authorized User</b> — an individual the Customer permits to access the Service</li>
            <li><b>Customer Data</b> — data submitted to or synced with the Service by or on behalf of Customer, including data from connected third-party systems</li>
            <li><b>End Customer</b> — an individual whose personal data is contained in Customer Data (e.g., Customer's own customers, employees, or vendors)</li>
            <li><b>Enterprise Context</b> — the unified, permissioned layer of Customer Data SuprAI builds from Customer's connected systems</li>
            <li><b>Workflow</b> — an automated sequence of actions a Customer configures on the Service, acting on Enterprise Context</li>
            <li><b>Skill</b> — a reusable AI capability or template a Customer builds and shares within its own organization on the Service</li>
            <li><b>Agent</b> — an AI-driven process on the Service that answers questions or takes actions using Enterprise Context within configured permissions</li>
            <li><b>Connected AI Client</b> — a third-party AI assistant or application the Customer connects to the Service to query or act on Enterprise Context</li>
          </ul>
        </section>

        <section id="service">
          <div className="legal-num">Section 2</div>
          <h2>The Service</h2>
          <p>SuprAI is the AI operating system for a company: one place where a Customer's apps, answers, and agents come together. Customers manage their Enterprise Context in a single permissioned layer; receive role-aware answers; build, run, and share Workflows, Skills, and Agents across their organization; and optionally expose the Service to Connected AI Clients they already use. Available features and connectors depend on Customer's plan and configuration. We may improve, modify, or discontinue features, provided we do not materially degrade the core Service during a paid term without notice.</p>
        </section>

        <section id="accounts">
          <div className="legal-num">Section 3</div>
          <h2>Accounts</h2>
          <ul>
            <li>Access requires sign-in via Google or another supported method.</li>
            <li>Customer is responsible for all activity under its account, for its Authorized Users' compliance with these Terms, and for the accuracy of information provided.</li>
            <li>Authorized Users must be at least 18 and act within the scope of authority Customer grants them.</li>
            <li>Customer must keep credentials confidential and notify us promptly of any suspected unauthorized access.</li>
          </ul>
        </section>

        <section id="connectors">
          <div className="legal-num">Section 4</div>
          <h2>Connectors &amp; Authorized Data Access</h2>
          <p>Connecting a third-party system (e.g., Slack, Google Workspace, Shopify, Razorpay, GoKwik) authorizes SuprAI to access and process the data required for that integration, strictly per Customer's instructions and within the scopes granted. Customer may disconnect any connector at any time. SuprAI is not responsible for the availability, accuracy, security, or practices of third-party systems, which remain governed by their own terms. If a third-party provider changes or withdraws API access in a way that affects a connector, we will use reasonable efforts to restore or replace the functionality but are not liable for the change.</p>
          <p>Google user data accessed via the Service is handled per Section 3 of our <Link to="/privacy">Privacy Policy</Link> and the Google API Services User Data Policy, including the Limited Use requirements.</p>
        </section>

        <section id="ai-clients">
          <div className="legal-num">Section 5</div>
          <h2>Connected AI Clients</h2>
          <p>Customer may connect the Service to Connected AI Clients. Customer acknowledges that:</p>
          <ul>
            <li>Responses transmitted to a Connected AI Client may contain Enterprise Context the requesting Authorized User is permitted to see;</li>
            <li>What the Connected AI Client's provider does with data it receives is governed by Customer's agreement with that provider, not by these Terms, and Customer is responsible for reviewing those terms before connecting;</li>
            <li>Customer's administrators control which data sources, Workflows, Skills, and Agents are exposed to Connected AI Clients and may revoke exposure at any time;</li>
            <li>SuprAI is not responsible for acts, omissions, outputs, or data handling of any Connected AI Client.</li>
          </ul>
        </section>

        <section id="data-protection">
          <div className="legal-num">Section 6</div>
          <h2>Processing Roles &amp; Data Protection</h2>
          <p>For Customer Data — including Enterprise Context and any End Customer data it contains — Customer is the data controller (or equivalent under applicable law) and SuprAI is the processor, acting only on Customer's documented instructions. Customer represents and warrants that it has all rights, consents, and legal bases required for SuprAI to process Customer Data as contemplated by these Terms, including for any End Customer or employee personal data.</p>
          <p>A Data Processing Addendum ("DPA") reflecting these roles is available to Customers on request and is incorporated into these Terms for Customers processing personal data subject to GDPR, DPDPA, or similar laws.</p>
        </section>

        <section id="acceptable-use">
          <div className="legal-num">Section 7</div>
          <h2>Acceptable Use</h2>
          <p>Customer and its Authorized Users will not:</p>
          <ul>
            <li>Use the Service unlawfully or to infringe third-party rights, including privacy and intellectual property rights</li>
            <li>Attempt unauthorized access to the Service, other Customers' tenants, or connected systems</li>
            <li>Reverse-engineer, decompile, or extract source code of the Service, except as permitted by non-waivable law</li>
            <li>Transmit malware or code intended to disrupt the Service or connected systems</li>
            <li>Exceed documented API rate limits, or scrape or bulk-extract the Service by automated means outside our documented APIs</li>
            <li>Use the Service to build a competing product, or resell access to the Service except as expressly agreed in writing</li>
            <li>Circumvent role-based permissions, tenant isolation, or usage limits</li>
          </ul>
          <p>We may suspend access immediately, with notice where practicable, if Customer's use breaches this Section, threatens the security or integrity of the Service, or exposes us to liability, and will restore access once the issue is resolved.</p>
        </section>

        <section id="ai-output">
          <div className="legal-num">Section 8</div>
          <h2>AI Output, Training &amp; Tenant Isolation</h2>
          <p>The Service generates AI-driven output (answers, summaries, recommendations, automated actions) within Workflows, Skills, and Agents. AI output may be inaccurate, incomplete, or unsuitable for a given purpose. Customer is responsible for reviewing AI output — and for supervising automated actions — before relying on them for business, financial, legal, or operational decisions.</p>
          <p>SuprAI does not use Customer Data, End Customer Data, Enterprise Context, Workflows, Skills, or Agents to train, fine-tune, or improve any AI or ML model — ours or any third party's — and one Customer's data, Workflows, Skills, or Agents are never used to build, train, or improve another Customer's Workflows, Skills, Agents, or AI outputs. LLM inference is performed under zero-data-retention agreements with our model providers. (See <Link to="/privacy">Privacy Policy §5</Link>.)</p>
        </section>

        <section id="beta">
          <div className="legal-num">Section 9</div>
          <h2>Beta Features</h2>
          <p>We may offer features identified as beta, preview, or experimental. Beta features are provided as-is, may be modified or withdrawn at any time, may be subject to additional terms, and are excluded from any support or service commitments. Customer's use of beta features is at its own discretion and risk.</p>
        </section>

        <section id="fees">
          <div className="legal-num">Section 10</div>
          <h2>Fees &amp; Payment</h2>
          <p>Fees, if applicable, are as stated in the applicable order form or published pricing plan, exclusive of taxes, and non-refundable except as required by law or expressly agreed. Customer is responsible for applicable taxes other than taxes on our income. We may change fees with at least 30 days' notice, effective from the next billing period. Overdue amounts may result in suspension after notice.</p>
        </section>

        <section id="ip">
          <div className="legal-num">Section 11</div>
          <h2>Intellectual Property; Feedback</h2>
          <p>SuprAI owns the Service, its software, models of operation, and underlying technology, including all improvements. Subject to these Terms, we grant Customer a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for its internal business purposes during the term. Customer retains all rights in Customer Data; Customer grants us a limited license to host, process, and transmit Customer Data solely to provide the Service and as described in the Privacy Policy.</p>
          <p>If Customer or its Authorized Users provide suggestions or feedback about the Service, we may use it without restriction or obligation; feedback does not include Customer Data.</p>
        </section>

        <section id="confidentiality">
          <div className="legal-num">Section 12</div>
          <h2>Confidentiality</h2>
          <p>Each party will protect the other's non-public information disclosed in connection with the Service with at least reasonable care, use it only to perform under these Terms, and disclose it only to personnel and advisors who need it and are bound by comparable obligations. Confidentiality obligations survive termination for 3 years; trade secrets are protected for as long as they remain trade secrets. Compelled disclosures are permitted with prompt notice to the other party where legally allowed.</p>
        </section>

        <section id="publicity">
          <div className="legal-num">Section 13</div>
          <h2>Publicity</h2>
          <p>Neither party may use the other's name or logo publicly without prior written consent, except that we may identify Customer by name and logo in customer lists and marketing materials unless Customer opts out in writing.</p>
        </section>

        <section id="warranties">
          <div className="legal-num">Section 14</div>
          <h2>Disclaimer of Warranties</h2>
          <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM COURSE OF DEALING. WE DO NOT WARRANT UNINTERRUPTED, ERROR-FREE, OR SECURE OPERATION, OR THAT AI OUTPUT WILL BE ACCURATE OR COMPLETE.</p>
        </section>

        <section id="liability">
          <div className="legal-num">Section 15</div>
          <h2>Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW: (a) NEITHER PARTY IS LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL; AND (b) EACH PARTY'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS IS CAPPED AT THE AMOUNTS PAID OR PAYABLE BY CUSTOMER TO SUPRAI IN THE 12 MONTHS PRECEDING THE FIRST CLAIM.</p>
          <p>The exclusions in (a) and the cap in (b) do not apply to: Customer's payment obligations; either party's breach of Section 12 (Confidentiality); Customer's breach of Section 7 (Acceptable Use); a party's indemnification obligations under Section 16; or liability that cannot be limited under applicable law.</p>
        </section>

        <section id="indemnification">
          <div className="legal-num">Section 16</div>
          <h2>Indemnification</h2>
          <h3>16.1 By Customer</h3>
          <p>Customer will defend and indemnify SuprAI against third-party claims arising from: Customer Data (including any failure to have the rights, consents, or legal bases required under Section 6); Customer's or its Authorized Users' breach of these Terms or misuse of the Service; or Customer's Connected AI Clients.</p>
          <h3>16.2 By SuprAI</h3>
          <p>SuprAI will defend and indemnify Customer against third-party claims that the Service, as provided by us and used per these Terms, infringes that third party's intellectual property rights — excluding claims arising from Customer Data, Connected AI Clients, combinations with items not provided by us, or use after we've notified Customer to stop. If the Service is subject to such a claim, we may procure the right to continue it, modify it to be non-infringing, or terminate the affected portion with a pro-rata refund of prepaid fees. This Section states Customer's exclusive remedy for infringement claims.</p>
          <h3>16.3 Procedure</h3>
          <p>The indemnified party must give prompt notice, reasonable cooperation, and sole control of the defense and settlement to the indemnifying party (no settlement imposing obligations on the indemnified party without its consent).</p>
        </section>

        <section id="termination">
          <div className="legal-num">Section 17</div>
          <h2>Term, Suspension &amp; Termination</h2>
          <p>These Terms apply from account creation until terminated. Either party may terminate per the applicable order form, or, absent one, with 30 days' written notice. Either party may terminate immediately for the other's material breach not cured within 15 days of notice. We may suspend per Section 7 or Section 10.</p>
          <p>On termination: access ends; Customer has 30 days to export Customer Data using the Service's export functionality or by written request; and thereafter Customer Data is deleted or anonymized per the Privacy Policy. Sections 11–16 and 18–20 survive termination.</p>
        </section>

        <section id="force-majeure">
          <div className="legal-num">Section 18</div>
          <h2>Force Majeure</h2>
          <p>Neither party is liable for delay or failure to perform (other than payment obligations) caused by events beyond its reasonable control, including natural disasters, war, terrorism, labor disputes, governmental action, internet or utility failures, or third-party platform outages, provided the affected party uses reasonable efforts to mitigate.</p>
        </section>

        <section id="governing-law">
          <div className="legal-num">Section 19</div>
          <h2>Governing Law &amp; Disputes</h2>
          <p>These Terms are governed by the laws of India, without regard to conflict-of-law rules. The parties will first attempt in good faith to resolve any dispute through negotiation for 30 days. Failing that, disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka. Nothing prevents either party from seeking injunctive relief in any court of competent jurisdiction to protect intellectual property or confidential information.</p>
        </section>

        <section id="general">
          <div className="legal-num">Section 20</div>
          <h2>General</h2>
          <ul>
            <li><b>Assignment.</b> Neither party may assign these Terms without the other's consent, except to an affiliate or in connection with a merger, acquisition, or sale of substantially all assets, with notice.</li>
            <li><b>Entire agreement.</b> These Terms, the Privacy Policy, the DPA (where applicable), and any order form are the entire agreement and supersede prior discussions on the subject.</li>
            <li><b>Severability.</b> If any provision is unenforceable, it will be modified to the minimum extent necessary, and the rest remains in effect.</li>
            <li><b>No waiver.</b> Failure to enforce a provision is not a waiver of it.</li>
            <li><b>Notices.</b> Legal notices to us go to <a href="mailto:legal@suprai.one">legal@suprai.one</a>; notices to Customer go to the account administrator's email on file.</li>
            <li><b>Changes.</b> We may update these Terms; material changes will be notified by email or in-product notice at least 15 days before taking effect, and continued use after the effective date constitutes acceptance. Changes do not apply retroactively to a dispute arising before the change.</li>
          </ul>
        </section>

        <section id="contact">
          <div className="legal-num">Section 21</div>
          <h2>Contact</h2>
          <div className="legal-contact">
            <div className="who">Stopngage Solutions Pvt. Limited</div>
            <p>Bengaluru, Karnataka, India</p>
            <p><a href="mailto:legal@suprai.one">legal@suprai.one</a></p>
          </div>
          <p style={{ marginTop: 14 }}>See also our <Link to="/privacy">Privacy Policy</Link>.</p>
        </section>
      </LegalLayout>
    </>
  )
}
