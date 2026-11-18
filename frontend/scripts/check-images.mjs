// فهرست تصاویر/فایل‌های مرجع‌شده در data که هنوز در public نیستند (هشدار، نه خطا).
import { existsSync, readFileSync } from "node:fs";
import { walk } from "./walk.mjs";
const found = new Set();
for (const f of walk("src/data", [".ts"])) {
  const s = readFileSync(f, "utf8");
  for (const m of s.matchAll(/["'`](\/(?:images|files)\/[^"'`$]+)["'`]/g)) found.add(m[1]);
  for (const m of s.matchAll(/`(\/images\/portfolio\/)\$\{slug\}\.webp`/g)) found.add(m[1] + "<slug>.webp");
}
for (const m of readFileSync("src/data/projects.ts", "utf8").matchAll(/img\("([a-z0-9-]+)"/g)) found.add(`/images/portfolio/${m[1]}.webp`);
found.add("/files/amir-hamidi-resume.pdf");
found.add("/images/general/og-default.png");
const missing = [...found].filter((p) => !p.includes("<slug>") && !existsSync("public" + p));
console.log(`مفقود: ${missing.length} از ${found.size}`);
missing.forEach((p) => console.log("  - public" + p));

// --- بررسی ابعاد و نسبت تصویر (برای تست‌های Responsive Image و Aspect Ratio) ---
function size(buf) {
  if (buf.toString("ascii", 1, 4) === "PNG") return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const t = buf.toString("ascii", 12, 16);
    if (t === "VP8X") return [1 + buf.readUIntLE(24, 3), 1 + buf.readUIntLE(27, 3)];
    if (t === "VP8L") { const b = buf.readUInt32LE(21); return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1]; }
    if (t === "VP8 ") return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
}
const want = [
  [/\/images\/portfolio\//, 3 / 2, "۳:۲ (مثلاً ۱۲۰۰×۸۰۰)", 1200],
  [/\/images\/profile\//, 3 / 4, "۳:۴ (مثلاً ۷۶۸×۱۰۲۴)", 768],
  [/\/images\/testimonials\//, 1, "۱:۱ (مثلاً ۱۶۰×۱۶۰)", 160],
  [/og-default/, 1200 / 630, "۱۲۰۰×۶۳۰", 1200],
];
let bad = 0;
for (const p of found) {
  if (!existsSync("public" + p) || p.endsWith(".pdf")) continue;
  const dim = size(readFileSync("public" + p));
  const rule = want.find(([re]) => re.test(p));
  if (!dim || !rule) continue;
  const [w, h] = dim;
  const off = Math.abs(w / h / rule[1] - 1) > 0.01;
  const huge = w > rule[3] * 2;
  if (off || huge) { bad++; console.log(`⚠ ${p}: ${w}×${h} — ${off ? "نسبت باید " + rule[2] : "بیش از حد بزرگ است؛ حداکثر حدود " + rule[3] * 2 + "px عرض"}`); }
}
console.log(bad ? `${bad} تصویر با ابعاد نامناسب` : "✔ ابعاد و نسبت تصاویر موجود مناسب است");
