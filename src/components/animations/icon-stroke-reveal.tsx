"use client";

import { useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function IconStrokeReveal({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const path = scope.current?.querySelector<SVGPathElement>(".al-stroke-path");
      if (!path) return;

      const totalLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: `${totalLength} ${totalLength}`,
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.55 });

      // Explicit reset at the start of every cycle for perfect loop
      tl.set(path, { strokeDashoffset: totalLength, fillOpacity: 0 });

      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.15,
        ease: "power2.inOut",
      });

      tl.to(
        path,
        {
          fillOpacity: 1,
          duration: 0.38,
          ease: "power2.out",
        },
        "-=0.18",
      );

      tl.to(
        path,
        {
          fillOpacity: 0,
          strokeDashoffset: -totalLength,
          duration: 0.58,
          ease: "power1.in",
        },
        "+=0.55",
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <svg
      ref={scope}
      width={140}
      height={140}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="al-stroke-path"
        d={AUTOLEAP_ICON_PATH}
        fill="#00C19D"
        stroke="#00C19D"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
