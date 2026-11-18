import Link from "next/link";
import type { ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  bold?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue/90",
  secondary: "border border-line bg-white text-ink hover:border-muted",
  ghost: "text-muted hover:text-blue",
  accent: "bg-yellow text-ink hover:bg-yellow-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-11 px-4",
  md: "h-11 px-5",
  lg: "h-13 px-7",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  bold = true,
  type = "button",
  disabled,
  className = "",
  onClick,
  children,
}: ButtonProps) {
  const Tag = (href ? Link : "button") as ElementType;

  return (
    <Tag
      href={href}
      prefetch={href ? false : undefined}
      type={href ? undefined : type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg text-sm/6 transition-colors motion-reduce:transition-none disabled:opacity-70 ${bold ? "font-bold" : "font-normal"} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
