import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {services.map((s, i) => (
        <Reveal as="li" key={s.id} delay={(i % 2) * 100} x={i % 2 === 0 ? 1.5 : -1.5}>
          <Card className="flex h-full gap-5">
            <IconBox name={s.icon} />
            <div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-muted mt-2 leading-relaxed">{s.description}</p>
            </div>
          </Card>
        </Reveal>
      ))}
    </ul>
  );
}
