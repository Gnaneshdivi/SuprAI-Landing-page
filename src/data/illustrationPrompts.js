// ─────────────────────────────────────────────────────────────────────────
// SuprAI — illustration prompt library
// Target model: GPT Image 2 (OpenAI). Generate, then place the result inside
// the matching slot (the coded mini-visuals below are placeholders until then).
//
// HOUSE STYLE (applies to EVERY prompt — keep it identical for a consistent set):
//   Flat 2D editorial vector illustration for a premium B2B software website,
//   in the restrained style of Linear, Vercel and Glean marketing pages.
//   Canvas: off-white #FCFAF6 with a very faint warm dot grid.
//   Palette ONLY: ink #1F1813, orange #F15A22 (used sparingly as the single
//   accent), deep orange #C2410C, warm #FBF6EF, hairline #EBE2D6, white #FFFFFF.
//   Strictly FLAT: no gradients, no drop shadows, no 3D, no glow, no bevels,
//   no photographic texture. Thin single-weight (1–1.5px) hairline strokes,
//   generous negative space, calm and geometric.
//   NEVER include: real brand logos, readable body text, paragraphs, faces,
//   stock-art mascots. Tiny abstract glyphs/dots only.
//   Reference for composition: the product-UI snippet illustrations on
//   glean.com, linear.app and vercel.com (clean cards, chips, nodes, rows).
// ─────────────────────────────────────────────────────────────────────────

export const HOUSE_STYLE =
  'Flat 2D editorial vector illustration, premium B2B SaaS, in the restrained style of Linear/Vercel/Glean. Off-white #FCFAF6 canvas with a faint warm dot grid. Palette only: ink #1F1813, orange #F15A22 (single sparing accent), deep orange #C2410C, warm #FBF6EF, hairline #EBE2D6, white. Strictly flat — no gradients, no shadows, no 3D, no glow, no bevels, no photo texture. Thin 1–1.5px hairline strokes, generous negative space. No real logos, no readable text, no faces.'

export const illustrationPrompts = {
  // 16:9 — optional static poster behind / before the hero demo video
  'hero-dashboard': {
    ratio: '16:9',
    prompt: `${HOUSE_STYLE} A clean, minimal product dashboard rendered as a flat illustration: a soft off-white app window with a thin top bar (three tiny circular dots, a slim search/ask field), a narrow left sidebar of small rounded nav glyphs, and a main canvas showing one "ask" input row above a single answer card with a big number and three tiny source chips. To the right, a slim panel of stacked rounded rows (an activity / audit feed) each with a tiny orange status dot on one row. Balanced, lots of breathing room, single orange accent. No text, no logos.`,
  },

  // BIG 2x2 tile — "Ask anything"
  'bento-ask': {
    ratio: '4:3',
    prompt: `${HOUSE_STYLE} An "ask anything" moment: a single rounded input bar at the top with a tiny blinking-cursor mark and a small dark send glyph, and below it one answer card containing a large bold abstract number block and a thin caption line, with a row of three small rounded "source" chips beneath (one chip carries the orange accent). Thin connector lines hint that the answer was gathered from several places. Calm, premium, one orange accent. No text, no logos.`,
  },

  // WIDE 2x1 tile — "It acts in your tools"
  'bento-act': {
    ratio: '16:9',
    prompt: `${HOUSE_STYLE} A short conversation turning into an action: two stacked rounded chat rows (abstract, no readable text — just soft grey lines standing in for words), then a solid dark rounded "action" pill with a small play triangle, and three tiny app-tile squares connected to it by thin hairlines (the tiles are blank rounded squares, NOT real logos). One small orange confirmation tick. Wide horizontal composition. No text.`,
  },

  // TALL 1x2 tile — "Automate what repeats"
  'bento-automate': {
    ratio: '3:4',
    prompt: `${HOUSE_STYLE} A vertical agent run: four small rounded square nodes stacked top to bottom and joined by a single thin vertical line, each node a step (Trigger, Read, Think, Act — shown only as tiny abstract glyphs, no words). The completed nodes are filled solid ink; the final node carries the orange accent. A small toggle pill sits at the top. Tall vertical composition, lots of vertical rhythm. No text, no logos.`,
  },

  // TALL 1x2 tile — "Works where your team works"
  'bento-everywhere': {
    ratio: '3:4',
    prompt: `${HOUSE_STYLE} The same assistant reachable from several surfaces: a vertical stack of three or four rounded "channel" cards, each a blank messaging surface (abstract chat bubbles in soft grey, no real logos, no text), with a small consistent orange dot marking the assistant in each one. A thin hairline runs down the left connecting them, implying one system behind many surfaces. Tall vertical composition. No text.`,
  },

  // WIDE 2x1 tile — "Connect every app"
  'bento-connect': {
    ratio: '16:9',
    prompt: `${HOUSE_STYLE} Many apps connecting into one core: a horizontal row of eight blank rounded app-tile squares (NO real logos — just empty rounded squares with a tiny abstract glyph each), joined by thin hairlines to a single slightly larger dark rounded "core" tile on the right. One tile and the core carry the orange accent. Wide, orderly, premium. No text.`,
  },

  // Security statement panel — sits on the dot-grid side
  'security': {
    ratio: '4:3',
    prompt: `${HOUSE_STYLE} A calm trust motif: a single thin-outline rounded shield containing three short stacked permission rows (each a tiny avatar dot + a short hairline bar), one row marked with a small lock glyph and one with the orange accent tick. Below, a slim "audit" strip of evenly spaced ticks. Sits comfortably on the faint dot grid. Minimal, reassuring, one orange accent. No text, no logos.`,
  },
}
