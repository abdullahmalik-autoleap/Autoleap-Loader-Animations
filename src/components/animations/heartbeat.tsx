"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function Heartbeat({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".al-target", { scale: 1, transformOrigin: "50% 50%" });

      const tl = gsap.timeline({ repeat: -1 });

      tl.to(".al-target", { scale: 1.13, duration: 0.11, ease: "power2.out" });
      tl.to(".al-target", { scale: 1, duration: 0.12, ease: "power2.in" });

      tl.to(".al-target", { scale: 1.2, duration: 0.09, ease: "power2.out" }, "+=0.04");
      tl.to(".al-target", { scale: 1, duration: 0.16, ease: "power2.inOut" });

      tl.to({}, { duration: 0.72 });
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope}>
      <AutoleapIcon className="al-target" width={120} height={120} />
    </div>
  );
}
