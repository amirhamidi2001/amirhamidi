export type IconKey =
  | "code" | "puzzle" | "users" | "database" | "server" | "cloud-upload" | "terminal"
  | "git" | "box" | "lightbulb" | "calendar" | "map-pin" | "briefcase" | "cloud-rain";

export type NavItem = { label: string; href: string };

export type SocialId = "x" | "linkedin" | "github" | "telegram" | "instagram";
export type SocialPlacement = "header" | "hero" | "footer" | "contact";
export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
  placements: readonly SocialPlacement[];
};

export type ImageRef = { src: string; alt: string; width: number; height: number };

export type Skill = { id: string; title: string; description: string; level: number };
export type SkillBrief = { icon: IconKey; title: string; description: string };
export type SkillGroup = { id: string; title: string; tools: string; level: number };

export type EducationItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  summary: string; // نمای کوتاه برای «مسیر من»
  note: string;
};
export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  summary: string;
  bullets: readonly string[];
};

export type Service = { id: string; icon: IconKey; title: string; description: string };

export type ProjectCategory = "ecommerce" | "blog" | "web" | "api";
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: readonly string[];
  href: string;
  image: ImageRef;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: ImageRef;
};

export type Stat = { id: string; end: number; label: string };
export type Fact = { icon: IconKey; text: string };

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
  lastModified: string;
};
export type PageKey = "home" | "about" | "resume" | "services" | "portfolio" | "contact";
