/** هدرهای امنیتی و Cache. تنها منبع: next.config.ts → headers() (فقط Production). */
import { site } from "./site";

const ga = /^G-[A-Z0-9]+$/.test(site.gaId);
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${ga ? " https://www.googletagmanager.com" : ""}`, // اسکریپت‌های inline خودِ Next (CSP مبتنی بر nonce نیازمند رندر پویاست)
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${ga ? " https://www.google-analytics.com https://*.googletagmanager.com" : ""}`,
  "font-src 'self'",
  `connect-src 'self'${ga ? " https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com" : ""}`,
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

export function securityHeaders() {
  return [
    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Content-Security-Policy", value: csp },
  ];
}

export const cacheHeaders = [
  { source: "/fonts/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
  {
    source: "/images/:path*",
    headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
  },
  {
    source: "/files/:path*",
    headers: [
      { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
      { key: "Content-Disposition", value: 'attachment; filename="amir-hamidi-resume.pdf"' },
    ],
  },
];
