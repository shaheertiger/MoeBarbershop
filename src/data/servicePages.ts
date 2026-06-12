import { SITE_URL, areaServed } from "./site";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePage {
  /** URL slug under /services/. */
  slug: string;
  /** Page <h1> and schema service name. */
  title: string;
  /** Short <title>/meta + card label. */
  metaTitle: string;
  metaDescription: string;
  /** One-line summary shown on the services index card. */
  summary: string;
  /** Starting price, e.g. "CAD$30". */
  priceFrom: string;
  duration: string;
  /** Hero image in /public/images. */
  image: string;
  /** Booking-page service deep-links / matching catalogue names. */
  bookable: string[];
  /** Long-form intro paragraphs. */
  intro: string[];
  /** "What's included" / detail bullets. */
  highlights: string[];
  /** Page-specific FAQs (also emitted as FAQPage JSON-LD). */
  faqs: ServiceFaq[];
  /** Comma-separated keyword string for the meta keywords tag. */
  keywords: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "mens-haircut",
    title: "Men's Haircuts in Erin, Ontario",
    metaTitle: "Men's Haircut Erin, Ontario",
    metaDescription:
      "Men's haircuts at Moe's Barbershop in Erin, Ontario. Classic cuts, modern styles and the signature Moe's Haircut — consultation, precision cut and finish. Book online.",
    summary:
      "Classic and modern men's cuts, finished with detail and a consultation every time.",
    priceFrom: "CAD$30",
    duration: "20–60 mins",
    image: "/images/haircut.jpg",
    bookable: ["Moe's Haircut", "Classic Haircut"],
    intro: [
      "Looking for a men's haircut in Erin, Ontario? Moe's Barbershop delivers precision cuts tailored to your hair type, face shape and lifestyle. Whether you want a clean classic taper, a textured crop or a sharp modern style, every cut starts with a quick consultation so you leave with exactly the look you came for.",
      "Our signature Moe's Haircut is the full experience — an unhurried consultation, a precision cut and a detailed finish. Prefer something quick and timeless? The Classic Haircut keeps it sharp and simple. Either way you get the same 5-star attention that's earned us 100+ five-star Google reviews.",
    ],
    highlights: [
      "Personal consultation before every cut",
      "Classic, fade, textured and modern styles",
      "Precision detailing and clean necklines",
      "Hot-towel finish on the signature service",
      "Walk-ins welcome when chairs are open",
    ],
    faqs: [
      {
        q: "How much is a men's haircut in Erin?",
        a: "A Classic Haircut at Moe's Barbershop is CAD$30 and the signature Moe's Haircut is CAD$100. Both include a consultation and a precision cut.",
      },
      {
        q: "How long does a men's haircut take?",
        a: "A Classic Haircut takes about 20 minutes, while the full Moe's Haircut experience runs up to an hour.",
      },
      {
        q: "Do I need to book or can I walk in?",
        a: "We welcome walk-ins when a chair is open, but booking online guarantees your spot.",
      },
    ],
    keywords:
      "men's haircut Erin Ontario, barber Erin, classic haircut, modern haircut Erin, men's barber near me",
  },
  {
    slug: "skin-fade",
    title: "Skin Fades in Erin, Ontario",
    metaTitle: "Skin Fade Erin, Ontario",
    metaDescription:
      "Skin fades and bald fades at Moe's Barbershop in Erin, Ontario. Low, mid, high, burst and drop fades blended razor-clean. Rated 5.0 on Google. Book online today.",
    summary:
      "Low, mid, high, burst and drop fades blended seamlessly down to the skin.",
    priceFrom: "CAD$30",
    duration: "20–60 mins",
    image: "/images/fade.jpg",
    bookable: ["Moe's Haircut", "Classic Haircut", "Haircut & Beard"],
    intro: [
      "A skin fade is all about the blend — and a clean blend is where Moe's Barbershop shines. We cut low, mid, high, burst and drop fades, taking the hair seamlessly down to the skin for that razor-sharp finish that holds its shape for weeks.",
      "Not sure which fade suits you? We'll recommend the right height and style for your face shape, hair type and how often you like to get cut. Pair your fade with a beard lineup for a fully connected, polished look.",
    ],
    highlights: [
      "Low, mid, high, burst and drop fades",
      "Seamless skin / bald fade blending",
      "Fade matched to your face shape and upkeep",
      "Optional beard fade to connect the look",
      "Sharp lineups and edge-ups",
    ],
    faqs: [
      {
        q: "How much is a skin fade in Erin, Ontario?",
        a: "Skin fades start at CAD$30 for a Classic Haircut. A haircut and beard combo with a connected fade is CAD$50.",
      },
      {
        q: "Which fade should I get?",
        a: "It depends on your face shape and how often you cut. We'll guide you between a low, mid, high, burst or drop fade at your consultation — and you can read our full skin fade guide on the blog.",
      },
      {
        q: "How often should I get a skin fade refreshed?",
        a: "Most clients come back every 2–3 weeks to keep a skin fade looking sharp, since the shortest hair grows out fastest.",
      },
    ],
    keywords:
      "skin fade Erin Ontario, bald fade, low fade, mid fade, high fade, burst fade, drop fade, fade haircut near me",
  },
  {
    slug: "beard-trim-and-lineup",
    title: "Beard Trims, Fades & Lineups in Erin, Ontario",
    metaTitle: "Beard Trim & Lineup Erin",
    metaDescription:
      "Beard trims, beard fades and sharp lineups at Moe's Barbershop in Erin, Ontario. Clean edges, defined shape and a polished finish. Book your beard appointment online.",
    summary:
      "Sharp beard shaping, clean edges and beard fades tailored to your face.",
    priceFrom: "CAD$30",
    duration: "20 mins",
    image: "/images/beard-trim.jpg",
    bookable: ["Beard Fade & Lineup", "Haircut & Beard"],
    intro: [
      "A great beard is all in the edges. At Moe's Barbershop in Erin, we shape, trim and line up your beard with crisp cheek and necklines, then blend it into a clean beard fade for a finished, intentional look.",
      "Whether you're growing it out or keeping it tight, we tailor the shape to your jaw and face so your beard frames your face the way it should. Add it to a haircut for the full Haircut & Beard combo.",
    ],
    highlights: [
      "Precise beard shaping and sculpting",
      "Sharp cheek and neckline definition",
      "Beard fades blended into your haircut",
      "Hot-towel prep for a clean finish",
      "Style advice for growing out a beard",
    ],
    faqs: [
      {
        q: "How much is a beard trim and lineup?",
        a: "A Beard Fade & Lineup at Moe's Barbershop is CAD$30. A combined Haircut & Beard is CAD$50.",
      },
      {
        q: "Can I get my beard and haircut done together?",
        a: "Yes — the Haircut & Beard combo gives you a fresh cut and a fully connected beard fade and lineup in one 30-minute appointment.",
      },
      {
        q: "How do I keep my beard sharp between visits?",
        a: "Brush daily, condition the hair, and tidy stray neckline hairs. See our beard grooming guide on the blog for a full routine.",
      },
    ],
    keywords:
      "beard trim Erin Ontario, beard lineup, beard fade, beard shaping near me, barber beard trim Erin",
  },
  {
    slug: "haircut-and-beard",
    title: "Haircut & Beard Combo in Erin, Ontario",
    metaTitle: "Haircut & Beard Combo Erin",
    metaDescription:
      "Get a fresh haircut and a sharp beard lineup together at Moe's Barbershop in Erin, Ontario. One appointment, fully connected look. Book your combo online.",
    summary:
      "A fresh cut and a connected beard fade and lineup in one appointment.",
    priceFrom: "CAD$50",
    duration: "30 mins",
    image: "/images/cut-beard-profile.jpg",
    bookable: ["Haircut & Beard"],
    intro: [
      "The Haircut & Beard combo is the easiest way to walk out looking completely put together. We cut and style your hair, then shape and line up your beard so the two flow into each other for a connected, intentional finish.",
      "It's our most popular service for a reason — stylish results, a professional appearance and easy upkeep, all in a single 30-minute visit to Moe's Barbershop in Erin, Ontario.",
    ],
    highlights: [
      "Haircut and beard styled together",
      "Connected beard fade for a seamless look",
      "Sharp lineups on hair and beard",
      "Done in a single 30-minute appointment",
      "Great value versus booking separately",
    ],
    faqs: [
      {
        q: "How much is a haircut and beard together?",
        a: "The Haircut & Beard combo at Moe's Barbershop is CAD$50 and takes about 30 minutes.",
      },
      {
        q: "Is the combo cheaper than booking separately?",
        a: "Yes — combining your haircut and beard in one appointment saves time and money versus two separate visits.",
      },
    ],
    keywords:
      "haircut and beard Erin Ontario, haircut beard combo, men's grooming Erin, barber near me",
  },
  {
    slug: "kids-haircut",
    title: "Kids' Haircuts in Erin, Ontario",
    metaTitle: "Kids Haircut Erin, Ontario",
    metaDescription:
      "Kids' haircuts at Moe's Barbershop in Erin, Ontario. Fun, stylish cuts in a comfortable, child-friendly chair — plus haircut + design. Book your child's cut online.",
    summary:
      "Fun, stylish kids' cuts in a relaxed, child-friendly chair — plus designs.",
    priceFrom: "CAD$25",
    duration: "20–30 mins",
    image: "/images/cut-comb-fade.jpg",
    bookable: ["Kids Haircut", "Kids Haircut + Design"],
    intro: [
      "Bringing the kids in? Moe's Barbershop makes children's haircuts easy and fun. We keep little clients comfortable and relaxed while delivering a stylish, neat cut that parents love and kids are excited to show off.",
      "Want something extra? Add a Kids Haircut + Design for a custom shaved pattern that makes the chair the best seat in town.",
    ],
    highlights: [
      "Patient, child-friendly barbers",
      "Stylish, age-appropriate cuts",
      "Optional custom hair designs",
      "Quick 20–30 minute appointments",
      "A relaxed first-haircut experience",
    ],
    faqs: [
      {
        q: "How much is a kids' haircut in Erin?",
        a: "A Kids Haircut is CAD$25, and a Kids Haircut + Design is CAD$30.",
      },
      {
        q: "What age do you cut?",
        a: "We cut all ages, including first haircuts. Just let us know and we'll keep your child comfortable in the chair.",
      },
      {
        q: "Can my child get a design?",
        a: "Absolutely — the Kids Haircut + Design includes a custom shaved pattern of their choice.",
      },
    ],
    keywords:
      "kids haircut Erin Ontario, children's haircut, kids barber near me, kids hair design Erin",
  },
  {
    slug: "senior-haircut",
    title: "Senior Haircuts in Erin, Ontario",
    metaTitle: "Senior Haircut Erin, Ontario",
    metaDescription:
      "Senior haircuts at Moe's Barbershop in Erin, Ontario. Professional, gentle styling and a modern, comfortable cut at a senior-friendly price. Book online.",
    summary:
      "Professional, gentle styling with a comfortable, modern finish.",
    priceFrom: "CAD$25",
    duration: "25 mins",
    image: "/images/cut-side-part.jpg",
    bookable: ["Senior Haircut"],
    intro: [
      "Our Senior Haircut offers professional styling with a gentle, comfortable approach. We take the time to get the cut right, keep it easy on the scalp, and finish with a clean, modern look.",
      "It's everything you expect from Moe's Barbershop — careful detail and a sharp finish — at a senior-friendly price.",
    ],
    highlights: [
      "Gentle, unhurried service",
      "Easy on the scalp and skin",
      "Clean, modern finish",
      "Senior-friendly pricing",
      "Walk-ins welcome when chairs are open",
    ],
    faqs: [
      {
        q: "How much is a senior haircut in Erin?",
        a: "A Senior Haircut at Moe's Barbershop is CAD$25 and takes about 25 minutes.",
      },
      {
        q: "Do I need an appointment?",
        a: "Walk-ins are welcome when a chair is open, but booking online guarantees your time.",
      },
    ],
    keywords:
      "senior haircut Erin Ontario, senior barber, men's haircut Erin, barber near me",
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

/** Service + FAQ JSON-LD graph for a single service landing page. */
export function servicePageJsonLd(s: ServicePage) {
  const url = `${SITE_URL}/services/${s.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: s.title,
      serviceType: "Barbering",
      description: s.metaDescription,
      url,
      image: `${SITE_URL}${s.image}`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: areaServed.map((name) => ({ "@type": "City", name })),
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        price: s.priceFrom.replace(/[^\d.]/g, ""),
        availability: "https://schema.org/InStock",
        url: "https://moes-barbershop.square.site/",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: s.title, item: url },
      ],
    },
  ];

  if (s.faqs.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return graph;
}
