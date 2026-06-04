# Moe's Barbershop — moesbarbershop.ca

Marketing website for **Moe's Barbershop** in Erin, Ontario, built with
[Astro](https://astro.build). Inspired by the layout of clipandchill.com, themed
to match Moe's brown / orange / cream logo.

## Sections

- **Hero** — headline, booking CTA, and the shop emblem
- **Services** — full price/duration list pulled from `src/data/site.ts`
- **Staff** — meet Moe, with the 5.0★ Google rating highlight
- **Location & Hours** — address, contact, directions, and weekly hours
  (today's day is highlighted automatically)
- **Footer** — quick links, Instagram, phone, booking

Booking links point to the Square booking site:
`https://moes-barbershop.square.site/`

## Develop

```sh
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Editing content

All shop details — services, hours, phone, address, booking URL — live in
[`src/data/site.ts`](src/data/site.ts). Update that one file and every section
follows.

The logo lives at [`public/logo.svg`](public/logo.svg). Replace it with the
final raster/vector asset when available (keep the `logo.svg` filename, or
update the references in the components).

## Deploy

The build produces a static site in `dist/`, deployable to Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any static host. Point the
`moesbarbershop.ca` domain at your chosen host.
