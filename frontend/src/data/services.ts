import type { Service } from "@/types/content";

export const servicesPage = {
  title: "خدمات",
  description:
    "آنچه به‌عنوان برنامه‌نویس و توسعه‌دهندهٔ وب ارائه می‌دهم؛ از اپلیکیشن‌های وب سفارشی تا همکاری فریلنسری و توسعهٔ API.",
} as const;

export const services: readonly Service[] = [
  { id: "web", icon: "code", title: "توسعهٔ وب", description: "طراحی و توسعهٔ وب‌سایت سفارشی با Django، HTML/CSS و Bootstrap؛ رابط‌های واکنش‌گرا و کاربرپسند، متناسب با نیاز شما." },
  { id: "programming", icon: "puzzle", title: "راهکارهای برنامه‌نویسی", description: "اسکریپت‌نویسی پایتون، اتوماسیون، اشکال‌زدایی و بهینه‌سازی کد؛ تبدیل مسئله‌های پیچیده به کدی تمیز و کارآمد." },
  { id: "freelance", icon: "users", title: "فریلنس و همکاری", description: "همکاری دورکار در پروژه‌ها با تعهد کامل به زمان‌بندی و کیفیت؛ آمادگی انعطاف‌پذیر برای همکاری کوتاه‌مدت یا بلندمدت." },
  { id: "database", icon: "server", title: "طراحی پایگاه‌داده", description: "مدل‌سازی کارآمد داده با MySQL و MongoDB؛ بهینه‌سازی کوئری و پردازش داده برای اپلیکیشن‌های مقیاس‌پذیر." },
  { id: "api", icon: "cloud-upload", title: "توسعهٔ API", description: "ساخت APIهای RESTful با Django REST Framework و APIهای ناهمگام و پرسرعت با FastAPI." },
  { id: "deploy", icon: "terminal", title: "استقرار و لینوکس", description: "راه‌اندازی سرور، استقرار روی پلتفرم‌هایی مانند PythonAnywhere و کانتینرسازی پایه با Docker." },
];
