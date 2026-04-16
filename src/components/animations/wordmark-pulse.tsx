"use client";

import { useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function WordmarkPulse({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".al-target",
        { scale: 1, opacity: 1 },
        {
          scale: 1.04,
          opacity: 0.82,
          duration: 0.9,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
        },
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <AutoleapWordmark className="al-target" width={320} height={64} />
    </div>
  );
}
