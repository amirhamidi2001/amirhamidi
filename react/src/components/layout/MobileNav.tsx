"use client"; // state باز/بسته، Esc، قفل اسکرول
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import type { NavItem } from "@/types/content";

export function MobileNav({ items, label, openLabel, closeLabel }: { items: readonly NavItem[]; label: string; openLabel: string; closeLabel: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
        className="text-foreground hover:text-accent inline-flex size-11 items-center justify-center rounded-full"
      >
        {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
      </button>
      <nav
        id="mobile-menu"
        aria-label={label}
        hidden={!open}
        className="bg-nav-mobile border-border absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-b shadow-2xl"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {items.map((item) => (
            <li key={item.href} className="border-border border-b last:border-0">
              <NavLink href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
