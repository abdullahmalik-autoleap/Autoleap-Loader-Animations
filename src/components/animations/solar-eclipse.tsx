"use client";

import { useId, useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function SolarEclipse({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const gradientId = `al-eclipse-${uid}`;

  useGSAP(
    () => {
      gsap.to(".al-eclipse-halo", {
        rotate: 360,
        duration: 3.3,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.fromTo(
        ".al-eclipse-halo",
        { scale: 1, opacity: 1 },
        {
          scale: 1.08,
          opacity: 0.82,
          duration: 1.3,
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
    <div ref={scope} className="relative flex h-48 w-48 items-center justify-center">
      <svg
        className="al-eclipse-halo absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="50%" stopColor="#00C19D" stopOpacity="0" />
            <stop offset="62%" stopColor="#00C19D" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#7EE6D1" stopOpacity="0.38" />
            <stop offset="90%" stopColor="#00C19D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00C19D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill={`url(#${gradientId})`} />
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#00C19D"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="2 4"
        />
      </svg>
      <AutoleapIcon className="relative z-10" width={110} height={110} />
    </div>
  );
}
