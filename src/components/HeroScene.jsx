// Animated product-demo scene, rendered in a sandboxed iframe so its own
// CSS/JS (generic class names + a setInterval-style animation loop) can't
// collide with the site. The HTML is imported raw via Vite's ?raw loader.
import sceneHtml from './heroScene.html?raw'

export default function HeroScene() {
  return (
    <div className="hsc-wrap">
      <iframe
        className="hsc-frame"
        title="SuprAI — one shared AI executing across your stack"
        srcDoc={sceneHtml}
        loading="lazy"
        scrolling="no"
      />
    </div>
  )
}
