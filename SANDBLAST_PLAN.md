# Sandblast Landing Page — Build Plan (Cursor-ready)

> Paste this into Cursor **Plan mode**, review, then run **Agent mode**. It's an executable spec: exact file paths, real copy, conventions pulled from the existing codebase, and **labeled placeholder blocks for every image** so Charlie can drop in real photos later. **Mobile-first is a hard requirement — every section must look great at 375px.**

---

## 0. Context & goal

Build a seasonal landing page for **Sandblast**, Unify Fitness's summer beachfront workout, plus a homepage callout and a nav link that funnel to it. The page links out to **Calendly** for booking + payment. Keep the dark site chrome (Header/Footer), warm the page body with a beachy palette.

**Do NOT use real image files.** Every image is a styled **`<ImagePlaceholder>`** that visibly describes what photo goes there (subject, orientation, mobile crop, recommended size). Charlie swaps them for `<Image>` later.

**Event facts (source of truth — from the flyer):**
- Name: **SANDBLAST** by Unify Fitness
- Tagline: "Blast into summer with this beachfront total body workout."
- Format: 45-minute, all-levels, total-body bootcamp on the sand. Strength + cardio, changes weekly. Coach: **Nikita**. Kettlebells, resistance bands, slam balls, sprints.
- When: **Saturdays, 8:00 AM**, season **starts June 13**, weather permitting.
- Where: **Glencoe Beach** (between the boardwalk and the shoreline), Glencoe, IL.
- Price: **$35 drop-in** / **5-pack $150**.
- Partner: **In collaboration with Glencoe Park District.**
- Brand line: *Adventure. Fitness. Community.*
- Use domain **unifygym.com** everywhere (the flyer's "unifyfitness.com" is wrong).

---

## 1. Workflow

Build on a working branch so it's easy to preview/revert:
```
git checkout -b sandblast-landing
# build per this plan
git push -u origin sandblast-landing   # Vercel auto-creates a Preview URL to send Melissa
```
After approval, merge to `main`. To retire after summer: delete the nav link + the `<SandblastCallout />` line (the `/sandblast` route can stay dormant).

---

## 2. Tech & conventions (match existing code — verified)

- Next.js 16 App Router, React 19, TypeScript. Client components start with `'use client'`.
- Animation: `framer-motion` (used in service pages), `gsap`, smooth scroll via `lenis`. **Reuse the motion variants** from `src/app/services/boxing/page.tsx`: `fadeInUp`, `staggerChildren`, `scaleIn`, `slideFromLeft`, `slideFromRight`. Use `SplitText` (`src/components/home/SplitText.tsx`) for the hero headline.
- Reuse layout primitives: `Header`, `Footer`, `Section` (`src/components/site/Section.tsx`), `StructuredData`.
- Icons: `lucide-react` (already installed).
- **Confirmed Tailwind tokens** (`tailwind.config.ts`):
  - Colors: `primary = #00C2FF` (ocean cyan), `accent = #7BB9E8`, `overlay.40 / .60 / .25`, full `neutral` scale.
  - Fonts: `font-display` = Oswald, `font-sans` = Inter.
  - `tracking-wide2` = 0.12em. Backgrounds: `bg-diag-dark`, `bg-soft-light`.
  - Custom class `btn-ghost` (white-outline button) defined in `src/styles/globals.css`.

### Sandblast accent palette (page body only)
Use arbitrary Tailwind values (no config change needed), or optionally add to `theme.extend.colors`:
- ocean `#00C2FF` (= existing primary) · deep navy `#0A2E4D` · sand `#F4E2B8` · coral `#FF7A59`
- Sky→sand vertical gradients between sections. Coral = energy/CTA/"Best Value" accents.

---

## 3. Central content config — `src/lib/sandblast-data.ts`

Single source of truth for links/prices/dates:
```ts
export const SANDBLAST = {
  calendlyDropInUrl: "https://calendly.com/unifygym/sandblast-dropin", // TODO: real link
  fivePackUrl: "https://calendly.com/unifygym/sandblast-5pack",        // TODO: real link or Stripe
  dropInPrice: 35,
  fivePackPrice: 150,
  schedule: "Saturdays · 8:00 AM",
  duration: "45 minutes",
  seasonStart: "June 13",
  location: "Glencoe Beach, Glencoe, IL",
  locationNote: "Between the boardwalk and the shoreline — look for the Unify Fitness flag.",
  coach: "Nikita",
  mapsQuery: "Glencoe Beach, Glencoe, IL 60022",
} as const;
```
All CTAs/schedule/price text read from this object.

---

## 4. The ImagePlaceholder component (build this FIRST)

Create **`src/components/sandblast/ImagePlaceholder.tsx`**. It renders a dashed, gradient box that **shows the description on screen** so Charlie knows exactly what to shoot/source and where it goes. Fully responsive (fills its container).

```tsx
import { ImageIcon } from 'lucide-react';

type Props = {
  /** What the photo should be, e.g. "Group mid-workout on the sand, kettlebells overhead" */
  label: string;
  /** Aspect ratio utility, e.g. "aspect-[16/9]" | "aspect-square" | "aspect-[4/5]" */
  ratio?: string;
  /** Recommended export size, e.g. "2400×1350" */
  dims?: string;
  /** Mobile-specific guidance, e.g. "Keep subject centered — sides crop on mobile" */
  mobileNote?: string;
  /** Badge text, e.g. "FULL-WIDTH" | "INSET" | "MOBILE HERO" */
  tag?: string;
  className?: string;
  /** Final path to use when swapping in the real image (shown as a hint) */
  swapTo?: string;
};

export default function ImagePlaceholder({
  label, ratio = 'aspect-[16/9]', dims, mobileNote, tag, className = '', swapTo,
}: Props) {
  return (
    <div
      className={`relative w-full ${ratio} overflow-hidden rounded-2xl border-2 border-dashed border-[#00C2FF]/50 bg-gradient-to-br from-[#0A2E4D] via-[#0c3a5e] to-[#00C2FF]/20 ${className}`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      {tag && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#FF7A59] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {tag}
        </span>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="h-7 w-7 text-white/70" />
        <p className="max-w-[90%] text-sm font-semibold leading-snug text-white">{label}</p>
        {dims && <p className="text-xs text-white/60">Recommended: {dims}</p>}
        {mobileNote && <p className="text-xs text-[#F4E2B8]">📱 {mobileNote}</p>}
        {swapTo && <p className="mt-1 text-[10px] text-white/40">Swap with: {swapTo}</p>}
      </div>
    </div>
  );
}
```
> When Charlie has real photos, he replaces each `<ImagePlaceholder .../>` with a `next/image` `<Image fill className="object-cover" .../>` inside a wrapper of the same aspect ratio. Keep the `swapTo` paths consistent (`/content/sandblast/...`).

---

## 5. File checklist

**Create:**
- `src/lib/sandblast-data.ts`
- `src/components/sandblast/ImagePlaceholder.tsx`
- `src/app/sandblast/page.tsx`
- `src/app/sandblast/layout.tsx` (SEO metadata — mirror `services/boxing/layout.tsx`)
- `src/components/sandblast/Hero.tsx`
- `src/components/sandblast/Facts.tsx`
- `src/components/sandblast/About.tsx`
- `src/components/sandblast/Pricing.tsx`
- `src/components/sandblast/Gallery.tsx`
- `src/components/sandblast/Location.tsx`
- `src/components/sandblast/FAQ.tsx`
- `src/components/sandblast/FinalCTA.tsx`
- `src/components/home/SandblastCallout.tsx`

**Edit:**
- `src/app/page.tsx` — add `<SandblastCallout />` after `<Hero />`
- `src/components/site/Header.tsx` — add highlighted "Sandblast" link (desktop + mobile)

No image files needed — placeholders only.

---

## 6. Homepage callout — `SandblastCallout.tsx`

Placed in `src/app/page.tsx` **immediately after `<Hero />`, before `<Brand />`**.
- Full-bleed `<ImagePlaceholder>` background (see image list §11) with a dark→cyan gradient overlay for legibility.
- Eyebrow `SUMMER OFFERING` (coral). Headline `SANDBLAST` (`font-display`). Sub: "A 45-minute beachfront workout at Glencoe Beach. Saturdays, 8 AM."
- CTA: `Link href="/sandblast"` → "Explore Sandblast →".
- `fadeInUp` on view. **Mobile:** min-h ~60vh, centered text, headline scales `text-4xl sm:text-6xl`, CTA full-width on `xs`.

---

## 7. Nav link — `Header.tsx`

Add a **standalone highlighted link** (don't use the `nav` array — it's rendered via `nav.slice()` and is fragile).

**Desktop** — after the Membership dropdown `</li>`, before `nav.slice(3)`:
```tsx
<li>
  <Link href="/sandblast" prefetch
    className="rounded-full bg-primary/15 px-3 py-1.5 text-primary ring-1 ring-primary/40 hover:bg-primary hover:text-neutral-900 transition-colors">
    ☀ Sandblast
  </Link>
</li>
```
**Mobile menu** — after the Membership submenu `</li>`: same link as a styled mobile `<li>` matching the others, with the cyan highlight and `onClick={() => setMobileMenuOpen(false)}`.

---

## 8. Landing page sections — `src/app/sandblast/page.tsx`

```
<Header />
<main>
  <Hero/> <Facts/> <About/> <Pricing/> <Gallery/> <Location/> <FAQ/> <FinalCTA/>
</main>
<Footer />
<StructuredData type="event" data={sandblastEvent} />   // see §10
```

### 8.1 Hero
- `min-h-[90vh]` (`min-h-[80vh]` on mobile). Full-bleed background `ImagePlaceholder` + dark gradient overlay; subtle parallax/Ken-Burns (respect `prefers-reduced-motion`).
- Eyebrow (coral): `SUMMER OFFERING · UNIFY FITNESS × GLENCOE PARK DISTRICT`.
- Headline **SANDBLAST** via `SplitText`, `text-5xl sm:text-7xl lg:text-8xl font-display`.
- Sub: "A beachfront total-body workout on the shore of Glencoe Beach."
- Fact chips: `Saturdays 8 AM` · `45 min` · `All levels` (wrap to 2 lines on mobile).
- Primary CTA **Reserve Your Spot** → `calendlyDropInUrl` (new tab). Secondary **See the workout** (scroll to About). **Buttons stack full-width on mobile.**

### 8.2 Facts bar
Animated tiles (`staggerChildren`), `sand` background, dark text. Icons (`Calendar, Clock, Users, MapPin, Sun, CloudSun`):
`Saturdays · 8:00 AM` | `45-minute session` | `All levels welcome` | `Glencoe Beach` | `Starts June 13` | `Weather permitting`.
**Mobile:** 2-column grid; desktop: 3–6 across.

### 8.3 About
Two-column (image + text) → **single column on mobile, image first**. `slideFromLeft/Right` (disable x-slide on mobile to avoid overflow).
Heading: **Blast into summer**
Body:
> Packed with fun, sun, and sweat, Sandblast is a 45-minute total-body workout right on the sand at Glencoe Beach. Led by coach Nikita, every week brings a fresh mix of strength and cardio — kettlebells, resistance bands, slam balls, sprints, and more. All levels are welcome, the energy is high, and Lake Michigan is your backdrop. Bring a friend and start your Saturday with a blast.

### 8.4 Pricing
Two cards, `scaleIn` → **stack on mobile**:
- **Drop-In — $35** · "One session. All levels. Reserve and pay online." → **Reserve** (`calendlyDropInUrl`).
- **5-Pack — $150** · coral `BEST VALUE` badge · "Five sessions — save $25 vs. drop-in." → **Get the 5-Pack** (`fivePackUrl`).
> **5-Pack note (pending — §13):** Calendly has no punch-card/multi-use feature. Keep the placeholder link; final is likely a Stripe Payment Link or in-person. UI unchanged either way.

### 8.5 Gallery
Responsive grid of placeholders (real event photos later). **Mobile:** 1–2 cols; desktop: 3–4. Lazy-load, `object-cover`, rounded, hover zoom.

### 8.6 Location
- Heading **Find us on the sand**; body = `SANDBLAST.locationNote`.
- Google Maps embed for `mapsQuery` — reuse the iframe pattern from `src/components/home/Map.tsx` (swap the `q=` to `Glencoe Beach, Glencoe, IL 60022`, keep the "tap to open" mobile overlay).
- Supporting `ImagePlaceholder`s (beach/lake ambiance).
- Partner: "In collaboration with **Glencoe Park District**" + a small logo placeholder.

### 8.7 FAQ / Good to know
Accordion or list:
- **What to bring:** water, towel, sunscreen — and a friend.
- **What if it rains?** Runs weather permitting; cancellations posted to Instagram / sent to registrants.
- **Experience needed?** None — all levels, every move can be modified.
- **Waiver:** A Glencoe Park District waiver may be required (pending — §13).
- **Refunds:** Per the Calendly booking policy.

### 8.8 Final CTA
Full-width coral→ocean gradient band: "Ready to blast into summer?" → **Reserve Your Spot** (`calendlyDropInUrl`). Button full-width on mobile.

---

## 9. Image placeholder list (what Charlie will shoot/source)

Each is an `<ImagePlaceholder>` with these props:

| Section | label | tag | ratio | dims | mobileNote | swapTo |
|---|---|---|---|---|---|---|
| Homepage callout | "Energetic group shot on the beach, Unify flag visible" | FULL-WIDTH | `aspect-[16/9]` md, `aspect-[4/5]` mobile | 2400×1350 | "Center the group — sides crop on phones" | `/content/sandblast/hero.jpg` |
| Hero | "Hero action shot — class mid-rep on the sand, lake behind" | FULL-WIDTH | `aspect-[16/9]` | 2600×1463 | "Subject centered/upper-third; text overlays bottom" | `/content/sandblast/hero.jpg` |
| About | "Coach Nikita leading / close-up of effort (kettlebell, band)" | INSET | `aspect-[4/5]` | 1200×1500 | "Vertical crops best on mobile" | `/content/sandblast/about.jpg` |
| Gallery ×4–6 | "Candid moments: sprints, slam balls, smiles, sunrise" | — | `aspect-square` | 1200×1200 | "Square works everywhere" | `/content/sandblast/gallery-N.jpg` |
| Location ×3 | "Glencoe Beach scenery / boardwalk / Lake Michigan" | — | `aspect-[3/2]` | 1600×1067 | — | `/content/sandblast/location-N.jpg` |
| Location partner | "Glencoe Park District logo (transparent PNG)" | LOGO | `aspect-[3/1]` | 600×200 | — | `/content/sandblast/partner-glencoe-park-district.png` |

(Numbers/counts are flexible — these are slots, not hard requirements.)

---

## 10. SEO + structured data
- `layout.tsx`: title "Sandblast — Beachfront Summer Workout at Glencoe Beach | Unify Fitness", matching description, keywords (sandblast, Glencoe Beach workout, beach bootcamp, summer fitness Glencoe).
- Add **Event** JSON-LD via `StructuredData` (extend it to accept an `event` type, or pass `data`): `@type "Event"`, name "Sandblast", recurring Saturdays/`startDate`, `location` Glencoe Beach (PostalAddress + geo ~42.135, -87.760), `organizer` Unify Fitness, `offers` $35 USD with the Calendly url.
- `/sandblast` auto-added to sitemap on build (next-sitemap `postbuild`).

---

## 11. Mobile-first requirements (HARD REQUIREMENT — applies to every section)
- Design at **375px first**, scale up. Test at 375 / 768 / 1280.
- All multi-column layouts **stack to one column** on mobile; images go first in stacked order.
- Headlines scale down (`text-4xl` → `text-7xl` via responsive prefixes); no text overflow or horizontal scroll.
- **Tap targets ≥44px** (matches existing buttons); CTAs go **full-width** on mobile.
- Disable x-axis slide animations on mobile (they cause overflow); prefer fade/translate-y. Respect `prefers-reduced-motion`.
- Placeholders keep aspect ratio and never exceed viewport width.
- Sticky/overlay text always has enough contrast over images (gradient scrims).

---

## 12. QA checklist (before sending the preview link)
- [ ] `/sandblast` renders; all 8 sections present; no console errors.
- [ ] Every image is a labeled placeholder with a readable description.
- [ ] Homepage callout appears after Hero and links to `/sandblast`.
- [ ] "Sandblast" nav link works + highlighted on desktop **and** mobile.
- [ ] All CTAs open the right Calendly links in a new tab.
- [ ] **No horizontal scroll at 375px**; everything stacks cleanly.
- [ ] Prices/dates pull from `sandblast-data.ts` and match the flyer.
- [ ] Lighthouse mobile pass is reasonable.

---

## 13. Decisions still pending (don't block the build)
- **5-Pack mechanism:** Stripe Payment Link vs in-person vs Calendly event type. UI built; swap `fivePackUrl` later.
- **Waiver:** Does Glencoe Park District require a signed waiver? Confirm with Melissa.
- **Real Calendly URLs:** replace placeholders once Melissa builds the event(s).
- **Real images:** swap placeholders for `/content/sandblast/*`.
- **Unify Recovery:** out of scope — paused.
```
