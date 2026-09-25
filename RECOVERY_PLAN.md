# Unify Recovery Landing Page — Creative Brief & Build Plan

> Paste into Cursor **Plan mode**, review, run **Agent mode**. This is a **strategy + structure + copy brief with hard requirements** — not line-by-line code. **You (Cursor) have full latitude on component structure, styling, animation, and layout details. Match the existing site's patterns and make good design decisions within this direction.** Build a genuinely high-converting, premium page.

---

## Objective

A premium, high-converting landing page at **`unifygym.com/recovery`** for **Unify Recovery**, a wellness sub-brand inside Unify Gym. It educates on unfamiliar, premium services and converts visitors into booked sessions and members. Every service books & pays on the page via **Square** (this is the "Option 2" build).

**Conversion thesis (important):** these services are premium and unfamiliar, so the page is **education-first**. Teach and build desire *before* showing the full price menu. Funnel everyone toward one low-friction hook — the **$50 First Visit** — and ascend buyers to the **$299/mo Unlimited membership**. Keep a soft CTA in the hero for the ready-to-buy, and a **sticky "Book" button** the whole way down.

---

## Where it lives
- **Nav:** add a permanent **"Recovery"** link to the main menu (follow the pattern the Sandblast link used — standalone `<li>`, desktop + mobile).
- **Homepage:** add a **Recovery feature/callout** section (after Services) linking to `/recovery`.
- **URL / route:** `/recovery` (new App Router page + layout).

---

## Section order (education-first — build in this order)
1. **Hero** — positioning promise + soft "$50 First Visit" CTA + trust line.
2. **Why recovery matters** — the outcomes (recover faster, reduce inflammation, sleep, stress, energy).
3. **Service deep dives** — NovaPod (six therapies), ClearLight Sauna, KoreSCULPT, KoreTHERM. What each is, how it works, benefits. Build desire. Each ends in its own CTA.
4. **The experience** — private suite, chilled eucalyptus towel, filtered water, Bluetooth. Justifies the premium.
5. **Why Unify Recovery + authority + testimonials** — state-of-the-art tech, expert-run (Dr. Joe's proven NovaPod results), real proof. Earn trust *before* price.
6. **The menu (pricing cards)** — now prices land on built value. Each card → its own Square link.
7. **Membership anchor** — "Go Unlimited — $299/mo," styled as best value.
8. **FAQ** — objection handling (reuse the membership `FAQItem` accordion pattern).
9. **Final CTA + location** — inside Unify Gym, map embed (reuse `Map.tsx` pattern), book.

Plus a **sticky/persistent "Book" CTA** so anyone can act the moment they're convinced.

---

## Card behavior (hard requirement)
Card rows — the **pricing/menu cards** and the **six NovaPod therapy cards** — must be **horizontal, never stacked**, on both desktop and mobile:
- **Desktop:** horizontal row, side by side.
- **Mobile:** a **horizontal swipe carousel** (scroll-snap), each card ~80–85% of viewport width so the next card **peeks**, with snap-to-card and dots or arrows. Do **not** collapse to a vertical stack on mobile.
Implement it cleanly (CSS scroll-snap is fine); your call on the exact mechanism, but the behavior above is required.

---

## The offer (services, grouped) + pricing
**Recovery & Wellness**
- **NovaPod** — six therapies (Infrared Heat, Red & Near-Infrared Light, Lymphatic Vibration Massage, Magnetic Balance, Deepwave/mobility, Oxygen-Ion Air). Pricing: **First Visit $50 · Single $120 · 10 + 1 Free $1,200**. (Packages non-transferable, expire 12 months.)
- **ClearLight Infrared Sauna** — warms the body directly, not the air. Pricing: **Drop-In $39 · Unlimited Membership $299/mo**.

**Body & Aesthetics** (Joe's two new devices)
- **KoreSCULPT™** — Tissue Sculpting & Lymphatic Flow. Contours, smooths, and tightens (thighs, hips, stomach, arms); stimulates lymphatic drainage; breaks up fibrous tissue/cellulite; non-invasive with immediate visible changes; feels like a deep-tissue massage without the discomfort; ~30 min per area. Pricing: **TBD** (collect at meeting).
- **KoreTHERM™** — "Fire & Ice" Metabolic Activation. Alternating heat and cold to trigger a rapid metabolic response; targets stubborn fat (abdomen, thighs, love handles); combines thermal contrast with muscle stimulation; supports fat metabolism and tissue tightening; non-invasive, 30-min sessions. Pricing: **TBD** (collect at meeting).

Each service/package = a card with name, one-line benefit, price, and a **Book** button → its own Square link.

---

## Copy direction (use this voice; refine as needed)
- **Hero eyebrow:** NOW OPEN · GLENCOE · INSIDE UNIFY GYM
- **Hero H1:** "The North Shore's Most Advanced Recovery Studio."
- **Hero subhead:** "Infrared sauna, full-body NovaPod therapy, and results-driven body sculpting — in one private suite."
- **Hero CTA:** "Claim Your First Visit — $50" · trust line: "No membership required · Book in 60 seconds"
- **Section hooks:** "Recovery isn't a luxury. It's a lifestyle." · "Six advanced therapies. One incredible experience." · "Feel the difference of true infrared." · KoreSCULPT: "Sculpt, smooth, and tighten — no downtime." · KoreTHERM: "Fire and ice. Rapid metabolic activation."
- **Voice:** calm, confident, second-person, outcomes over specs, short lines.

---

## Conversion levers to build in
- **Social proof** early (rating + a quote) and a fuller testimonials block before the menu. Use placeholders now; real ones come from the client.
- **Risk reversal** — the $50 trial is the risk-remover; frame it as a no-brainer.
- **Scarcity** — private suite = limited daily slots; intro/"founding" pricing is time-limited. Both true.
- **Authority** — Dr. Joe's proven, repeat-client NovaPod results.
- **Simplicity** — a "How it works: Book → Come in → Recover" strip.
- **Repeated + sticky CTA** throughout.

---

## Square booking (config-driven; wire after the client call)
- Create a config (e.g., `src/lib/recovery-data.ts`) holding each bookable item's price + Square URL, with URLs as empty placeholders (TODO). A booking button reads from it: empty URL → a clean "Booking coming soon" state; filled → live. Structure so wiring the real links/embed is a small, isolated change.
- **How the cards work:** each pricing/menu card's **Book button is the entry point** — clicking it opens **Square's embedded booking/checkout on the page** (a modal or inline expand) so the client pays **without leaving the site** (this is the whole point of Option 2). Don't render a full checkout inside every card at once; open it on click. The exact embed style (modal vs. inline) is confirmed once we have Square API access and can see their booking product — build the button now as the placeholder, isolated so the real embed drops in cleanly.
- Bookable items (each its own link): NovaPod First Visit / Single / 10+1; Sauna Drop-In / Membership; KoreSCULPT; KoreTHERM.
- Real Square **API access + named links** are collected on the client call, then dropped in.

---

## Assets (reality: we don't have clean ones yet)
- The client's zip is just the flattened brochure as one PNG — not usable as components. Build with **`<ImagePlaceholder>`** (reuse `src/components/sandblast/ImagePlaceholder.tsx`) and/or tasteful licensed stock (Unsplash/Pexels).
- Prefer real photos of *their* actual equipment/suite once available; use generic ambience stock only for mood. Real photos + testimonials are the top asks at the client meeting.
- Final assets live in `public/content/recovery/`.

---

## Look & feel
Match the current site (dark base, Oswald display + Inter, existing components and motion), but warm the Recovery body with an **infrared "glow" accent** (amber/red) for the spa feel; the aesthetics devices can read a touch more clinical. Premium = generous whitespace, large type, few colors, consistent moody imagery, subtle motion. **Reuse** `Header`, `Footer`, `Section`, the `FAQItem` accordion, `Map.tsx`, motion variants, and `StructuredData` (pass a **unique id**, e.g. `recovery-schema`, to avoid colliding with the global one).

---

## Mobile-first (hard requirement)
Design at 375px first; verify 375 / 768 / 1280. No horizontal page scroll (the card carousels are the only intentional horizontal scroll). Tap targets ≥44px, CTAs full-width where appropriate, headlines scale down cleanly.

---

## FAQ (starter set — refine)
Do I need to be a gym member? (No) · Where is it? (Inside Unify Gym) · What do I wear/bring? · How often should I come? · Is it safe / contraindications? (see the infrared safety one-pager) · NovaPod vs. sauna? · KoreSCULPT vs. KoreTHERM — which is for me? · Do packages expire? (12 months) · How do I cancel/pause the membership? · How do I pay? (On the page.)

---

## SEO
`/recovery/layout.tsx` metadata: title "Unify Recovery — Infrared Sauna, NovaPod & Body Sculpting in Glencoe, IL | Unify Fitness", matching description + keywords. `/recovery` auto-added to sitemap on build.

---

## What Cursor decides (latitude)
Component breakdown, file organization, exact Tailwind/styling, animation choices, carousel implementation, spacing, and micro-copy polish are **yours** — build it to match the project's existing conventions and quality. This brief owns strategy, section order, offer, copy direction, and the hard requirements (education-first order, $50 core offer, horizontal non-stacked cards, sticky CTA, config-driven Square placeholders, mobile-first).

---

## Pending (collected on the client call → then finish & launch)
- **Square API access** + **final named links** for all items (incl. the two Kore devices).
- **Pricing for KoreSCULPT and KoreTHERM.**
- **2–3 testimonials** and **real equipment/suite photos.**
- Confirm Square **payment is enabled**.
Then: fill the links / embed booking, drop real assets, test the full flow, send the review link, launch.
