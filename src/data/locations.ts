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
    distance: "A short drive from Hillsburgh on Trafalgar Rd",
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
  {
    slug: "guelph",
    town: "Guelph",
    region: "Ontario",
    distance: "A short drive from Guelph",
    intro: [
      "Guelph clients who want a barber that takes the time to get it right make the short trip to Moe's Barbershop in Erin. From precise skin fades to beard lineups and classic men's cuts, every chair gets the same 5-star attention.",
      "It's an easy drive out to Erin — book your appointment online to skip the wait.",
    ],
    nearby: ["Guelph", "Guelph/Eramosa", "Wellington County"],
  },
  {
    slug: "rockwood",
    town: "Rockwood",
    region: "Ontario",
    distance: "A short drive from Rockwood",
    intro: [
      "Rockwood is right around the corner from Moe's Barbershop in Erin. Our Rockwood clients come in for sharp fades, beard work, kids' cuts and the full Moe's haircut experience.",
      "Reserve your chair online or walk in when one's open.",
    ],
    nearby: ["Rockwood", "Guelph/Eramosa", "Eden Mills"],
  },
  {
    slug: "fergus",
    town: "Fergus",
    region: "Ontario",
    distance: "A short drive from Fergus",
    intro: [
      "From Fergus, Moe's Barbershop in Erin is the local choice for clean, reliable men's grooming — skin fades, beard lineups, haircut-and-beard combos and kids' cuts, all finished with detail.",
      "Book online before you head over and your chair will be ready when you arrive.",
    ],
    nearby: ["Fergus", "Centre Wellington", "Wellington County"],
  },
  {
    slug: "elora",
    town: "Elora",
    region: "Ontario",
    distance: "A short drive from Elora",
    intro: [
      "Elora clients trust Moe's Barbershop in Erin for a cut that's worth the short drive. Classic haircuts, modern fades, beard shaping and kids' cuts — all with the 5-star detail we're known for.",
      "Book your appointment online or drop in when a chair opens up.",
    ],
    nearby: ["Elora", "Centre Wellington", "Wellington County"],
  },
  {
    slug: "ballinafad",
    town: "Ballinafad",
    region: "Ontario",
    distance: "Minutes from Ballinafad",
    intro: [
      "Ballinafad sits right between Erin and Acton, which makes Moe's Barbershop your closest full-service barber. Locals drop in for skin fades, beard lineups, men's cuts and kids' haircuts without the drive into the city.",
      "Book online to lock in your time, or walk in when a chair's open.",
    ],
    nearby: ["Ballinafad", "Erin Township", "Crewson's Corners"],
  },
  {
    slug: "ospringe",
    town: "Ospringe",
    region: "Ontario",
    distance: "A short drive from Ospringe",
    intro: [
      "Ospringe is part of the Erin community Moe's Barbershop calls home, so a sharp cut is never far away. From classic haircuts to clean skin fades and beard work, we've got the chair for you.",
      "Reserve online or swing by 99 Trafalgar Rd in Erin when you're nearby.",
    ],
    nearby: ["Ospringe", "Erin Township", "Brisbane"],
  },
  {
    slug: "eden-mills",
    town: "Eden Mills",
    region: "Ontario",
    distance: "A short drive from Eden Mills",
    intro: [
      "Eden Mills clients head to Moe's Barbershop in nearby Erin for precise, reliable men's grooming. Fades, beard lineups, haircut-and-beard combos and kids' cuts — all finished with detail.",
      "Book your appointment online and skip the wait.",
    ],
    nearby: ["Eden Mills", "Guelph/Eramosa", "Rockwood"],
  },
  {
    slug: "everton",
    town: "Everton",
    region: "Ontario",
    distance: "A short drive from Everton",
    intro: [
      "From Everton, Moe's Barbershop in Erin is the easy choice for a great cut. Our barbers deliver sharp skin fades, beard shaping and classic styles with the same 5-star care every visit.",
      "Book online or walk in when a chair opens up.",
    ],
    nearby: ["Everton", "Guelph/Eramosa", "Eramosa"],
  },
  {
    slug: "belwood",
    town: "Belwood",
    region: "Ontario",
    distance: "A short drive from Belwood",
    intro: [
      "Belwood and Lake Belwood clients make the short trip to Moe's Barbershop in Erin for cuts worth the drive. Classic haircuts, modern fades, beard lineups and kids' cuts — done right.",
      "Reserve your chair online before you head over.",
    ],
    nearby: ["Belwood", "Centre Wellington", "Fergus"],
  },
  {
    slug: "belfountain",
    town: "Belfountain",
    region: "Ontario",
    distance: "A short drive from Belfountain",
    intro: [
      "Belfountain sits just over in Caledon, a quick drive from Moe's Barbershop in Erin. We're the local pick for skin fades, beard lineups, men's cuts and kids' haircuts.",
      "Book online or drop in when a chair's free.",
    ],
    nearby: ["Belfountain", "Caledon", "Forks of the Credit"],
  },
  {
    slug: "inglewood",
    town: "Inglewood",
    region: "Ontario",
    distance: "A short drive from Inglewood",
    intro: [
      "Inglewood clients trust Moe's Barbershop in Erin for clean, consistent men's grooming. From low and high fades to beard fades and lineups, every cut is finished sharp.",
      "Book your appointment online to make it quick.",
    ],
    nearby: ["Inglewood", "Caledon", "Caledon Village"],
  },
  {
    slug: "cheltenham",
    town: "Cheltenham",
    region: "Ontario",
    distance: "A short drive from Cheltenham",
    intro: [
      "From Cheltenham and the Caledon area, Moe's Barbershop in Erin is the go-to for sharp fades, beard work and classic cuts. Same 5-star detail, every chair.",
      "Reserve online or walk in when one's open.",
    ],
    nearby: ["Cheltenham", "Caledon", "Terra Cotta"],
  },
  {
    slug: "alton",
    town: "Alton",
    region: "Ontario",
    distance: "A short drive from Alton",
    intro: [
      "Alton clients head to Moe's Barbershop in Erin for a barber that takes the time to get it right — skin fades, beard lineups, haircut-and-beard combos and kids' cuts.",
      "Book your appointment online or drop by 99 Trafalgar Rd in Erin.",
    ],
    nearby: ["Alton", "Caledon", "Dufferin County"],
  },
  {
    slug: "caledon-east",
    town: "Caledon East",
    region: "Ontario",
    distance: "A short drive from Caledon East",
    intro: [
      "Caledon East clients who want a precise, personal cut make the trip to Moe's Barbershop in Erin. Classic haircuts, modern skin fades, beard shaping and kids' cuts — all 5-star rated.",
      "Book online before you head over and your chair will be ready.",
    ],
    nearby: ["Caledon East", "Caledon", "Palgrave"],
  },
];

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((l) => l.slug === slug);
}

/**
 * Honest, useful Q&As built from real shop data — no invented distances or
 * claims. The home town (Erin) gets a location-appropriate variant.
 */
export function locationFaqs(l: LocationPage): { q: string; a: string }[] {
  const addr = `${site.address.line1} in ${site.address.city}, ${site.address.region}`;
  const others = l.nearby.filter((n) => n !== l.town);
  const nearbyLine = others.length
    ? ` We also serve ${others.join(", ")} and the wider ${l.region} area.`
    : "";

  if (l.town === HOME) {
    return [
      {
        q: `Where is Moe's Barbershop in ${l.town}?`,
        a: `Moe's Barbershop is at ${addr} (${site.address.postal}), right in ${l.town}. Call ${site.phone} or book online.`,
      },
      {
        q: `What can I book at Moe's Barbershop in ${l.town}?`,
        a: `Men's haircuts, skin fades, beard trims and lineups, haircut-and-beard combos, kids' cuts and senior cuts. Walk in when a chair is open or book online to reserve your time.${nearbyLine}`,
      },
    ];
  }

  return [
    {
      q: `Does Moe's Barbershop serve ${l.town}, ${l.region}?`,
      a: `Yes — ${l.town} is within the area Moe's Barbershop serves. We're located a short drive away at ${addr}.${nearbyLine}`,
    },
    {
      q: `How far is Moe's Barbershop from ${l.town}?`,
      a: `We're at ${addr} — a short drive from ${l.town}. Use the "Get Directions" link or your maps app for the exact route from where you are.`,
    },
    {
      q: `What can ${l.town} clients book at Moe's Barbershop?`,
      a: `Men's haircuts, skin fades, beard trims and lineups, haircut-and-beard combos, kids' cuts and senior cuts. Book online to reserve a time, or walk in when a chair is open.`,
    },
  ];
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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: locationFaqs(l).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}
