import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Ltr } from "@/components/ui/Ltr";
import { Reveal } from "@/components/motion/Reveal";
import { education, experience, skillGroups, resumePage } from "@/data/resume";

export function EducationList() {
  return (
    <ol className="space-y-4">
      {education.map((e) => (
        <Reveal as="li" key={e.id}>
          <Card>
            <h3 className="text-lg font-bold">{e.title}</h3>
            <p className="text-accent mt-1 text-sm font-medium">{e.period}</p>
            <p className="mt-2 font-medium">{e.org}</p>
            <p className="text-muted mt-2 text-sm leading-relaxed">{e.note}</p>
          </Card>
        </Reveal>
      ))}
    </ol>
  );
}

export function ExperienceList() {
  return (
    <ol className="space-y-4">
      {experience.map((e) => (
        <Reveal as="li" key={e.id}>
          <Card>
            <h3 className="text-lg font-bold">{e.title}</h3>
            <p className="text-accent mt-1 text-sm font-medium">{e.period}</p>
            <p className="mt-2 font-medium">{e.org}</p>
            <ul className="text-muted mt-3 list-disc space-y-1 ps-5 text-sm leading-relaxed">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      ))}
    </ol>
  );
}

export function SkillGroups() {
  return (
    <ul className="space-y-4">
      {skillGroups.map((g) => (
        <li key={g.id}>
          <Card>
            <h3 className="text-lg font-bold">{g.title}</h3>
            <p className="text-muted mt-1 mb-3 text-sm">
              <Ltr>{g.tools}</Ltr>
            </p>
            <ProgressBar label={`${resumePage.skillsTitle}: ${g.title}`} value={g.level} />
          </Card>
        </li>
      ))}
    </ul>
  );
}
