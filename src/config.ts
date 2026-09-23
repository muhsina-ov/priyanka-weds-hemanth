/**
 * ═══════════════════════════════════════════════════════════════
 *  TEMPLATE CONFIG — the ONLY file you edit per client.
 *  Swap names, dates, venue and links → deploy → done.
 * ═══════════════════════════════════════════════════════════════
 */

export interface WeddingEvent {
  id: string;
  label: string;      // small caps label
  title: string;      // script title
  dateLine: string;   // human readable date
  timeLine: string;   // human readable time
  startISO: string;   // ISO 8601 with +05:30 offset (IST)
  endISO: string;
  note?: string;
}

export const invite = {
  // ── Couple ──────────────────────────────────────────────
  brideFirst: "Priyanka",
  groomFirst: "Hemanth",
  brideFull: "Priyanka Perepu",
  groomFull: "Hemanth Nagarikanti",
  monogram: "H · P",
  hashtag: "#HemanthWedsPriyanka",
  greetingTelugu: "శుభ వివాహం",
  greetingEnglish: "Shubha Vivaham",

  // ── Families ────────────────────────────────────────────
  brideParents: "Priyanka Perepu",
  groomParents: "Hemanth Nagarikanti",
  inviteMessage:
    "On this auspicious occasion, with the blessings of our elders, We joyfully invite you and your family to be part of our wedding celebrations, And shower us with your love, blessings and good wishes.",

  // ── Event (IST, +05:30) ─────────────────────────────────
  // One event shown center-stage. To add more (reception,
  // haldi, sangeet…), copy a block back into the array.
  countdownTargetISO: "2026-12-03T08:48:00+05:30",
  countdownLabel: "Until the Muhurtham",
  events: [
    {
      id: "reception",
      label: "Reception",
      title: "Reception",
      dateLine: "Wednesday, 2 December 2026",
      timeLine: "7:00 PM",
      startISO: "2026-12-02T19:00:00+05:30",
      endISO: "2026-12-02T23:00:00+05:30",
      note: "Followed by dinner",
    },
    {
      id: "muhurtham",
      label: "Wedding",
      title: "Muhurtham",
      dateLine: "Thursday, 3 December 2026",
      timeLine: "8:48 AM",
      startISO: "2026-12-03T08:48:00+05:30",
      endISO: "2026-12-03T10:30:00+05:30",
      note: "Sacred knot ceremony",
    },
  ] as WeddingEvent[],

  // ── Venue ───────────────────────────────────────────────
  venueName: "SS Crystal Palace",
  venueShort: "SS Crystal Palace, Gujarathipeta, Srikakulam 532005",
  venueAddress: "Yethapeta, Purushotham Nagar Colony, Gujarathipeta, Srikakulam, Andhra Pradesh 532005",
  // Used for the embedded preview AND the directions link
  mapsQuery: "SS CRYSTAL PALACE, Yethapeta, Purushotham Nagar Colony, Gujarathipeta, Srikakulam, Andhra Pradesh 532005",
  mapsShortUrl: "https://maps.app.goo.gl/vEq5TEczttubrRei8?g_st=iw",

  // ── Footer ──────────────────────────────────────────────
  footerBlessing: "With love & blessings, two families become one",
  creditLine: "Crafted with ♥ by InviteStory · @invitestory.in",
};

// ── Derived helpers ───────────────────────────────────────
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  invite.mapsQuery
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

// Prefer the exact short link shared by the family for directions
export const mapsDirectionsUrl =
  invite.mapsShortUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(invite.mapsQuery)}`;
