import localFont from "next/font/local";

/** Vazirmatn (لایسنس OFL) — فایل variable محلی؛ وزن‌های ۴۰۰ تا ۷۰۰ استفاده می‌شود. */
export const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-vazirmatn",
  fallback: ["system-ui", "Tahoma", "sans-serif"],
});
