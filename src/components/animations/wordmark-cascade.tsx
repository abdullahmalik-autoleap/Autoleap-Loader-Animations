"use client";

import { useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const LETTER_READING_ORDER = ["A", "u", "t", "o", "L", "e", "a", "p", "arrow"] as const;

export function WordmarkCascade({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = scope.current;
      if (!container) return;

      const ordered = LETTER_READING_ORDER.map((letterKey) =>
        container.querySelector<SVGGraphicsElement>(`[data-letter="${letterKey}"]`),
      ).filter((element): element is SVGGraphicsElement => Boolean(element));

      if (!ordered.length) return;

      gsap.set(ordered, { opacity: 0.3 });

      gsap.to(ordered, {
        opacity: 1,
        duration: 0.45,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.075,
          repeat: -1,
          yoyo: true,
        },
      });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <AutoleapWordmark width={320} height={64} />
    </div>
  );
}
