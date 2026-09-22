/**
 * Google Ads tracking (gtag.js) — wired up in src/layouts/Layout.astro.
 *
 * Every click on a booking link, the phone number, a "Get Directions" button
 * or the email address is sent to the Google tag as a named event
 * (booking_click, phone_call_click, directions_click, email_click), which you
 * can use for audiences — and which flow into GA4 automatically if a GA4
 * property is ever linked to this Google tag.
 *
 * A click also counts as a Google Ads conversion when that action has a
 * conversion label below. The label is the part after the slash in the
 * action's send_to value ("AW-18137998706/<label>"): Google Ads → Goals →
 * Conversions → Summary → [conversion action] → Tag setup → "Install the tag
 * yourself". Leave a label empty to record the event without a conversion.
 *
 * Service-specific "Book" buttons (the price list and each service page)
 * also send the service price in CAD as the conversion value. Other booking
 * clicks use the default value set on the conversion action in Google Ads.
 */
export const googleAds = {
  id: "AW-18137998706",
  conversions: {
    /** "Book appointment" — a click on any Square booking link. */
    booking: "fCxWCMGnkqccEPLK78hD",
    /** A click on the shop's phone number (tel: link). */
    call: "",
    /** A click on a "Get Directions" (Google Maps) button. */
    directions: "",
    /** A click on the shop's email address (mailto: link). */
    email: "",
  },
};

/**
 * Regions where Google requires opt-in consent before ad/analytics cookies
 * (EEA, UK, Switzerland). The site has no cookie banner, so Consent Mode
 * defaults to "denied" there and "granted" everywhere else, including Canada.
 */
export const consentRequiredRegions = [
  "AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR",
  "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT",
  "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "GB", "CH",
];

/** "CAD$30.00" / "CAD$30" → 30, for conversion values. */
export function priceValue(price: string): number {
  return Number(price.replace(/[^\d.]/g, ""));
}
