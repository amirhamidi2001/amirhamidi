import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Ltr } from "@/components/ui/Ltr";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { contactPage } from "@/data/contact";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

const row = "flex items-start gap-4";
const iconBox = "bg-surface text-on-surface inline-flex size-11 shrink-0 items-center justify-center rounded-xl";

export function ContactInfo() {
  const telegram = socialLinks.find((s) => s.id === "telegram");
  return (
    <Card className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{contactPage.infoTitle}</h2>
        <p className="text-muted mt-2">{contactPage.infoText}</p>
      </div>
      <ul className="space-y-5">
        <li className={row}>
          <span className={iconBox}><MapPin aria-hidden="true" size={20} /></span>
          <div><h3 className="font-bold">{contactPage.location}</h3><p className="text-muted">{profile.city}، {profile.country}</p></div>
        </li>
        <li className={row}>
          <span className={iconBox}><Phone aria-hidden="true" size={20} /></span>
          <div>
            <h3 className="font-bold">{contactPage.phone}</h3>
            <a href={profile.phoneHref} className="text-muted hover:text-accent"><Ltr>{profile.phone}</Ltr></a>
          </div>
        </li>
        <li className={row}>
          <span className={iconBox}><Mail aria-hidden="true" size={20} /></span>
          <div>
            <h3 className="font-bold">{contactPage.email}</h3>
            <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent break-all"><Ltr>{profile.email}</Ltr></a>
          </div>
        </li>
        {telegram ? (
          <li className={row}>
            <span className={iconBox}><Send aria-hidden="true" size={20} /></span>
            <div>
              <h3 className="font-bold">{contactPage.telegram}</h3>
              <ExternalLink href={telegram.href} className="text-muted hover:text-accent">
                <Ltr>@Amirhamidi2001</Ltr>
              </ExternalLink>
            </div>
          </li>
        ) : null}
      </ul>
      <SocialLinks placement="contact" className="-ms-3" />
    </Card>
  );
}
