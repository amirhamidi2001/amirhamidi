"use client"; // اعتبارسنجی و ساخت mailto
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactPage } from "@/data/contact";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

type Field = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<Field, string>>;

// حذف نویسه‌های کنترلی و کنترل جهت (RTL/LTR override) از ورودی
const clean = (s: string, multiline = false) =>
  s.replace(multiline ? /[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g : /[\u0000-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g, " ").trim();

const emailRe = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const inRange = (v: string, min: number, max: number) => v.length >= min && v.length <= max;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = {
      name: clean(String(data.get("name") ?? "")),
      email: clean(String(data.get("email") ?? "")),
      subject: clean(String(data.get("subject") ?? "")),
      message: clean(String(data.get("message") ?? ""), true),
    };
    const next: Errors = {};
    if (!inRange(v.name, 2, 100)) next.name = contactPage.errors.name;
    if (!emailRe.test(v.email) || v.email.length > 254) next.email = contactPage.errors.email;
    if (!inRange(v.subject, 3, 150)) next.subject = contactPage.errors.subject;
    if (!inRange(v.message, 10, 2000)) next.message = contactPage.errors.message;
    setErrors(next);
    setOpened(false);
    if (Object.keys(next).length) return;

    const body = `نام: ${v.name}\nایمیل: ${v.email}\n\n${v.message}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setOpened(true);
  }

  const input = "bg-background border-border focus-visible:border-accent w-full rounded-xl border px-4 py-3";
  const f = (name: Field, label: string, props: { type?: string; autoComplete?: string; rows?: number; maxLength: number }) => {
    const id = `cf-${name}`;
    const err = errors[name];
    const common = {
      id,
      name,
      required: true,
      maxLength: props.maxLength,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": err ? `${id}-err` : undefined,
      className: cn(input, err && "border-danger"),
    };
    return (
      <div>
        <label htmlFor={id} className="mb-1 block font-medium">
          {label}
        </label>
        {name === "message" ? (
          <textarea {...common} rows={props.rows ?? 6} />
        ) : (
          <input
            {...common}
            type={props.type ?? "text"}
            autoComplete={props.autoComplete}
            dir={name === "email" ? "ltr" : undefined}
            className={cn(common.className, name === "email" && "text-start")}
          />
        )}
        {err ? (
          <p id={`${id}-err`} role="alert" className="text-danger mt-1 text-sm">
            {err}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {f("name", contactPage.fields.name, { autoComplete: "name", maxLength: 100 })}
        {f("email", contactPage.fields.email, { type: "email", autoComplete: "email", maxLength: 254 })}
      </div>
      {f("subject", contactPage.fields.subject, { maxLength: 150 })}
      {f("message", contactPage.fields.message, { rows: 6, maxLength: 2000 })}
      <p className="text-muted text-sm">{contactPage.honestNote}</p>
      <Button type="submit">{contactPage.submit}</Button>
      <p role="status" className={cn("text-sm", opened ? "text-accent" : "sr-only")}>
        {opened ? contactPage.opened : ""}
      </p>
    </form>
  );
}
