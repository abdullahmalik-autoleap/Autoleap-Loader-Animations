"use client";

import { useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const PARTICLE_COUNT = 44;

function seededRandom(index: number, seed: number) {
  const x = Math.sin(index * 9301 + seed * 49297) * 233280;
  return x - Math.floor(x);
}

export function ParticleDissolve({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = scope.current;
      if (!svg) return;

      const hiddenPath = svg.querySelector<SVGPathElement>(".al-pd-sample");
      if (!hiddenPath) return;

      const totalLength = hiddenPath.getTotalLength();
      const targetPoints = Array.from({ length: PARTICLE_COUNT }, (_, i) =>
        hiddenPath.getPointAtLength((i / PARTICLE_COUNT) * totalLength),
      );

      const scatterOffset = (index: number, seed: number) => {
        const angle = (index / PARTICLE_COUNT) * Math.PI * 2 + seededRandom(index, seed) * 0.9;
        const distance = 85 + seededRandom(index, seed + 7) * 45;
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      const particles = Array.from(svg.querySelectorAll<SVGCircleElement>(".al-pd-particle"));

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

      tl.set(particles, {
        x: (i) => targetPoints[i].x + scatterOffset(i, 1).x,
        y: (i) => targetPoints[i].y + scatterOffset(i, 1).y,
        opacity: 0,
      });
      tl.set(".al-pd-icon", { opacity: 0 });

      tl.to(particles, {
        x: (i) => targetPoints[i].x,
        y: (i) => targetPoints[i].y,
        opacity: 1,
        duration: 0.75,
        stagger: 0.012,
        ease: "power3.out",
      });

      tl.to(".al-pd-icon", { opacity: 1, duration: 0.3, ease: "power2.out" }, "-=0.22");
      tl.to(particles, { opacity: 0, duration: 0.25, ease: "power1.out" }, "<0.05");

      tl.to(".al-pd-icon", { opacity: 0, duration: 0.3, ease: "power1.in" }, "+=0.85");
      tl.to(
        particles,
        {
          x: (i) => targetPoints[i].x + scatterOffset(i, 11).x,
          y: (i) => targetPoints[i].y + scatterOffset(i, 11).y,
          opacity: 1,
          duration: 0.4,
          stagger: 0.008,
          ease: "power2.in",
        },
        "<",
      );
      tl.to(particles, { opacity: 0, duration: 0.3, ease: "power1.in" });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <svg
      ref={scope}
      width={160}
      height={160}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="al-pd-sample" d={AUTOLEAP_ICON_PATH} fill="none" opacity="0" />
      <path className="al-pd-icon" d={AUTOLEAP_ICON_PATH} fill="#00C19D" />
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <circle
          key={i}
          className="al-pd-particle"
          cx="0"
          cy="0"
          r="2.4"
          fill="#00C19D"
          style={{ filter: "drop-shadow(0 0 3px rgba(0,193,157,0.6))" }}
        />
      ))}
    </svg>
  );
}
