import type { EducationItem, ExperienceItem, SkillGroup } from "@/types/content";
import { about } from "./about";

export const resumePage = {
  title: "رزومه",
  description:
    "پیشینهٔ تحصیلی، مسیر حرفه‌ای و مهارت‌های فنی من؛ ترکیبی از ذهنیت مهندسی و علاقه به توسعهٔ وب.",
  educationTitle: "تحصیلات",
  skillsTitle: "مهارت‌های حرفه‌ای",
  experienceTitle: "سوابق کاری",
  download: "دانلود رزومه (PDF)",
  downloadHint: "فایل رزومه به‌زودی اضافه می‌شود.",
} as const;

export const education: readonly EducationItem[] = [
  {
    id: "edu-bsc",
    period: "۲۰۱۹ – ۲۰۲۳",
    title: "کارشناسی مهندسی برق",
    org: "دانشگاه بین‌المللی امام خمینی، ایران",
    summary: "دانشگاه بین‌المللی امام خمینی",
    note: `«${about.quote}» مهارت‌های تحلیلی و حل مسئله‌ام را قوی کرد.`,
  },
  {
    id: "edu-course",
    period: "۲۰۲۱ – ۲۰۲۲",
    title: "برنامه‌نویسی پایتون و توسعهٔ وب",
    org: "مکتب‌خونه (Maktabkhooneh.org) — زیر نظر اساتید جادی میرمیرانی و علی بیگدلی",
    summary: "مکتب‌خونه — زیر نظر اساتید جادی میرمیرانی و علی بیگدلی",
    note: "تخصص در Python، Django، APIهای REST و شیوه‌های توسعهٔ وب مدرن.",
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    id: "exp-junior",
    period: "۲۰۲۴ – اکنون",
    title: "برنامه‌نویس جونیور",
    org: "Freelancer.com (دورکار)",
    summary: "Freelancer.com — ارائهٔ راهکارهای وب سفارشی برای مشتریان",
    bullets: [
      "انجام پروژه‌های فریلنسری توسعهٔ وب و برنامه‌نویسی برای مشتریان متنوع",
      "ارائهٔ راهکارهای سفارشی با Python، Django و APIهای REST",
      "مدیریت چرخهٔ کامل پروژه، از گردآوری نیازمندی تا استقرار",
      "ارتباط شفاف و تحویل به‌موقع همهٔ پروژه‌ها",
    ],
  },
  {
    id: "exp-intern",
    period: "۲۰۲۲ – ۲۰۲۳",
    title: "کارآموز توسعهٔ وب",
    org: "Parseram.co، تهران، ایران",
    summary: "Parseram.co — توسعهٔ بک‌اند و کار تیمی",
    bullets: [
      "تمرکز بر توسعهٔ بک‌اند با Django و Django REST Framework",
      "کسب تجربهٔ عملی در اپلیکیشن‌های وب واقعی و کار تیمی",
      "کمک در طراحی پایگاه‌داده و یکپارچه‌سازی API",
      "مشارکت در بازبینی کد و فرایندهای چابک (Agile)",
    ],
  },
];

export const skillGroups: readonly SkillGroup[] = [
  { id: "backend", title: "بک‌اند", tools: "Python, Django, Django REST Framework, FastAPI", level: 70 },
  { id: "frontend", title: "فرانت‌اند", tools: "React, Vite, JavaScript, HTML, CSS, Tailwind CSS", level: 60 },
  { id: "db", title: "پایگاه‌داده", tools: "PostgreSQL, MySQL, MongoDB, Redis", level: 50 },
  { id: "devops", title: "دواپس و ابزارها", tools: "Docker, Git, Linux", level: 40 },
];
