// Build-time SSR entry — used only by `vite build --ssr` + scripts/prerender.mjs
// to prerender '/', '/privacy', '/terms'. Never shipped to the browser.
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export function render(url) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
