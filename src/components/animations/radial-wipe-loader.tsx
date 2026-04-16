"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

/**
 * Radial Wipe - Clock-hand sweep reveals the icon, then a second sweep hides it.
 * Both phases use the same two-variable wedge mask technique as Clock Sweep Fill
 * for a perfectly seamless loop (no fade-to-black reset).
 */
export function RadialWipeLoader({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".al-wipe-target", { "--start": 0, "--end": 0 });

      const tl = gsap.timeline({ repeat: -1 });

      tl.to(".al-wipe-target", {
        "--end": 360,
        duration: 1.0,
        ease: "power1.inOut",
      });

      tl.to({}, { duration: 0.35 });

      tl.to(".al-wipe-target", {
        "--start": 360,
        duration: 0.65,
        ease: "power1.inOut",
      });

      tl.set(".al-wipe-target", { "--start": 0, "--end": 0 });
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
    <div ref={scope}>
      <div
        className="al-wipe-target"
        style={
          {
            WebkitMaskImage: maskImage,
            maskImage,
            "--start": 0,
            "--end": 0,
          } as React.CSSProperties
        }
      >
        <AutoleapIcon width={120} height={120} />
      </div>
    </div>
  );
}
