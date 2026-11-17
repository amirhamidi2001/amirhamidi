/** تنظیمات مرکزی سایت. تغییر تم = تغییر فیلد theme (و افزودن فایل تم). */
export const site = {
  name: "امیر حمیدی",
  nameEn: "Amir Hamidi",
  locale: "fa-IR",
  ogLocale: "fa_IR",
  theme: "emerald",
  themeColor: "#000900", // هماهنگ با --background در themes/emerald.css (رنگ نوار مرورگر)
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://amirhamidi.vercel.app").replace(/\/$/, ""),
  // شناسهٔ Google Analytics (عمومی). برای غیرفعال‌سازی: NEXT_PUBLIC_GA_ID="" در Vercel.
  gaId: (process.env.NEXT_PUBLIC_GA_ID ?? "G-WP4E9TWBZL").trim(),
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  resumeFile: "/files/amir-hamidi-resume.pdf",
  ogImage: "/images/general/og-default.png",
  home: { showSections: false },
} as const;

/** در پیش‌نمایش‌های Vercel نباید ایندکس شود. */
export const isIndexable = !["preview", "development"].includes(process.env.VERCEL_ENV ?? "");
