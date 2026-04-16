# Autoleap Loader Animations

An interactive showcase of 29 polished loader animation variants for the AutoLeap brand. Used by the team to review, compare, and pick the final loader animations for the Autoleap product.

## What's inside

- **17 Loaders** (icon-only): Pulse, Heartbeat, Spin, Trace, Shimmer, Fill-Up, Clock Sweep Fill, Radial Wipe, Echo, Orbit, DNA Helix, Bouncing Corners, Icon Stroke Reveal, Blueprint Grid, Pixel Build, Particle Dissolve, Liquid Morph
- **12 Logo Intros** (wordmark): Wordmark Shimmer, Wordmark Cascade, Wordmark Pulse, Wordmark Glow, Stroke Reveal, Typewriter Stamp, Ink Bleed, Gravity Letters, Elastic Pop, Inflation, Blur to Focus, Solar Eclipse
- Clickable variant list matching the reference UI
- Light / Dark stage tone toggle for previewing on either background
- Replay button to restart the current animation
- Every loop is mathematically seamless (yoyo tweens, linear motion, or explicit `tl.set()` reset)

## Stack

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **GSAP** + `@gsap/react` — single animation engine for all variants
- Inline SVG logo components (`AutoleapIcon`, `AutoleapWordmark`) so individual paths / letters can be animated

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                     # Next.js entry + global CSS (animation keyframes)
  components/
    animation-showcase.tsx # Two-pane shell (sidebar + main stage)
    animation-list.tsx     # Left sidebar variant list
    animation-stage.tsx    # Center preview with Light/Dark tone toggle
    animations/            # One file per variant (all GSAP-driven)
    logo/                  # Inline SVG for the icon and wordmark
  lib/
    animations.ts          # Variant registry
    gsap.ts                # GSAP + useGSAP setup
    types.ts               # Shared types
```

## Adding a new variant

1. Create `src/components/animations/your-variant.tsx` using `useGSAP` scoped to a ref.
2. Register it in `src/lib/animations.ts` with a name, description, category (`loaders` or `logo-intros`), and `isLoop: true`.
