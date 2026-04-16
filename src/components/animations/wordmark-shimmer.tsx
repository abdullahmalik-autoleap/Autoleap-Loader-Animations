"use client";

import { useId, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function WordmarkShimmer({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");
  const darkGradientId = `al-wm-shimmer-dark-${uid}`;
  const greenGradientId = `al-wm-shimmer-green-${uid}`;

  useGSAP(
    () => {
      const darkGradient = scope.current?.querySelector<SVGLinearGradientElement>(
        `#${darkGradientId}`,
      );
      const greenGradient = scope.current?.querySelector<SVGLinearGradientElement>(
        `#${greenGradientId}`,
      );
      if (!darkGradient || !greenGradient) return;

      const tween = {
        attr: { x1: 1, x2: 2 },
        duration: 1.75,
        repeat: -1,
        ease: "none",
      } as const;

      gsap.fromTo(darkGradient, { attr: { x1: -1, x2: 0 } }, tween);
      gsap.fromTo(greenGradient, { attr: { x1: -1, x2: 0 } }, tween);
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <svg
      ref={scope}
      width={320}
      height={64}
      viewBox="0 0 627 124"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={darkGradientId} className="al-wm-dark-gradient" x1="-1" y1="0" x2="0" y2="0">
          <stop className="al-wm-dark-stop-base" offset="0%" stopColor="#3D4242" />
          <stop className="al-wm-dark-stop-base" offset="44%" stopColor="#3D4242" />
          <stop className="al-wm-dark-stop-bright" offset="50%" stopColor="#A3ACAE" />
          <stop className="al-wm-dark-stop-base" offset="56%" stopColor="#3D4242" />
          <stop className="al-wm-dark-stop-base" offset="100%" stopColor="#3D4242" />
        </linearGradient>
        <linearGradient id={greenGradientId} x1="-1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#00C19D" />
          <stop offset="44%" stopColor="#00C19D" />
          <stop offset="50%" stopColor="#A7F3E2" />
          <stop offset="56%" stopColor="#00C19D" />
          <stop offset="100%" stopColor="#00C19D" />
        </linearGradient>
      </defs>

      <path
        fill={`url(#${darkGradientId})`}
        d="M32.7,62.1l15.5-38.5l15.5,38.5H32.7z M77.3,95.9h19.1L56.5,1.3H39.9L0,95.9h19.1l7.6-18.8h43.1L77.3,95.9z"
      />
      <path
        fill={`url(#${darkGradientId})`}
        d="M147.6,27v40.5c0,8.8-5.8,14.7-14.5,14.7c-8.8,0-14.8-5.9-14.8-14.7V27h-17.2v43.2c0,16.2,10.5,27,25.9,27 c8.6,0,16-3.3,21-9.7l0.3,8.4h16.5V27H147.6"
      />
      <path
        fill={`url(#${darkGradientId})`}
        d="M211.4,82.2c-5.6,0-9.3-4.1-9.3-10.4V41.2h20.1V27H202V6.8h-17.2V27h-11.2v14.2h11.2v34.3 c0,13,8.5,21.7,21,21.7c6.1,0,12.1-1,17.3-3.2V79.9C219.2,81.6,215.3,82.2,211.4,82.2"
      />
      <path
        fill={`url(#${darkGradientId})`}
        d="M264.4,82.2c-11.2,0-18.7-8.3-18.7-20.8s7.5-20.8,18.7-20.8c11.1,0,18.6,8.3,18.6,20.8S275.5,82.2,264.4,82.2 M264.4,97.2c21.7,0,36.4-14.3,36.4-35.8c0-21.3-14.7-35.7-36.4-35.7c-21.8,0-36.5,14.3-36.5,35.7 C227.9,82.8,242.5,97.2,264.4,97.2z"
      />
      <polyline
        fill={`url(#${greenGradientId})`}
        points="332.4,80.9 332.4,1.3 314.6,1.3 314.6,95.9 373.7,95.9 373.7,80.9 332.4,80.9"
      />
      <path
        fill={`url(#${greenGradientId})`}
        d="M411.1,39.4c9.2,0,14.7,6,15.9,16.5h-31.7C396.7,45.4,402,39.4,411.1,39.4 M445.1,60.3 c0-20.8-13.6-34.6-34-34.6c-20.5,0-34,14.4-34,36.2c0,21.2,13.9,35.3,34.7,35.3c12.9,0,23.6-5.9,29.7-15.1l-13.3-6.8 c-4,5-9.7,8.2-16.7,8.2c-10,0-15-6.1-16.3-15.9h49.3C444.9,65.6,445.1,62.8,445.1,60.3z"
      />
      <path
        fill={`url(#${greenGradientId})`}
        d="M479.6,84.8c-6.9,0-10.6-3.7-10.6-9.3c0-5.9,5.2-9.7,13.3-9.7c3.9,0,8.5,0.5,12.9,1.4 C495,78.4,487.6,84.8,479.6,84.8 M483.2,25.7c-11.9,0-20.5,2.9-27.8,8.9l7.5,10.2c4.3-3.6,9.5-5.5,15.9-5.5 c10.4,0,16.4,5.5,16.4,14.7v1.3c-5.2-1-10.4-1.5-15-1.5c-17.4,0-29,8.7-29,22c0,12.8,9.5,21.3,23.6,21.3c8.3,0,16.2-4,20.7-11.1 l0.4,9.8h16.5V52.5C512.3,36.3,500.6,25.7,483.2,25.7z"
      />
      <path
        fill={`url(#${greenGradientId})`}
        d="M562.7,82.2c-11.2,0-18.7-8.3-18.7-20.8s7.5-20.8,18.7-20.8c11.1,0,18.7,8.3,18.7,20.7 C581.4,73.9,573.9,82.2,562.7,82.2 M566.7,25.7c-10.5,0-18.1,4.3-22.9,11.6L543.4,27h-16.5v97H544V85.9c4.8,7,12.3,11.2,22.6,11.2 c18.3,0,32.6-14.4,32.6-36C599.2,39.8,585,25.7,566.7,25.7z"
      />
      <polyline
        fill={`url(#${greenGradientId})`}
        points="627,24.6 627,0 600.3,0 585.7,14.8 610,14.8 610,41.8 627,24.6"
      />
    </svg>
  );
}
