"use client";

import { useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const LETTER_ORDER = ["A", "u", "t", "o", "L", "e", "a", "p", "arrow"] as const;

function seeded(index: number, seed: number) {
  const x = Math.sin(index * 9301 + seed * 49297) * 233280;
  return x - Math.floor(x);
}

export function GravityLetters({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = scope.current;
      if (!container) return;

      const ordered = LETTER_ORDER.map((key) =>
        container.querySelector<SVGGraphicsElement>(`[data-letter="${key}"]`),
      ).filter((el): el is SVGGraphicsElement => Boolean(el));
      if (!ordered.length) return;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

      tl.set(ordered, {
        y: (i) => 75 + seeded(i, 1) * 18,
        rotation: (i) => (i % 2 === 0 ? -28 : 28) + seeded(i, 2) * 14,
        opacity: 0,
        transformOrigin: "50% 100%",
      });

      tl.to(ordered, { opacity: 1, duration: 0.14 });

      tl.to(
        ordered,
        {
          y: 0,
          rotation: 0,
          duration: 0.75,
          stagger: 0.055,
          ease: "back.out(1.9)",
        },
        "<",
      );

      tl.to(
        ordered,
        {
          y: 55,
          opacity: 0,
          duration: 0.42,
          stagger: 0.018,
          ease: "power2.in",
        },
        "+=0.75",
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <AutoleapWordmark width={320} height={64} />
    </div>
  );
}
