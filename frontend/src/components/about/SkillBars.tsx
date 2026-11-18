import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Ltr } from "@/components/ui/Ltr";
import { skills } from "@/data/skills";

export function SkillBars() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((s) => (
        <li key={s.id}>
          <Card className="h-full">
            <h3 className="text-lg font-bold">
              <Ltr>{s.title}</Ltr>
            </h3>
            <p className="text-muted mt-2 mb-4 text-sm leading-relaxed">{s.description}</p>
            <ProgressBar label={s.title} value={s.level} />
          </Card>
        </li>
      ))}
    </ul>
  );
}
