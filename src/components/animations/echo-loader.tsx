"use client";

import { useRef } from "react";
import { AutoleapIcon } from "@/components/logo/autoleap-icon";
import { gsap, useGSAP } from "@/lib/gsap";
import type { AnimationProps } from "@/lib/types";

export function EchoLoader({ replayKey }: AnimationProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".al-echo-core",
        { scale: 1 },
        {
          scale: 1.07,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
        },
      );

      gsap.fromTo(
        ".al-echo-ring",
        { scale: 1, opacity: 0.55 },
        {
          scale: 1.5,
          opacity: 0,
          duration: 1.3,
          repeat: -1,
          ease: "power2.out",
          stagger: {
            each: 0.43,
            repeat: -1,
          },
          transformOrigin: "50% 50%",
        },
      );
    },
    { scope, dependencies: [replayKey], revertOnUpdate: true },
  );

  return (
    <div ref={scope} className="relative flex h-44 w-44 items-center justify-center">
      <div className="al-echo-ring absolute inset-0 flex items-center justify-center">
        <AutoleapIcon width={110} height={110} fillValue="#00C19D" />
      </div>
      <div className="al-echo-ring absolute inset-0 flex items-center justify-center">
        <AutoleapIcon width={110} height={110} fillValue="#00C19D" />
      </div>
      <div className="al-echo-ring absolute inset-0 flex items-center justify-center">
        <AutoleapIcon width={110} height={110} fillValue="#00C19D" />
      </div>
      <div className="al-echo-core relative">
        <AutoleapIcon width={110} height={110} />
      </div>
    </div>
  );
}
