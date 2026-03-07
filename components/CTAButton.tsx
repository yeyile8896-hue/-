import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  size = "md"
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300";
  const sizes = {
    md: "min-h-12 px-6 py-3 text-sm sm:text-base",
    sm: "min-h-11 px-5 py-2.5 text-sm"
  };
  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white shadow-glow hover:-translate-y-0.5 hover:opacity-95",
    secondary:
      "border border-orange-200 bg-white/90 text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"
  };

  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]}`} href={href}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
