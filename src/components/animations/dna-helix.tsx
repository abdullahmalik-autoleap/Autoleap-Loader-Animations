"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function DnaHelix({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".al-helix-orbit", {
        rotationY: 360,
        duration: 1.8,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        transformPerspective: 600,
      });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div
      ref={scope}
      className="relative flex h-44 w-44 items-center justify-center"
      style={{ perspective: "600px" }}
    >
      <AutoleapIcon className="relative z-10" width={110} height={110} />
      <div
        className="al-helix-orbit absolute inset-0"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(65deg)" }}
      >
        <div
          className="absolute h-3 w-3 rounded-full bg-[#00C19D] shadow-[0_0_12px_rgba(0,193,157,0.7)]"
          style={{ left: "50%", top: "0%", marginLeft: "-6px" }}
        />
        <div
          className="absolute h-3 w-3 rounded-full bg-[#00C19D] shadow-[0_0_12px_rgba(0,193,157,0.7)]"
          style={{ left: "50%", bottom: "0%", marginLeft: "-6px" }}
        />
      </div>
    </div>
  );
}
