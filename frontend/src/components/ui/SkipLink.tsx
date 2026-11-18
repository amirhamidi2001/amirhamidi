export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="bg-accent text-on-accent sr-only z-[100] rounded-full px-4 py-2 font-medium focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
    >
      {label}
    </a>
  );
}
