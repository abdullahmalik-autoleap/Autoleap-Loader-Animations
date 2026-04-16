"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function ElasticPop({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      tl.fromTo(
        ".al-target",
        { scale: 0, opacity: 0, rotation: -20 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.45)",
          transformOrigin: "50% 50%",
        },
      );

      tl.to(
        ".al-target",
        {
          scale: 0.85,
          opacity: 0,
          duration: 0.38,
          ease: "power2.in",
          transformOrigin: "50% 50%",
        },
        "+=0.5",
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
