# Unify Recovery — Open Items (what we still need before launch)

Running list. Update as items close. These are the things NOT yet in hand that block a full launch.

## Talking points for the client call (present as a RECOMMENDATION, their decision)
- **We kept your prices, we're only recommending a structure change.** All prices are yours from the brochure (First Visit $50, Single $120, 10+1 Pack $1,200, Drop-In $39, Membership $299). We are not changing pricing on our own.
- **The one thing we flag:** a public $50 "first visit" sitting next to a $120 single is confusing, and online there's no way to control it. Anyone could keep re-booking the $50, and Square can't tell who is actually a new client.
- **Our recommendation:** keep the $50 first visit, but make it a **one-time new-client offer (a coupon code)** rather than a permanent public button. The public menu stays clean (Single $120, Pack $1,200, Drop-In $39, Membership $299), new clients get the $50 via a code you control, and there's no confusion. Frame it to them as "here's what we think works best, what do you think?"
- **Membership clarification:** the $299/month unlimited membership is for the **ClearLight infrared sauna only**. It does NOT include NovaPod. NovaPod is its own path (Single or the 11-pack). The page makes this clear so there's no confusion at checkout.
- **Open pricing question for them:** whether to keep the single at $120 or adjust (their call, not ours).

## From the client (collect on the call)
- [ ] **Square API access** — an access token, or add us as a limited user, to wire on-page booking/checkout.
- [ ] **Final named Square links** for every bookable item:
  - [ ] NovaPod — First Visit ($50)
  - [ ] NovaPod — Single Session ($120)
  - [ ] NovaPod — 10 + 1 Pack ($1,200)
  - [ ] ClearLight Sauna — Drop-In ($39)
  - [ ] ClearLight Sauna — Unlimited Membership ($299/mo)
  - [ ] KoreSCULPT
  - [ ] KoreTHERM
- [ ] **Confirm Square payment is enabled** (they said it still needed setting up).
- [ ] **KoreSCULPT pricing** (TBD — not on the brochure).
- [ ] **KoreTHERM pricing** (TBD — not on the brochure).
- [ ] ~~Testimonials~~ — DROPPED (client has none; no testimonials section on the page).
- [ ] **Decide the hero rating** — hero still shows a PLACEHOLDER "4.92/5 · Loved by 500+ members." Either use their real Google rating (the gym shows 5.0) or remove the rating line before launch. Do not ship a made-up number.
- [ ] **Confirm the $50 First Visit scope** — is it NovaPod-only (per the brochure) or a general intro to any first Recovery service? Affects the hero/CTAs.
- [ ] Confirm who to feature in the **authority** section (Dr. Joe Ethan and/or the owners) + a short quote.

## Real photography needed (swap out placeholders)
> Plan: source tasteful stock for what we can before the preview; request from the client only what stock can't cover. Decide at the end, before client preview.
- [ ] NovaPod unit (real product photo)
- [ ] ClearLight infrared sauna (real interior)
- [ ] KoreSCULPT device / treatment in use
- [ ] KoreTHERM device / treatment in use
- [ ] Recovery suite / experience (private suite, eucalyptus towel, etc.)
- [ ] A strong hero lifestyle image (currently using a gym stock placeholder)

## Have in hand ✓
- Unify Recovery badge logo (PNG) — in `public/content/recovery/recovery-badge.png`
- All brochure copy (services, six NovaPod therapies, sauna copy, amenities, why-choose, taglines)
- NovaPod + sauna pricing
- KoreSCULPT + KoreTHERM benefit copy (from the device sheets)
- Location + contact (664 Vernon Ave, unifyrecovery@gmail.com)

## Build-side TODO (our side, after client call)
- [ ] Build the Menu/pricing section (id="menu") so all "Book Now" CTAs resolve
- [ ] Fill Square URLs in `recovery-data.ts` + swap BookButton to the real Square embed
- [ ] Swap all placeholder images for real/stock, remove placeholder comments
- [ ] Final QA (mobile 375px, no horizontal scroll, carousels, no dashes)
