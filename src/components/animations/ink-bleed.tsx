"use client";

import { useId, useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const LETTER_ORDER = ["A", "u", "t", "o", "L", "e", "a", "p", "arrow"] as const;

export function InkBleed({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const filterId = `al-ink-${uid}`;

  useGSAP(
    () => {
      const container = scope.current;
      if (!container) return;

      const ordered = LETTER_ORDER.map((key) =>
        container.querySelector<SVGGraphicsElement>(`[data-letter="${key}"]`),
      ).filter((el): el is SVGGraphicsElement => Boolean(el));
      if (!ordered.length) return;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });

      tl.set(ordered, {
        scale: 0.06,
        opacity: 0,
        transformOrigin: "50% 50%",
      });

      tl.to(ordered, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.065,
        ease: "power3.out",
      });

      tl.to(
        ordered,
        {
          scale: 0.06,
          opacity: 0,
          duration: 0.45,
          stagger: 0.018,
          ease: "power2.in",
        },
        "+=0.85",
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="1.2" />
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -4.5" />
          </filter>
        </defs>
      </svg>
      <div style={{ filter: `url(#${filterId})` }}>
        <AutoleapWordmark width={320} height={64} />
      </div>
    </div>
  );
}
