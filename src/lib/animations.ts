import { BlueprintGrid } from "@/components/animations/blueprint-grid";
import { BlurToFocus } from "@/components/animations/blur-to-focus";
import { BouncingCorners } from "@/components/animations/bouncing-corners";
import { ClockSweepFill } from "@/components/animations/clock-sweep-fill";
import { DnaHelix } from "@/components/animations/dna-helix";
import { EchoLoader } from "@/components/animations/echo-loader";
import { ElasticPop } from "@/components/animations/elastic-pop";
import { FillUpLoader } from "@/components/animations/fill-up-loader";
import { GravityLetters } from "@/components/animations/gravity-letters";
import { Heartbeat } from "@/components/animations/heartbeat";
import { IconStrokeReveal } from "@/components/animations/icon-stroke-reveal";
import { Inflation } from "@/components/animations/inflation";
import { InkBleed } from "@/components/animations/ink-bleed";
import { LiquidMorph } from "@/components/animations/liquid-morph";
import { OrbitLoader } from "@/components/animations/orbit-loader";
import { ParticleDissolve } from "@/components/animations/particle-dissolve";
import { PixelBuild } from "@/components/animations/pixel-build";
import { PulseLoader } from "@/components/animations/pulse-loader";
import { RadialWipeLoader } from "@/components/animations/radial-wipe-loader";
import { ShimmerLoader } from "@/components/animations/shimmer-loader";
import { SolarEclipse } from "@/components/animations/solar-eclipse";
import { SpinLoader } from "@/components/animations/spin-loader";
import { StrokeReveal } from "@/components/animations/stroke-reveal";
import { TraceLoader } from "@/components/animations/trace-loader";
import { TypewriterStamp } from "@/components/animations/typewriter-stamp";
import { WordmarkCascade } from "@/components/animations/wordmark-cascade";
import { WordmarkGlow } from "@/components/animations/wordmark-glow";
import { WordmarkPulse } from "@/components/animations/wordmark-pulse";
import { WordmarkShimmer } from "@/components/animations/wordmark-shimmer";
import type { AnimationVariant } from "@/lib/types";

export const animations: AnimationVariant[] = [
  {
    id: "pulse",
    name: "Pulse",
    description: "Soft breathing scale on the icon",
    filename: "autoleap_pulse.tsx",
    category: "loaders",
    isLoop: true,
    component: PulseLoader,
  },
  {
    id: "heartbeat",
    name: "Heartbeat",
    description: "Two-beat pulse rhythm like a heartbeat",
    filename: "autoleap_heartbeat.tsx",
    category: "loaders",
    isLoop: true,
    component: Heartbeat,
  },
  {
    id: "spin",
    name: "Spin",
    description: "Linear spinning arc around the icon",
    filename: "autoleap_spin.tsx",
    category: "loaders",
    isLoop: true,
    component: SpinLoader,
  },
  {
    id: "trace",
    name: "Trace",
    description: "Continuous stroke travels the icon outline",
    filename: "autoleap_trace.tsx",
    category: "loaders",
    isLoop: true,
    component: TraceLoader,
  },
  {
    id: "shimmer",
    name: "Shimmer",
    description: "Subtle light sweep across the icon",
    filename: "autoleap_shimmer.tsx",
    category: "loaders",
    isLoop: true,
    component: ShimmerLoader,
  },
  {
    id: "fill-up",
    name: "Fill-Up",
    description: "Brand color fills the icon from bottom to top",
    filename: "autoleap_fill_up.tsx",
    category: "loaders",
    isLoop: true,
    component: FillUpLoader,
  },
  {
    id: "clock-sweep-fill",
    name: "Clock Sweep Fill",
    description: "Conic sweep progressively fills the icon",
    filename: "autoleap_clock_sweep_fill.tsx",
    category: "loaders",
    isLoop: true,
    component: ClockSweepFill,
  },
  {
    id: "radial-wipe",
    name: "Radial Wipe",
    description: "Clock-hand sweep reveals the icon",
    filename: "autoleap_radial_wipe.tsx",
    category: "loaders",
    isLoop: true,
    component: RadialWipeLoader,
  },
  {
    id: "echo",
    name: "Echo",
    description: "Icon pulses with expanding radar ripples",
    filename: "autoleap_echo.tsx",
    category: "loaders",
    isLoop: true,
    component: EchoLoader,
  },
  {
    id: "orbit",
    name: "Orbit",
    description: "Brand dot orbits the icon continuously",
    filename: "autoleap_orbit.tsx",
    category: "loaders",
    isLoop: true,
    component: OrbitLoader,
  },
  {
    id: "dna-helix",
    name: "DNA Helix",
    description: "Dots orbit on a tilted 3D elliptical path",
    filename: "autoleap_dna_helix.tsx",
    category: "loaders",
    isLoop: true,
    component: DnaHelix,
  },
  {
    id: "bouncing-corners",
    name: "Bouncing Corners",
    description: "Squares chase around the icon perimeter",
    filename: "autoleap_bouncing_corners.tsx",
    category: "loaders",
    isLoop: true,
    component: BouncingCorners,
  },
  {
    id: "icon-stroke-reveal",
    name: "Icon Stroke Reveal",
    description: "Icon outline draws itself, fills in, then resets",
    filename: "autoleap_icon_stroke_reveal.tsx",
    category: "loaders",
    isLoop: true,
    component: IconStrokeReveal,
  },
  {
    id: "blueprint-grid",
    name: "Blueprint Grid",
    description: "Grid and crosshairs plot first, then icon draws in",
    filename: "autoleap_blueprint_grid.tsx",
    category: "loaders",
    isLoop: true,
    component: BlueprintGrid,
  },
  {
    id: "pixel-build",
    name: "Pixel Build",
    description: "Icon assembles pixel-by-pixel from random grid",
    filename: "autoleap_pixel_build.tsx",
    category: "loaders",
    isLoop: true,
    component: PixelBuild,
  },
  {
    id: "particle-dissolve",
    name: "Particle Dissolve",
    description: "Icon shatters into particles and reassembles",
    filename: "autoleap_particle_dissolve.tsx",
    category: "loaders",
    isLoop: true,
    component: ParticleDissolve,
  },
  {
    id: "liquid-morph",
    name: "Liquid Morph",
    description: "Gooey blob morphs through shapes into the icon",
    filename: "autoleap_liquid_morph.tsx",
    category: "loaders",
    isLoop: true,
    component: LiquidMorph,
  },
  {
    id: "wordmark-shimmer",
    name: "Wordmark Shimmer",
    description: "Light sweep across the AutoLeap wordmark",
    filename: "autoleap_wordmark_shimmer.tsx",
    category: "logo-intros",
    isLoop: true,
    component: WordmarkShimmer,
  },
  {
    id: "wordmark-cascade",
    name: "Wordmark Cascade",
    description: "Letters pulse in a left-to-right wave",
    filename: "autoleap_wordmark_cascade.tsx",
    category: "logo-intros",
    isLoop: true,
    component: WordmarkCascade,
  },
  {
    id: "wordmark-pulse",
    name: "Wordmark Pulse",
    description: "Gentle breathing scale on the full wordmark",
    filename: "autoleap_wordmark_pulse.tsx",
    category: "logo-intros",
    isLoop: true,
    component: WordmarkPulse,
  },
  {
    id: "wordmark-glow",
    name: "Wordmark Glow",
    description: "Soft green glow pulse around the wordmark",
    filename: "autoleap_wordmark_glow.tsx",
    category: "logo-intros",
    isLoop: true,
    component: WordmarkGlow,
  },
  {
    id: "stroke-reveal",
    name: "Stroke Reveal",
    description: "Wordmark letters draw themselves stroke by stroke",
    filename: "autoleap_stroke_reveal.tsx",
    category: "logo-intros",
    isLoop: true,
    component: StrokeReveal,
  },
  {
    id: "typewriter-stamp",
    name: "Typewriter Stamp",
    description: "Letters stamp down with a slight scale overshoot",
    filename: "autoleap_typewriter_stamp.tsx",
    category: "logo-intros",
    isLoop: true,
    component: TypewriterStamp,
  },
  {
    id: "ink-bleed",
    name: "Ink Bleed",
    description: "Letters bleed outward from tiny dots",
    filename: "autoleap_ink_bleed.tsx",
    category: "logo-intros",
    isLoop: true,
    component: InkBleed,
  },
  {
    id: "gravity-letters",
    name: "Gravity Letters",
    description: "Letters spring up from a pile into position",
    filename: "autoleap_gravity_letters.tsx",
    category: "logo-intros",
    isLoop: true,
    component: GravityLetters,
  },
  {
    id: "elastic-pop",
    name: "Elastic Pop",
    description: "Icon springs in with bouncy overshoot",
    filename: "autoleap_elastic_pop.tsx",
    category: "logo-intros",
    isLoop: true,
    component: ElasticPop,
  },
  {
    id: "inflation",
    name: "Inflation",
    description: "Icon inflates from thin outline to full shape",
    filename: "autoleap_inflation.tsx",
    category: "logo-intros",
    isLoop: true,
    component: Inflation,
  },
  {
    id: "blur-to-focus",
    name: "Blur to Focus",
    description: "Wordmark resolves from heavy blur into sharp focus",
    filename: "autoleap_blur_to_focus.tsx",
    category: "logo-intros",
    isLoop: true,
    component: BlurToFocus,
  },
  {
    id: "solar-eclipse",
    name: "Solar Eclipse",
    description: "Rotating corona halo breathes behind the icon",
    filename: "autoleap_solar_eclipse.tsx",
    category: "logo-intros",
    isLoop: true,
    component: SolarEclipse,
  },
];
