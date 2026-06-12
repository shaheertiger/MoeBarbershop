export const SITE_URL = "https://www.moesbarbershop.ca";

export const site = {
  name: "Moe's Barbershop",
  url: SITE_URL,
  bookingUrl: "https://moes-barbershop.square.site/",
  phone: "(519) 855-4455",
  phoneHref: "tel:+15198554455",
  phoneE164: "+15198554455",
  email: "moesbarber99@gmail.com",
  address: {
    line1: "99 Trafalgar Rd",
    city: "Erin",
    region: "Ontario",
    regionCode: "ON",
    postal: "N0B 1Z0",
    country: "CA",
  },
  geo: { lat: 43.783, lng: -80.133 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Moe%27s+Barbershop+99+Trafalgar+Rd+Erin+Ontario",
  instagram: "https://www.instagram.com/moes_barbershopp/",
  rating: "5.0",
  reviewCount: "103",
};

// Maps human day names to schema.org day abbreviations.
const dayCode: Record<string, string> = {
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
  Sunday: "Su",
};

// Converts "9:30 a.m." -> "09:30" (24h) for schema.org openingHours.
function to24h(t: string): string {
  const m = t.match(/(\d+):(\d+)\s*(a|p)/i);
  if (!m) return t;
  let h = parseInt(m[1], 10);
  const min = m[2];
  const pm = m[3].toLowerCase() === "p";
  if (pm && h !== 12) h += 12;
  if (!pm && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${min}`;
}

/** Areas Moe's Barbershop draws clients from — helps local + LLM answers. */
export const areaServed = [
  "Erin, Ontario",
  "Hillsburgh, Ontario",
  "Caledon, Ontario",
  "Orangeville, Ontario",
  "Georgetown, Ontario",
  "Acton, Ontario",
  "Guelph, Ontario",
  "Rockwood, Ontario",
  "Fergus, Ontario",
  "Elora, Ontario",
  "Ballinafad, Ontario",
  "Ospringe, Ontario",
  "Eden Mills, Ontario",
  "Belfountain, Ontario",
  "Inglewood, Ontario",
  "Caledon East, Ontario",
  "Halton Hills, Ontario",
  "Wellington County, Ontario",
];

/** Topics the shop is an authority on — used for schema knowsAbout. */
export const knowsAbout = [
  "Men's haircuts",
  "Skin fades",
  "Beard trimming and lineups",
  "Classic and modern men's grooming",
  "Kids' haircuts",
  "Hot towel straight-razor shaves",
];

/**
 * Full schema.org @graph for the homepage: Organization, HairSalon/
 * LocalBusiness, WebSite, the home WebPage (with speakable), and a
 * breadcrumb. A connected graph reads better for both Google rich
 * results and LLM/AI answer engines.
 */
export function localBusinessJsonLd() {
  const orgId = `${SITE_URL}/#org`;
  const bizId = `${SITE_URL}/#business`;
  const siteId = `${SITE_URL}/#website`;
  const pageId = `${SITE_URL}/#webpage`;
  const moeId = `${SITE_URL}/about#moe`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
        image: `${SITE_URL}/logo.svg`,
        email: site.email,
        telephone: site.phoneE164,
        founder: { "@id": moeId },
        sameAs: [site.instagram, site.bookingUrl],
      },
      {
        "@type": ["HairSalon", "BarberShop", "LocalBusiness"],
        "@id": bizId,
        name: site.name,
        description:
          "Moe's Barbershop is a 5-star men's barbershop in Erin, Ontario offering classic haircuts, skin fades, beard fades and lineups, kids' cuts and straight-razor shaves.",
        url: SITE_URL,
        image: [`${SITE_URL}/images/hero-barbershop.jpg`, `${SITE_URL}/logo.svg`],
        logo: `${SITE_URL}/logo.svg`,
        telephone: site.phoneE164,
        email: site.email,
        priceRange: "$$",
        currenciesAccepted: "CAD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        slogan: "Sharp cuts. Classic vibes.",
        parentOrganization: { "@id": orgId },
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
        areaServed: areaServed.map((name) => ({ "@type": "City", name })),
        knowsAbout,
        sameAs: [site.instagram, site.bookingUrl],
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book an appointment",
          target: {
            "@type": "EntryPoint",
            urlTemplate: site.bookingUrl,
            inLanguage: "en-CA",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: { "@type": "Reservation", name: "Barbershop appointment" },
        },
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
        employee: { "@id": moeId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Barbershop Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            priceCurrency: "CAD",
            price: s.price.replace(/[^\d.]/g, ""),
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              serviceType: "Barbering",
              provider: { "@id": bizId },
              areaServed: areaServed.map((name) => ({ "@type": "City", name })),
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": moeId,
        name: "Moe",
        jobTitle: "Owner & Master Barber",
        worksFor: { "@id": bizId },
        knowsAbout,
        image: `${SITE_URL}/logo.svg`,
        url: `${SITE_URL}/about`,
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: site.name,
        inLanguage: "en-CA",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: SITE_URL,
        name: "Moe's Barbershop | Barber in Erin, Ontario",
        isPartOf: { "@id": siteId },
        about: { "@id": bizId },
        primaryImageOfPage: `${SITE_URL}/images/hero-barbershop.jpg`,
        inLanguage: "en-CA",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".section-title", ".hero-lead", ".faq-item"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ],
      },
    ],
  };
}

export { dayCode, to24h };

export const hours = [
  { day: "Monday", open: "9:30 a.m.", close: "7:00 p.m." },
  { day: "Tuesday", open: "9:30 a.m.", close: "7:00 p.m." },
  { day: "Wednesday", open: "9:30 a.m.", close: "7:00 p.m." },
  { day: "Thursday", open: "9:30 a.m.", close: "7:00 p.m." },
  { day: "Friday", open: "9:30 a.m.", close: "7:00 p.m." },
  { day: "Saturday", open: "9:30 a.m.", close: "5:00 p.m." },
  { day: "Sunday", open: "9:30 a.m.", close: "5:00 p.m." },
];

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
}

export const services: Service[] = [
  {
    name: "Moe's Haircut",
    description:
      "Moe's signature service — professional, stylish results tailored to you. Each appointment includes a consultation and precision cut designed to enhance your look.",
    price: "CAD$100.00",
    duration: "1 hr",
  },
  {
    name: "Haircut & Beard",
    description: "Stylish grooming, professional appearance, easy maintenance.",
    price: "CAD$50.00",
    duration: "30 mins",
  },
  {
    name: "Classic Haircut",
    description: "Timeless style, professional look, versatile choice.",
    price: "CAD$30.00",
    duration: "20 mins",
  },
  {
    name: "Beard Fade & Lineup",
    description:
      "Precise grooming with sharp beard shaping and clean edges tailored to your style. Book for a fresh, polished look.",
    price: "CAD$30.00",
    duration: "20 mins",
  },
  {
    name: "Senior Haircut",
    description: "Professional styling, gentle on scalp, modern look.",
    price: "CAD$25.00",
    duration: "25 mins",
  },
  {
    name: "Kids Haircut",
    description:
      "Fun and stylish hairstyles in a comfortable, child-friendly environment.",
    price: "CAD$25.00",
    duration: "20 mins",
  },
  {
    name: "Kids Haircut + Design",
    description: "Fun designs, kid-friendly, professional results.",
    price: "CAD$30.00",
    duration: "30 mins",
  },
  {
    name: "Threading",
    description: "Precise shaping, long-lasting results, gentle on skin.",
    price: "CAD$10.00",
    duration: "5 mins",
  },
  {
    name: "Wax",
    description: "Smooth application, long-lasting shine, versatile usage.",
    price: "CAD$15.00",
    duration: "15 mins",
  },
];
