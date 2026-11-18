import type { ReactNode } from "react";

type EyebrowProps = {
  inverse?: boolean;
  children: ReactNode;
};

export function Eyebrow({ inverse = false, children }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-label ${inverse ? "text-white" : "text-blue"}`}
    >
      {children}
    </p>
  );
}
