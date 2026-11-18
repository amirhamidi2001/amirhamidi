import { Section, SectionHeading } from "@/components/ui/Section";
import { Intro } from "@/components/about/Intro";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { Journey } from "@/components/about/Journey";
import { FactPills } from "@/components/about/FactPills";
import { SkillBars } from "@/components/about/SkillBars";
import { Stats } from "@/components/about/Stats";
import { TestimonialsCarousel } from "@/components/about/TestimonialsCarousel";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { about } from "@/data/about";
import { testimonials } from "@/data/testimonials";
import { withImageAvailability } from "@/lib/images";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata("about");

export default function AboutPage() {
  return (
    <>
      <Section labelledBy="about-title">
        <SectionHeading as="h1" id="about-title" title={about.pageTitle} />
        <Intro />
        <SkillsGrid />
        <Journey />
        <blockquote className="border-accent mx-auto mt-14 max-w-2xl border-s-4 ps-6 text-xl leading-loose font-medium">
          <p>«{about.quote}»</p>
        </blockquote>
        <FactPills />
      </Section>

      <Section labelledBy="skills-title">
        <SectionHeading id="skills-title" title={about.skillBarsTitle} description={about.skillBarsDescription} />
        <SkillBars />
      </Section>

      <Section labelledBy="stats-title">
        <h2 id="stats-title" className="sr-only">
          {about.statsTitle}
        </h2>
        <Stats />
      </Section>

      <Section labelledBy="testimonials-title">
        <SectionHeading id="testimonials-title" title={about.testimonialsTitle} description={about.testimonialsDescription} />
        <TestimonialsCarousel items={withImageAvailability(testimonials)} label={about.testimonialsTitle} />
      </Section>
      <PageJsonLd page="about" />
    </>
  );
}
