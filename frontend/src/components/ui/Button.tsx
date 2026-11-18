import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2 text-base font-medium transition-colors duration-200 disabled:opacity-60";
const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent/85",
  outline: "border border-accent text-accent hover:bg-accent/10",
  ghost: "text-accent hover:bg-accent/10",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  download,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  download?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  if (download || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} download={download} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link prefetch={false} href={href} className={cls}>
      {children}
    </Link>
  );
}
