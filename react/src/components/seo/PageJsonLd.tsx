import { JsonLd } from "./JsonLd";
import { buildGraph } from "@/lib/seo/schema";
import type { PageKey } from "@/types/content";

export function PageJsonLd({ page }: { page: PageKey }) {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": buildGraph(page) }} />;
}
