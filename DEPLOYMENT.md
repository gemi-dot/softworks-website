# SoftWorks Production Deployment

## 1) Environment Variables

Use these variables in your hosting platform:

- `NEXT_PUBLIC_DJANGO_API_URL` (example: `https://api.softworks.studio/api`)

## 2) Build and Run

```bash
npm ci
npm run lint
npm run build
npm run start
```

## 3) Docker Deployment

```bash
docker build -t softworks-website .
docker run -p 3000:3000 --env-file .env.local softworks-website
```

## 4) Reverse Proxy

- Route `https://softworks.studio` to this Next.js service.
- Route API traffic to the Django backend URL used in `NEXT_PUBLIC_DJANGO_API_URL`.

## 5) Production Checklist

- Enable HTTPS
- Configure caching headers for static assets
- Verify sitemap and robots endpoints
- Confirm dark mode and responsive behavior across devices
- Validate API health endpoint from production frontend
