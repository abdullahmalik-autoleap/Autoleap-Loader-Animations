"use client";

import { useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const STAMP_ORDER = ["A", "u", "t", "o", "L", "e", "a", "p", "arrow"] as const;

export function TypewriterStamp({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = scope.current;
      if (!container) return;

      const ordered = STAMP_ORDER.map((letterKey) =>
        container.querySelector<SVGGraphicsElement>(`[data-letter="${letterKey}"]`),
      ).filter((el): el is SVGGraphicsElement => Boolean(el));
      if (!ordered.length) return;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.9 });

      tl.set(ordered, { opacity: 0, scale: 1.3, y: -4, transformOrigin: "50% 100%" });

      tl.to(ordered, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "back.out(2.2)",
      });

      tl.to(
        ordered,
        {
          opacity: 0,
          y: -2,
          duration: 0.3,
          stagger: 0.018,
          ease: "power2.in",
        },
        "+=0.9",
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
