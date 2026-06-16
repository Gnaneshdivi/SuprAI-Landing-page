# SuprAI — Marketing site (React + Vite)

A multi-page React site for SuprAI: **Home · Solutions · Pricing · About**, wired with React Router.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  main.jsx              # entry + BrowserRouter
  App.jsx               # routes + scroll-to-top
  index.css             # full theme (light orangish off-white + orange grid, pastel, bordered cards)
  components/
    Layout.jsx          # Announce bar + Nav + Footer (shared)
  pages/
    Home.jsx            # hero, workers, ask→act, platform 2×2, use cases,
                        # integrations, why-us, security 2×3, work-where-you-work,
                        # compare, outcomes, testimonials, FAQ, CTA
    Solutions.jsx       # by team + by industry, "one layer" engine, deep-dive, FAQ
    Pricing.jsx         # 4 tiers, "two parts", FAQ
    About.jsx           # mission, vision (agent orchestration), values, team
```

## Design system (in `index.css`)

- **Canvas:** `--bg #FFF8F2` — a light orangish off-white (white + a hint of orange), with a faint orange grid.
- **Accent:** orange gradient `#FF8A4C → #F15A22 → #C2410C` (used sparingly).
- **Cards:** hairline border, no drop shadows. Featured = gradient border.
- **Type:** Sora (display) + Inter (body), loaded from Google Fonts in `index.html`.

## Notes on assets (important)

- **Tool logos are real** — pulled live from the Simple Icons CDN (`cdn.simpleicons.org`). No fake/AI logos. Requires internet to display.
- **Illustrations are placeholders** labelled `§A1`–`§A8` (dashed boxes) describing exactly what to generate in Higgsfield, then drop the image in and replace the placeholder div.
- **Testimonials** are clearly-marked placeholders — swap in real design-partner quotes only.
