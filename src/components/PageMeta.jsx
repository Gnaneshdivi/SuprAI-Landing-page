import { useEffect } from 'react'

// Per-route document title + meta description (incl. OG/Twitter).
// SPA has no per-page <head>, so we set it on mount/param change.
const BRAND = 'SuprAI'
const HOME_TITLE = 'SuprAI — The AI operating system for your company'
const DEFAULT_DESC = 'SuprAI is the AI operating system for your company. One place where every team’s apps, answers and agents come together — so the whole company can ask, act and automate as one. Enterprise-grade, live in days.'

function setMeta(selector, attr, val) {
  if (!val) return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, name] = selector.match(/\[(?:name|property)="(.+)"\]/) || []
    if (selector.includes('property=')) el.setAttribute('property', name)
    else el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, val)
}

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const full = title ? `${title} · ${BRAND}` : HOME_TITLE
    const desc = description || DEFAULT_DESC
    document.title = full
    setMeta('meta[name="description"]', 'content', desc)
    setMeta('meta[property="og:title"]', 'content', full)
    setMeta('meta[name="twitter:title"]', 'content', full)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[name="twitter:description"]', 'content', desc)
  }, [title, description])
  return null
}
