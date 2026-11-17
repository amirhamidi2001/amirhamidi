import type { SocialLink } from "@/types/content";

/** منبع واحد لینک‌های اجتماعی (آدرس‌ها دقیقاً مطابق سایت قبلی). */
export const socialLinks: readonly SocialLink[] = [
  { id: "x", label: "X (توییتر)", href: "https://x.com/Amirhamidi2001/", placements: ["header", "hero", "footer", "contact"] },
  { id: "linkedin", label: "لینکدین", href: "https://www.linkedin.com/in/amir-hamidi-18a815233/", placements: ["header", "hero", "footer", "contact"] },
  { id: "instagram", label: "اینستاگرام", href: "https://www.instagram.com/amirhamidi_official/", placements: ["header", "contact"] },
  { id: "telegram", label: "تلگرام", href: "https://t.me/Amirhamidi2001/", placements: ["header", "hero", "footer", "contact"] },
  { id: "github", label: "گیت‌هاب", href: "https://github.com/Amirhamidi2001/", placements: ["hero", "footer", "contact"] },
];
