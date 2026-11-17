import type { PageKey, SeoEntry } from "@/types/content";

/** متن‌های SEO هر صفحه (title قبل از قالب «%s | امیر حمیدی»). */
export const seo: Record<PageKey, SeoEntry> = {
  home: {
    title: "امیر حمیدی | توسعه‌دهندهٔ فول‌استک وب و برنامه‌نویس",
    description:
      "امیر حمیدی، توسعه‌دهندهٔ فول‌استک وب با تخصص در Python، Django و Django REST Framework؛ طراحی و ساخت اپلیکیشن‌های وب کارآمد و مقیاس‌پذیر.",
    path: "/",
    lastModified: "2026-11-15",
  },
  about: {
    title: "درباره امیر حمیدی؛ برنامه‌نویس و توسعه‌دهندهٔ وب",
    description:
      "با امیر حمیدی، برنامه‌نویس و توسعه‌دهندهٔ وب، آشنا شوید؛ مهارت‌ها، مسیر تحصیلی و حرفه‌ای و نظر همکاران دربارهٔ کار با او.",
    path: "/about",
    lastModified: "2026-11-15",
  },
  resume: {
    title: "رزومهٔ امیر حمیدی",
    description:
      "رزومهٔ امیر حمیدی؛ تحصیلات، سوابق کاری و مهارت‌های حرفه‌ای در بک‌اند، فرانت‌اند، پایگاه‌داده و دواپس.",
    path: "/resume",
    lastModified: "2026-11-15",
  },
  services: {
    title: "خدمات توسعهٔ وب و برنامه‌نویسی",
    description:
      "خدمات امیر حمیدی: توسعهٔ وب، راهکارهای برنامه‌نویسی، طراحی پایگاه‌داده، توسعهٔ API، استقرار و همکاری فریلنسری.",
    path: "/services",
    lastModified: "2026-11-15",
  },
  portfolio: {
    title: "نمونه‌کارها",
    description:
      "نمونه‌کارهای امیر حمیدی؛ فروشگاه اینترنتی، پلتفرم آموزشی، API و وب‌سایت‌های سفارشی با Django و React.",
    path: "/portfolio",
    lastModified: "2026-11-15",
  },
  contact: {
    title: "تماس با امیر حمیدی",
    description:
      "برای همکاری یا پروژه با امیر حمیدی در تهران تماس بگیرید؛ ایمیل، تلگرام و فرم تماس.",
    path: "/contact",
    lastModified: "2026-11-15",
  },
};
