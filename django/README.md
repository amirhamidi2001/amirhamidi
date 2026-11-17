# Amir Hamidi — Portfolio Website

A modern, fully responsive personal portfolio website built with **Django**. It showcases my work as a Full‑Stack Web Developer, my skills, projects, resume, services, and a contact form – all in a fast, secure, and SEO‑friendly package.

🌐 **Live site:** [https://amirhamidi.pythonanywhere.com/](https://amirhamidi.pythonanywhere.com/)

---

## ✨ Features

- **Dynamic content** – Pages are rendered via Django templates with reusable components.
- **Portfolio & project showcase** – Filterable gallery using Isotope & ImagesLoaded.
- **Resume & services** – Structured sections with clean typography.
- **Contact form** – PHP‑Email‑Form integration ready (easily adaptable to Django’s email backend).
- **SEO ready** – Meta tags, Open Graph, Twitter Cards, and JSON‑LD structured data (Schema.org).
- **Sitemap & robots.txt** – Automatic sitemaps via Django’s sitemaps framework and `django-robots`.
- **Performance & security** –  
  - Static files optimised with `collectstatic`.  
  - Security headers: HSTS, secure cookies, X‑Frame‑Options, etc.  
  - Environment variables for sensitive settings.
- **Mobile‑first design** – Bootstrap 5 + custom CSS/JS, AOS animations, Swiper carousel, and Glightbox.

---

## 🛠️ Tech Stack

| Area            | Technologies                                                                 |
|-----------------|------------------------------------------------------------------------------|
| Backend         | Python 3.12, Django 5.2, SQLite (dev) / PostgreSQL (production recommended) |
| Frontend        | Bootstrap 5, AOS, Swiper, Glightbox, Isotope, Typed.js, PureCounter          |
| Deployment      | PythonAnywhere, Gunicorn / WSGI                                              |
| Security        | python‑decouple, HTTPS, HSTS, secure cookies                                 |
| Others          | django‑robots, django‑sitemaps, WHITENOISE (for static files in production)  |

---

## 📂 Project Structure

```
Amirhamidi/
├── core/                   # Django project settings & main URLs
│   ├── settings.py         # Main settings (use .env for secrets)
│   ├── urls.py
│   └── wsgi.py
├── website/                # Main Django app
│   ├── models.py           # (If any – e.g. contact messages)
│   ├── views.py
│   └── urls.py
├── templates/              # HTML templates
├── static/                 # Static assets (CSS, JS, images, vendor)
│   └── assets/
│       ├── css/main.css
│       ├── js/main.js
│       ├── img/            # Profile, portfolio, favicons
│       └── vendor/         # All external libraries (Bootstrap, AOS, etc.)
├── media/                  # User‑uploaded files (if any)
├── db.sqlite3              # Default development database
├── manage.py
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables (not in repo)
└── README.md
```

---

## 🚀 Getting Started (Local Development)

Follow these steps to run the project on your own machine.

### Prerequisites

- Python 3.12 or higher
- Git
- Virtual environment (recommended)

### 1. Clone the repository

```bash
git clone https://github.com/amirhamidi2001/amirhamidi.git
cd amirhamidi
```

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Set up environment variables

Create a `.env` file in the root directory (same level as `manage.py`) with the following content:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

> **Important:** Never commit the `.env` file. For production, set `DEBUG=False` and add your production domain to `ALLOWED_HOSTS`.

### 5. Run migrations

```bash
python manage.py migrate
```

### 6. Collect static files

```bash
python manage.py collectstatic --noinput
```

### 7. Start the development server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000` – you should see the portfolio home page.

---

## 🔧 Deployment (PythonAnywhere / Production)

The site is currently deployed on **PythonAnywhere** (using their WSGI stack). To deploy on a similar platform:

1. Set `DEBUG=False` in `.env`.
2. Update `ALLOWED_HOSTS` with your domain.
3. Use a production database (e.g. PostgreSQL) instead of SQLite.
4. Configure static file serving (WhiteNoise or a CDN).
5. Set up HTTPS and security headers (already configured in `settings.py` for production).
6. Run `python manage.py migrate` and `python manage.py collectstatic` on the server.

Example production‑ready `.env`:

```env
SECRET_KEY=your-super-secret-key
DEBUG=False
ALLOWED_HOSTS=amirhamidi.pythonanywhere.com
```

---

## 📄 License

Distributed under the **MIT License**. See the [`LICENSE`](LICENSE) file for more information.

---

## 👤 Author

**Amir Hamidi** – [GitHub](https://github.com/Amirhamidi2001)
