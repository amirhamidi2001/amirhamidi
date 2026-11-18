"use client"; // usePathname برای لینک فعال
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function NavLink({ href, children, className, onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link prefetch={false} href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn("text-nav hover:text-nav-hover transition-colors", active && "text-nav-hover font-bold", className)}
    >
      {children}
    </Link>
  );
}
