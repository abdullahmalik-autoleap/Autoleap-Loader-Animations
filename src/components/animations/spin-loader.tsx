"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const RING_CIRCUMFERENCE = 2 * Math.PI * 46;
const RING_DASH = 70;
const RING_GAP = RING_CIRCUMFERENCE - RING_DASH;

export function SpinLoader({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".al-spin-ring", { strokeDashoffset: 0 });

      gsap.to(".al-spin-ring", {
        strokeDashoffset: -RING_CIRCUMFERENCE,
        duration: 1.15,
        repeat: -1,
        ease: "none",
      });

      gsap.fromTo(
        ".al-spin-icon",
        { scale: 1 },
        {
          scale: 1.03,
          duration: 1.15,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
        },
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div
      ref={scope}
      className="relative flex h-40 w-40 items-center justify-center"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" stroke="#E2E8F0" strokeWidth="3" fill="none" />
        <circle
          className="al-spin-ring"
          cx="50"
          cy="50"
          r="46"
          stroke="#00C19D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${RING_DASH} ${RING_GAP}`}
          strokeDashoffset={0}
          fill="none"
        />
      </svg>
      <AutoleapIcon className="al-spin-icon" width={80} height={80} />
    </div>
  );
}
