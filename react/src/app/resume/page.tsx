import { Section, SectionHeading } from "@/components/ui/Section";
import { EducationList, ExperienceList, SkillGroups } from "@/components/resume/ResumeSections";
import { ResumeDownload } from "@/components/resume/ResumeDownload";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { resumePage } from "@/data/resume";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata("resume");

export default function ResumePage() {
  return (
    <Section labelledBy="resume-title">
      <SectionHeading as="h1" id="resume-title" title={resumePage.title} description={resumePage.description} />
      <div className="mb-10">
        <ResumeDownload />
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-10">
          <section aria-labelledby="edu">
            <h2 id="edu" className="mb-4 text-2xl font-bold">
              {resumePage.educationTitle}
            </h2>
            <EducationList />
          </section>
          <section aria-labelledby="rskills">
            <h2 id="rskills" className="mb-4 text-2xl font-bold">
              {resumePage.skillsTitle}
            </h2>
            <SkillGroups />
          </section>
        </div>
        <section aria-labelledby="exp">
          <h2 id="exp" className="mb-4 text-2xl font-bold">
            {resumePage.experienceTitle}
          </h2>
          <ExperienceList />
        </section>
      </div>
      <PageJsonLd page="resume" />
    </Section>
  );
}
