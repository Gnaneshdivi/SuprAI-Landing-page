import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'
import LegalLayout from '../components/LegalLayout.jsx'
import { ROUTE_META } from '../pageMeta.js'

const TOC = [
  ['overview', 'Overview'],
  ['roles', '1 · Controller vs. Processor'],
  ['data-we-collect', '2 · Data we collect'],
  ['google-data', '3 · Google user data'],
  ['how-we-use', '4 · How we use data'],
  ['ai-processing', '5 · AI processing & training'],
  ['sharing', '6 · How we share data'],
  ['retention', '7 · Data retention'],
  ['security', '8 · Security'],
  ['transfers', '9 · International transfers'],
  ['your-rights', '10 · Your rights & choices'],
  ['grievance', '11 · Grievance redressal (India)'],
  ['children', '12 · Children'],
  ['frameworks', '13 · Regulatory frameworks'],
  ['changes', '14 · Changes to this policy'],
  ['contact', '15 · Contact'],
]

export default function Privacy() {
  return (
    <>
      <PageMeta {...ROUTE_META['/privacy']} />
      <LegalLayout
        title="Privacy Policy"
        effective="June 15, 2026"
        updated="June 15, 2026"
        lead="How Stopngage Solutions Pvt. Limited — the company behind SuprAI — collects, uses, stores, shares, and protects information in connection with our platform, dashboard, APIs, connectors, and related services."
        toc={TOC}
      >
        <section id="overview">
          <h2>Overview</h2>
          <p>This Privacy Policy describes how <b>Stopngage Solutions Pvt. Limited</b> ("SuprAI," "we," "us"), the company behind the SuprAI platform (<a href="https://www.suprai.one" target="_blank" rel="noopener noreferrer">suprai.one</a>), collects, uses, stores, shares, and protects information in connection with our platform, dashboard, APIs, connectors, and related services (the "Service").</p>
          <p>SuprAI is the AI operating system for your company: one place where a Customer's apps, answers, and agents come together. We unify a Customer's <b>Enterprise Context</b> — data and knowledge from their connected business systems — into a single, permissioned layer, deliver role-aware answers, and let Customers build, run, and share AI-powered <b>Workflows</b>, <b>Skills</b>, and <b>Agents</b> across their organization, including through AI assistants the Customer already uses.</p>
          <p>This Policy applies to:</p>
          <ul>
            <li><b>Authorized Users</b> — individuals who access the Service under a Customer's account</li>
            <li><b>Customers</b> — the organizations that hold a SuprAI account and connect their systems</li>
            <li><b>End Customers</b> — individuals whose personal data is contained in a Customer's connected systems (e.g., a Customer's own customers, employees, or vendors)</li>
            <li><b>Visitors</b> — individuals browsing our website</li>
          </ul>
          <p>This document is a notice of our practices. Where consent is required by law, we obtain it separately (e.g., at account creation or connector authorization), not through your mere use of the Service.</p>
        </section>

        <section id="roles">
          <div className="legal-num">Section 1</div>
          <h2>Roles: Controller vs. Processor</h2>
          <p>This distinction governs how every clause below applies.</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr><th>Data</th><th>SuprAI's role</th><th>Who decides how it's used</th></tr>
              </thead>
              <tbody>
                <tr><td>Account data (name, email, login) of Authorized Users and Visitors</td><td><b>Controller</b> (Data Fiduciary under India's DPDPA)</td><td>SuprAI</td></tr>
                <tr><td>Usage, telemetry, and log data of the Service itself</td><td><b>Controller</b></td><td>SuprAI</td></tr>
                <tr><td>Enterprise Context — data ingested from a Customer's connected systems, including any End Customer or employee personal data it contains</td><td><b>Processor</b> (Data Processor under DPDPA)</td><td>Customer</td></tr>
                <tr><td>Workflow, Skill, and Agent configurations and their run inputs/outputs</td><td><b>Processor</b></td><td>Customer</td></tr>
              </tbody>
            </table>
          </div>
          <p>Where SuprAI acts as Processor, we process data only on the Customer's documented instructions, only for the purposes the Customer has configured, and subject to the Data Processing Addendum ("DPA") available to Customers on request. We do not independently determine the purposes of that processing.</p>
          <div className="legal-note"><b>If you are an End Customer</b> seeking to exercise rights over data held in a Customer's systems, please direct your request to that organization (the controller). We will assist the Customer in responding, as required by law and our DPA. We are not able to independently action requests against data we process on a Customer's instructions.</div>
        </section>

        <section id="data-we-collect">
          <div className="legal-num">Section 2</div>
          <h2>Data We Collect</h2>
          <h3>2.1 Account data</h3>
          <p>Name, email address, profile photo, organization, and account identifiers, collected via Google Sign-In or other supported authentication when an account is created.</p>
          <h3>2.2 Enterprise Context (connector data)</h3>
          <p>When a Customer's administrator authorizes a connector, we ingest the data required to build that Customer's unified Enterprise Context. Depending on the connectors enabled, this may include:</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr><th>Connector category</th><th>Examples</th><th>Data accessed</th></tr>
              </thead>
              <tbody>
                <tr><td>Communication &amp; collaboration</td><td>Slack, Google Workspace</td><td>Messages, documents, files, and directory data within authorized scopes</td></tr>
                <tr><td>Commerce &amp; operations</td><td>Shopify, GoKwik</td><td>Catalog, orders, customers, returns, store configuration</td></tr>
                <tr><td>Payments &amp; finance</td><td>Razorpay</td><td>Payment links, transactions, settlements</td></tr>
                <tr><td>Knowledge &amp; documents</td><td>Google Drive, Docs</td><td>Files and folders explicitly authorized</td></tr>
                <tr><td>Other integrations the Customer authorizes</td><td>—</td><td>Scoped to what the Customer enables</td></tr>
              </tbody>
            </table>
          </div>
          <p>We request only the minimum scopes required for the features enabled. No connector is accessed without explicit administrator authorization, and connectors can be disconnected at any time.</p>
          <h3>2.3 Workflows, Skills &amp; Agents</h3>
          <p>Configuration, logic, prompts, schedules, and metadata for the Workflows, Skills, and Agents a Customer builds or shares within its own organization, along with the inputs and outputs of their runs.</p>
          <h3>2.4 Connected AI Clients</h3>
          <p>Customers may connect the Service to third-party AI assistants and clients they already use (for example, via supported integration protocols). When a Customer does so, queries from those clients, and the responses the Service returns to them, pass through the Service. See Section 6.3 for how this data is shared.</p>
          <h3>2.5 Usage data</h3>
          <p>IP address, device and browser type, timestamps, pages and features used, API call logs, and diagnostic data.</p>
          <h3>2.6 Content</h3>
          <p>Prompts, queries, documents, files, and other input submitted to the Service by Authorized Users.</p>
          <h3>2.7 Cookies</h3>
          <p>We use strictly necessary cookies for authentication and session management, and analytics cookies to understand product usage. You can control cookies through your browser; disabling necessary cookies may break sign-in.</p>
        </section>

        <section id="google-data">
          <div className="legal-num">Section 3</div>
          <h2>Google User Data &amp; Limited Use</h2>
          <p>SuprAI's use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. Specifically, we do <b>not</b>:</p>
          <ul>
            <li>Use Google user data for advertising</li>
            <li>Use Google user data to train or improve AI/ML models, including third-party or foundation models — nor transfer it to any third-party AI tool for that purpose</li>
            <li>Sell or share Google user data with third parties, except as strictly necessary to provide core functionality you've requested</li>
            <li>Allow human access to Google user data except: (a) with your affirmative consent, (b) for security purposes such as investigating abuse, (c) to comply with applicable law, or (d) for internal operations where the data has been aggregated and anonymized</li>
          </ul>
          <p>You may revoke SuprAI's Google access at any time at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>.</p>
        </section>

        <section id="how-we-use">
          <div className="legal-num">Section 4</div>
          <h2>How We Use Data, and Our Legal Bases</h2>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr><th>Purpose</th><th>Data used</th><th>Legal basis (where GDPR applies)</th></tr>
              </thead>
              <tbody>
                <tr><td>Authenticate accounts and operate the Service</td><td>Account data, usage data</td><td>Contract performance</td></tr>
                <tr><td>Build Enterprise Context and power the Workflows, Skills, and Agents the Customer configures</td><td>Enterprise Context, Content, Workflow/Skill data</td><td>Contract performance (per Customer instructions)</td></tr>
                <tr><td>Serve role-aware answers to Authorized Users and Connected AI Clients</td><td>Enterprise Context, Content</td><td>Contract performance</td></tr>
                <tr><td>Maintain security: detect fraud, abuse, and unauthorized access</td><td>Usage data, account data</td><td>Legitimate interest</td></tr>
                <tr><td>Improve reliability and performance of the Service</td><td>Usage data (aggregated where possible)</td><td>Legitimate interest</td></tr>
                <tr><td>Communicate about the account, updates, or support</td><td>Account data</td><td>Contract performance / legitimate interest</td></tr>
                <tr><td>Send marketing communications</td><td>Account data (business contact)</td><td>Consent / legitimate interest, with opt-out</td></tr>
                <tr><td>Comply with legal obligations</td><td>As required</td><td>Legal obligation</td></tr>
              </tbody>
            </table>
          </div>
          <p><b>Marketing opt-out.</b> You may opt out of marketing communications at any time via the unsubscribe link in any such email or by writing to <a href="mailto:privacy@suprai.one">privacy@suprai.one</a>. Service and account notices are not marketing and will continue.</p>
          <p><b>Aggregated data.</b> We may generate aggregated, de-identified statistics (e.g., overall feature usage) that cannot reasonably identify any person or Customer, and use them to operate and improve the Service. We do not attempt to re-identify such data.</p>
        </section>

        <section id="ai-processing">
          <div className="legal-num">Section 5</div>
          <h2>AI Processing, Model Training &amp; Tenant Isolation</h2>
          <p>We hold ourselves to the same standard on this as the strictest enterprise AI vendors. Specifically:</p>
          <ul>
            <li><b>No model training.</b> We do not use Customer Data, End Customer Data, Enterprise Context, Workflows, Skills, Agents, or Content to train, fine-tune, or otherwise improve any AI or ML model — ours or any third party's.</li>
            <li><b>No cross-tenant use.</b> One Customer's Enterprise Context, Workflows, Skills, or Agents are never used to build, train, inform, or improve another Customer's Workflows, Skills, Agents, or AI outputs. Every tenant is isolated — there is no shared index or shared model state across Customers.</li>
            <li><b>Zero-retention inference.</b> LLM inference is performed under Zero Data Retention (ZDR) agreements and Data Processing Agreements (DPAs) with our model providers. Prompts and outputs are not stored by those providers and are not used for their model training.</li>
            <li><b>Permission-aware retrieval.</b> AI features — including answers served to Connected AI Clients — only surface content the requesting Authorized User is permitted to see under the access controls configured on the underlying connected systems and within the Service's role-based permissions. Retrieval respects permissions at query time, not just at ingestion.</li>
            <li><b>Customer control.</b> Customer administrators control which data sources, Workflows, Skills, and Agents are exposed to AI features and to Connected AI Clients, via connector-level and role-based permissions, and may restrict or revoke access at any time.</li>
          </ul>
        </section>

        <section id="sharing">
          <div className="legal-num">Section 6</div>
          <h2>How We Share Data</h2>
          <p>We do not sell personal data, and have not sold personal data as "sell" is defined under applicable privacy laws.</p>
          <h3>6.1 Sub-processors</h3>
          <p>We use the following categories of sub-processors to deliver the Service. An up-to-date named list is available on request and to Customers under the DPA.</p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr><th>Category</th><th>Purpose</th><th>Data commitment</th></tr>
              </thead>
              <tbody>
                <tr><td>Cloud infrastructure</td><td>Hosting, storage, compute</td><td>Encrypted at rest and in transit</td></tr>
                <tr><td>LLM inference providers</td><td>AI/agent processing</td><td>Zero Data Retention (ZDR) + DPA — no training on Customer Data</td></tr>
                <tr><td>Connector platform partners</td><td>Data sync with authorized connected systems</td><td>Scoped to authorized connector permissions</td></tr>
                <tr><td>Analytics &amp; monitoring</td><td>Product usage and reliability</td><td>Aggregated/de-identified where possible</td></tr>
                <tr><td>Email &amp; communications</td><td>Transactional and account email</td><td>Business contact data only</td></tr>
              </tbody>
            </table>
          </div>
          <p>Sub-processors are bound by written data protection terms no less protective than this Policy, and we remain responsible to Customers for their performance.</p>
          <h3>6.2 Within the Customer's organization</h3>
          <p>Enterprise Context, Workflows, Skills, Agents, and outputs are visible to the Customer's Authorized Users according to the roles and permissions the Customer's administrators configure.</p>
          <h3>6.3 Connected AI Clients</h3>
          <p>When a Customer connects the Service to a third-party AI assistant or client, responses generated by the Service (which may contain Enterprise Context the requesting user is permitted to see) are transmitted to that client. The Customer's agreement with that AI provider — not this Policy — governs what the provider does with data it receives. Customers should review those terms before connecting a client. We transmit only what the Customer's configuration and the requesting user's permissions allow.</p>
          <h3>6.4 Legal requirements</h3>
          <p>We may disclose data where required by law, regulation, legal process, or enforceable governmental request, and will notify the affected Customer where legally permitted.</p>
          <h3>6.5 Business transfers</h3>
          <p>In a merger, acquisition, financing, or sale of assets, data may be transferred to the successor entity, which remains bound by this Policy or one no less protective, with notice of any material change.</p>
        </section>

        <section id="retention">
          <div className="legal-num">Section 7</div>
          <h2>Data Retention</h2>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr><th>Data</th><th>Retention</th></tr>
              </thead>
              <tbody>
                <tr><td>Account data</td><td>Life of the account + up to 30 days after closure</td></tr>
                <tr><td>Enterprise Context</td><td>Per Customer-configured retention; deleted or anonymized within 30 days of connector disconnection or account closure</td></tr>
                <tr><td>Workflow/Skill/Agent configurations and run logs</td><td>Life of the account or per Customer-configured retention</td></tr>
                <tr><td>Usage and security logs</td><td>Up to 12 months, unless needed longer for security investigation</td></tr>
                <tr><td>Data subject to legal hold or legal retention duty</td><td>As required by law</td></tr>
              </tbody>
            </table>
          </div>
          <p>On verified deletion, data is removed from active systems within 30 days and from backups on the backup rotation cycle.</p>
        </section>

        <section id="security">
          <div className="legal-num">Section 8</div>
          <h2>Security</h2>
          <p>We implement technical and organizational measures calibrated to the sensitivity of the data we process, including: encryption in transit (TLS) and at rest; role-based access controls and least-privilege access for our personnel; tenant isolation at the data layer; logging and monitoring of access to production systems; and secure development and credential-management practices. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          <p><b>Breach notification.</b> If we become aware of a breach of security leading to accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of or access to personal data we process, we will notify affected Customers without undue delay and provide information reasonably required for the Customer to meet its own notification obligations, and will notify regulators and individuals where the law requires us to do so directly.</p>
        </section>

        <section id="transfers">
          <div className="legal-num">Section 9</div>
          <h2>International Data Transfers</h2>
          <p>We are based in India, and the Service may process or store data in other countries through our sub-processors. Where personal data subject to GDPR or similar laws is transferred internationally, we rely on appropriate safeguards, such as Standard Contractual Clauses or an adequacy decision, as applicable.</p>
        </section>

        <section id="your-rights">
          <div className="legal-num">Section 10</div>
          <h2>Your Rights &amp; Choices</h2>
          <p>Depending on your location and the applicable law, you may have the right to: access, correct, or delete your personal data; receive a copy in a portable format; object to or restrict certain processing; withdraw consent (without affecting prior processing); and complain to a supervisory authority.</p>
          <ul>
            <li><b>Authorized Users and Visitors</b> (data for which SuprAI is controller): contact <a href="mailto:privacy@suprai.one">privacy@suprai.one</a>. We will verify your identity and respond within the timeline the applicable law requires.</li>
            <li><b>End Customers</b> (data we process for a Customer): contact the relevant organization directly; we will support their response as their processor.</li>
            <li><b>Customer administrators</b> may disconnect any connector, adjust permissions, or revoke Google access at any time.</li>
          </ul>
          <p>We will not discriminate against you for exercising any of these rights.</p>
        </section>

        <section id="grievance">
          <div className="legal-num">Section 11</div>
          <h2>Grievance Redressal (India)</h2>
          <p>In accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000, grievances may be addressed to our Grievance Officer:</p>
          <div className="legal-contact">
            <div className="who">Grievance Officer, Stopngage Solutions Pvt. Limited</div>
            <p>Bengaluru, Karnataka, India</p>
            <p><a href="mailto:privacy@suprai.one">privacy@suprai.one</a></p>
          </div>
          <p style={{ marginTop: 14 }}>We aim to acknowledge grievances within 72 hours and resolve them within the timelines prescribed by applicable law.</p>
        </section>

        <section id="children">
          <div className="legal-num">Section 12</div>
          <h2>Children</h2>
          <p>The Service is designed for business use and is not directed at individuals under 18. We do not knowingly collect personal data from children. If you believe a child has provided us personal data, contact us and we will delete it.</p>
        </section>

        <section id="frameworks">
          <div className="legal-num">Section 13</div>
          <h2>Regulatory Frameworks</h2>
          <p>We process personal data consistent with, as applicable: <b>India's Digital Personal Data Protection Act, 2023</b> (SuprAI acts as Data Fiduciary for Authorized User and Visitor account data, and as Data Processor for Customer-instructed processing of Enterprise Context); the <b>EU/UK GDPR</b> (with the legal bases stated in Section 4); and <b>US state privacy laws</b> (CCPA/CPRA and similar — we do not sell or share personal information for cross-context behavioral advertising, and California residents may exercise the rights in Section 10, including through an authorized agent with written permission).</p>
        </section>

        <section id="changes">
          <div className="legal-num">Section 14</div>
          <h2>Changes to This Policy</h2>
          <p>We may update this Policy from time to time. We will post the updated version with a new "Last updated" date, and for material changes we will provide additional notice by email or in-product notification before the change takes effect.</p>
        </section>

        <section id="contact">
          <div className="legal-num">Section 15</div>
          <h2>Contact</h2>
          <div className="legal-contact">
            <div className="who">Stopngage Solutions Pvt. Limited</div>
            <p>Bengaluru, Karnataka, India</p>
            <p><a href="mailto:privacy@suprai.one">privacy@suprai.one</a></p>
          </div>
          <p style={{ marginTop: 14 }}>See also our <Link to="/terms">Terms of Service</Link>.</p>
        </section>
      </LegalLayout>
    </>
  )
}
