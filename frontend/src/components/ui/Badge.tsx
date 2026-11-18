import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** برچسب/تگ. متن لاتین (نام فناوری) را داخل <Ltr> بدهید. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("border-border text-muted inline-flex items-center rounded-full border px-3 py-0.5 text-sm", className)}>
      {children}
    </span>
  );
}
