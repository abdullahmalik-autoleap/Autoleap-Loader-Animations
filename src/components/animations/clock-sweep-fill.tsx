"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

/**
 * Seamless clock-sweep fill:
 *  - Phase 1: wedge grows from 0 to 360 (reveal)
 *  - Phase 2: wedge shrinks as `--start` catches up to 360 (un-reveal)
 *  - At cycle end both are at 360 (empty wedge), reset to 0/0 = same empty visual.
 *
 * `--start` and `--end` are unitless numbers driven via CSS calc(* 1deg).
 */
export function ClockSweepFill({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".al-csf-wedge", { "--start": 0, "--end": 0 });

      const tl = gsap.timeline({ repeat: -1 });

      tl.to(".al-csf-wedge", {
        "--end": 360,
        duration: 0.95,
        ease: "power2.inOut",
      });
      tl.to(".al-csf-wedge", {
        "--start": 360,
        duration: 0.6,
        ease: "power2.inOut",
      });
      tl.set(".al-csf-wedge", { "--start": 0, "--end": 0 });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  const maskImage =
    "conic-gradient(from 0deg, " +
    "transparent 0deg, " +
    "transparent calc(var(--start, 0) * 1deg), " +
    "black calc(var(--start, 0) * 1deg), " +
    "black calc(var(--end, 0) * 1deg), " +
    "transparent calc(var(--end, 0) * 1deg), " +
    "transparent 360deg)";

  return (
    <div ref={scope} className="relative flex h-32 w-32 items-center justify-center">
      <AutoleapIcon
        className="absolute inset-0"
        width={128}
        height={128}
        fillValue="#00C19D"
        style={{ opacity: 0.22 }}
      />
      <div
        className="al-csf-wedge absolute inset-0"
        style={
          {
            WebkitMaskImage: maskImage,
            maskImage,
            "--start": 0,
            "--end": 0,
          } as React.CSSProperties
        }
      >
        <AutoleapIcon width={128} height={128} fillValue="#00C19D" />
      </div>
    </div>
  );
}
