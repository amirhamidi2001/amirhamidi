import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// شبکهٔ خارجی را در تست خاموش می‌کنیم (gtag با پاسخ خالی)؛ خطای CSP همچنان آشکار می‌شود.
test.beforeEach(async ({ page }) => {
  await page.route(/googletagmanager\.com|google-analytics\.com/, (r) => r.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
});

const routes = ["/", "/about", "/resume", "/services", "/portfolio", "/contact"];

for (const path of routes) {
  test(`صفحهٔ ${path}: lang/dir، یک H1، متا، بدون اسکرول افقی، axe`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => ["error", "warning"].includes(m.type()) && errors.push(m.text()));
    const res = await page.goto(path, { waitUntil: "networkidle" });
    expect(res?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "fa-IR");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    // انیمیشن‌های ورودی را کامل کن تا axe حالت میانی (opacity) را نسنجد
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 900));
    });
    const axe = await new AxeBuilder({ page }).analyze();
    const serious = axe.violations.filter((v) => ["serious", "critical"].includes(v.impact ?? ""));
    expect(serious.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("404 با وضعیت درست و noindex", async ({ page }) => {
  const res = await page.goto("/nope");
  expect(res?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);
});

test("فیلتر نمونه‌کارها", async ({ page }) => {
  await page.goto("/portfolio", { waitUntil: "networkidle" });
  const items = page.locator("main ul.grid > li");
  await expect(items).toHaveCount(9);
  await page.getByRole("button", { name: "فروشگاهی", exact: true }).click();
  await expect(items).toHaveCount(3);
});

test("فرم تماس: اعتبارسنجی و بدون ادعای ارسال", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "آماده‌سازی ایمیل" }).click();
  await expect(page.locator("#cf-name-err")).toBeVisible();
  await expect(page.getByText("ارسال شد")).toHaveCount(0);
});

test("ریدایرکت رزومه و آدرس‌های دارای اسلش", async ({ request }) => {
  const r = await request.get("/download-resume", { maxRedirects: 0 });
  expect(r.status()).toBe(308);
  expect(r.headers()["location"]).toBe("/files/amir-hamidi-resume.pdf");
  const s = await request.get("/about/", { maxRedirects: 0 });
  expect(s.headers()["location"]).toBe("/about");
});

test("هدرهای امنیتی", async ({ request }) => {
  const h = (await request.get("/")).headers();
  for (const k of ["content-security-policy", "x-frame-options", "x-content-type-options", "strict-transport-security", "referrer-policy"]) {
    expect(h[k], k).toBeTruthy();
  }
});
