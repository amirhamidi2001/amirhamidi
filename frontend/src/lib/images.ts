import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/** آیا فایل تصویر (مثلاً /images/profile/a.webp) در public وجود دارد؟ (زمان بیلد) */
export const fileExists = (src: string) => imageExists(src);
export function imageExists(src: string): boolean {
  if (!src.startsWith("/") || src.includes("..")) return false;
  return existsSync(path.join(process.cwd(), "public", src));
}

export function withImageAvailability<T extends { image: { src: string } }>(items: readonly T[]) {
  return items.map((item) => ({ ...item, imageAvailable: imageExists(item.image.src) }));
}
