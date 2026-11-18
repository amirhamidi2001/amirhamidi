import type { IconKey } from "@/types/content";

export const home = {
  greeting: "سلام، من",
  name: "امیر حمیدی",
  greetingEnd: "هستم",
  typedPrefix: "",
  typedItems: ["توسعه‌دهندهٔ وب", "برنامه‌نویس", "فریلنسر"],
  intro:
    "توسعه‌دهندهٔ فول‌استک با تمرکز ویژه بر معماری بک‌اند و تخصص در Python، Django و Django REST Framework. سابقهٔ طراحی و بهینه‌سازی اپلیکیشن‌های وب مقیاس‌پذیر، سامانه‌های احراز هویت امن مبتنی بر JWT و پایگاه‌داده‌های PostgreSQL را دارم. می‌توانم کارایی بک‌اند را به فرانت‌اندهای امروزی مثل React و Vite وصل کنم و به خودکارسازی داده از طریق وب‌اسکرپینگ و ساخت پایپ‌لاین هم علاقه‌مندم. اهل کار تیمی و حل مسئله‌ام و تلاش می‌کنم کدی تمیز و قابل‌نگهداری تحویل بدهم که تجربهٔ کاربری روان بسازد.",
  primaryCta: { label: "مشاهدهٔ نمونه‌کارها", href: "/portfolio" },
  secondaryCta: { label: "ارتباط با من", href: "/contact" },
  floating: [
    { icon: "database" as IconKey, label: "پایگاه‌داده" },
    { icon: "code" as IconKey, label: "کد" },
    { icon: "lightbulb" as IconKey, label: "ایده" },
  ],
} as const;
