// کلاس‌های فیزیکی ممنوع (باید منطقی باشند). استثنا: کامنت rtl-ok:
import { readFileSync } from "node:fs";
import { walk } from "./walk.mjs";
const bad = /(?<![\w-])(?:-?(?:ml|mr|pl|pr)-|(?:left|right)-(?:\d|\[|px|full|auto)|text-(?:left|right)\b|rounded-(?:l|r|tl|tr|bl|br)(?:-|\b)|border-(?:l|r)(?:-|\b)|float-(?:left|right)|space-x-reverse)/g;
let n = 0;
for (const f of walk("src", [".tsx", ".ts"])) {
  readFileSync(f, "utf8").split("\n").forEach((line, i) => {
    if (line.includes("rtl-ok:")) return;
    const m = line.match(bad);
    if (m) { n++; console.log(`${f}:${i + 1}  ${m.join(", ")}`); }
  });
}
console.log(n ? `✘ ${n} مورد کلاس فیزیکی` : "✔ کلاس فیزیکی (چپ/راست) یافت نشد");
process.exit(n ? 1 : 0);
