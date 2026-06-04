export const site = {
  name: "Moe's Barbershop",
  bookingUrl: "https://moes-barbershop.square.site/",
  phone: "(519) 855-4455",
  phoneHref: "tel:+15198554455",
  email: "moesbarber99@gmail.com",
  address: {
    line1: "99 Trafalgar Rd",
    city: "Erin",
    region: "Ontario",
    postal: "N0B 1Z0",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Moe%27s+Barbershop+99+Trafalgar+Rd+Erin+Ontario",
  instagram: "https://www.instagram.com/moes_barbershopp/",
  rating: "5.0",
  reviewCount: "103",
};

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
