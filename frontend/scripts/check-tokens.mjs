// رنگ خام (hex/rgb/hsl) در کامپوننت‌ها و صفحات ممنوع؛ رنگ‌ها فقط در src/styles/themes.
import { readFileSync } from "node:fs";
import { walk } from "./walk.mjs";
const raw = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\b(?:bg|text|border|fill|stroke|ring|from|to|via)-(?:red|green|emerald|blue|slate|gray|zinc|neutral|stone|white|black)(?:-\d+)?\b/;
let n = 0;
for (const f of [...walk("src/components", [".tsx"]), ...walk("src/app", [".tsx"])]) {
  readFileSync(f, "utf8").split("\n").forEach((line, i) => {
    if (raw.test(line)) { n++; console.log(`${f}:${i + 1}  ${line.trim().slice(0, 90)}`); }
  });
}
console.log(n ? `✘ ${n} رنگ خام` : "✔ رنگ خام در کامپوننت‌ها یافت نشد");
process.exit(n ? 1 : 0);
