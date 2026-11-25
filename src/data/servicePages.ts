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
  /** Starting price, e.g. "CAD$35". */
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
  /** In-depth blog guides for this cut, linked from the service page. */
  guides?: { slug: string; label: string }[];
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
    priceFrom: "CAD$35",
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
        a: "A Classic Haircut at Moe's Barbershop is CAD$35 and the signature Moe's Haircut is CAD$100. Both include a consultation and a precision cut.",
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
    priceFrom: "CAD$35",
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
        a: "Skin fades start at CAD$35 for a Classic Haircut. A haircut and beard combo with a connected fade is CAD$55.",
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
        a: "A Beard Fade & Lineup at Moe's Barbershop is CAD$30. A combined Haircut & Beard is CAD$55.",
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
    priceFrom: "CAD$55",
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
        a: "The Haircut & Beard combo at Moe's Barbershop is CAD$55 and takes about 30 minutes.",
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
    slug: "curly-hair-haircut",
    title: "Curly Hair Haircuts in Erin, Ontario",
    metaTitle: "Curly Hair Barber Erin",
    metaDescription:
      "Curly hair barber in Erin, Ontario. Curly fades, tapers and textured crops cut for shrinkage and your natural curl pattern at Moe's Barbershop. From CAD$35. Book online.",
    summary:
      "Curly fades, tapers and crops cut for your natural pattern and shrinkage.",
    priceFrom: "CAD$35",
    duration: "20–60 mins",
    image: "/images/cut-curly-fade.jpg",
    bookable: ["Classic Haircut", "Moe's Haircut", "Haircut & Beard"],
    intro: [
      "Curly hair gets cut wrong more than any other type, usually because the barber doesn't allow for shrinkage. At Moe's Barbershop in Erin we look at your curls dry and in their natural state first, then cut the shape you'll actually wear, not the length it looks when it's wet.",
      "The most-requested curly cut is a curly top with a low, mid or drop fade: the sides lose the bulk that makes curls grow outward, and the top keeps its volume. Prefer something softer? A curly taper or a textured crop grows out more gently and needs fewer visits.",
    ],
    highlights: [
      "Curls checked dry before cutting, so shrinkage doesn't surprise you",
      "Curly fades, drop fades and tapers blended through texture",
      "Weight taken out of the sides without frizzing the top",
      "Sharp lineups that frame the curls",
      "Product advice for defining curls at home",
    ],
    faqs: [
      {
        q: "Do you cut curly hair in Erin?",
        a: "Yes. Moe's Barbershop cuts curly, wavy and coily hair every week, from curly fades and drop fades to longer textured crops.",
      },
      {
        q: "How much is a curly haircut?",
        a: "A curly haircut is a Classic Haircut at CAD$35. The full Moe's Haircut with a longer consultation and detailed finish is CAD$100.",
      },
      {
        q: "Should I come in with wet or dry hair?",
        a: "Come in with clean, dry hair in its natural state, without heavy product. That lets the barber see your real curl pattern and shrinkage.",
      },
      {
        q: "What's the best fade for curly hair?",
        a: "A low or drop fade suits most curly hair because it removes bulk at the sides while keeping the curls on top. A mid fade adds more contrast.",
      },
    ],
    keywords:
      "curly hair barber Erin, curly haircut Erin Ontario, curly hair fade, mens curly haircut near me, curly taper",
    guides: [
      { slug: "curly-hair-mens-haircuts", label: "Curly hair haircuts for men" },
      { slug: "taper-vs-fade-haircut", label: "Taper vs fade: which to ask for" },
      { slug: "mens-hair-products-guide", label: "Clay, pomade or cream for curls" },
    ],
  },
  {
    slug: "buzz-cut",
    title: "Buzz Cuts in Erin, Ontario",
    metaTitle: "Buzz Cut Erin, Ontario",
    metaDescription:
      "Buzz cuts in Erin, Ontario: induction, butch and fade buzz cuts at any guard from #0 to #8, finished with a sharp lineup. CAD$35 at Moe's Barbershop. Book online.",
    summary:
      "Any guard from #0 to #8, with an optional fade and a sharp lineup.",
    priceFrom: "CAD$35",
    duration: "20 mins",
    image: "/images/cut-fade.jpg",
    bookable: ["Classic Haircut", "Haircut & Beard"],
    intro: [
      "A buzz cut looks simple, but with no length to hide behind, the guard, the shape and the edges are everything. At Moe's Barbershop we'll help you choose the right guard for your hair and face, then finish with a crisp lineup and a clean neckline, the details that separate a barbershop buzz from a home job.",
      "Going short for the first time? Most people look best at a #3 or #4. Want more shape? A fade buzz takes the sides down to the skin while the top stays at your chosen guard.",
    ],
    highlights: [
      "Any guard length from #0 to #8",
      "Induction, butch, burr and fade buzz cuts",
      "Sharp lineup at the forehead and temples",
      "Clean squared or rounded neckline",
      "Optional beard fade to connect the look",
    ],
    faqs: [
      {
        q: "How much is a buzz cut in Erin?",
        a: "A buzz cut is a Classic Haircut at Moe's Barbershop: CAD$35, about 20 minutes. Add a beard for CAD$55 with the Haircut & Beard combo.",
      },
      {
        q: "What number should I get for a buzz cut?",
        a: "A #3 (about 10 mm) is the most popular all-round buzz, and a #4 (about 13 mm) is the best first buzz. Go shorter next time if you like it.",
      },
      {
        q: "Can I get a buzz cut with a fade?",
        a: "Yes. A fade buzz keeps the top at your guard, for example a #3, and fades the sides down to the skin. It's the most popular way to wear a buzz.",
      },
      {
        q: "How often should I get my buzz cut redone?",
        a: "Every two to three weeks keeps the shape and lineup sharp, especially with a faded side.",
      },
    ],
    keywords:
      "buzz cut Erin Ontario, buzz cut near me, fade buzz cut, buzz cut with lineup, induction cut, barber Erin",
    guides: [
      { slug: "buzz-cut-guide", label: "Buzz cut lengths and styles" },
      { slug: "clipper-guard-numbers-explained", label: "Clipper guard numbers in mm" },
    ],
  },
  {
    slug: "taper-fade",
    title: "Taper Fades in Erin, Ontario",
    metaTitle: "Taper Fade Erin, Ontario",
    metaDescription:
      "Taper and taper fade haircuts in Erin, Ontario. Low tapers, mid tapers and taper fades blended clean at the temples and neckline. CAD$35 at Moe's Barbershop. Book online.",
    summary:
      "Low and mid tapers and taper fades, blended clean at the temples and neckline.",
    priceFrom: "CAD$35",
    duration: "20–60 mins",
    image: "/images/fade.jpg",
    bookable: ["Classic Haircut", "Moe's Haircut", "Haircut & Beard"],
    intro: [
      "A taper shortens the hair gradually at the sideburns and neckline only; a fade takes the whole side down. A taper fade sits between the two: skin or near-skin at the edges, with most of the side length kept. It's the cleanest option if you want a sharp look that grows out gently.",
      "Not sure which one to ask for? Tell us how often you like to get cut and how sharp you want the sides, and we'll recommend a taper, taper fade or full fade at Moe's Barbershop in Erin.",
    ],
    highlights: [
      "Low, mid and high tapers",
      "Taper fades down to the skin at the edges",
      "Works on straight, wavy and curly hair",
      "Grows out more gently than a full fade",
      "Clean lineups and natural or blocked necklines",
    ],
    faqs: [
      {
        q: "What's the difference between a taper and a fade?",
        a: "A taper only shortens the hair at the sideburns and neckline. A fade takes the hair down much higher around the sides and back, often to the skin.",
      },
      {
        q: "Is a taper a skin fade?",
        a: "Not usually. A standard taper leaves some length at the edges. A taper fade takes those edges down to the skin but keeps the rest of the side longer than a skin fade would.",
      },
      {
        q: "How much is a taper fade in Erin?",
        a: "A taper or taper fade is a Classic Haircut at CAD$35. The full Moe's Haircut experience is CAD$100.",
      },
      {
        q: "How long does a taper last?",
        a: "A taper still looks tidy at three to four weeks, about a week longer than a skin fade.",
      },
    ],
    keywords:
      "taper fade Erin Ontario, taper haircut, low taper, mid taper, taper vs fade, barber Erin",
    guides: [
      { slug: "taper-vs-fade-haircut", label: "Taper vs fade, explained" },
      { slug: "skin-fade-guide-erin-ontario", label: "Skin fade guide" },
    ],
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
    priceFrom: "CAD$30",
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
        a: "A Senior Haircut at Moe's Barbershop is CAD$30 and takes about 25 minutes.",
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
