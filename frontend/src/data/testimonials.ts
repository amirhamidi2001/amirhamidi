import type { Testimonial } from "@/types/content";

export const testimonials: readonly Testimonial[] = [
  {
    id: "salek",
    name: "محمدرضا سالک",
    role: "مدیر پروژه",
    quote:
      "امیر توسعه‌دهنده‌ای بسیار با انگیزه است که کار باکیفیت را سر موعد تحویل می‌دهد. مهارتش در Django قوی است و در طول پروژه شفاف و روشن ارتباط برقرار می‌کند.",
    rating: 5,
    image: { src: "/images/testimonials/mohamadreza.webp", alt: "تصویر محمدرضا سالک", width: 160, height: 160 },
  },
  {
    id: "ghobadi",
    name: "ساسان قبادی",
    role: "بنیان‌گذار استارتاپ",
    quote:
      "مسئله‌حل‌کنِ فوق‌العاده‌ای است! او به ما کمک کرد یک API فروشگاهی سفارشی با Django REST Framework بسازیم. بسیار حرفه‌ای است و همکاری با او راحت.",
    rating: 5,
    image: { src: "/images/testimonials/sasan.webp", alt: "تصویر ساسان قبادی", width: 160, height: 160 },
  },
];
