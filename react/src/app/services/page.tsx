import { Section, SectionHeading } from "@/components/ui/Section";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { servicesPage } from "@/data/services";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata("services");

export default function ServicesPage() {
  return (
    <Section labelledBy="services-title">
      <SectionHeading as="h1" id="services-title" title={servicesPage.title} description={servicesPage.description} />
      <ServicesGrid />
      <PageJsonLd page="services" />
    </Section>
  );
}
