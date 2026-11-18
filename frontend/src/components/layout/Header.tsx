import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { SocialLinks } from "./SocialLinks";
import { navigation } from "@/data/navigation";
import { uiText } from "@/data/ui-text";
import { site } from "@/config/site";

export function Header() {
  return (
    <header className="bg-background/90 border-border sticky top-0 z-40 border-b backdrop-blur">
      <Container className="relative flex h-(--header-height) items-center justify-between gap-4">
        <Link prefetch={false} href="/" aria-label={uiText.logoLabel} className="text-heading text-xl font-bold">
          {site.name}
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-1">
          <SocialLinks placement="header" className="hidden sm:flex" size={18} />
          <MobileNav items={navigation} label={uiText.mainNav} openLabel={uiText.menuOpen} closeLabel={uiText.menuClose} />
        </div>
      </Container>
    </header>
  );
}
