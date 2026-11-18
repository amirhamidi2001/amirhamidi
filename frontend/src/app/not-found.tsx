import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { contactPage } from "@/data/contact";

// Next خودش برای not-found متای noindex می‌گذارد.
export const metadata: Metadata = { title: contactPage.notFound.title };

export default function NotFound() {
  const t = contactPage.notFound;
  return (
    <Section labelledBy="nf-title" className="text-center">
      <p aria-hidden="true" className="text-accent text-7xl font-bold">۴۰۴</p>
      <h1 id="nf-title" className="mt-4 text-3xl font-bold">{t.title}</h1>
      <p className="mt-3 text-lg">{t.heading}</p>
      <p className="text-muted mt-2">{t.text}</p>
      <div className="mt-8">
        <ButtonLink href="/">{t.back}</ButtonLink>
      </div>
    </Section>
  );
}
