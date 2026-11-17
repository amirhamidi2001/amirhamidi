"use client"; // وضعیت اسلاید فعال و ناوبری با نقطه‌ها
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { toFaDigits } from "@/lib/format";
import type { Testimonial } from "@/types/content";
import { cn } from "@/lib/cn";

type Item = Testimonial & { imageAvailable: boolean };

export function TestimonialsCarousel({ items, label }: { items: readonly Item[]; label: string }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.6) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root: list, threshold: [0.6] },
    );
    Array.from(list.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    listRef.current?.children[i]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div role="group" aria-roledescription="carousel" aria-label={label}>
      <div ref={listRef} className="snap-row" aria-live="off" tabIndex={0} role="group" aria-label={`${label}؛ با کلیدهای جهت‌نما جابه‌جا شوید`}>
        {items.map((t, i) => (
          <div key={t.id} data-index={i} role="group" aria-roledescription="slide" aria-label={`${toFaDigits(i + 1)} از ${toFaDigits(items.length)}`} className="px-1">
            <figure className="bg-surface-deep/60 border-border mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border p-8 text-center md:flex-row md:text-start">
              <ImageFrame
                image={t.image}
                available={t.imageAvailable}
                icon="user"
                sizes="112px"
                className="size-28 shrink-0 rounded-full"
              />
              <div>
                <blockquote className="text-lg leading-loose">«{t.quote}»</blockquote>
                <figcaption className="mt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-muted text-sm">{t.role}</p>
                  <div role="img" aria-label={`${toFaDigits(t.rating)} از ۵`} className="mt-2 flex justify-center gap-1 md:justify-start">
                    {Array.from({ length: 5 }, (_, n) => (
                      <Star key={n} size={18} aria-hidden="true" className={cn(n < t.rating ? "fill-warning text-warning" : "text-border")} />
                    ))}
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        ))}
      </div>
      {items.length > 1 ? (
        <div className="mt-5 flex justify-center gap-1">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`نمایش نظر ${toFaDigits(i + 1)}`}
              aria-current={active === i}
              className="flex size-11 items-center justify-center"
            >
              <span className={cn("block h-2.5 rounded-full transition-all", active === i ? "bg-accent w-7" : "bg-border w-2.5")} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
