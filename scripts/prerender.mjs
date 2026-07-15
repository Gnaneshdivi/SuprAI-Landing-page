// Build-time prerender for '/', '/privacy', '/terms' — see /docs (or the PR
// that introduced this file) for why: Google's OAuth verification crawler
// doesn't execute JS, so these three public routes need real content in the
// served HTML, not just in the post-hydration DOM. Every other route stays
// pure CSR via dist/_shell.html, unaffected.
//
// Run after `vite build` (client) and `vite build --ssr src/entry-server.jsx
// --outDir dist-ssr` (SSR bundle) — both must exist before this runs.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { ROUTE_META } from '../src/pageMeta.js'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const distDir = join(root, 'dist')
const canonicalBase = 'https://www.suprai.one'

const template = readFileSync(join(distDir, 'index.html'), 'utf-8')
// Pristine, empty-shell CSR template — kept as the SPA fallback for every
// route besides the three prerendered below (see vercel.json rewrites).
writeFileSync(join(distDir, '_shell.html'), template)

const { render } = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href)

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function setTitle(html, title) {
  if (!/<title>[^<]*<\/title>/.test(html)) throw new Error('prerender: <title> not found in template')
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
}

function setMetaContent(html, attr, val, content) {
  const re = new RegExp(`(<meta ${attr}="${val}" content=")[^"]*("\\s*/?>)`)
  if (!re.test(html)) throw new Error(`prerender: <meta ${attr}="${val}"> not found in template`)
  return html.replace(re, (_, pre, post) => pre + escapeHtml(content) + post)
}

function injectCanonical(html, url) {
  if (!html.includes('</head>')) throw new Error('prerender: </head> not found in template')
  return html.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`)
}

function injectRoot(html, appHtml) {
  if (!html.includes('<div id="root"></div>')) throw new Error('prerender: empty <div id="root"></div> not found in template')
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

const ROUTES = [
  { path: '/', outFile: join(distDir, 'index.html') },
  { path: '/privacy', outFile: join(distDir, 'privacy', 'index.html'), meta: ROUTE_META['/privacy'] },
  { path: '/terms', outFile: join(distDir, 'terms', 'index.html'), meta: ROUTE_META['/terms'] },
]

for (const route of ROUTES) {
  const appHtml = render(route.path)
  let html = injectRoot(template, appHtml)
  html = injectCanonical(html, `${canonicalBase}${route.path}`)

  if (route.meta) {
    const fullTitle = `${route.meta.title} · SuprAI`
    html = setTitle(html, fullTitle)
    html = setMetaContent(html, 'name', 'description', route.meta.description)
    html = setMetaContent(html, 'property', 'og:title', fullTitle)
    html = setMetaContent(html, 'name', 'twitter:title', fullTitle)
    html = setMetaContent(html, 'property', 'og:description', route.meta.description)
    html = setMetaContent(html, 'name', 'twitter:description', route.meta.description)
  }

  mkdirSync(dirname(route.outFile), { recursive: true })
  writeFileSync(route.outFile, html)
  console.log(`prerender: ${route.path} -> ${route.outFile.replace(root + '/', '')} (${html.length} bytes)`)
}

rmSync(join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('prerender: done')
