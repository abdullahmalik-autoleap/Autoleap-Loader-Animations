"use client";

import { useId, useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function LiquidMorph({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const filterId = `al-liquid-${uid}`;

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.set(".al-liquid-blob", { scaleX: 1, scaleY: 1, rotate: 0, opacity: 1 });
      tl.set(".al-liquid-icon", { opacity: 0, scale: 0.4 });

      tl.to(".al-liquid-blob", {
        scaleX: 1.22,
        scaleY: 0.78,
        rotate: 35,
        duration: 0.6,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
      tl.to(".al-liquid-blob", {
        scaleX: 0.72,
        scaleY: 1.28,
        rotate: -28,
        duration: 0.6,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
      tl.to(".al-liquid-blob", {
        scaleX: 1.12,
        scaleY: 1.08,
        rotate: 18,
        duration: 0.52,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });

      tl.to(
        ".al-liquid-blob",
        { scaleX: 1, scaleY: 1, rotate: 0, opacity: 0, duration: 0.35, ease: "power2.in" },
      );
      tl.to(
        ".al-liquid-icon",
        { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)" },
        "-=0.25",
      );

      tl.to({}, { duration: 0.65 });

      tl.to(".al-liquid-icon", { opacity: 0, scale: 0.45, duration: 0.38, ease: "power2.in" });
      tl.to(
        ".al-liquid-blob",
        { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.35, ease: "power2.out" },
        "<0.05",
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope} className="relative flex h-40 w-40 items-center justify-center">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="6" />
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
          </filter>
        </defs>
        <g filter={`url(#${filterId})`}>
          <circle className="al-liquid-blob" cx="100" cy="100" r="55" fill="#00C19D" />
        </g>
      </svg>
      <div className="al-liquid-icon relative">
        <AutoleapIcon width={120} height={120} />
      </div>
    </div>
  );
}
