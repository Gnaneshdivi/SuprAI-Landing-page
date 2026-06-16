import { useEffect, useRef } from 'react'

// Higgsfield-generated SuprAI illustration (flat, off-white, no fake logos).
// NOTE: this is the Higgsfield CDN URL. For production, download it into
// /public and swap src to "/suprai-hub.png" so the asset is self-hosted.
const HUB = 'https://d8j0ntlcm91z4.cloudfront.net/user_3F2KYYDg8qQcmih0sfs9m7BA4R6/hf_20260615_123914_14e28500-07aa-43a6-966a-2781ae073e69.png'

export default function HeroArt({ alt = 'SuprAI sits on top of your tools and gives any AI access to them' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) el.classList.add('in') }),
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="hero-art" ref={ref}>
      <img src={HUB} alt={alt} loading="lazy" />
    </div>
  )
}
