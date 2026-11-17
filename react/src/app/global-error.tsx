"use client"; // الزام Next برای خطای ریشه
import "./globals.css";
import { contactPage } from "@/data/contact";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = contactPage.error;
  return (
    <html lang="fa-IR" dir="rtl" data-theme="emerald">
      <body className="bg-background text-foreground flex min-h-dvh items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="text-muted mt-3">{t.text}</p>
          <button type="button" onClick={reset} className="bg-accent text-on-accent mt-8 min-h-11 rounded-full px-6 font-medium">
            {t.retry}
          </button>
        </div>
      </body>
    </html>
  );
}
