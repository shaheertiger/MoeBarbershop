export const faqs = [
  {
    q: "Where is Moe's Barbershop located?",
    a: "Moe's Barbershop is at 99 Trafalgar Rd in Erin, Ontario (N0B 1Z0), serving Erin, Hillsburgh, and the surrounding communities.",
  },
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "We welcome walk-ins when chairs are open, but the easiest way to guarantee your spot is to book online through our Square booking page.",
  },
  {
    q: "What services does Moe's Barbershop offer?",
    a: "We offer classic haircuts, skin fades, beard fades and lineups, haircut & beard combos, senior cuts, kids' cuts and designs, threading, and waxing.",
  },
  {
    q: "How much is a haircut at Moe's Barbershop?",
    a: "A classic haircut is CAD$30, a haircut & beard combo is CAD$50, and kids' cuts start at CAD$25. See the full price list in our Services section.",
  },
  {
    q: "What are your hours?",
    a: "We're open Monday to Friday 9:30 a.m. to 7:00 p.m., and Saturday and Sunday 9:30 a.m. to 5:00 p.m.",
  },
  {
    q: "Do you cut kids' hair?",
    a: "Yes. We offer kids' haircuts in a comfortable, child-friendly environment, plus kids' haircut and design for something extra fun.",
  },
];

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
