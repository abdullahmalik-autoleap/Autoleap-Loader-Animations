"use client";

import { useId, useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const CELL = 10;
const GRID_SIZE = 20;

/**
 * Deterministic pseudo-random so scatter positions are stable per-index
 * (doesn't change between render passes, only between replay tokens).
 */
function seededRandom(index: number, seed: number) {
  const x = Math.sin(index * 9301 + seed * 49297) * 233280;
  return x - Math.floor(x);
}

export function PixelBuild({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");
  const clipId = `al-px-clip-${uid}`;

  useGSAP(
    () => {
      const pixels = Array.from(scope.current?.querySelectorAll<SVGRectElement>(".al-px-cell") ?? []);
      if (!pixels.length) return;

      const indexed = pixels.map((pixel, index) => ({
        pixel,
        order: seededRandom(index, 1),
      }));
      indexed.sort((a, b) => a.order - b.order);
      const shuffled = indexed.map((entry) => entry.pixel);

      const scatterX = (index: number) => (seededRandom(index, 2) - 0.5) * 260;
      const scatterY = (index: number) => (seededRandom(index, 3) - 0.5) * 260;

      const tl = gsap.timeline({ repeat: -1 });

      tl.set(shuffled, {
        x: (i) => scatterX(i),
        y: (i) => scatterY(i),
        opacity: 0,
        scale: 0.4,
        transformOrigin: "50% 50%",
      });

      tl.to(shuffled, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.48,
        stagger: 0.008,
        ease: "back.out(1.4)",
      });

      tl.to({}, { duration: 0.75 });

      tl.to(shuffled, {
        x: (i) => scatterX(i + GRID_SIZE),
        y: (i) => scatterY(i + GRID_SIZE),
        opacity: 0,
        scale: 0.4,
        duration: 0.45,
        stagger: 0.005,
        ease: "power2.in",
      });
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
      <defs>
        <clipPath id={clipId}>
          <path d={AUTOLEAP_ICON_PATH} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
          const col = index % GRID_SIZE;
          const row = Math.floor(index / GRID_SIZE);
          return (
            <rect
              key={index}
              className="al-px-cell"
              x={col * CELL}
              y={row * CELL}
              width={CELL - 1}
              height={CELL - 1}
              fill="#00C19D"
            />
          );
        })}
      </g>
    </svg>
  );
}
