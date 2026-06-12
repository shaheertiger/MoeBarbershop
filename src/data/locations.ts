import { SITE_URL, site, hours, to24h, areaServed } from "./site";

export interface LocationPage {
  /** URL slug under /areas/. */
  slug: string;
  /** Town name. */
  town: string;
  /** Region, almost always "Ontario". */
  region: string;
  /** Rough drive time / distance line from the shop. */
  distance: string;
  /** Intro paragraphs tuned for "barber in {town}" searches. */
  intro: string[];
  /** Nearby landmarks / neighbourhoods to reinforce local relevance. */
  nearby: string[];
}

const HOME = "Erin";

export const locationPages: LocationPage[] = [
  {
    slug: "erin",
    town: "Erin",
    region: "Ontario",
    distance: "In the heart of Erin on Trafalgar Rd",
    intro: [
      "Moe's Barbershop is your local barber right here in Erin, Ontario, at 99 Trafalgar Rd. We're the neighbourhood shop for classic cuts, skin fades, beard lineups and kids' cuts — rated 5.0 on Google by 100+ Erin clients.",
      "Walk in or book online and you'll get a precision cut with a consultation every time, from barbers who know the town and take pride in every chair.",
    ],
    nearby: ["Downtown Erin", "Erin Village", "Stanley Park", "Centre 2000"],
  },
  {
    slug: "hillsburgh",
    town: "Hillsburgh",
    region: "Ontario",
    distance: "About 7 minutes from Hillsburgh",
    intro: [
      "Looking for a barber near Hillsburgh? Moe's Barbershop is just a short drive away in neighbouring Erin, Ontario. Hillsburgh clients come to us for sharp skin fades, beard trims, men's cuts and kids' haircuts.",
      "It's an easy trip down Trafalgar Rd — book online to lock in your time, or walk in when a chair is open.",
    ],
    nearby: ["Hillsburgh village", "Upper Credit Conservation Area", "Erin-Hillsburgh"],
  },
  {
    slug: "caledon",
    town: "Caledon",
    region: "Ontario",
    distance: "A short drive from Caledon",
    intro: [
      "Moe's Barbershop welcomes clients from Caledon, Ontario, who want a barber that takes the time to get it right. From low and high skin fades to beard fades and lineups, we deliver a polished, connected look every visit.",
      "We're a quick drive from Caledon in Erin — book your appointment online and skip the wait.",
    ],
    nearby: ["Caledon", "Caledon Village", "Belfountain", "Cataract"],
  },
  {
    slug: "orangeville",
    town: "Orangeville",
    region: "Ontario",
    distance: "A short drive from Orangeville",
    intro: [
      "Orangeville clients make the short trip to Moe's Barbershop in Erin for a cut that's worth it. Classic haircuts, modern fades, beard work and kids' cuts — all finished with the detail that's earned us a 5.0 Google rating.",
      "Reserve your chair online for an easy in-and-out, or drop by when you're passing through Erin.",
    ],
    nearby: ["Orangeville", "Mono", "Dufferin County"],
  },
  {
    slug: "georgetown",
    town: "Georgetown",
    region: "Ontario",
    distance: "A short drive from Georgetown",
    intro: [
      "From Georgetown and Halton Hills, Moe's Barbershop in Erin is the go-to for sharp, reliable men's grooming. Skin fades, beard lineups, haircut-and-beard combos and kids' cuts — done right, every time.",
      "Book online before you head over and your chair will be ready when you arrive.",
    ],
    nearby: ["Georgetown", "Halton Hills", "Glen Williams"],
  },
  {
    slug: "acton",
    town: "Acton",
    region: "Ontario",
    distance: "A short drive from Acton",
    intro: [
      "Acton clients trust Moe's Barbershop in nearby Erin for clean fades, crisp beard lineups and classic men's cuts. We're an easy drive away and always finish with a sharp, detailed result.",
      "Book your appointment online or walk in when a chair opens up.",
    ],
    nearby: ["Acton", "Halton Hills", "Prospect Park"],
  },
];

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((l) => l.slug === slug);
}

/** LocalBusiness + breadcrumb JSON-LD for a town landing page. */
export function locationPageJsonLd(l: LocationPage) {
  const url = `${SITE_URL}/areas/${l.slug}`;
  const isHome = l.town === HOME;

  return [
    {
      "@context": "https://schema.org",
      "@type": ["HairSalon", "BarberShop", "LocalBusiness"],
      "@id": `${url}#business`,
      name: `${site.name} — Barber serving ${l.town}, ${l.region}`,
      description: l.intro[0],
      url,
      image: [`${SITE_URL}/images/hero-barbershop.jpg`, `${SITE_URL}/logo.svg`],
      telephone: site.phoneE164,
      email: site.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.regionCode,
        postalCode: site.address.postal,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      hasMap: site.mapsUrl,
      areaServed: isHome
        ? areaServed.map((name) => ({ "@type": "City", name }))
        : { "@type": "City", name: `${l.town}, ${l.region}` },
      sameAs: [site.instagram, site.bookingUrl],
      openingHoursSpecification: hours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: to24h(h.open),
        closes: to24h(h.close),
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating,
        reviewCount: site.reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas` },
        {
          "@type": "ListItem",
          position: 3,
          name: `Barber in ${l.town}`,
          item: url,
        },
      ],
    },
  ];
}
