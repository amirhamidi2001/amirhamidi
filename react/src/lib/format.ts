const FA = "۰۱۲۳۴۵۶۷۸۹";
/** تبدیل ارقام لاتین به فارسی (فقط برای متن روایی، نه تلفن/ایمیل/کد). */
export const toFaDigits = (v: string | number) => String(v).replace(/\d/g, (d) => FA[Number(d)]);
