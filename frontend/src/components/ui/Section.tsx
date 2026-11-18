import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

export function Section({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("scroll-mt-20 py-14 md:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  description,
  as: Tag = "h2",
  className,
}: {
  id: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", className)}>
      <Tag id={id} className="text-3xl font-bold md:text-4xl">
        {title}
      </Tag>
      <span aria-hidden="true" className="bg-accent mt-3 block h-1 w-14 rounded-full" />
      {description ? <p className="text-muted mt-4 text-base md:text-lg">{description}</p> : null}
    </div>
  );
}
