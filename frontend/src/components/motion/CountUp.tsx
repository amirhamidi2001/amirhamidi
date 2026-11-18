"use client"; // IntersectionObserver + rAF
import { useEffect, useRef } from "react";
import { toFaDigits } from "@/lib/format";

/** شمارندهٔ پویا. مقدار نهایی در HTML سرور است؛ در reduced-motion بدون انیمیشن. */
export function CountUp({ end, duration = 1200, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    el.textContent = toFaDigits(0);
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        el.textContent = toFaDigits(Math.round(end * (1 - (1 - t) ** 3)));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = toFaDigits(end);
    };
  }, [end, duration]);

  return (
    <bdi dir="ltr">
      <span ref={ref}>{toFaDigits(end)}</span>
      {suffix}
    </bdi>
  );
}
