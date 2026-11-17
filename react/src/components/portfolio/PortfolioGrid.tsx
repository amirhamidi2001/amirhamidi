"use client"; // state فیلتر و لایت‌باکس
import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpLeft, Maximize2 } from "lucide-react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Badge } from "@/components/ui/Badge";
import { Ltr } from "@/components/ui/Ltr";
import { categories, portfolioPage } from "@/data/projects";
import { toFaDigits } from "@/lib/format";
import { cn } from "@/lib/cn";
import type { Project, ProjectCategory } from "@/types/content";

const ImageLightbox = dynamic(() => import("./ImageLightbox"), { ssr: false });

type Item = Project & { imageAvailable: boolean };
const isLatin = (s: string) => /^[\x00-\x7F]+$/.test(s);

export function PortfolioGrid({ items }: { items: readonly Item[] }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Item | null>(null);
  const shown = filter === "all" ? items : items.filter((p) => p.category === filter);

  return (
    <div>
      <div role="group" aria-label={portfolioPage.filterLabel} className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
            className={cn(
              "min-h-11 rounded-full border px-5 transition-colors",
              filter === c.id ? "bg-accent text-on-accent border-accent font-medium" : "border-border hover:border-accent hover:text-accent",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p role="status" className="sr-only">
        {portfolioPage.resultsLabel(shown.length).replace(/\d+/, (n) => toFaDigits(n))}
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <li key={p.slug} className="bg-surface-deep/60 border-border flex flex-col overflow-hidden rounded-2xl border">
            <div className="relative">
              <ImageFrame image={p.image} available={p.imageAvailable} sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 92vw" />
              {p.imageAvailable ? (
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`${portfolioPage.zoom}: ${p.title}`}
                  className="bg-background/80 hover:text-accent absolute end-3 top-3 inline-flex size-11 items-center justify-center rounded-full backdrop-blur"
                >
                  <Maximize2 aria-hidden="true" size={18} />
                </button>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <h3 className="text-lg font-bold">
                  <Ltr>{p.title}</Ltr>
                </h3>
                <p className="text-muted text-sm">{p.subtitle}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Badge>{isLatin(t) ? <Ltr>{t}</Ltr> : t}</Badge>
                  </li>
                ))}
              </ul>
              <ExternalLink href={p.href} className="text-accent hover:text-foreground mt-auto inline-flex min-h-11 items-center gap-1 font-medium">
                {portfolioPage.visit}
                <ArrowUpLeft aria-hidden="true" size={18} />
                <span className="sr-only">: {p.title}</span>
              </ExternalLink>
            </div>
          </li>
        ))}
      </ul>

      {selected ? <ImageLightbox image={selected.image} closeLabel={portfolioPage.close} onClose={() => setSelected(null)} /> : null}
    </div>
  );
}
