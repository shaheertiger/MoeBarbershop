export const SITE_URL = "https://moesbarbershop.ca";

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

/** schema.org HairSalon / LocalBusiness graph for the homepage. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BarberShop", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    url: SITE_URL,
    image: `${SITE_URL}/logo.svg`,
    logo: `${SITE_URL}/logo.svg`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    currenciesAccepted: "CAD",
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
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.description },
      priceCurrency: "CAD",
      price: s.price.replace(/[^\d.]/g, ""),
    })),
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
