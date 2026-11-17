import { BrandIcon } from "@/components/icons/BrandIcons";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { socialLinks } from "@/data/social-links";
import type { SocialPlacement } from "@/types/content";
import { cn } from "@/lib/cn";

export function SocialLinks({ placement, className, size = 20 }: { placement: SocialPlacement; className?: string; size?: number }) {
  const links = socialLinks.filter((l) => l.placements.includes(placement));
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {links.map((l) => (
        <li key={l.id}>
          <ExternalLink
            href={l.href}
            label={`${l.label} (در تب جدید باز می‌شود)`}
            className="text-foreground hover:text-accent hover:bg-accent/10 inline-flex size-11 items-center justify-center rounded-full transition-colors"
          >
            <BrandIcon id={l.id} width={size} height={size} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
