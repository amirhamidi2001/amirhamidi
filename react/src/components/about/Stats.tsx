import { CountUp } from "@/components/motion/CountUp";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <ul className="bg-surface-deep border-border grid gap-6 rounded-3xl border p-8 text-center sm:grid-cols-3">
      {stats.map((s) => (
        <li key={s.id}>
          <p className="text-accent text-5xl font-bold">
            <CountUp end={s.end} suffix="+" />
          </p>
          <p className="text-muted mt-2">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
