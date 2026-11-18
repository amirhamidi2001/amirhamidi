import type { NextConfig } from "next";
import { cacheHeaders, securityHeaders } from "./src/config/security-headers";

const resumePath = "/files/amir-hamidi-resume.pdf";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  // CSS درون HTML (بدون stylesheet بلاک‌کنندهٔ رندر و یک درخواست کمتر)
  experimental: { inlineCss: true },
  images: {
    formats: ["image/avif", "image/webp"],
    // پله‌های ریزتر ⇒ کمترین اختلاف بین اندازهٔ دانلودی و اندازهٔ نمایش
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1600],
    imageSizes: [96, 128, 160, 256, 384, 448],
  },
  async redirects() {
    return [
      { source: "/download-resume", destination: resumePath, permanent: true },
      { source: "/download-resume/", destination: resumePath, permanent: true },
    ];
  },
  async headers() {
    // فقط در Production (در dev، Next به eval نیاز دارد).
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: securityHeaders() }, ...cacheHeaders];
  },
};

export default config;
