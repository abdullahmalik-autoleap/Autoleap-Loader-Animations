"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function Inflation({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

      tl.fromTo(
        ".al-target",
        {
          scaleX: 1.25,
          scaleY: 0.1,
          opacity: 0.4,
          filter: "saturate(0.4)",
        },
        {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          filter: "saturate(1)",
          duration: 0.9,
          ease: "elastic.out(1, 0.5)",
          transformOrigin: "50% 100%",
        },
      );

      tl.to(
        ".al-target",
        {
          scaleX: 1.25,
          scaleY: 0.1,
          opacity: 0.4,
          filter: "saturate(0.4)",
          duration: 0.45,
          ease: "power2.in",
          transformOrigin: "50% 100%",
        },
        "+=0.75",
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
