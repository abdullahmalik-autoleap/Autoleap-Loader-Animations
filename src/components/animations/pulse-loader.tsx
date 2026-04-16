"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function PulseLoader({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".al-target",
        { scale: 1, opacity: 1 },
        {
          scale: 1.09,
          opacity: 0.82,
          duration: 0.75,
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
      <AutoleapIcon className="al-target" width={120} height={120} />
    </div>
  );
}
