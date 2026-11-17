import { toFaDigits } from "@/lib/format";

/** نوار پیشرفت دسترس‌پذیر؛ مقدار نهایی بدون JS دیده می‌شود، رشد با اسکرول فقط با CSS. */
export function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="bg-border h-2 flex-1 overflow-hidden rounded-full"
      >
        <div className="progress-fill bg-accent h-full rounded-full" style={{ inlineSize: `${value}%` }} />
      </div>
      <span aria-hidden="true" className="text-muted w-10 text-sm tabular-nums">
        {toFaDigits(value)}٪
      </span>
    </div>
  );
}
