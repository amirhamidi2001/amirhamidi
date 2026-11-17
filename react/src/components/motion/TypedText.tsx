"use client"; // تایمر
import { useEffect, useRef } from "react";

/**
 * متن تایپ‌شونده. رشتهٔ اول در HTML سرور است؛ در reduced-motion ثابت می‌ماند.
 * به‌جای جداسازی حروف، زیررشتهٔ کامل بازنویسی می‌شود تا حروف فارسی درست به‌هم بچسبند.
 */
export function TypedText({
  items,
  typeSpeed = 90,
  backSpeed = 45,
  pause = 1800,
}: {
  items: readonly string[];
  typeSpeed?: number;
  backSpeed?: number;
  pause?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let count = Array.from(items[0]).length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const chars = Array.from(items[index]);
      el.textContent = chars.slice(0, count).join("");
      let wait = deleting ? backSpeed : typeSpeed;
      if (!deleting && count === chars.length) {
        deleting = true;
        wait = pause;
      } else if (deleting && count === 0) {
        deleting = false;
        index = (index + 1) % items.length;
        wait = 350;
      } else {
        count += deleting ? -1 : 1;
      }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, pause);
    return () => clearTimeout(timer);
  }, [items, typeSpeed, backSpeed, pause]);

  return (
    <span className="inline-block min-h-[1.5em]">
      <span className="sr-only">{items.join("، ")}</span>
      <span aria-hidden="true" ref={ref}>
        {items[0]}
      </span>
      <span aria-hidden="true" className="caret text-accent">
        |
      </span>
    </span>
  );
}
