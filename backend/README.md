# Amir Hamidi — Portfolio Website (Django Implementation)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](../LICENSE)
[![Django 5.2](https://img.shields.io/badge/Django-5.2-092E20?logo=django&logoColor=white)](https://docs.djangoproject.com/en/5.2/)
[![Database: SQLite](https://img.shields.io/badge/database-SQLite-003B57?logo=sqlite&logoColor=white)](#database-and-data-models)

A server-rendered personal portfolio website built with **Python** and **Django**. It presents the work, skills, resume and services of Amir Hamidi, a Full-Stack Web Developer, and stores contact form submissions in a database that is managed through the Django admin.

**Live demo:** <https://amirhamidi.pythonanywhere.com/>

> This is one of two independent implementations of the same portfolio. The Next.js version lives in [`../frontend`](../frontend/README.md). The two projects do not share code, data, or APIs, and they are deployed separately. See the [root README](../README.md) for an overview of the repository.

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture and Project Structure](#architecture-and-project-structure)
- [Important Django Components](#important-django-components)
- [Database and Data Models](#database-and-data-models)
- [Contact Form](#contact-form)
- [SEO Implementation](#seo-implementation)
- [Security Configuration](#security-configuration)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Environment Variables](#environment-variables)
- [Database Migrations](#database-migrations)
- [Running the Development Server](#running-the-development-server)
- [Django Administration](#django-administration)
- [Static and Media Files](#static-and-media-files)
- [Production Deployment on PythonAnywhere](#production-deployment-on-pythonanywhere)
- [Current Limitations](#current-limitations)
- [Credits](#credits)
- [License and Author](#license-and-author)

## Overview

The site is a classic Django application: URLs are routed to class-based views, which render HTML templates on the server. There is no JavaScript framework and no REST API. All interactivity (typed text, scroll animations, portfolio filtering, lightbox, carousel) comes from small vanilla JavaScript libraries bundled in `static/`.

| Aspect | Details |
| --- | --- |
| Rendering | Server-side Django templates |
| Pages | Home, About, Resume, Services, Portfolio, Contact, custom 404 |
| Data storage | SQLite (one model: `Contact`) |
| Configuration | Environment variables via `python-decouple` |
| Content | Written directly in the templates (there is no CMS or content model) |
| Deployment | PythonAnywhere |

## Screenshots

<!-- TODO: Add screenshots to docs/screenshots/ (repository root), then uncomment the image lines below and remove the placeholder text. -->

| Home (desktop) | Portfolio (desktop) | Home (mobile) |
| --- | --- | --- |
| <!-- TODO: Django home page, desktop --> <!-- ![Django home page](../docs/screenshots/django-home-desktop.png) --> _Screenshot placeholder_ | <!-- TODO: Django portfolio page with filters, desktop --> <!-- ![Django portfolio page](../docs/screenshots/django-portfolio-desktop.png) --> _Screenshot placeholder_ | <!-- TODO: Django home page, mobile --> <!-- ![Django home page on mobile](../docs/screenshots/django-home-mobile.png) --> _Screenshot placeholder_ |

## Features

**Implemented in the source code:**

- **Six public pages** — Home, About, Resume, Services, Portfolio and Contact — plus a custom 404 page.
- **Responsive layout** based on Bootstrap 5, with a mobile navigation toggle, a scroll-to-top button and a page preloader.
- **Animated home page** with a typed-text headline (Typed.js) and scroll animations (AOS).
- **Filterable portfolio** using Isotope and imagesLoaded, with a lightbox (GLightbox).
- **About page** with animated skill bars (Waypoints), animated counters (PureCounter) and a testimonials carousel (Swiper).
- **Resume page** with education, professional skills and experience, and a resume PDF download endpoint (`/download-resume/`).
- **Contact form** that validates input and stores each submission in the database ([details](#contact-form)).
- **Django admin** for reading, searching and filtering contact submissions.
- **SEO support** — page titles and descriptions, a sitemap, a database-driven `robots.txt`, and richer metadata on the home page ([details](#seo-implementation)).
- **Security settings** for HTTPS, HSTS, cookies, clickjacking and referrer policy ([details](#security-configuration)).
- **Environment-based configuration** for the secret key, debug mode, allowed hosts and the admin URL.
- **`ads.txt` endpoint** served from the project root (the committed file contains placeholder values).

## Technology Stack

### Python dependencies

Versions are taken from [`requirements.txt`](requirements.txt). This is the complete list of Python dependencies.

| Package | Version | Purpose |
| --- | --- | --- |
| [Django](https://www.djangoproject.com/) | 5.2.13 | Web framework |
| [django-robots](https://pypi.org/project/django-robots/) | 6.1 | Database-driven `robots.txt` |
| [python-decouple](https://pypi.org/project/python-decouple/) | 3.8 | Reads settings from environment variables and `.env` |
| asgiref | 3.11.1 | Django dependency |
| sqlparse | 0.5.5 | Django dependency |

### Front-end assets (bundled in `static/assets/vendor/`)

The site is built on the **FolioOne** Bootstrap template by BootstrapMade (see [Credits](#credits)). Libraries are committed to the repository and served as static files, so no Node.js build step is needed. Versions below are read from the library file headers; where a header does not state a version, none is listed.

| Library | Version | Used for |
| --- | --- | --- |
| Bootstrap | 5.3.7 | Layout and components |
| Bootstrap Icons | 1.13.1 | Icons |
| AOS | — | Animate on scroll |
| Typed.js | — | Typing animation |
| Swiper | 11.2.10 | Testimonials carousel |
| Isotope | 3.0.6 | Portfolio filtering |
| imagesLoaded | 5.0.0 | Layout after image load |
| GLightbox | — | Image lightbox |
| PureCounter | 1.5.0 | Animated counters |
| Waypoints | 4.0.1 | Scroll-triggered skill bars |

Fonts (Roboto, Poppins, Raleway) are loaded from Google Fonts. A Google Analytics (gtag) snippet is included in the home page template.

## Architecture and Project Structure

```text
backend/
├── manage.py
├── requirements.txt
├── setup.cfg                  # flake8 configuration
├── ads.txt                    # Served at /ads.txt (placeholder values)
├── core/                      # Django project package
│   ├── settings.py            # Settings (python-decouple, security options)
│   ├── urls.py                # Root URL configuration
│   ├── wsgi.py
│   └── asgi.py
├── website/                   # The single application
│   ├── models.py              # Contact model
│   ├── forms.py               # ContactForm (ModelForm)
│   ├── views.py               # Class-based views
│   ├── urls.py                # App URLs (namespace "website")
│   ├── admin.py               # ContactAdmin
│   ├── sitemaps.py            # StaticViewSitemap
│   ├── migrations/0001_initial.py
│   └── tests.py               # Empty stub
├── templates/website/         # index, about, resume, services, portfolio, contact, 404
├── static/assets/             # css/main.css, js/main.js, vendor/, img/
└── media/                     # MEDIA_ROOT (resume PDF)
```

Two paths are generated or created at runtime and are not part of the source: `db.sqlite3` (the SQLite database, ignored by `.gitignore`) and `staticfiles/` (the `collectstatic` output). Note that `staticfiles/` is not listed in `.gitignore`.

### Request flow

```text
Browser → core/urls.py → website/urls.py → View (TemplateView / FormView)
                                              ├── renders templates/website/<page>.html
                                              └── (Contact) ContactForm → Contact model → SQLite
```

### URL map

| URL | Name | View | Template |
| --- | --- | --- | --- |
| `/` | `website:index` | `IndexView` | `website/index.html` |
| `/about/` | `website:about` | `AboutView` | `website/about.html` |
| `/resume/` | `website:resume` | `ResumeView` | `website/resume.html` |
| `/services/` | `website:services` | `ServicesView` | `website/services.html` |
| `/portfolio/` | `website:portfolio` | `PortfolioView` | `website/portfolio.html` |
| `/contact/` | `website:contact` | `ContactView` | `website/contact.html` |
| `/download-resume/` | `website:download_resume` | `DownloadResumeView` | — (PDF response) |
| `/sitemap.xml` | `django.contrib.sitemaps.views.sitemap` | Django sitemap view | — |
| `/robots.txt` | — | `django-robots` | — |
| `/ads.txt` | `ads_txt` | `AdsTxtView` | — (plain text) |
| `/<ADMIN_URL>` | — | Django admin | — |

Each page template is a complete, standalone HTML document; there is no shared base template.

## Important Django Components

| Component | Location | Role |
| --- | --- | --- |
| Settings | `core/settings.py` | Reads `SECRET_KEY`, `DEBUG` and `ALLOWED_HOSTS` through `python-decouple`; defines SQLite, static/media paths and security options. |
| Root URLs | `core/urls.py` | Mounts the admin at the configurable `ADMIN_URL`, includes `website.urls`, and registers the sitemap, `robots.txt` and `ads.txt`. Serves static and media files only when `DEBUG=True`. |
| Page views | `website/views.py` | `IndexView`, `AboutView`, `ResumeView`, `ServicesView` and `PortfolioView` are `TemplateView` subclasses. |
| Contact view | `website/views.py` | `ContactView` is a `FormView` that saves valid submissions and redirects back to the contact page. |
| Resume download | `website/views.py` | `DownloadResumeView` streams `MEDIA_ROOT/amir-hamidi.pdf` as an attachment named `resume.pdf`, or returns 404 if the file is missing. |
| `ads.txt` view | `website/views.py` | `AdsTxtView` returns `BASE_DIR/ads.txt` as `text/plain`, or 404 if it is missing. |
| Custom 404 | `website/views.py`, `core/urls.py` | `Custom404View` is registered as `handler404` and renders `website/404.html`. Django only uses a custom 404 handler when `DEBUG=False`. |
| Form | `website/forms.py` | `ContactForm` is a `ModelForm` for `Contact` with `fields = "__all__"`. |
| Admin | `website/admin.py` | `ContactAdmin` with list display, search, filters and date hierarchy. |
| Sitemap | `website/sitemaps.py` | `StaticViewSitemap` lists the six main pages. |
| Sites framework | `core/settings.py` | `django.contrib.sites` with `SITE_ID = 1`; the sitemap and `robots.txt` read the domain from the `Site` record. |

## Database and Data Models

The project uses **SQLite**, configured in `core/settings.py`:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

PostgreSQL or any other database is **not** configured and no database driver other than Python's built-in `sqlite3` is installed.

### `Contact` model (`website/models.py`)

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `BigAutoField` | Primary key |
| `name` | `CharField(max_length=255)` | |
| `email` | `EmailField` | Validated as an email address |
| `subject` | `CharField(max_length=255)` | |
| `message` | `TextField` | |
| `created_at` | `DateTimeField(auto_now_add=True)` | Set automatically; read-only in the admin |

Submissions are ordered by newest first (`ordering = ["-created_at"]`). The only migration in the project is `website/migrations/0001_initial.py`, which creates this model.

> The header comment of `0001_initial.py` says it was generated by Django 6.0.4, while `requirements.txt` pins Django 5.2.13. The migration is a plain `CreateModel` and applies cleanly on 5.2.13.

Besides `Contact`, the database also holds the tables of the installed Django apps (auth, sessions, admin, sites) and the `django-robots` tables.

## Contact Form

The contact page (`/contact/`) posts to `ContactView`, a `FormView` backed by `ContactForm`.

**What happens on submission:**

1. The form includes Django's CSRF token and the fields `name`, `email`, `subject` and `message` (all marked `required` in the HTML).
2. `ContactForm` validates the data on the server.
3. If valid, `form.save()` stores a `Contact` row in the database and the view queues a success message through Django's messages framework, then redirects back to `/contact/`.
4. If invalid, the view queues an error message and re-renders the page.

**What it does not do:**

- **It does not send email.** No `EMAIL_*` settings or `send_mail` calls exist in the project. Submissions are only stored in the database and read through the admin.
- **It has no spam protection.** There is no CAPTCHA, honeypot field or rate limiting; only CSRF protection and basic field validation apply.
- **It does not currently show feedback on the page.** The view creates success and error messages, but none of the templates render Django's `messages`, and the template does not display `form.errors`. Browser-side `required` attributes provide the only visible validation.

Because submissions contain personal data, access is limited to the admin site; keep `ADMIN_URL` and your superuser credentials private.

## SEO Implementation

| Feature | Implementation |
| --- | --- |
| Page titles and descriptions | Every page template defines `<title>` and `<meta name="description">`. The 404 template leaves the description empty. |
| Rich metadata (home page only) | `index.html` adds a canonical link, Open Graph and Twitter Card tags, JSON-LD structured data (`Person`), a Google Search Console verification tag and the Google Analytics snippet. The other pages do not include these. |
| Sitemap | `/sitemap.xml` is generated by `StaticViewSitemap` for the six main pages (priority `0.5`, change frequency `daily`, no `lastmod`). |
| `robots.txt` | `/robots.txt` is generated by `django-robots`. Rules are stored in the database and managed from the admin; with no rules defined it returns a permissive default (`User-agent: *`, empty `Disallow`) and adds `Host` and `Sitemap` lines. |
| `ads.txt` | `/ads.txt` serves `backend/ads.txt`. The committed file contains placeholder values (`pub-xxxxxxxxxxxxxxxx`) and should be replaced or removed if it is not used. |

> **Set the Site domain.** The sitemap and `robots.txt` build absolute URLs from the `Site` record, which Django creates as `example.com` when you run `migrate`. In the admin, open **Sites → Sites** and change the domain to your real host (for example, `amirhamidi.pythonanywhere.com`); otherwise both files point at `example.com`.

The canonical URL, Open Graph URLs and JSON-LD URLs in `index.html` are hardcoded to `https://amirhamidi.pythonanywhere.com`. Update them if you fork the project to another domain.

## Security Configuration

All options below are set in `core/settings.py`.

| Setting | Value | Effect |
| --- | --- | --- |
| `SECRET_KEY` | from environment | No default; the project fails to start without it |
| `DEBUG` | from environment, default `False` | Safe by default |
| `ALLOWED_HOSTS` | from environment | No default; comma-separated list |
| `SECURE_SSL_REDIRECT` | `True` | Redirects all HTTP requests to HTTPS |
| `SESSION_COOKIE_SECURE`, `CSRF_COOKIE_SECURE` | `True` | Cookies are only sent over HTTPS |
| `SECURE_HSTS_SECONDS` | `31536000` | HSTS for one year |
| `SECURE_HSTS_INCLUDE_SUBDOMAINS`, `SECURE_HSTS_PRELOAD` | `True` | HSTS applies to subdomains and is preload-eligible |
| `SECURE_CONTENT_TYPE_NOSNIFF` | `True` | `X-Content-Type-Options: nosniff` |
| `X_FRAME_OPTIONS` | `"DENY"` | Prevents the site from being framed |
| `SECURE_REFERRER_POLICY` | `"same-origin"` | Referrer is only sent to the same origin |
| `SESSION_COOKIE_HTTPONLY` | `True` | Session cookie is not readable by JavaScript |
| `SESSION_COOKIE_SAMESITE` | `"Strict"` | |
| `CSRF_COOKIE_SAMESITE` | `"Lax"` | |
| `CSRF_COOKIE_HTTPONLY` | `False` | Django's default |
| `ADMIN_URL` | from environment | The admin path is configurable rather than the default `admin/` |

Other protections come from Django's default middleware (CSRF, clickjacking, security middleware) and the four default password validators.

Notes:

- `SECURE_BROWSER_XSS_FILTER = True` is present in the settings file but has no effect: Django removed this setting in version 4.0.
- `python manage.py check --deploy` reports no issues when run with `DEBUG=False`.
- `SECURE_SSL_REDIRECT` is enabled unconditionally, **including during local development**. See [Local Development Setup](#local-development-setup) for the workaround.
- Not implemented: Content-Security-Policy header, rate limiting, CAPTCHA.

## Prerequisites

- **Python 3.10 or newer** (the minimum for Django 5.2). The project was verified with Python 3.12.
- **pip** and the standard `venv` module.
- **Git**.

No database server, Node.js or other system services are required.

## Local Development Setup

Run all commands from the `backend/` directory of the repository.

```bash
git clone https://github.com/Amirhamidi2001/amirhamidi.git
cd amirhamidi/backend
```

### 1. Create a virtual environment and install dependencies

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Create the `.env` file

Create a file named `.env` next to `manage.py` (the repository does not include an example file). See [Environment Variables](#environment-variables) for details.

```env
SECRET_KEY=replace-with-a-long-random-string
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
ADMIN_URL=admin/
```

To generate a secret key:

```bash
python -c "from django.core.management.utils import get_random_secret_key as g; print(g())"
```

### 3. Create a local settings override (HTTP development)

`core/settings.py` forces HTTPS (`SECURE_SSL_REDIRECT = True`) regardless of `DEBUG`, so `runserver` would redirect every request to `https://127.0.0.1:8000`, which the development server cannot serve. Without modifying the committed settings, create `core/local_settings.py` (already covered by the `local_settings.py` rule in `.gitignore`):

```python
from .settings import *  # noqa: F401,F403

# Local development only: serve over plain HTTP.
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False
SECURE_HSTS_SECONDS = 0
SECURE_HSTS_INCLUDE_SUBDOMAINS = False
SECURE_HSTS_PRELOAD = False
```

Use it by passing `--settings=core.local_settings` to `manage.py` commands, or by exporting `DJANGO_SETTINGS_MODULE=core.local_settings`. The examples in this README use the `--settings` flag.

### 4. Migrate, create an admin user, and run

```bash
python manage.py migrate --settings=core.local_settings
python manage.py createsuperuser --settings=core.local_settings
python manage.py runserver --settings=core.local_settings
```

Open <http://127.0.0.1:8000/>.

## Environment Variables

Settings are read with `python-decouple`, which checks real environment variables first and then a `.env` file, searched upward from the `core/` package (so `backend/.env`, next to `manage.py`, is found). Variables with no default raise an `UndefinedValueError` at startup if they are missing.

| Variable | Required | Default | Used in | Description |
| --- | --- | --- | --- | --- |
| `SECRET_KEY` | Yes | — | `core/settings.py` | Django secret key. Use a unique, random value and never commit it. |
| `DEBUG` | No | `False` | `core/settings.py` | `True` enables debug mode and static/media serving through the URLconf. Must be `False` in production. |
| `ALLOWED_HOSTS` | Yes | — | `core/settings.py` | Comma-separated host names, for example `localhost,127.0.0.1`. The value is split on commas without trimming, so do not put spaces after the commas. |
| `ADMIN_URL` | Yes | — | `core/urls.py` | URL path of the admin site. **Must end with a slash**, for example `admin/` or `manage-4f9c/`. |

The `.env` file is ignored by Git.

## Database Migrations

```bash
python manage.py migrate --settings=core.local_settings
```

This creates `db.sqlite3` and applies the migrations of the Django apps, `django-robots`, and the `website` app (`0001_initial`, which creates `Contact`). After changing `website/models.py`, create and apply a new migration:

```bash
python manage.py makemigrations website --settings=core.local_settings
python manage.py migrate --settings=core.local_settings
```

In production, run the same commands without the `--settings` flag.

## Running the Development Server

```bash
python manage.py runserver --settings=core.local_settings
```

With `DEBUG=True`, `django.contrib.staticfiles` serves the files from `static/` automatically, so `collectstatic` is not needed locally. Code quality checks:

```bash
python manage.py check --settings=core.local_settings
```

The repository includes a flake8 configuration in [`setup.cfg`](setup.cfg) (line length 88, migrations excluded). flake8 is not listed in `requirements.txt`; install it separately (`pip install flake8`) if you want to run it. `website/tests.py` is an empty stub, so there is no automated test suite yet.

## Django Administration

The admin site is mounted at the path defined by `ADMIN_URL` (for example `http://127.0.0.1:8000/admin/` with the sample `.env` above). Log in with the account created by `createsuperuser`.

| Admin section | What you can do |
| --- | --- |
| **Contacts** | Read submissions. The list shows name, email, subject and date; supports search over name, email, subject and message, filtering by date, and date drill-down. `created_at` is read-only. |
| **Sites** | Set the domain used by the sitemap and `robots.txt` (see [SEO Implementation](#seo-implementation)). |
| **Robots** | Add `robots.txt` rules and URL patterns (provided by `django-robots`). |
| **Users and Groups** | Standard Django authentication management. |

## Static and Media Files

| Setting | Value | Meaning |
| --- | --- | --- |
| `STATIC_URL` | `static/` | Public URL prefix |
| `STATICFILES_DIRS` | `backend/static/` | Source directory for project assets |
| `STATIC_ROOT` | `backend/staticfiles/` | Target of `collectstatic` (deployment) |
| `MEDIA_URL` | `media/` | Public URL prefix |
| `MEDIA_ROOT` | `backend/media/` | Location of media files |

**Static files.** Project assets live in `static/assets/` (`css/main.css`, `js/main.js`, `vendor/` and `img/`). Templates reference them with `{% static %}`. Image files are referenced from the templates under `static/assets/img/` (profile, portfolio and testimonial pictures, favicon and touch icon). For deployment, gather everything into `STATIC_ROOT`:

```bash
python manage.py collectstatic --noinput
```

**Media files.** The project defines no upload fields. `MEDIA_ROOT` is used for a single file: the resume PDF, which `DownloadResumeView` expects at `media/amir-hamidi.pdf`. If that file is absent, `/download-resume/` returns 404.

Django serves static and media files itself only when `DEBUG=True`. With `DEBUG=False`, the web server must serve both (see below).

## Production Deployment on PythonAnywhere

The live site runs on PythonAnywhere. The repository contains no PythonAnywhere-specific files; it uses the standard WSGI entry point `core.wsgi.application`. The steps below are the general procedure for a Django project on PythonAnywhere and are provided as guidance, not as a copy of the live server configuration.

1. **Get the code and create a virtual environment** (Bash console), using the same Python version as the web app:

   ```bash
   git clone https://github.com/Amirhamidi2001/amirhamidi.git
   cd amirhamidi/backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. **Create `.env`** next to `manage.py` with production values:

   ```env
   SECRET_KEY=<unique random value>
   DEBUG=False
   ALLOWED_HOSTS=amirhamidi.pythonanywhere.com
   ADMIN_URL=<hard-to-guess-path>/
   ```

3. **Prepare the database and static files:**

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   python manage.py collectstatic --noinput
   ```

4. **Configure the web app** (Web tab): set the source code and working directory to the `backend` folder, point the virtualenv path to `venv`, and in the WSGI configuration file add the project directory to `sys.path` and set `DJANGO_SETTINGS_MODULE` to `core.settings`.
5. **Add static file mappings** (Web tab): map `/static/` to `backend/staticfiles/` and `/media/` to `backend/media/`. Upload `amir-hamidi.pdf` into `backend/media/` for the resume download.
6. **Reload** the web app, then in the admin set the **Site** domain to your host.

Deployment notes:

- HTTPS is mandatory: `SECURE_SSL_REDIRECT`, secure cookies and HSTS are enabled in code.
- The SQLite database file (`backend/db.sqlite3`) lives on the server and is not part of the repository; back it up if you need to keep contact submissions.
- Keep secrets in `.env` (or real environment variables), never in the repository.

**Optional recommendations (not implemented in this project):** a production-grade database such as PostgreSQL, an email backend if you want notifications for new submissions, and a CSP header.

## Current Limitations

Documented here so the scope of the project is clear:

- No REST API and no JavaScript frontend framework.
- Contact submissions are stored only; no email is sent and no on-page confirmation is displayed.
- Site content is hardcoded in templates, and templates do not share a base layout.
- SEO metadata (canonical, Open Graph, JSON-LD, analytics) exists only on the home page.
- No automated tests (`website/tests.py` is empty).

## Credits

- Template: **FolioOne** by [BootstrapMade](https://bootstrapmade.com/folioone-bootstrap-portfolio-website-template/) (see its [license](https://bootstrapmade.com/license/)). The bundled `php-email-form/validate.js` file comes from this template; it is loaded by the pages but is not involved in the Django contact form flow.
- Third-party libraries listed under [Technology Stack](#technology-stack) are distributed under their own licenses. Note that Isotope is licensed under GPLv3 for open-source use and requires a commercial license otherwise; review its terms for your use case.

## License and Author

This project is released under the [MIT License](../LICENSE).

**Amir Hamidi** — Full-Stack Web Developer
GitHub: [@Amirhamidi2001](https://github.com/Amirhamidi2001) · Portfolio: <https://amirhamidi.vercel.app/>

See also: [Root README](../README.md) · [Next.js implementation](../frontend/README.md)
