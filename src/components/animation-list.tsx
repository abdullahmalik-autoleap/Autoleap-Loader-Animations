"use client";

import type { AnimationVariant } from "@/lib/types";

interface AnimationListProps {
  variants: AnimationVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const categoryLabels: Record<AnimationVariant["category"], string> = {
  loaders: "LOADERS",
  "logo-intros": "LOGO INTROS",
};

export function AnimationList({ variants, selectedId, onSelect }: AnimationListProps) {
  const loaders = variants.filter((variant) => variant.category === "loaders");
  const logoIntros = variants.filter((variant) => variant.category === "logo-intros");

  return (
    <aside className="flex h-full w-[320px] shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex items-center gap-2 px-5 pt-6 pb-1">
        <span className="al-dot h-2 w-2 rounded-full bg-[#00C19D]" />
        <h1 className="text-[15px] font-semibold text-slate-900">Autoleap Animations</h1>
      </div>
      <p className="px-5 pb-4 text-xs text-slate-500">{variants.length} variants</p>

      <div className="flex-1 space-y-5 overflow-y-auto px-3 pb-6">
        <VariantSection
          label={categoryLabels.loaders}
          variants={loaders}
          selectedId={selectedId}
          onSelect={onSelect}
        />
        <VariantSection
          label={categoryLabels["logo-intros"]}
          variants={logoIntros}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </div>
    </aside>
  );
}

interface VariantSectionProps {
  label: string;
  variants: AnimationVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
}

function VariantSection({ label, variants, selectedId, onSelect }: VariantSectionProps) {
  return (
    <div>
      <h2 className="mb-1 px-2 text-[10px] font-semibold tracking-[0.15em] text-slate-400">
        {label}
      </h2>
      <ul>
        {variants.map((variant) => (
          <VariantRow
            key={variant.id}
            variant={variant}
            isActive={variant.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
}

interface VariantRowProps {
  variant: AnimationVariant;
  isActive: boolean;
  onSelect: (id: string) => void;
}

function VariantRow({ variant, isActive, onSelect }: VariantRowProps) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(variant.id)}
        className={`w-full rounded-md px-3 py-2 text-left transition ${
          isActive ? "bg-blue-50" : "hover:bg-slate-50"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${isActive ? "text-blue-700" : "text-slate-900"}`}>
            {variant.name}
          </span>
          {variant.isLoop && (
            <span className="rounded-md bg-blue-100 px-1.5 py-[1px] text-[10px] font-medium leading-[14px] text-blue-700">
              Loop
            </span>
          )}
        </div>
        <p className={`mt-0.5 text-xs ${isActive ? "text-blue-700/80" : "text-slate-500"}`}>
          {variant.description}
        </p>
      </button>
    </li>
  );
}
