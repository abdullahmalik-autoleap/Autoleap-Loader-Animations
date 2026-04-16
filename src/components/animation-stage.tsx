"use client";

import type { AnimationVariant } from "@/lib/types";

export type StageTone = "light" | "dark";

interface AnimationStageProps {
  variant: AnimationVariant;
  replayKey: number;
  stageTone: StageTone;
}

const stageStyles: Record<StageTone, { bg: string; caption: string; extraClass: string }> = {
  light: {
    bg: "bg-white",
    caption: "text-slate-500",
    extraClass: "",
  },
  dark: {
    bg: "bg-[#0B1220]",
    caption: "text-slate-400",
    extraClass: "al-stage-dark",
  },
};

export function AnimationStage({ variant, replayKey, stageTone }: AnimationStageProps) {
  const ActiveComponent = variant.component;
  const { bg, caption, extraClass } = stageStyles[stageTone];

  return (
    <div className={`flex flex-1 items-center justify-center ${bg} ${extraClass}`}>
      <div className="flex flex-col items-center gap-6">
        <ActiveComponent replayKey={replayKey} />
        <p className={`text-sm ${caption}`}>Loading your workspace...</p>
      </div>
    </div>
  );
}
