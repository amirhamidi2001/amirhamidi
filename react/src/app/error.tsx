"use client"; // الزام Next برای مرز خطا
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactPage } from "@/data/contact";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = contactPage.error;
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold">{t.title}</h1>
      <p className="text-muted mt-3">{t.text}</p>
      <div className="mt-8">
        <Button onClick={reset}>{t.retry}</Button>
      </div>
    </Container>
  );
}
