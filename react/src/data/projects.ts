import type { Project, ProjectCategory } from "@/types/content";

export const portfolioPage = {
  title: "نمونه‌کارها",
  description:
    "مجموعه‌ای از پروژه‌های اخیر من در توسعهٔ وب؛ از پلتفرم‌های فروشگاهی و APIهای REST تا وب‌سایت‌های سفارشی و هویت برند.",
  filterLabel: "فیلتر نمونه‌کارها",
  resultsLabel: (n: number) => `${n} نمونه‌کار نمایش داده می‌شود`,
  visit: "مشاهدهٔ پروژه",
  zoom: "بزرگ‌نمایی تصویر",
  close: "بستن",
} as const;

export const categories: readonly { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "همه" },
  { id: "ecommerce", label: "فروشگاهی" },
  { id: "blog", label: "وبلاگ" },
  { id: "web", label: "وب" },
  { id: "api", label: "API" },
];

const img = (slug: string, title: string) => ({
  src: `/images/portfolio/${slug}.webp`,
  alt: `تصویر نمونه‌کار ${title}`,
  width: 1200,
  height: 800,
});

export const projects: readonly Project[] = [
  { slug: "goriila-shop", title: "Goriila Shop", subtitle: "پلتفرم فروشگاهی", category: "ecommerce", tags: ["Django", "Product Catalog"], href: "https://goriilashop.com/", image: img("goriila-shop", "Goriila Shop") },
  { slug: "tablogenix", title: "TabloGenix", subtitle: "تابلو برق هوشمند", category: "ecommerce", tags: ["Django REST", "React"], href: "https://github.com/amirhamidi2001/tablogenix-ecommerce", image: img("tablogenix", "TabloGenix") },
  { slug: "roya-sazan-javan", title: "Roya Sazan Javan", subtitle: "پلتفرم آموزشی", category: "ecommerce", tags: ["Django", "Payment Integration"], href: "https://royasazanjavan.org/", image: img("roya-sazan-javan", "Roya Sazan Javan") },
  { slug: "hirbad", title: "Hirbad Platform", subtitle: "بازارچهٔ مدرن آموزش آنلاین", category: "api", tags: ["Django REST", "TypeScript"], href: "https://hirbad.com", image: img("hirbad", "Hirbad Platform") },
  { slug: "satida-decor", title: "Satida Decor", subtitle: "فروشگاه دکوراسیون منزل", category: "web", tags: ["Django", "Bootstrap"], href: "https://satidadecor.pythonanywhere.com/", image: img("satida-decor", "Satida Decor") },
  { slug: "novin-sanat-felez", title: "Novin Sanat Felez", subtitle: "هویت برند و وب‌سایت", category: "web", tags: ["HTML/CSS", "Brand Identity"], href: "https://novinsanatfelez.com/", image: img("novin-sanat-felez", "Novin Sanat Felez") },
  { slug: "topservice", title: "TopService", subtitle: "پروژهٔ React", category: "web", tags: ["React", "Tailwind CSS"], href: "https://topservice.ir/", image: img("topservice", "TopService") },
  { slug: "regal-mehrad", title: "Regal Mehrad", subtitle: "هویت بصری", category: "web", tags: ["HTML/CSS", "Django"], href: "https://regalmehrad.pythonanywhere.com/", image: img("regal-mehrad", "Regal Mehrad") },
  { slug: "theamirway", title: "TheAmirWay", subtitle: "API ریستفول", category: "blog", tags: ["Django REST", "React"], href: "https://github.com/amirhamidi2001/theamirway", image: img("theamirway", "TheAmirWay") },
];
