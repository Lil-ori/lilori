# Lilori

Lilori is a technology and digital services company focused on building modern websites, digital experiences, automation, and technology solutions for small businesses.

## What We Do

Lilori helps businesses improve their digital presence and streamline the technology behind their operations.

Services and projects may include:

- Website design and development
- Website hosting and maintenance
- SEO and content optimization
- AI and workflow automation
- CRM and third-party integrations
- Custom tools and internal applications
- Product and technology consulting

## Projects

This repository serves as the central home for Lilori development and documentation.

Individual client and internal projects may live within their own repositories or project directories.

## Local site

The public marketing site lives in `site/` and is meant to be served on the local domain **lilori.local**.

```bash
chmod +x scripts/dev.sh
./scripts/dev.sh
```

The script maps `127.0.0.1 lilori.local` in `/etc/hosts` (via sudo, once) and serves the site at [http://lilori.local/](http://lilori.local/). To use another port:

```bash
LILORI_PORT=8080 ./scripts/dev.sh
```

Then open `http://lilori.local:8080/`.

## Development

Lilori projects are primarily developed using modern web technologies and tools, including:

- HTML, CSS, and JavaScript
- React / Next.js
- GitHub
- Cursor
- Netlify and other cloud hosting platforms
- WordPress when appropriate
- AI-assisted development and automation

## About Lilori

Lilori focuses on practical technology: clean design, simple experiences, reliable systems, and solutions built around how a business actually operates.

---

© 2026 Lilori. All rights reserved.