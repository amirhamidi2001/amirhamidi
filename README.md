# Amir Hamidi — Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Django 5.2](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)](backend/README.md)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](frontend/README.md)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](frontend/README.md)

The personal developer portfolio of **Amir Hamidi**, Full-Stack Web Developer, built twice: once as a server-rendered **Django** website and once as a modern **Next.js** website. Both present the same portfolio (profile, skills, resume, services, projects and contact page), and each one is a complete, independently deployed project.

## Live Demos

| Implementation | Stack | Live site |
| --- | --- | --- |
| **Django** (`backend/`) | Python, Django, Bootstrap, SQLite | <https://amirhamidi.pythonanywhere.com/> |
| **Next.js** (`frontend/`) | Next.js 16, React 19, TypeScript, Tailwind CSS 4 | <https://amirhamidi.vercel.app/> |

## Two Independent Implementations

The repository is **not** a typical backend-plus-frontend application. The two folders are separate websites with their own codebases, dependencies and deployments. They do not call each other, share a database, or share any code.

| | `backend/` — Django | `frontend/` — Next.js |
| --- | --- | --- |
| Approach | Server-rendered HTML templates | Statically prerendered React (App Router) |
| Language | Python 3 | TypeScript |
| UI language | English | Persian (RTL) |
| Styling | Bootstrap 5 template (FolioOne) | Tailwind CSS 4 with design tokens |
| Content source | Written in templates | Typed data modules (`src/data/`) |
| Data storage | SQLite (contact form submissions) | None |
| Contact form | Saves messages to the database, managed in Django admin | Opens the visitor's email client (`mailto:`) |
| Hosting | PythonAnywhere | Vercel |
| Documentation | [`backend/README.md`](backend/README.md) | [`frontend/README.md`](frontend/README.md) |

## Technology Stack

| Layer | Django implementation | Next.js implementation |
| --- | --- | --- |
| Framework | Django 5.2 | Next.js 16 (App Router), React 19 |
| Language | Python | TypeScript 6 |
| Styling | Bootstrap 5.3, custom CSS | Tailwind CSS 4 |
| Database | SQLite | — |
| Notable libraries | django-robots, python-decouple, AOS, Swiper, Isotope, GLightbox, Typed.js | lucide-react |
| Testing and quality | flake8 configuration | Playwright, axe-core, ESLint, project check scripts |
| Deployment | PythonAnywhere (WSGI) | Vercel |

Exact versions are listed in each project's README.

## Repository Structure

```text
amirhamidi/
├── README.md                  # This file
├── LICENSE                    # MIT License
│
├── backend/                   # Django implementation
│   ├── README.md
│   ├── manage.py
│   ├── requirements.txt
│   ├── core/                  # Project settings, root URLs, WSGI/ASGI
│   ├── website/               # Application: views, models, forms, admin, sitemap
│   ├── templates/website/     # HTML templates
│   ├── static/assets/         # CSS, JS, vendor libraries, images
│   └── media/                 # Media files (resume PDF)
│
└── frontend/                  # Next.js implementation
    ├── README.md
    ├── package.json
    ├── next.config.ts
    ├── src/
    │   ├── app/               # App Router routes, layout, sitemap, robots
    │   ├── components/        # UI, layout, page sections, motion, SEO
    │   ├── config/            # Site settings, security headers
    │   ├── data/              # Typed content modules
    │   ├── lib/               # Helpers (fonts, images, SEO)
    │   ├── styles/            # Theme and design tokens
    │   └── types/             # Content types
    ├── public/                # Fonts, images, downloadable files
    ├── scripts/               # Project check scripts
    └── tests/e2e/             # Playwright tests
```

## The Django Project

[`backend/`](backend/README.md) is a server-rendered portfolio built with Django 5.2. Class-based views render six pages from Django templates, and a Bootstrap-based front end provides filtering, animations and a lightbox. The contact form stores submissions in SQLite, and they are managed in the Django admin. SEO support includes a sitemap, a database-driven `robots.txt` and structured data on the home page. Security settings cover HTTPS, HSTS and secure cookies.

**Read more:** [`backend/README.md`](backend/README.md)

## The Next.js Project

[`frontend/`](frontend/README.md) is a Persian-language, right-to-left portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Every route is prerendered, content lives in typed data modules, and the design uses CSS-variable tokens. It includes per-page metadata and JSON-LD, a Content-Security-Policy and other security headers, optimized images and fonts, and Playwright end-to-end tests with accessibility checks. It has no backend and no API.

**Read more:** [`frontend/README.md`](frontend/README.md)

## Screenshots

<!-- TODO: Add screenshots to docs/screenshots/, then uncomment the image lines below and remove the placeholder text. -->

| | Django | Next.js |
| --- | --- | --- |
| **Desktop** | <!-- TODO: Django home page, desktop --> <!-- ![Django home page](docs/screenshots/django-home-desktop.png) --> _Screenshot placeholder_ | <!-- TODO: Next.js home page, desktop --> <!-- ![Next.js home page](docs/screenshots/nextjs-home-desktop.png) --> _Screenshot placeholder_ |
| **Mobile** | <!-- TODO: Django home page, mobile --> <!-- ![Django home page on mobile](docs/screenshots/django-home-mobile.png) --> _Screenshot placeholder_ | <!-- TODO: Next.js home page, mobile --> <!-- ![Next.js home page on mobile](docs/screenshots/nextjs-home-mobile.png) --> _Screenshot placeholder_ |

## Installation Overview

Each project is set up on its own. The commands below are a quick start; the project READMEs contain the complete instructions, including environment variables and troubleshooting notes.

```bash
git clone https://github.com/Amirhamidi2001/amirhamidi.git
cd amirhamidi
```

**Django** (requires Python 3.10+). The settings require `SECRET_KEY`, `ALLOWED_HOSTS` and `ADMIN_URL` to be defined, and they force HTTPS, so a local override is needed for plain-HTTP development. Both points are covered in the [backend README](backend/README.md#local-development-setup).

```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
```

**Next.js** (requires Node.js 20.9+). No environment variables are required to start.

```bash
cd frontend
npm ci
npm run dev
```

| Project | Detailed setup |
| --- | --- |
| Django | [Local development setup](backend/README.md#local-development-setup) · [Environment variables](backend/README.md#environment-variables) |
| Next.js | [Local development setup](frontend/README.md#local-development-setup) · [Environment variables](frontend/README.md#environment-variables) · [npm scripts](frontend/README.md#available-npm-scripts) |

## Deployment

| Project | Platform | Details |
| --- | --- | --- |
| Django | [PythonAnywhere](https://www.pythonanywhere.com/) (WSGI) | [Deployment guide](backend/README.md#production-deployment-on-pythonanywhere) |
| Next.js | [Vercel](https://vercel.com/) | [Build and deployment](frontend/README.md#production-build-and-deployment) |

The two deployments are completely separate: different platforms, different URLs and no shared infrastructure.

## Author

**Amir Hamidi** — Full-Stack Web Developer

- GitHub: [@Amirhamidi2001](https://github.com/Amirhamidi2001)
- Portfolio: <https://amirhamidi.vercel.app/>

## License

This project is licensed under the [MIT License](LICENSE).
