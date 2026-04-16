"use client";

import { useId, useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function ShimmerLoader({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");
  const gradientId = `al-icon-shimmer-${uid}`;
  const maskId = `al-icon-shimmer-mask-${uid}`;

  useGSAP(
    () => {
      const gradient = scope.current?.querySelector<SVGLinearGradientElement>(
        `#${gradientId}`,
      );
      if (!gradient) return;

      gsap.fromTo(
        gradient,
        { attr: { x1: -1, x2: 0 } },
        {
          attr: { x1: 1, x2: 2 },
          duration: 1.5,
          repeat: -1,
          ease: "none",
        },
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
      <defs>
        <linearGradient id={gradientId} x1="-1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#00C19D" />
          <stop offset="42%" stopColor="#00C19D" />
          <stop offset="50%" stopColor="#A7F3E2" />
          <stop offset="58%" stopColor="#00C19D" />
          <stop offset="100%" stopColor="#00C19D" />
        </linearGradient>
        <mask id={maskId}>
          <path d={AUTOLEAP_ICON_PATH} fill="white" />
        </mask>
      </defs>
      <path d={AUTOLEAP_ICON_PATH} fill="#00C19D" />
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill={`url(#${gradientId})`}
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}
