import type { IconKey } from "@/types/content";
import { Icon } from "./icon-map";
import { cn } from "@/lib/cn";

export function IconBox({ name, className }: { name: IconKey; className?: string }) {
  return (
    <span className={cn("bg-surface text-on-surface inline-flex size-12 shrink-0 items-center justify-center rounded-xl", className)}>
      <Icon name={name} />
    </span>
  );
}
