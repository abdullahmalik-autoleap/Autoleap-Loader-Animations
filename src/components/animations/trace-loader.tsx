"use client";

import { useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function TraceLoader({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const path = scope.current?.querySelector<SVGPathElement>(".al-trace-path");
      if (!path) return;

      const totalLength = path.getTotalLength();
      const dashLength = Math.max(40, totalLength * 0.18);
      const gapLength = totalLength - dashLength;

      gsap.set(path, {
        strokeDasharray: `${dashLength} ${gapLength}`,
        strokeDashoffset: 0,
      });

      gsap.to(path, {
        strokeDashoffset: -totalLength,
        duration: 2.3,
        repeat: -1,
        ease: "none",
      });
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
      <path d={AUTOLEAP_ICON_PATH} fill="#00C19D" fillOpacity="0.14" />
      <path
        className="al-trace-path"
        d={AUTOLEAP_ICON_PATH}
        fill="none"
        stroke="#00C19D"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
