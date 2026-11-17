import { site } from "@/config/site";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import { skillGroups } from "@/data/resume";
import { projects, portfolioPage } from "@/data/projects";
import { seo } from "@/data/seo";
import { imageExists } from "@/lib/images";
import type { PageKey } from "@/types/content";

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;
const abs = (path: string) => (path === "/" ? `${site.url}/` : `${site.url}${path}`);

/** فقط داده‌های واقعی؛ بدون تلفن/ایمیل/تاریخ تولد/Review. */
function person() {
  const knowsAbout = [...new Set(skillGroups.flatMap((g) => g.tools.split(",").map((t) => t.trim())))];
  return {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: profile.nameEn,
    jobTitle: profile.jobTitle,
    url: site.url,
    ...(imageExists(profile.image.src) ? { image: `${site.url}${profile.image.src}` } : {}),
    sameAs: socialLinks.map((s) => s.href),
    knowsAbout,
    address: { "@type": "PostalAddress", addressLocality: profile.city, addressCountry: "IR" },
    alumniOf: { "@type": "EducationalOrganization", name: "دانشگاه بین‌المللی امام خمینی" },
  };
}

const website = () => ({
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  inLanguage: site.locale,
  publisher: { "@id": personId },
});

function breadcrumb(key: PageKey) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "خانه", item: abs("/") },
      { "@type": "ListItem", position: 2, name: seo[key].title, item: abs(seo[key].path) },
    ],
  };
}

function webPage(type: string, key: PageKey, extra: object = {}) {
  return {
    "@type": type,
    "@id": `${abs(seo[key].path)}#webpage`,
    url: abs(seo[key].path),
    name: seo[key].title,
    description: seo[key].description,
    inLanguage: site.locale,
    isPartOf: { "@id": websiteId },
    ...extra,
  };
}

export function buildGraph(key: PageKey): object[] {
  switch (key) {
    case "home":
      return [person(), website()];
    case "about":
      return [person(), website(), webPage("ProfilePage", "about", { mainEntity: { "@id": personId } }), breadcrumb("about")];
    case "resume":
      return [person(), website(), webPage("ProfilePage", "resume", { mainEntity: { "@id": personId } }), breadcrumb("resume")];
    case "services":
      return [person(), website(), webPage("WebPage", "services"), breadcrumb("services")];
    case "portfolio":
      return [
        person(),
        website(),
        webPage("CollectionPage", "portfolio", {
          mainEntity: {
            "@type": "ItemList",
            name: portfolioPage.title,
            itemListElement: projects.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "CreativeWork", name: p.title, description: p.subtitle, url: p.href, keywords: p.tags.join(", "), creator: { "@id": personId } },
            })),
          },
        }),
        breadcrumb("portfolio"),
      ];
    case "contact":
      return [person(), website(), webPage("ContactPage", "contact"), breadcrumb("contact")];
  }
}
