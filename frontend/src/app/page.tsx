import { Hero } from "@/components/home/Hero";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <PageJsonLd page="home" />
    </>
  );
}
