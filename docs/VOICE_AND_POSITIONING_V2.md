# SuprAI — Voice & Positioning v2 (for folding into Brand Guidelines + Website Design docs)

> This file records the v2 decisions so the main `.docx` docs can be updated later.
> **Headline change:** v2 deliberately reverses the old "never explain the plumbing" rule.
> We now run a **dual-track voice** — outcome-first for the buyer, architecture-revealing
> beneath it for the technical evaluator — so the page reads *clear but feels hard to build*.

## Why the change
The old page was clear, but it described capabilities in plain language and never exposed
the machinery — so it read as "buildable with Claude" (a wrapper). Serious infra pages
(Glean, Composio) pair an outcome-first headline with **named proprietary subsystems,
precise technical nouns, and show-don't-tell visuals**. We adopt those techniques — but
grounded only in REAL features, with **no invented metrics, no SOC 2/ISO badges, no named
customers** (testimonials stay honest placeholders until design-partner results land).

## Audience (unchanged)
20–100 person companies. Buyer = ops/sales/finance lead **+ their technical evaluator**.
Keep "enterprise-grade, right-sized," "priced for your size, not the enterprise."
We are NOT becoming a developer-infra product; the architecture track is a second layer
under outcome-first copy, aimed at the evaluator on the buying committee.

## Dual-track section pattern
1. **Outcome headline** — what a team gets (CEO understands instantly).
2. **Architecture-revealing subhead** — precise nouns (engineer thinks "this is real").
3. **Machinery proof** — a diagram, a named subsystem, or a mono execution trace.

## Named architecture (capitalized, branded — each maps to a real feature)
| Subsystem | What it really is (Features doc) |
|---|---|
| **Connector Fabric** | One ingestion fabric across 6 source classes: REST · GraphQL/Microsoft Graph · webhooks/event streams · custom & internal APIs · files & no-API portals/legacy · SQL databases & warehouses |
| **Onboarding Pipeline** | connect → map → index & sync → mirror permissions → go live (incremental, deduplicated sync) |
| **Entity Resolution** | Resolves the same customer/person/order across every tool into one answer |
| **Model Router** | Model-neutral routing per task; BYO keys; side-by-side compare; context reuse; token efficiency |
| **Permission Mirror** | Inherits each source's own access rules; per-person/team RBAC; SSO |
| **Action Engine** | Permission-scoped writes across tools; copilot/autopilot; action log & reversibility |
| **Agent Runtime** | Named shared agents; triggers/schedules; read→think→act workflows; skills; background runs |
| **Control Plane** | One admin console: connectors, permissions, agents, audit, spend — fully auditable |
| **Company Memory** | Continual learning; what one person teaches it, the company keeps |

## Vocabulary — "decently technical, not purely technical" (Glean register)
Audience is **non-technical buyers**. Keep the proprietary *names* (they signal real
infrastructure, like Glean's "Work AI"), but say everything else in plain words. Glean names
"Connectors", "Agents", "knowledge graph" — it never says REST/GraphQL/webhooks/SQL/warehouse.

**KEEP (named, branded, credible):** control plane · Connector Fabric · Entity Resolution ·
Model Router · Permission Mirror · Action Engine · Agent Runtime · Control Plane · Company Memory ·
copilot/autopilot · single sign-on · access by role · on the record · "Your data stays yours."

**TRANSLATE raw jargon → plain words:**
- REST / GraphQL / Microsoft Graph / APIs → "your apps"
- webhooks / event streams → "live updates"
- files / no-API / portals → "files & docs" / "older systems"
- SQL / Postgres / MySQL → "databases"
- data warehouse / Snowflake / BigQuery → "data vaults"
- "six source classes" → "every kind of system" / "six kinds of system"
- OAuth / token / key → "the tool's own secure login"
- incremental/deduplicated sync → "kept up to date"
- inherits ACLs / permission-aware execution → "keeps each tool's own access rules"
- audit trail → "everything on the record"
- routes any model per task → "picks the right AI for each job"
- terminal/code traces → a plain-English "what happens when you ask" step flow

**STILL AVOID:** any fabricated number (volume, latency, uptime, tenant counts) · any compliance
badge we don't hold (no SOC 2/ISO logos — say "compliance-ready by design") · named customers/quotes
until real · raw developer jargon · hype words (magic, supercharge, revolutionary, seamless, unleash) ·
outcome claims with no mechanism behind them.

## Honest proof / stat band
`6 source classes` · `Any model (GPT · Claude · Gemini, BYO keys)` · `1 control plane` ·
`Live in days` · `100+ apps`. Plus "20–100, enterprise-grade right-sized."

## CTAs
Primary **Book a demo**; secondary **See the architecture** / **See it in action**.
(Dual CTA serves the buyer and the evaluator at once.)
