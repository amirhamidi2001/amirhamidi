"use client"; // رویداد اسکرول
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0 })}
      className="bg-accent text-on-accent fixed end-4 bottom-4 z-40 inline-flex size-12 items-center justify-center rounded-full shadow-lg"
    >
      <ArrowUp aria-hidden="true" size={22} />
    </button>
  );
}
