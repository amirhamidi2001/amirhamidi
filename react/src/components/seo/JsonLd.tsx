/** تنها محل مجاز dangerouslySetInnerHTML؛ نویسهٔ < برای جلوگیری از شکستن تگ escape می‌شود. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
