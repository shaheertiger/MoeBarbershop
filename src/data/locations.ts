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
    slug: "halton-hills",
    town: "Halton Hills",
    region: "Ontario",
    distance: "About 15 minutes from Halton Hills",
    intro: [
      "Right next door to Halton Hills, Moe's Barbershop in Erin is the local barber for Georgetown, Acton, Glen Williams and the surrounding town. From razor-clean skin fades to beard lineups, kids' cuts and the signature Moe's Haircut, every chair gets the same 5-star attention.",
      "It's a quick, easy drive from anywhere in Halton Hills — book online to lock in your time, or walk in when a chair opens up.",
    ],
    nearby: ["Georgetown", "Acton", "Glen Williams", "Limehouse"],
  },
  {
    slug: "milton",
    town: "Milton",
    region: "Ontario",
    distance: "About 30 minutes from Milton",
    intro: [
      "Milton clients who want a barber that takes the time to get it right make the short trip out to Moe's Barbershop in Erin. Skin fades, beard fades and lineups, men's, senior and kids' cuts — every service is finished with the detail that's earned us a 5.0 Google rating from 100+ clients.",
      "Escape the crowded chain shops — book your appointment online and get a real, unhurried cut a short drive north of Milton.",
    ],
    nearby: ["Milton", "Campbellville", "Halton", "Moffat"],
  },
  {
    slug: "brampton",
    town: "Brampton",
    region: "Ontario",
    distance: "About 35 minutes from Brampton",
    intro: [
      "From Brampton, Moe's Barbershop in Erin is the destination barber for men who want a precise, connected cut without the wait. We specialize in seamless skin fades, sharp beard lineups and haircut-and-beard combos, all tailored to your face shape and upkeep.",
      "It's an easy drive northwest through Caledon — book online before you head over and your chair will be ready when you arrive.",
    ],
    nearby: ["Brampton", "Caledon", "Bramalea", "Peel Region"],
  },
  {
    slug: "cambridge",
    town: "Cambridge",
    region: "Ontario",
    distance: "About 35 minutes from Cambridge",
    intro: [
      "Cambridge clients make the short trip to Moe's Barbershop in Erin for a cut that's worth it. Low, mid and high skin fades, beard shaping, classic men's cuts and kids' haircuts — all finished with the 5-star precision we're known for across Wellington County.",
      "Reserve your chair online for an easy in-and-out, or drop by when you're passing through Erin.",
    ],
    nearby: ["Cambridge", "Galt", "Preston", "Hespeler"],
  },
  {
    slug: "kitchener",
    town: "Kitchener",
    region: "Ontario",
    distance: "About 40 minutes from Kitchener",
    intro: [
      "Kitchener–Waterloo clients who want a barber that sweats the details make the drive out to Moe's Barbershop in Erin. From razor-sharp skin fades to beard lineups and the full signature Moe's Haircut, every visit gets the same careful, unhurried service.",
      "It's a straight shot east toward Erin — book your appointment online to skip the wait and guarantee your spot.",
    ],
    nearby: ["Kitchener", "Waterloo", "Breslau", "Region of Waterloo"],
  },
  {
    slug: "grand-valley",
    town: "Grand Valley",
    region: "Ontario",
    distance: "About 20 minutes from Grand Valley",
    intro: [
      "Grand Valley is a quick drive from Moe's Barbershop in Erin. Our Grand Valley clients come in for sharp fades, beard work, kids' cuts and the full Moe's haircut experience — the same 5-star detail, without the big-city drive.",
      "Reserve your chair online or walk in when one's open.",
    ],
    nearby: ["Grand Valley", "East Luther", "Waldemar", "Dufferin County"],
  },
  {
    slug: "shelburne",
    town: "Shelburne",
    region: "Ontario",
    distance: "About 35 minutes from Shelburne",
    intro: [
      "From Shelburne, Moe's Barbershop in Erin is worth the drive for men who want a genuinely sharp, detailed cut. Skin fades, beard lineups, haircut-and-beard combos and kids' cuts — all delivered with the precision that's earned us 100+ five-star reviews.",
      "Book online before you head south and your chair will be ready when you arrive.",
    ],
    nearby: ["Shelburne", "Mono", "Melancthon", "Dufferin County"],
  },
  {
    slug: "arthur",
    town: "Arthur",
    region: "Ontario",
    distance: "About 35 minutes from Arthur",
    intro: [
      "Arthur clients trust Moe's Barbershop in Erin for a cut that's worth the trip. Classic haircuts, modern skin fades, beard shaping and kids' cuts — all with the 5-star attention to detail we're known for across Wellington County.",
      "Book your appointment online or drop in when a chair opens up.",
    ],
    nearby: ["Arthur", "Kenilworth", "Mount Forest", "Wellington North"],
  },
  {
    slug: "belwood",
    town: "Belwood",
    region: "Ontario",
    distance: "About 15 minutes from Belwood",
    intro: [
      "Belwood is right around the corner from Moe's Barbershop in Erin. Whether you're coming from the lake or the village, we're your close-to-home barber for sharp skin fades, beard lineups, men's and kids' cuts.",
      "It's a short hop down toward Erin — book online to lock in your time, or walk in when a chair is open.",
    ],
    nearby: ["Belwood", "Belwood Lake", "Fergus", "Centre Wellington"],
  },
  {
    slug: "mono",
    town: "Mono",
    region: "Ontario",
    distance: "About 25 minutes from Mono",
    intro: [
      "Mono and Orangeville-area clients make the short trip to Moe's Barbershop in Erin for men's grooming done right. From clean fades to beard lineups and the signature Moe's Haircut, every chair gets the same 5-star care.",
      "Book your appointment online for an easy in-and-out, or walk in when a chair opens up.",
    ],
    nearby: ["Mono", "Orangeville", "Camilla", "Dufferin County"],
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
