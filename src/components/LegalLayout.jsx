// Shared shell for legal pages (privacy / terms): hero with dates + sticky TOC + article body.
export default function LegalLayout({ title, lead, effective, updated, toc, children }) {
  return (
    <>
      <section className="legal-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>{title}</h1>
          <div className="legal-dates">
            <span>Effective date · <b>{effective}</b></span>
            <span>Last updated · <b>{updated}</b></span>
          </div>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </section>
      <div className="wrap">
        <div className="legal-layout">
          <aside className="legal-toc">
            <div className="legal-toc-h">On this page</div>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </aside>
          <article className="legal-body">{children}</article>
        </div>
      </div>
    </>
  )
}
