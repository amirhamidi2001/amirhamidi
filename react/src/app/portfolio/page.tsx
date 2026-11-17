import { Section, SectionHeading } from "@/components/ui/Section";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { portfolioPage, projects } from "@/data/projects";
import { withImageAvailability } from "@/lib/images";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata("portfolio");

export default function PortfolioPage() {
  return (
    <Section labelledBy="portfolio-title">
      <SectionHeading as="h1" id="portfolio-title" title={portfolioPage.title} description={portfolioPage.description} />
      <PortfolioGrid items={withImageAvailability(projects)} />
      <PageJsonLd page="portfolio" />
    </Section>
  );
}
