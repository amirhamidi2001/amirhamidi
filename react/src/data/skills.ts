import type { Skill, SkillBrief } from "@/types/content";

export const skillBriefs: readonly SkillBrief[] = [
  { icon: "code", title: "Python و Django و FastAPI", description: "ساخت بک‌اندهای مطمئن و APIهای REST با Django، DRF و FastAPI" },
  { icon: "database", title: "پایگاه‌داده", description: "MySQL و MongoDB و مدل‌سازی کارآمد داده" },
  { icon: "git", title: "Git و Linux", description: "کنترل نسخه و مدیریت سرور" },
  { icon: "box", title: "Docker", description: "کانتینرسازی برای استقرار یکنواخت" },
];

export const skills: readonly Skill[] = [
  { id: "python", title: "Python", level: 75, description: "مهندسی پیشرفتهٔ پایتون شامل اسکریپت‌نویسی، اتوماسیون، پردازش داده و منطق اپلیکیشن‌های بک‌اند" },
  { id: "django", title: "Django و DRF", level: 73, description: "توسعهٔ حرفه‌ای با جنگو شامل طراحی API‌ REST، احراز هویت، میدل‌ور و بهینه‌سازی ORM" },
  { id: "realtime", title: "Real-Time و Scraping", level: 62, description: "ساخت سیستم‌های بلادرنگ مبتنی بر WebSocket و پایپ‌لاین‌های مقیاس‌پذیر اسکرپینگ با Django Channels و Scrapy" },
  { id: "sql", title: "SQL", level: 58, description: "طراحی و بهینه‌سازی شمای رابطه‌ای، کوئری‌های پیچیده و مایگریشن با PostgreSQL و MySQL" },
  { id: "nosql", title: "NoSQL", level: 58, description: "استفاده از MongoDB برای ذخیرهٔ اسناد و Redis برای کش پرسرعت، صف و مدیریت نشست" },
  { id: "html-css", title: "HTML و CSS", level: 56, description: "نوشتن مارکاپ معنایی و دسترس‌پذیر با CSS مدرن (Flexbox، Grid، متغیرهای سفارشی و انیمیشن)" },
  { id: "js", title: "JavaScript و AJAX", level: 55, description: "جاوااسکریپت مدرن ES6+ با الگوهای ناهمگام، Fetch API و تعامل پویا با DOM" },
  { id: "react", title: "React و Vite", level: 52, description: "ساخت SPAهای کامپوننت‌محور با React، مدیریت state با هوک‌ها و ابزار سریع Vite" },
  { id: "css-fw", title: "Bootstrap و Tailwind CSS", level: 48, description: "طراحی رابط‌های واکنش‌گرا و موبایل‌محور با سیستم گرید و کامپوننت‌های قابل‌استفادهٔ مجدد" },
  { id: "fastapi", title: "FastAPI", level: 45, description: "ساخت APIهای REST ناهمگام و پرسرعت با FastAPI، اعتبارسنجی Pydantic، تزریق وابستگی و مستندات خودکار OpenAPI" },
  { id: "git", title: "Git", level: 40, description: "مدیریت کدبیس با گردش‌کارهای Git شامل استراتژی شاخه‌بندی، پول‌ریکوئست و توسعهٔ مشارکتی" },
  { id: "docker", title: "Docker و Linux", level: 40, description: "کانتینرسازی اپلیکیشن‌ها با Docker و مدیریت استقرار روی سرورهای لینوکس با شل‌اسکریپت و ابزارهای خط فرمان" },
];
