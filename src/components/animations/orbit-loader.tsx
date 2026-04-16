"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function OrbitLoader({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".al-orbit-wrapper", {
        rotate: 360,
        duration: 1.5,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to(".al-orbit-dot", {
        rotate: -360,
        duration: 1.5,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div
      ref={scope}
      className="relative flex h-44 w-44 items-center justify-center"
    >
      <AutoleapIcon width={110} height={110} />
      <div className="al-orbit-wrapper pointer-events-none absolute inset-0">
        <div
          className="al-orbit-dot absolute h-3 w-3 rounded-full bg-[#00C19D] shadow-[0_0_10px_rgba(0,193,157,0.55)]"
          style={{ left: "50%", top: "-6px", marginLeft: "-6px" }}
        />
      </div>
    </div>
  );
}
