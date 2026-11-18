"use client"; // IntersectionObserver
import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * ظاهر شدن هنگام اسکرول. بدون JS محتوا دیده می‌شود؛ المان‌های داخل viewport هرگز مخفی نمی‌شوند (LCP).
 * x: جابه‌جایی افقی از سمت «شروع» (در RTL از راست).
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  x = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  x?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal-pending");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-x": `${x}rem` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
