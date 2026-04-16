"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

const PERIMETER_POINTS = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

export function BouncingCorners({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".al-target", {
        scale: 1.04,
        duration: 1.15,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });

      const squares = Array.from(
        scope.current?.querySelectorAll<HTMLDivElement>(".al-bc-square") ?? [],
      );

      squares.forEach((square, index) => {
        const tl = gsap.timeline({ repeat: -1 });
        const path = [0, 1, 2, 3, 0];

        path.forEach((pointIndex) => {
          const point = PERIMETER_POINTS[pointIndex];
          tl.to(square, {
            left: `${point.x * 100}%`,
            top: `${point.y * 100}%`,
            duration: 0.65,
            ease: "sine.inOut",
          });
        });

        tl.progress(index / squares.length);
      });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div
      ref={scope}
      className="relative flex h-36 w-36 items-center justify-center"
    >
      <AutoleapIcon className="al-target" width={110} height={110} />
      {PERIMETER_POINTS.map((_, index) => (
        <div
          key={index}
          className="al-bc-square absolute h-2 w-2 rounded-sm bg-[#00C19D]"
          style={{
            left: "0%",
            top: "0%",
            marginLeft: "-4px",
            marginTop: "-4px",
          }}
        />
      ))}
    </div>
  );
}
