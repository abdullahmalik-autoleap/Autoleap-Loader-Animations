"use client";

import { useId, useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function FillUpLoader({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");
  const clipId = `al-fill-clip-${uid}`;

  useGSAP(
    () => {
      gsap.fromTo(
        ".al-fill-rect",
        { attr: { y: 200 } },
        {
          attr: { y: 0 },
          duration: 1.3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
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
        <clipPath id={clipId}>
          <path d={AUTOLEAP_ICON_PATH} />
        </clipPath>
      </defs>
      <path d={AUTOLEAP_ICON_PATH} fill="#00C19D" opacity="0.2" />
      <g clipPath={`url(#${clipId})`}>
        <rect className="al-fill-rect" x="0" y="200" width="200" height="200" fill="#00C19D" />
      </g>
    </svg>
  );
}
