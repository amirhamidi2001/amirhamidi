import { Icon } from "@/components/ui/icon-map";
import { facts } from "@/data/about";

export function FactPills() {
  return (
    <ul className="mt-10 flex flex-wrap justify-center gap-3">
      {facts.map((f) => (
        <li key={f.text} className="border-border bg-surface-deep/60 flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <Icon name={f.icon} size={18} className="text-accent" />
          {f.text}
        </li>
      ))}
    </ul>
  );
}
