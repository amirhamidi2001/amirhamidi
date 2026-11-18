import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
export function walk(dir, exts) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p, exts) : exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}
