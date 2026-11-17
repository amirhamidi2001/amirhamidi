import { about } from "@/data/about";
import { education, experience } from "@/data/resume";
import { Reveal } from "@/components/motion/Reveal";

export function Journey() {
  const all = [...education, ...experience];
  const items = about.journeyOrder.map((id) => all.find((x) => x.id === id)).filter((x): x is (typeof all)[number] => Boolean(x));
  return (
    <section aria-labelledby="journey" className="pt-14">
      <h2 id="journey" className="mb-6 text-2xl font-bold">
        {about.journeyTitle}
      </h2>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal as="li" key={it.id} delay={i * 80} className="border-accent border-s-4 ps-4">
            <p className="text-accent text-sm font-medium">{it.period}</p>
            <h3 className="mt-1 text-lg font-bold">{it.title}</h3>
            <p className="text-muted mt-1 text-sm leading-relaxed">{it.summary}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
