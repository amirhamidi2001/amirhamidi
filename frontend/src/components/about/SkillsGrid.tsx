import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/motion/Reveal";
import { skillBriefs } from "@/data/skills";
import { about } from "@/data/about";
import { Ltr } from "@/components/ui/Ltr";

export function SkillsGrid() {
  return (
    <section aria-labelledby="skills-brief" className="pt-14">
      <h2 id="skills-brief" className="sr-only">
        {about.skillsTitle}
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillBriefs.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 80}>
            <Card className="h-full">
              <IconBox name={s.icon} />
              <h3 className="mt-4 text-lg font-bold">
                <Ltr>{s.title}</Ltr>
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{s.description}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
