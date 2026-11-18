import type { Metadata } from "next";
import { site, isIndexable } from "@/config/site";
import { seo } from "@/data/seo";
import { imageExists } from "@/lib/images";
import type { PageKey } from "@/types/content";

function ogImages() {
  return imageExists(site.ogImage)
    ? [{ url: site.ogImage, width: 1200, height: 630, alt: "امیر حمیدی — توسعه‌دهندهٔ فول‌استک وب" }]
    : undefined;
}

/** متادیتای ریشه (title template، metadataBase، OG پایه، verification). */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: seo.home.title, template: `%s | ${site.name}` },
    description: seo.home.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    robots: isIndexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", siteName: site.name, locale: site.ogLocale },
    twitter: { card: "summary_large_image" },
    verification: site.googleVerification ? { google: site.googleVerification } : undefined,
  };
}

/** متادیتای هر صفحه از data/seo.ts. */
export function buildMetadata(key: PageKey): Metadata {
  const entry = seo[key];
  const title = key === "home" ? { absolute: entry.title } : entry.title;
  const ogTitle = key === "home" ? entry.title : `${entry.title} | ${site.name}`;
  return {
    title,
    description: entry.description,
    alternates: { canonical: entry.path },
    openGraph: {
      type: key === "about" ? "profile" : "website",
      url: entry.path,
      title: ogTitle,
      description: entry.description,
      siteName: site.name,
      locale: site.ogLocale,
      images: ogImages(),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: entry.description, images: ogImages()?.map((i) => i.url) },
  };
}
