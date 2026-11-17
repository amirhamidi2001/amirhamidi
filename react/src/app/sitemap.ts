import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { seo } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seo).map((e) => ({
    url: e.path === "/" ? `${site.url}/` : `${site.url}${e.path}`,
    lastModified: new Date(e.lastModified),
  }));
}
