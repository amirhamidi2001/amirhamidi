import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("bg-surface-deep/60 border-border rounded-2xl border p-6", className)}>{children}</div>
  );
}
