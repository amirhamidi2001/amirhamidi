import {
  Box, Briefcase, CloudRain, CloudUpload, CodeXml, Calendar, Database, GitBranch, Lightbulb,
  MapPin, Puzzle, Server, Terminal, Users, type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types/content";

const map: Record<IconKey, LucideIcon> = {
  code: CodeXml, puzzle: Puzzle, users: Users, database: Database, server: Server,
  "cloud-upload": CloudUpload, terminal: Terminal, git: GitBranch, box: Box, lightbulb: Lightbulb,
  calendar: Calendar, "map-pin": MapPin, briefcase: Briefcase, "cloud-rain": CloudRain,
};

export function Icon({ name, className, size = 24 }: { name: IconKey; className?: string; size?: number }) {
  const Cmp = map[name];
  return <Cmp aria-hidden="true" size={size} className={className} />;
}
