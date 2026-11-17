import { Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { about } from "@/data/about";
import { profile } from "@/data/profile";
import { site } from "@/config/site";
import { fileExists } from "@/lib/images";

export function Intro() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="text-accent font-medium">{about.greeting}</p>
        <h2 className="mt-2 text-2xl leading-relaxed font-bold md:text-3xl">{about.headline}</h2>
        <p className="mt-5 text-lg leading-loose">{about.lead}</p>
        <p className="text-muted mt-4 leading-loose">{about.body}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/portfolio" variant="outline">
            {about.portfolioCta}
          </ButtonLink>
          {fileExists(site.resumeFile) ? (
            <ButtonLink href={site.resumeFile} download variant="ghost">
              {about.resumeCta}
              <Download aria-hidden="true" size={18} />
            </ButtonLink>
          ) : null}
        </div>
      </div>
      <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-5 lg:mx-0 lg:justify-self-end">
        <ImageSlot
          image={{ ...profile.image, alt: about.profileImageAlt }}
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 320px"
          icon="user"
          className="border-border rounded-3xl border"
        />
      </div>
    </div>
  );
}
