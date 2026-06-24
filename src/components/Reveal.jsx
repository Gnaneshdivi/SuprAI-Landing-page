import { useEffect, useRef } from 'react'

// Scroll-reveal wrapper. Adds `.in` when the element enters the viewport.
// `d` = stagger delay step (0–7). Respects prefers-reduced-motion via CSS.
export default function Reveal({ children, d = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add('in'); obs.unobserve(el) }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-d={d || undefined} {...rest}>
      {children}
    </Tag>
  )
}
