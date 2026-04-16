import type { ComponentType } from "react";

export interface AnimationProps {
  replayKey: number;
}

export interface AnimationVariant {
  id: string;
  name: string;
  description: string;
  filename: string;
  category: "loaders" | "logo-intros";
  isLoop: boolean;
  component: ComponentType<AnimationProps>;
}
