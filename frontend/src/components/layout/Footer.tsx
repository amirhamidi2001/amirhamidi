import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "./SocialLinks";
import { navigation } from "@/data/navigation";
import { uiText } from "@/data/ui-text";
import { toFaDigits } from "@/lib/format";
import { isAnalyticsEnabled } from "@/components/seo/Analytics";

export function Footer() {
  const year = toFaDigits(new Date().getFullYear());
  return (
    <footer className="border-border border-t py-10">
      <Container className="flex flex-col items-center gap-6 text-center">
        <nav aria-label="پیوندهای پایین صفحه">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {navigation.map((i) => (
              <li key={i.href}>
                <Link prefetch={false} href={i.href} className="text-muted hover:text-accent inline-block py-2">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks placement="footer" />
        <div className="text-muted text-sm">
          <p>
            © {year} — {uiText.footerRights}
          </p>
          <p>{uiText.footerCredit}</p>
        </div>
      </Container>
    </footer>
  );
}
