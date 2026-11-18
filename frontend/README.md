# Amir Hamidi — Portfolio Website (Next.js Implementation)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](../LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, accessible, Persian-language (RTL) personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**, using the App Router. All pages are prerendered at build time, and all content lives in typed data modules inside the repository.

**Live demo:** <https://amirhamidi.vercel.app/>

> This is one of two independent implementations of the same portfolio. The Django version lives in [`../backend`](../backend/README.md). This Next.js project is deployed on its own, has no backend, and **does not communicate with the Django project** in any way. See the [root README](../README.md) for an overview of the repository.

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Application Architecture](#application-architecture)
- [App Router Structure](#app-router-structure)
- [Component Architecture](#component-architecture)
- [Data Organization and Content Management](#data-organization-and-content-management)
- [Styling System and Design Tokens](#styling-system-and-design-tokens)
- [Persian Language and RTL Support](#persian-language-and-rtl-support)
- [SEO Implementation and Metadata](#seo-implementation-and-metadata)
- [Security Headers and Performance](#security-headers-and-performance)
- [Image and Font Optimization](#image-and-font-optimization)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Environment Variables](#environment-variables)
- [Available npm Scripts](#available-npm-scripts)
- [Production Build and Deployment](#production-build-and-deployment)
- [Testing and Code Quality](#testing-and-code-quality)
- [Project Scope](#project-scope)
- [License and Author](#license-and-author)

## Overview

The website presents Amir Hamidi's profile, skills, resume, services and portfolio, and offers a contact page. The interface is written in **Persian** (`fa-IR`) and laid out **right-to-left**; this README is in English for the benefit of developers and recruiters.

| Aspect | Details |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack build) with React 19 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 with CSS-variable design tokens |
| Rendering | Every route is statically prerendered at build time |
| Content | Typed TypeScript modules in `src/data/` (no CMS, no database) |
| Backend | None. There are no API routes, server actions or external service integrations |
| Hosting | Vercel |
| Testing | Playwright end-to-end tests with axe-core accessibility checks |

## Screenshots

<!-- TODO: Add screenshots to docs/screenshots/ (repository root), then uncomment the image lines below and remove the placeholder text. -->

| Home (desktop) | Portfolio (desktop) | Home (mobile) |
| --- | --- | --- |
| <!-- TODO: Next.js home page, desktop --> <!-- ![Next.js home page](../docs/screenshots/nextjs-home-desktop.png) --> _Screenshot placeholder_ | <!-- TODO: Next.js portfolio page with filters, desktop --> <!-- ![Next.js portfolio page](../docs/screenshots/nextjs-portfolio-desktop.png) --> _Screenshot placeholder_ | <!-- TODO: Next.js home page, mobile --> <!-- ![Next.js home page on mobile](../docs/screenshots/nextjs-home-mobile.png) --> _Screenshot placeholder_ |

## Features

- **Six pages** — Home, About, Resume, Services, Portfolio and Contact — plus custom 404, error and global-error pages.
- **Fully Persian, RTL-first interface** with the Vazirmatn font, Persian digits and logical (direction-aware) CSS.
- **Filterable portfolio** with category buttons and an accessible image lightbox built on the native `<dialog>` element.
- **About page** with skill progress bars, animated counters, a journey section and a scroll-snap testimonials carousel.
- **Resume page** with education, skills and experience, and a resume PDF download. `/download-resume` permanently redirects to the PDF.
- **Contact form** with client-side validation that prepares an email in the visitor's mail client via `mailto:` (it does not send or store anything; see [Project Scope](#project-scope)).
- **Motion that respects user preferences** — typed text, reveal-on-scroll and count-up effects are disabled under `prefers-reduced-motion`, and content remains visible without JavaScript.
- **Accessibility features** — skip link, landmark structure, one `h1` per page, ARIA labels, keyboard-friendly navigation and carousel, and automated axe-core checks.
- **SEO** — per-page metadata, canonical URLs, Open Graph and Twitter tags, JSON-LD structured data, generated sitemap and `robots.txt`.
- **Security headers** (including a Content-Security-Policy) and cache headers in production.
- **Graceful image fallbacks** — if an image file is missing at build time, a same-size placeholder is rendered instead of a broken image.
- **Optional Google Analytics**, enabled only for real production deployments with a valid measurement ID.
- **Project check scripts** that enforce RTL-safe classes and token-only colors, and report missing images.

## Technology Stack

Ranges are from [`package.json`](package.json); the "Locked" column shows the version installed from `package-lock.json`.

### Runtime dependencies

| Package | package.json | Locked | Purpose |
| --- | --- | --- | --- |
| [Next.js](https://nextjs.org/) | `^16.4.6` | 16.4.6 | Framework (App Router) |
| [React](https://react.dev/) / React DOM | `^19.3.1` | 19.3.1 | UI library |
| [lucide-react](https://lucide.dev/) | `^1.73.0` | 1.73.0 | Icons |

### Development dependencies

| Package | package.json | Locked | Purpose |
| --- | --- | --- | --- |
| TypeScript | `^6.0.3` | 6.0.3 | Static typing |
| Tailwind CSS | `^4.3.5` | 4.3.5 | Utility-first CSS |
| `@tailwindcss/postcss` | `^4.3.5` | 4.3.5 | Tailwind PostCSS plugin |
| ESLint | `^9.39.5` | 9.39.5 | Linting (flat config) |
| `eslint-config-next` | `^16.4.6` | — | Next.js ESLint rules |
| Prettier | `^3.10.1` | 3.10.1 | Code formatting |
| `@playwright/test` | `^1.63.0` | 1.63.0 | End-to-end tests |
| `@axe-core/playwright` | `^4.14.0` | 4.14.0 | Accessibility testing |
| `@types/node`, `@types/react`, `@types/react-dom` | `^26.6.6`, `^19.3.0`, `^19.3.0` | 26.6.6, 19.3.0, 19.3.0 | Type definitions |

The only runtime dependencies are Next.js, React, React DOM and lucide-react. Fonts and images are self-hosted. The one external script is the optional Google Analytics tag.

## Application Architecture

```text
Build time
  src/data/*.ts, src/config/*.ts, public/ (file checks)
        │
        ▼
  Server Components ──► prerendered HTML + JSON-LD ──► Vercel / `next start`
                                                              │
                                                              ▼
                                      Browser ◄── small client components
                                                  (navigation, filter, form, motion)

  next.config.ts adds security/cache headers and redirects at request time.
```

Key architectural decisions:

- **Static prerendering.** `next build` reports every route as static (`○`). There are no dynamic routes, API routes or server actions.
- **Content as code.** Pages contain layout only; all copy, links and metadata come from typed modules in `src/data/`, with shared types in `src/types/content.ts`.
- **Server Components by default.** Only components that need state, effects or browser APIs are marked `"use client"`.
- **Single sources of truth.** Site settings in `src/config/site.ts`, social links in `src/data/social-links.ts`, per-page SEO text in `src/data/seo.ts`, colors in `src/styles/themes/emerald.css`.
- **Not a static export.** `next.config.ts` does not set `output: "export"`; it relies on Next.js `headers()` and `redirects()`, which need a Next.js-capable host such as Vercel or `next start`.

## App Router Structure

```text
src/app/
├── layout.tsx          # Root layout: <html lang="fa-IR" dir="rtl">, font, header, footer, analytics
├── globals.css         # Tailwind import, theme, tokens, base styles, @theme mapping
├── page.tsx            # /
├── about/page.tsx      # /about
├── resume/page.tsx     # /resume
├── services/page.tsx   # /services
├── portfolio/page.tsx  # /portfolio
├── contact/page.tsx    # /contact
├── not-found.tsx       # 404 page
├── error.tsx           # Route error boundary (client)
├── global-error.tsx    # Root error boundary (client)
├── robots.ts           # /robots.txt
└── sitemap.ts          # /sitemap.xml
```

| Route | Content |
| --- | --- |
| `/` | Hero section: typed-text headline, introduction, call-to-action buttons, social links, profile image |
| `/about` | Introduction, skills grid, journey, quote, fact pills, skill bars, statistics, testimonials carousel |
| `/resume` | Resume download button, education, skill groups, experience |
| `/services` | Services grid |
| `/portfolio` | Category filter, project grid, image lightbox (currently 9 projects) |
| `/contact` | Contact details, social links, `mailto:`-based contact form |
| `/robots.txt`, `/sitemap.xml` | Generated from `src/app/robots.ts` and `src/app/sitemap.ts` |
| `/download-resume` | Permanent (308) redirect to `/files/amir-hamidi-resume.pdf`, defined in `next.config.ts` |

With `trailingSlash: false`, URLs such as `/about/` redirect (308) to `/about`. Every page exports its metadata with `buildMetadata("<page>")` and renders a `PageJsonLd` component.

## Component Architecture

Components live in `src/components/`, grouped by role. Presentational primitives are separate from page-specific sections.

| Folder | Components | Role |
| --- | --- | --- |
| `ui/` | `Button`/`ButtonLink`, `Card`, `Badge`, `Container`, `Section`/`SectionHeading`, `IconBox`, `ProgressBar`, `ImageFrame`, `ImageSlot`, `ExternalLink`, `Ltr`, `SkipLink`, `VisuallyHidden`, `icon-map` | Reusable building blocks |
| `layout/` | `Header`, `Footer`, `DesktopNav`, `MobileNav`, `NavLink`, `SocialLinks`, `ScrollToTop` | Site chrome and navigation |
| `home/` | `Hero` | Home page section |
| `about/` | `Intro`, `SkillsGrid`, `Journey`, `FactPills`, `SkillBars`, `Stats`, `TestimonialsCarousel` | About page sections |
| `resume/` | `ResumeSections`, `ResumeDownload` | Resume page sections |
| `services/` | `ServicesGrid` | Services page |
| `portfolio/` | `PortfolioGrid`, `ImageLightbox` | Filterable grid and lightbox |
| `contact/` | `ContactInfo`, `ContactForm` | Contact page |
| `motion/` | `Reveal`, `TypedText`, `CountUp` | Small animation helpers |
| `seo/` | `Analytics`, `JsonLd`, `PageJsonLd` | Analytics and structured data |
| `icons/` | `BrandIcons` | Social/brand SVG icons |

**Client components** (`"use client"`), 12 in total: `error`, `global-error`, `ContactForm`, `MobileNav`, `NavLink`, `ScrollToTop`, `PortfolioGrid`, `ImageLightbox` (loaded with `next/dynamic`, `ssr: false`), `TestimonialsCarousel`, `Reveal`, `TypedText` and `CountUp`. Everything else renders on the server.

**Reusable patterns:**

- `cn()` (`src/lib/cn.ts`) joins class names.
- `ExternalLink` is the only way external links are rendered: `https://` only, `target="_blank"` with `rel="noopener noreferrer"`, and a screen-reader notice that the link opens in a new tab.
- `Ltr` wraps left-to-right content (emails, phone numbers, technology names) inside Persian text using `<bdi dir="ltr">`.
- `ImageSlot` (server) checks at build time whether an image file exists and passes the result to `ImageFrame`, which renders either `next/image` or a placeholder of the same aspect ratio. Client components receive the same information as an `imageAvailable` prop computed by `withImageAvailability()`.
- `Section`/`SectionHeading` give every page a consistent, labelled landmark structure.

## Data Organization and Content Management

All content is stored in `src/data/` as typed constants. Editing the website means editing these files; no component changes are needed for routine updates.

| File | Content |
| --- | --- |
| `profile.ts` | Name, job title, city, contact details, profile image reference |
| `home.ts` | Hero copy, typed-text items, call-to-action buttons, floating chips |
| `about.ts`, `skills.ts`, `stats.ts`, `testimonials.ts` | About page text, skills, counters, testimonials |
| `resume.ts` | Education, experience and skill groups |
| `services.ts` | Services list |
| `projects.ts` | Portfolio projects and categories |
| `contact.ts` | Contact page text, form labels, validation messages, 404 and error texts |
| `navigation.ts`, `social-links.ts` | Navigation items and social links (with per-location placement) |
| `seo.ts` | Title, description, path and last-modified date for each page |
| `ui-text.ts` | Global UI strings (skip link, labels, footer) |

Type definitions for all of these are in `src/types/content.ts`. Site-wide settings (name, locale, theme, URL, analytics ID, resume path, Open Graph image) are in `src/config/site.ts`.

**Example: adding a portfolio project.** Append an entry to `projects` in `src/data/projects.ts` (the `img()` helper builds the image reference from the slug) and add the image file:

```ts
{
  slug: "my-project",
  title: "My Project",
  subtitle: "Short description",
  category: "web", // "ecommerce" | "blog" | "web" | "api"
  tags: ["Next.js"],
  href: "https://example.com/",
  image: img("my-project", "My Project"), // → /images/portfolio/my-project.webp
},
```

**Files expected in `public/`** (the images are not required to build; see [Image and Font Optimization](#image-and-font-optimization)):

| Path | Referenced by | Recommended size |
| --- | --- | --- |
| `public/images/profile/profile-square.webp` | `data/profile.ts` | 768 × 1024 (3:4) |
| `public/images/portfolio/<slug>.webp` | `data/projects.ts` | 1200 × 800 (3:2) |
| `public/images/testimonials/<name>.webp` | `data/testimonials.ts` | 160 × 160 (1:1) |
| `public/images/general/og-default.png` | `config/site.ts` (`ogImage`) | 1200 × 630 |
| `public/files/amir-hamidi-resume.pdf` | `config/site.ts` (`resumeFile`) | — |

`public/` already contains the Vazirmatn font (`fonts/`) and `ads.txt`, which states that the site shows no ads.

## Styling System and Design Tokens

Styling uses **Tailwind CSS 4** in CSS-first mode: there is no `tailwind.config` file. `postcss.config.mjs` enables the `@tailwindcss/postcss` plugin, and `src/app/globals.css` assembles the system:

```css
@import "tailwindcss";
@import "../styles/themes/emerald.css";   /* colors */
@import "../styles/tokens.css";           /* non-color tokens */
@import "../styles/base.css";             /* base styles, motion, utilities */

@theme inline { --color-accent: var(--accent); /* … */ }
```

The `@theme inline` block maps CSS variables to Tailwind color utilities, so components use semantic classes such as `bg-background`, `text-foreground`, `text-muted`, `border-border`, `bg-accent` and `text-on-accent` instead of raw colors.

**Theme.** Colors are defined only in `src/styles/themes/emerald.css`, scoped to `[data-theme="emerald"]`. The root layout sets `data-theme` from `site.theme`. The current theme is a dark palette (`color-scheme: dark`). `globals.css` imports only the emerald theme, so a new theme file would also have to be imported there.

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `#000900` | Page background |
| `--foreground`, `--heading` | `#eeffee` | Text and headings |
| `--accent` | `#6ee7b7` | Links, buttons, highlights |
| `--on-accent` | `#000900` | Text on accent backgrounds |
| `--surface`, `--surface-deep` | `#059669`, `#064e3b` | Icon boxes, cards |
| `--muted`, `--border` | derived from `--foreground` with `color-mix` | Secondary text, borders |
| `--danger`, `--success`, `--warning` | `#df1529`, `#059652`, `#ffc107` | Status colors |

Non-color tokens in `src/styles/tokens.css`: `--duration-fast` (200 ms), `--duration-base` (600 ms), `--ease`, `--header-height` (4.25 rem) and `--dir-sign`, which flips animation direction in RTL.

`src/styles/base.css` defines base typography (line height 1.9, zero letter spacing), focus rings, smooth scrolling, reveal and progress-bar animations (CSS scroll-driven animation where supported), the testimonial scroll-snap row and the hero glow, plus a `prefers-reduced-motion` override.

**Enforcement.** `npm run check:tokens` fails if a component or page under `src/app` or `src/components` contains a raw hex/`rgb()`/`hsl()` color or a hard-coded Tailwind palette class.

## Persian Language and RTL Support

- **Document language and direction:** `<html lang="fa-IR" dir="rtl">` is set in the root layout; `site.ts` also defines the `fa_IR` Open Graph locale.
- **Logical CSS properties only.** Components use direction-aware utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `border-s-*`, …) rather than physical left/right ones. `npm run check:rtl` fails if physical classes appear (a line can opt out with an `rtl-ok:` comment).
- **Bidirectional text.** The `Ltr` component isolates Latin text, numbers, emails and URLs in Persian sentences. The email input uses `dir="ltr"`.
- **Persian digits.** `toFaDigits()` (`src/lib/format.ts`) converts Latin digits for narrative text (counters, percentages, carousel labels, the footer year); phone numbers, emails and codes are left unchanged.
- **Typography.** Self-hosted Vazirmatn variable font, `letter-spacing: 0` so Persian letters stay joined, `em` is not italicized (the font has no italic style).
- **Animation direction.** `--dir-sign` and the reveal/progress animations mirror in RTL. `TypedText` rewrites the visible substring by Unicode code point rather than splitting letters, so Persian joining is preserved.
- **Input hygiene.** The contact form strips control characters and Unicode bidirectional override characters before building the email.

## SEO Implementation and Metadata

| Feature | Implementation |
| --- | --- |
| Root metadata | `rootMetadata()` in `src/lib/seo/build-metadata.ts`: `metadataBase`, title template `%s \| <site name>` (the Persian site name from `site.ts`), default description, authors, Open Graph/Twitter defaults, optional Google verification |
| Per-page metadata | `buildMetadata(key)` reads title, description and path from `src/data/seo.ts` and sets the canonical URL, Open Graph (`profile` type for About) and Twitter Card |
| Structured data | `PageJsonLd` renders a JSON-LD `@graph` per page (`src/lib/seo/schema.ts`): `Person`, `WebSite`, `ProfilePage`/`WebPage`/`CollectionPage`/`ContactPage`, `BreadcrumbList`, and an `ItemList` of projects on the portfolio page. The serializer escapes `<` |
| Sitemap | `src/app/sitemap.ts` builds entries from `data/seo.ts` using the `lastModified` value of each page (updated manually) |
| robots.txt | `src/app/robots.ts` allows everything and links the sitemap, or disallows everything on non-production Vercel environments |
| Environment awareness | `isIndexable` (`src/config/site.ts`) is `false` when `VERCEL_ENV` is `preview` or `development`; the site then emits `noindex, nofollow`, a disallow-all `robots.txt` and no analytics |
| Open Graph image | `/images/general/og-default.png` (1200 × 630) is added only if the file exists |
| Structured-data hygiene | No phone number, email or birth date is included in JSON-LD |

The site URL used for canonical links, the sitemap, Open Graph and JSON-LD comes from `NEXT_PUBLIC_SITE_URL` (see [Environment Variables](#environment-variables)).

## Security Headers and Performance

### Security headers

Defined in `src/config/security-headers.ts` and applied to all routes through `headers()` in `next.config.ts`. **They are applied only in production builds** (`NODE_ENV === "production"`), because Next.js development mode needs `eval`.

| Header | Value |
| --- | --- |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Content-Security-Policy` | `default-src 'self'`; scripts `'self' 'unsafe-inline'`; styles `'self' 'unsafe-inline'`; images `'self' data: blob:`; fonts `'self'`; `form-action 'self'`; `frame-ancestors 'none'`; `base-uri 'self'`; `object-src 'none'`; `upgrade-insecure-requests`. Google Tag Manager and Analytics origins are added to `script-src`, `img-src` and `connect-src` only when a valid analytics ID is configured |

`'unsafe-inline'` is needed for scripts because Next.js emits inline scripts and a nonce-based CSP would require dynamic rendering (as noted in the source). `poweredByHeader` is disabled, so `X-Powered-By` is not sent.

### Cache headers

| Path | `Cache-Control` | Extra |
| --- | --- | --- |
| `/fonts/*` | `public, max-age=31536000, immutable` | |
| `/images/*` | `public, max-age=86400, stale-while-revalidate=604800` | |
| `/files/*` | `public, max-age=3600, must-revalidate` | `Content-Disposition: attachment; filename="amir-hamidi-resume.pdf"` |

### Performance measures

- All routes are prerendered; no server computation per request.
- `experimental.inlineCss: true` inlines CSS into the HTML to avoid a render-blocking stylesheet request (this is an experimental Next.js option).
- Most components render on the server; the lightbox is lazy-loaded; `prefetch={false}` is set on internal links.
- Self-hosted font with `display: swap` and fallbacks; no third-party fonts.
- Images are served as AVIF/WebP with explicit dimensions to avoid layout shift (see below).
- Motion is progressive: content is visible without JavaScript, elements in the first viewport are never hidden by reveal animations, and progress bars grow with CSS only.
- Icons are imported individually from `lucide-react`.

## Image and Font Optimization

**Images.** All raster images go through `next/image` via `ImageFrame`:

- `next.config.ts` enables `image/avif` and `image/webp` output and defines fine-grained `deviceSizes` (360–1600) and `imageSizes` (96–448) to keep downloaded sizes close to displayed sizes.
- Every image reference carries `width` and `height` (`ImageRef` type), and the frame reserves space with `aspect-ratio`, preventing layout shift.
- Components pass `sizes` hints, and the hero image uses `priority`.
- **Missing files are handled.** `src/lib/images.ts` (server-only) checks `public/` at build time. If a file does not exist, `ImageFrame` renders a neutral placeholder with the same aspect ratio, the Open Graph image is omitted, the JSON-LD `Person` image is omitted, and the resume button is replaced by a hint. The site therefore builds and runs correctly before all images are added.
- `npm run check:images` lists referenced images and files that are not yet in `public/` and warns about wrong aspect ratios or oversized dimensions.

**Fonts.** `src/lib/fonts.ts` uses `next/font/local` to self-host **Vazirmatn** (variable font, weights 100–900, `display: swap`) from `public/fonts/Vazirmatn-Variable.woff2`, exposed as the `--font-vazirmatn` variable with `system-ui`, `Tahoma` and `sans-serif` fallbacks. The font is distributed under the SIL Open Font License (`public/fonts/OFL.txt`).

## Prerequisites

- **Node.js 20.9 or newer** (the minimum required by Next.js 16). The project was verified with Node.js 22.
- **npm** (a `package-lock.json` is included).
- **Git**.

The repository does not specify an `engines` field or a `.nvmrc`.

## Local Development Setup

Run all commands from the `frontend/` directory.

```bash
git clone https://github.com/Amirhamidi2001/amirhamidi.git
cd amirhamidi/frontend

npm ci                         # install exact versions from package-lock.json
cp .env.example .env.local     # optional (Windows: copy .env.example .env.local)
npm run dev
```

Open <http://localhost:3000>.

> **Analytics warning.** If `NEXT_PUBLIC_GA_ID` is not set, the code falls back to the author's Google Analytics measurement ID, and analytics are active whenever `VERCEL_ENV` is not `preview` or `development` (which includes local runs). To avoid sending data to that property when developing or forking, add an empty `NEXT_PUBLIC_GA_ID=` to `.env.local`.

Security headers are not applied by `npm run dev`; use a production build to see them.

## Environment Variables

The project has no secrets. Variables prefixed with `NEXT_PUBLIC_` are inlined into the client bundle at **build time**, so changing them requires a rebuild. Local values go in `.env.local`; `.gitignore` excludes all `.env*` files except `.env.example`.

| Variable | In `.env.example` | Default | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://amirhamidi.vercel.app` | Public site URL used for `metadataBase`, canonical links, sitemap, `robots.txt`, Open Graph and JSON-LD. A trailing slash is removed. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Yes (commented out) | unset | Optional Google Search Console verification token. |
| `NEXT_PUBLIC_GA_ID` | No | the author's measurement ID | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). Set it to an empty string to disable analytics. Invalid values (not matching `G-[A-Z0-9]+`) also disable it. |
| `VERCEL_ENV` | No | set by Vercel | `production`, `preview` or `development`. For `preview` and `development`, the site is `noindex` and analytics are off. Do not set manually. |

Example `.env.local` for development or a fork:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
```

## Available npm Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `npm run dev` | `next dev` | Development server with hot reload |
| `npm run build` | `next build` | Production build (prerenders all routes) |
| `npm run start` | `next start` | Serve the production build |
| `npm run lint` | `eslint .` | Lint the project |
| `npm run typecheck` | `tsc --noEmit` | Type-check without emitting files |
| `npm run check:images` | `node scripts/check-images.mjs` | Report missing images/files and bad image dimensions |
| `npm run check:rtl` | `node scripts/check-rtl.mjs` | Fail on physical left/right CSS classes |
| `npm run check:tokens` | `node scripts/check-tokens.mjs` | Fail on raw colors in components and pages |
| `npm run test:e2e` | `playwright test` | Run Playwright end-to-end tests |

### The `scripts/` directory

Small dependency-free Node scripts (ES modules). Their console output is written in Persian.

| File | Purpose |
| --- | --- |
| `walk.mjs` | Shared helper that recursively lists files with given extensions. |
| `check-images.mjs` | Scans `src/data/` for referenced `/images/...` and `/files/...` paths, lists those missing from `public/` (a warning; exit code stays 0), and checks that existing PNG/WebP/JPEG images have the expected aspect ratio (portfolio 3:2, profile 3:4, testimonials 1:1, Open Graph 1200:630) and are not larger than about twice the recommended width. |
| `check-rtl.mjs` | Scans `src/` for physical direction classes (`ml-`, `pr-`, `text-left`, `rounded-l`, …); exits with code 1 if any are found. A line containing `rtl-ok:` is ignored. |
| `check-tokens.mjs` | Scans `src/components` and `src/app` for raw hex/`rgb()`/`hsl()` colors and hard-coded Tailwind palette classes; exits with code 1 if any are found. |

## Production Build and Deployment

```bash
npm run build
npm run start      # serves on http://localhost:3000
```

A sensible pre-deployment check:

```bash
npm run lint && npm run typecheck && npm run check:rtl && npm run check:tokens && npm run build
```

**Deployment target: Vercel.** The live site is hosted at <https://amirhamidi.vercel.app/>, and the code is Vercel-aware (`VERCEL_ENV` handling, `.vercel` in `.gitignore`). If you deploy the repository from its root, configure the project as follows (general guidance, not a copy of the live project settings):

1. Import the repository in Vercel and set the **Root Directory** to `frontend`. The Next.js framework preset is detected automatically.
2. Add environment variables as needed: `NEXT_PUBLIC_SITE_URL` (your production URL), optionally `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. Deploy. Production deployments are indexable; preview deployments are automatically `noindex` with analytics disabled.

The project can also be run on any host that can run `next start` (Node.js). It is not configured as a static export, so plain static hosting is not supported without changing `next.config.ts` (the `headers()` and `redirects()` rules would not be applied).

This deployment is completely independent of the Django project in [`../backend`](../backend/README.md).

## Testing and Code Quality

### End-to-end tests (Playwright)

Configuration is in [`playwright.config.ts`](playwright.config.ts); tests are in `tests/e2e/site.spec.ts`.

- **Server:** Playwright starts `npx next start -p 3100` and waits for `http://localhost:3100` (it reuses a running server if one exists), so **run `npm run build` first**. Running against the production build means security headers are tested too.
- **Projects:** `mobile` (390 × 844) and `desktop` (1440 × 900), both with the `fa-IR` locale. Each test runs in both, giving 22 test executions.
- **External network:** requests to Google Tag Manager/Analytics are stubbed with empty responses; a CSP violation would still surface as a console error.

| Test | Checks |
| --- | --- |
| Each of the six routes | HTTP 200, `lang="fa-IR"` and `dir="rtl"`, exactly one `h1`, one canonical link, one JSON-LD script, no horizontal scrolling, no serious or critical axe-core violations, no console errors or warnings |
| 404 page | Status 404 and `noindex` robots meta |
| Portfolio filter | The grid shows 9 items, and the e-commerce filter reduces it to 3 |
| Contact form | Submitting an empty form shows validation errors and no "sent" claim |
| Redirects | `/download-resume` → `/files/amir-hamidi-resume.pdf` (308); `/about/` → `/about` (308) |
| Security headers | CSP, X-Frame-Options, X-Content-Type-Options, HSTS and Referrer-Policy are present |

```bash
npx playwright install chromium   # first run only: download the browser
npm run build
npm run test:e2e
```

### Static analysis and conventions

- **TypeScript:** strict mode, `moduleResolution: "bundler"`, path alias `@/*` → `./src/*`. `tests/` and `playwright.config.ts` are excluded from `tsc`. Run `npm run typecheck`.
- **ESLint 9** (flat config in `eslint.config.mjs`) with `eslint-config-next` core-web-vitals and TypeScript presets; `scripts/` and `tests/` are ignored. Run `npm run lint`.
- **Prettier 3** is configured in `.prettierrc` (print width 100, double quotes, trailing commas). There is no npm script for it; run it with `npx prettier --check <path>` if desired.
- **Project-specific checks:** `check:rtl`, `check:tokens` and `check:images` (see above).

## Project Scope

To avoid ambiguity about what this project contains:

- It is a **standalone Next.js website**. It does not call the Django project, and the Django project does not call it. Mentions of Django in the portfolio text are content only.
- There is **no backend, API route, database or server action**, and **no email or form-submission service**.
- The **contact form does not send or store messages**. It validates the input, then opens the visitor's email client with a prepared message to the address in `src/data/profile.ts`; the page states this explicitly to the visitor.
- The only external service is the optional Google Analytics tag.

## License and Author

This project is released under the [MIT License](../LICENSE). The Vazirmatn font is licensed under the SIL Open Font License (see `public/fonts/OFL.txt`).

**Amir Hamidi** — Full-Stack Web Developer
GitHub: [@Amirhamidi2001](https://github.com/Amirhamidi2001) · Portfolio: <https://amirhamidi.vercel.app/>

See also: [Root README](../README.md) · [Django implementation](../backend/README.md)
