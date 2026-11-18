import type { ReactNode } from "react";

/** محتوای چپ‌به‌راست (تلفن، ایمیل، URL، نام فناوری، تاریخ میلادی) داخل متن فارسی. */
export function Ltr({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <bdi dir="ltr" className={className}>
      {children}
    </bdi>
  );
}
