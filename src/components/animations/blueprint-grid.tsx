"use client";

import { useRef } from "react";
import { AUTOLEAP_ICON_PATH } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const GRID_LINES = 10;

export function BlueprintGrid({ replayKey }: AnimationProps) {
  const scope = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const path = scope.current?.querySelector<SVGPathElement>(".al-bp-path");
      if (!path) return;

      const totalLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: `${totalLength} ${totalLength}`,
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

      tl.set(path, { strokeDashoffset: totalLength, fillOpacity: 0 });
      tl.set(".al-bp-grid-line", { opacity: 0 });
      tl.set(".al-bp-crosshair", { opacity: 0, scale: 0.6, transformOrigin: "50% 50%" });

      tl.to(".al-bp-grid-line", {
        opacity: 0.35,
        duration: 0.4,
        stagger: 0.02,
        ease: "power1.out",
      });

      tl.to(
        ".al-bp-crosshair",
        {
          opacity: 1,
          scale: 1,
          duration: 0.32,
          stagger: 0.065,
          ease: "back.out(2)",
        },
        "-=0.2",
      );

      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 0.95,
          ease: "power2.inOut",
        },
        "-=0.1",
      );

      tl.to(
        path,
        {
          fillOpacity: 1,
          duration: 0.32,
          ease: "power2.out",
        },
        "-=0.2",
      );

      tl.to(
        [".al-bp-grid-line", ".al-bp-crosshair", path],
        {
          opacity: 0,
          fillOpacity: 0,
          duration: 0.42,
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
      width={180}
      height={180}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: GRID_LINES }, (_, index) => {
        const offset = (200 / GRID_LINES) * index;
        return (
          <g key={`grid-${index}`}>
            <line
              className="al-bp-grid-line"
              x1={offset}
              y1="0"
              x2={offset}
              y2="200"
              stroke="#00C19D"
              strokeWidth="0.5"
            />
            <line
              className="al-bp-grid-line"
              x1="0"
              y1={offset}
              x2="200"
              y2={offset}
              stroke="#00C19D"
              strokeWidth="0.5"
            />
          </g>
        );
      })}

      {[
        { x: 20, y: 20 },
        { x: 180, y: 20 },
        { x: 20, y: 180 },
        { x: 180, y: 180 },
      ].map((corner, index) => (
        <g key={`crosshair-${index}`} className="al-bp-crosshair">
          <line
            x1={corner.x - 6}
            y1={corner.y}
            x2={corner.x + 6}
            y2={corner.y}
            stroke="#00C19D"
            strokeWidth="1.2"
          />
          <line
            x1={corner.x}
            y1={corner.y - 6}
            x2={corner.x}
            y2={corner.y + 6}
            stroke="#00C19D"
            strokeWidth="1.2"
          />
        </g>
      ))}

      <path
        className="al-bp-path"
        d={AUTOLEAP_ICON_PATH}
        fill="#00C19D"
        stroke="#00C19D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
