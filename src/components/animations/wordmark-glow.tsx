"use client";

import { useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function WordmarkGlow({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".al-glow-target",
        { filter: "drop-shadow(0 0 0px rgba(0, 193, 157, 0))" },
        {
          filter: "drop-shadow(0 0 20px rgba(0, 193, 157, 0.6))",
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        },
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <div className="al-glow-target">
        <AutoleapWordmark width={320} height={64} />
      </div>
    </div>
  );
}
