"use client";

import { useRef } from "react";
import { AutoleapWordmark } from "@/components/logo/autoleap-wordmark";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function BlurToFocus({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.fromTo(
        ".al-target",
        {
          filter: "blur(20px)",
          scale: 1.1,
          opacity: 0,
        },
        {
          filter: "blur(0px)",
          scale: 1,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        },
      );

      tl.to({}, { duration: 1 });

      tl.to(".al-target", {
        filter: "blur(20px)",
        scale: 1.1,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      tl.to({}, { duration: 0.3 });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <div className="al-target">
        <AutoleapWordmark width={320} height={64} />
      </div>
    </div>
  );
}
