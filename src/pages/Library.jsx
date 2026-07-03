import { useEffect, useRef, useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import BrandImg from '../components/BrandImg.jsx'
import { getFacets, getUseCases, getUseCase, iconSlug } from '../data/useCasesApi.js'

const LIMIT = 18
const splitCsv = (v) => (v ? v.split(',').map((s) => s.trim()).filter(Boolean) : [])

// ---- branded loader: SuprAI mark inside a spinning ring ----
function Loader({ size = 'md', label = 'Loading' }) {
  return (
    <div className={`lib-loader lib-loader-${size}`} role="status" aria-label={label}>
      <span className="lib-loader-ring">
        <img className="lib-loader-mark" src="/favicon.svg" alt="" aria-hidden="true" />
      </span>
    </div>
  )
}

// ---- one collapsible filter group (Team / Industry / Tools) ----
function FilterGroup({ title, options, selected, onToggle, searchable, defaultOpen }) {
  const [term, setTerm] = useState('')
  const t = term.trim().toLowerCase()
  const matches = t ? options.filter((o) => o.label.toLowerCase().includes(t)) : options
  // Tools has 400+ entries — only show a slice, and always keep chosen ones visible.
  const list = searchable && !t
    ? options.filter((o) => selected.includes(o.value))
    : matches.slice(0, 80)

  return (
    <details className="lib-group" open={defaultOpen}>
      <summary>
        {title}
        {selected.length > 0 && <span className="lib-count">{selected.length}</span>}
      </summary>
      <div className="lib-group-body">
        {searchable && (
          <input
            className="lib-mini-search"
            placeholder={`Search ${options.length} ${title.toLowerCase()}…`}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        )}
        <div className="lib-opts">
          {list.map((o) => (
            <label className="lib-opt" key={o.value}>
              <input type="checkbox" checked={selected.includes(o.value)} onChange={() => onToggle(o.value)} />
              <span>{o.label}</span>
            </label>
          ))}
          {searchable && !t && (
            <div className="lib-note">Type to search {options.length} {title.toLowerCase()}</div>
          )}
          {t && matches.length > 80 && <div className="lib-note">+{matches.length - 80} more — keep typing</div>}
          {t && matches.length === 0 && <div className="lib-note">No {title.toLowerCase()} match “{term}”.</div>}
        </div>
      </div>
    </details>
  )
}

// ---- overlapping tool-icon stack shown on each card ----
function ToolStack({ apps = [] }) {
  const shown = apps.slice(0, 4)
  const extra = apps.length - shown.length
  return (
    <div className="lib-stack">
      {shown.map((a, i) => (
        <span className="lib-ic" key={a + i} title={a}>
          <BrandImg slug={iconSlug(a)} alt={a} />
        </span>
      ))}
      {extra > 0 && <span className="lib-ic lib-ic-more">+{extra}</span>}
    </div>
  )
}

// ---- full-screen detail sheet, powered by GET /use-cases/:id ----
function DetailPanel({ id, onClose }) {
  const [tpl, setTpl] = useState(null)
  const [err, setErr] = useState(null)
  useEffect(() => {
    let alive = true
    setTpl(null); setErr(null)
    getUseCase(id).then((d) => alive && setTpl(d)).catch((e) => alive && setErr(e.message))
    return () => { alive = false }
  }, [id])
  // close on Escape + lock the page behind the sheet from scrolling
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  return (
    <div className="lib-sheet-overlay" onClick={onClose}>
      <div className="lib-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="lib-sheet-top">
          <button className="lib-back" onClick={onClose}>← Back to library</button>
          <button className="lib-x" onClick={onClose} aria-label="Close">×</button>
        </div>
        {!tpl && !err && <div style={{ padding: 80 }}><Loader label="Loading workflow" /></div>}
        {err && <div className="lib-note" style={{ padding: 48, textAlign: 'center' }}>Couldn’t load this template.</div>}
        {tpl && (
          <div className="lib-sheet-body">
            {tpl.apps?.length > 0 && (
              <div className="lib-toolrow">
                {tpl.apps.map((a, i) => (
                  <span className="lib-toolchip" key={a + i}><BrandImg slug={iconSlug(a)} alt={a} /> {a}</span>
                ))}
              </div>
            )}
            <h1 className="lib-sheet-title">{tpl.name}</h1>
            <p className="lib-panel-desc">{tpl.description}</p>

            {tpl.workflow?.steps?.length > 0 && (
              <div className="lib-block">
                <div className="lib-block-h">How it runs</div>
                <ol className="lib-steps">
                  {tpl.workflow.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </div>
            )}
            {tpl.tools?.length > 0 && (
              <div className="lib-block">
                <div className="lib-block-h">Tools</div>
                <div className="lib-tags">
                  {tpl.tools.map((tl, i) => (
                    <span className="lib-tag" key={i}><BrandImg slug={iconSlug(tl.name)} alt={tl.name} /> {tl.name} · <em>{tl.role}</em></span>
                  ))}
                </div>
              </div>
            )}
            {tpl.problems?.length > 0 && (
              <div className="lib-block">
                <div className="lib-block-h">Problem it solves</div>
                {tpl.problems.map((p, i) => <p className="lib-panel-desc" key={i}>{p}</p>)}
              </div>
            )}
            {tpl.metrics?.length > 0 && (
              <div className="lib-block">
                <div className="lib-block-h">Impact</div>
                <ul className="lib-metrics">{tpl.metrics.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
            )}
            {tpl.industries?.length > 0 && (
              <div className="lib-block">
                <div className="lib-block-h">Industries</div>
                <div className="lib-tags">{tpl.industries.map((x) => <span className="lib-tag lib-tag-plain" key={x}>{x}</span>)}</div>
              </div>
            )}
            <a className="btn btn-primary" href="#" style={{ marginTop: 6, alignSelf: 'flex-start' }}>Set up this workflow →</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function WorkflowLibrary({ initialTeams = [], initialIndustries = [], initialConnectors = [] } = {}) {
  const [sp, setSp] = useSearchParams()
  const [facets, setFacets] = useState(null)
  // URL query params win; otherwise seed from props (e.g. a /solutions/:slug page).
  const seed = (param, fallback) => { const u = splitCsv(sp.get(param)); return u.length ? u : fallback }
  const [teams, setTeams] = useState(() => seed('team', initialTeams))
  const [industries, setIndustries] = useState(() => seed('industry', initialIndustries))
  const [connectors, setConnectors] = useState(() => seed('connector', initialConnectors))

  const [items, setItems] = useState([])
  const [total, setTotal] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [q, setQ] = useState('')
  const [activeId, setActiveId] = useState(null)

  const offsetRef = useRef(0)
  const hasMoreRef = useRef(true)
  const loadingRef = useRef(false)
  const reqRef = useRef(0)
  // latest filters, so the scroll handler never fetches with a stale closure
  const fRef = useRef({ teams, industries, connectors })
  fRef.current = { teams, industries, connectors }

  const filtersKey = [teams.join(','), industries.join(','), connectors.join(',')].join('|')

  useEffect(() => { getFacets().then(setFacets).catch((e) => setError(e.message)) }, [])

  const runFetch = useCallback((my) => {
    if (loadingRef.current || !hasMoreRef.current) return
    loadingRef.current = true; setLoading(true)
    const first = offsetRef.current === 0
    getUseCases({ ...fRef.current, offset: offsetRef.current, limit: LIMIT })
      .then((d) => {
        if (my !== reqRef.current) return
        setItems((prev) => (first ? d.items : [...prev, ...d.items]))
        setTotal(d.total)
        offsetRef.current += d.items.length
        hasMoreRef.current = d.hasMore
      })
      .catch((e) => { if (my === reqRef.current) setError(e.message) })
      .finally(() => { if (my === reqRef.current) { loadingRef.current = false; setLoading(false) } })
  }, [])

  // reset + load first page whenever the filter set changes; keep URL shareable
  useEffect(() => {
    const my = ++reqRef.current
    offsetRef.current = 0; hasMoreRef.current = true; loadingRef.current = false
    setItems([]); setTotal(null); setError(null)
    runFetch(my)
    const next = {}
    if (teams.length) next.team = teams.join(',')
    if (industries.length) next.industry = industries.join(',')
    if (connectors.length) next.connector = connectors.join(',')
    setSp(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey])

  // infinite scroll
  const sentinelRef = useRef(null)
  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreRef.current && !loadingRef.current) runFetch(reqRef.current)
    }, { rootMargin: '600px' })
    io.observe(el)
    return () => io.disconnect()
  }, [runFetch])

  const toggle = (setter) => (val) =>
    setter((prev) => (prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]))
  const clearAll = () => { setTeams([]); setIndustries([]); setConnectors([]) }
  const selectedCount = teams.length + industries.length + connectors.length

  const s = q.trim().toLowerCase()
  const shown = s
    ? items.filter((it) =>
        it.name.toLowerCase().includes(s) ||
        it.description.toLowerCase().includes(s) ||
        (it.apps || []).some((a) => a.toLowerCase().includes(s)))
    : items

  const teamOpts = facets ? facets.teams.map((x) => ({ value: x, label: x })) : []
  const indOpts = facets ? facets.industries.map((x) => ({ value: x, label: x })) : []
  const connOpts = facets ? facets.connectors.map((x) => ({ value: x, label: x })) : []

  return (
    <>
      <section className="section" id="library" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="lib-searchbar" style={{ margin: '0 auto 34px' }}>
            <input placeholder="Search loaded workflows…" value={q} onChange={(e) => setQ(e.target.value)} />
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </div>
          <div className="lib-layout">
            {/* ---- filters ---- */}
            <aside className="lib-side">
              <div className="lib-side-head">
                <span>Filter</span>
                {selectedCount > 0 && <button className="lib-clear" onClick={clearAll}>Clear ({selectedCount})</button>}
              </div>
              {!facets && <Loader size="sm" label="Loading filters" />}
              {facets && (
                <>
                  <FilterGroup title="Team" options={teamOpts} selected={teams} onToggle={toggle(setTeams)} defaultOpen />
                  <FilterGroup title="Industry" options={indOpts} selected={industries} onToggle={toggle(setIndustries)} defaultOpen />
                  <FilterGroup title="Tools" options={connOpts} selected={connectors} onToggle={toggle(setConnectors)} searchable defaultOpen />
                </>
              )}
            </aside>

            {/* ---- results ---- */}
            <div className="lib-main">
              {total != null && (
                <div className="lib-resulthead">
                  <span>
                    Showing <b>{shown.length}</b>{!s && <> of <b>{total.toLocaleString()}</b></>} workflow{shown.length === 1 ? '' : 's'}
                    {s && <> matching “{q}”</>}
                  </span>
                </div>
              )}

              {error && <div className="lib-note">Couldn’t reach the library API. {error}</div>}

              <div className="lib-grid">
                {shown.map((it) => (
                  <button className="lib-card" key={it.id} onClick={() => setActiveId(it.id)}>
                    <ToolStack apps={it.apps} />
                    <h3>{it.name}</h3>
                    <p>{it.description}</p>
                    <span className="lib-try">View workflow →</span>
                  </button>
                ))}
              </div>

              {loading && items.length === 0 && <Loader label="Loading workflows" />}
              {loading && items.length > 0 && <Loader size="sm" label="Loading more" />}
              {!loading && !hasMoreRef.current && items.length > 0 && !s && (
                <div className="lib-note" style={{ textAlign: 'center', marginTop: 24 }}>That’s all {total?.toLocaleString()} workflows.</div>
              )}
              {!loading && items.length === 0 && !error && total != null && (
                <div className="lib-note" style={{ textAlign: 'center', marginTop: 24 }}>No workflows match these filters yet. Try removing one.</div>
              )}
              <div ref={sentinelRef} style={{ height: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {activeId && <DetailPanel id={activeId} onClose={() => setActiveId(null)} />}
    </>
  )
}
