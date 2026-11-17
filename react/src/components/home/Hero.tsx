import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Icon } from "@/components/ui/icon-map";
import { TypedText } from "@/components/motion/TypedText";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { home } from "@/data/home";
import { profile } from "@/data/profile";

// زیگزاگ متقارن: بالا و پایین روی لبهٔ شروع، وسط روی لبهٔ پایان؛ همه هم‌اندازه و با فاصلهٔ برابر از لبه
const chipPos = ["-start-3 top-[12%] sm:-start-5", "-end-3 top-1/2 -translate-y-1/2 sm:-end-5", "-start-3 bottom-[12%] sm:-start-5"] as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[calc(100dvh-var(--header-height))] items-center overflow-hidden py-10 md:py-16">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="text-4xl leading-tight font-bold md:text-5xl">
            {home.greeting} <span className="text-accent whitespace-nowrap">{home.name}</span> {home.greetingEnd}
          </h1>
          <p className="text-accent mt-4 text-xl font-medium md:text-2xl">
            <TypedText items={home.typedItems} />
          </p>
          <p className="text-muted mt-6 max-w-[62ch] text-base leading-loose md:text-lg">{home.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={home.primaryCta.href}>{home.primaryCta.label}</ButtonLink>
            <ButtonLink href={home.secondaryCta.href} variant="outline">
              {home.secondaryCta.label}
            </ButtonLink>
          </div>
          <SocialLinks placement="hero" className="mt-6 -ms-3" />
        </div>

        <div className="order-first mx-auto w-full max-w-xs sm:max-w-sm lg:order-last lg:col-span-5 lg:mx-0 lg:max-w-md lg:justify-self-end">
          <div className="relative">
            <ImageSlot
              image={profile.image}
              priority
              sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 320px"
              icon="user"
              className="border-accent/40 rounded-3xl border-2"
            />
            <ul aria-hidden="true">
              {home.floating.map((chip, i) => (
                <li
                  key={chip.label}
                  className={`bg-background/85 border-border float-slow absolute flex min-w-28 items-center justify-center gap-2 rounded-full border px-4 py-2 backdrop-blur ${chipPos[i]}`}
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <Icon name={chip.icon} size={18} className="text-accent" />
                  <span className="text-sm">{chip.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
