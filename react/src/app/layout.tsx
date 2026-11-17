import type { Viewport } from "next";
import "./globals.css";
import { vazirmatn } from "@/lib/fonts";
import { site } from "@/config/site";
import { uiText } from "@/data/ui-text";
import { rootMetadata } from "@/lib/seo/build-metadata";
import { SkipLink } from "@/components/ui/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/seo/Analytics";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export const metadata = rootMetadata();
export const viewport: Viewport = { themeColor: site.themeColor, width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa-IR" dir="rtl" data-theme={site.theme} className={vazirmatn.variable}>
      <body className="bg-background text-foreground flex min-h-dvh flex-col font-sans antialiased">
        <SkipLink label={uiText.skipLink} />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 overflow-x-clip outline-none">
          {children}
        </main>
        <Footer />
        <Analytics />
        <ScrollToTop label={uiText.scrollTop} />
      </body>
    </html>
  );
}
