This is a production-structured [Next.js](https://nextjs.org) marketing site for SoftWorks.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) if another Next app is already running, otherwise [http://localhost:3000](http://localhost:3000).

## Implemented Modules

1. Project Structure
2. Navigation Bar
3. Hero Section
4. Trusted By
5. Services
6. Solutions
7. Why SoftWorks
8. Statistics
9. Featured Projects
10. Book Demo
11. Testimonials
12. Blog
13. Contact
14. Footer
15. Dark Mode
16. Animations
17. Mobile Optimization
18. SEO (`metadata`, `robots`, `sitemap`)
19. Django API Integration (`NEXT_PUBLIC_DJANGO_API_URL`)
20. Production Deployment Guide (`DEPLOYMENT.md`)

## Brand Color Direction

- 70% neutral: white, navy, soft gray surfaces and typography
- 20% blue/cyan: brand identity, navigation highlights, section emphasis
- 10% green/orange accents:
	- green for ready/success states (for example demo-ready system labels)
	- orange only for primary actions such as Book Demo and Contact Sales

## Django API Setup

Create `.env.local`:

```bash
NEXT_PUBLIC_DJANGO_API_URL=http://localhost:8000/api
```

The homepage displays API health status from `GET /health/`.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for production steps.
