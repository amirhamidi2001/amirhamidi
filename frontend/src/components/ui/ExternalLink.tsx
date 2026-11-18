import type { ReactNode } from "react";

/** تنها راه مجاز لینک خارجی: فقط https، همیشه با rel امن و اعلان برای screen-reader. */
export function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  if (!href.startsWith("https://")) return <span className={className}>{children}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
      {children}
      {label ? null : <span className="sr-only"> (در تب جدید باز می‌شود)</span>}
    </a>
  );
}
