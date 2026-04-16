"use client";

import { useMemo, useState } from "react";
import { AnimationList } from "@/components/animation-list";
import { AnimationStage, type StageTone } from "@/components/animation-stage";
import { animations } from "@/lib/animations";

const stageTones: { value: StageTone; circleClass: string; label: string }[] = [
  { value: "light", circleClass: "bg-white border-slate-300", label: "Light stage" },
  { value: "dark", circleClass: "bg-[#0B1220] border-[#0B1220]", label: "Dark stage" },
];

export function AnimationShowcase() {
  const [selectedId, setSelectedId] = useState<string>(animations[0]?.id ?? "");
  const [replayKey, setReplayKey] = useState(0);
  const [stageTone, setStageTone] = useState<StageTone>("light");

  const selectedVariant = useMemo(
    () => animations.find((variant) => variant.id === selectedId) ?? animations[0],
    [selectedId],
  );

  if (!selectedVariant) return null;

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-slate-900">
      <AnimationList
        variants={animations}
        selectedId={selectedVariant.id}
        onSelect={(nextId) => {
          setSelectedId(nextId);
          setReplayKey((key) => key + 1);
        }}
      />

      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
          <div>
            <h2 className="text-base font-semibold text-slate-900">{selectedVariant.name}</h2>
            <p className="mt-1 font-mono text-xs text-slate-400">{selectedVariant.filename}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white p-1">
              {stageTones.map((tone) => {
                const isActive = stageTone === tone.value;
                return (
                  <button
                    key={tone.value}
                    type="button"
                    aria-label={tone.label}
                    onClick={() => setStageTone(tone.value)}
                    className={`h-5 w-5 rounded-full border transition ${tone.circleClass} ${
                      isActive ? "ring-2 ring-blue-400 ring-offset-1" : ""
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setReplayKey((key) => key + 1)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <ReplayIcon className="h-4 w-4" />
              Replay
            </button>
          </div>
        </header>

        <AnimationStage
          variant={selectedVariant}
          replayKey={replayKey}
          stageTone={stageTone}
        />
      </main>
    </div>
  );
}

function ReplayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
