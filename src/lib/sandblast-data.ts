export const SANDBLAST = {
  calendlyDropInUrl: 'https://calendly.com/unifygym/sandblast-dropin',
  fivePackUrl: 'https://calendly.com/unifygym/sandblast-5pack',
  dropInPrice: 35,
  fivePackPrice: 150,
  schedule: 'Saturdays · 8:00 AM',
  duration: '45 minutes',
  seasonStart: 'June 13',
  seasonDates: 'All summer long · Every Saturday starting June 13 · 8:00 AM',
  location: 'Glencoe Beach, Glencoe, IL',
  locationNote:
    'Between the boardwalk and the shoreline. Look for the Unify Fitness flag.',
  coach: 'Nikita',
  mapsQuery: 'Glencoe Beach, Glencoe, IL 60022',
  tagline: 'Blast into summer with this beachfront total-body workout.',
  partner: 'Glencoe Park District',
  seasonEndDate: '2026-09-01',
} as const;

export const SCHEDULE_DETAILS = [
  { label: 'When', value: `${SANDBLAST.seasonDates} · weather permitting` },
  { label: 'Duration', value: SANDBLAST.duration },
  { label: 'Where', value: SANDBLAST.location },
  { label: 'Meeting spot', value: SANDBLAST.locationNote },
  { label: 'Coach', value: SANDBLAST.coach },
  { label: 'Price', value: `$${SANDBLAST.dropInPrice} drop-in · $${SANDBLAST.fivePackPrice} 5-pack` },
] as const;

export const WHATS_INCLUDED = [
  {
    title: 'Total-Body Bootcamp',
    description:
      'A 45-minute beachfront workout on the sand: strength and cardio combined, with a fresh mix every week.',
  },
  {
    title: 'Equipment Provided',
    description:
      'Kettlebells, resistance bands, slam balls, and sprint work. Everything you need is brought to the beach.',
  },
  {
    title: 'All Levels Welcome',
    description:
      'Every move can be modified. Whether you are new to fitness or training hard, Sandblast meets you where you are.',
  },
  {
    title: 'Expert Coaching',
    description: `Led by coach ${SANDBLAST.coach}: high energy, great form, and Lake Michigan as your backdrop.`,
  },
] as const;

export const sandblastEvent = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Sandblast',
  description:
    'A 45-minute beachfront total-body bootcamp on the sand at Glencoe Beach. Strength and cardio, all levels welcome. Saturdays at 8:00 AM, weather permitting.',
  startDate: '2026-06-13T08:00:00-05:00',
  eventSchedule: {
    '@type': 'Schedule',
    repeatFrequency: 'P1W',
    byDay: 'https://schema.org/Saturday',
    startTime: '08:00',
    endTime: '08:45',
  },
  location: {
    '@type': 'Place',
    name: 'Glencoe Beach',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Glencoe',
      addressRegion: 'IL',
      postalCode: '60022',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.135,
      longitude: -87.76,
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Unify Fitness',
    url: 'https://unifygym.com',
  },
  offers: {
    '@type': 'Offer',
    price: SANDBLAST.dropInPrice.toString(),
    priceCurrency: 'USD',
    url: SANDBLAST.calendlyDropInUrl,
    availability: 'https://schema.org/InStock',
  },
};

export const SANDBLAST_FAQ = [
  {
    question: 'What should I bring?',
    answer:
      'Come prepared for sun, sand, and sweat. Bring a water bottle (or two), a towel for afterward, and sunscreen applied before you arrive. There is limited shade on the sand. Wear athletic shoes you do not mind getting sandy; barefoot is fine for parts of the workout if you prefer. A small bag for keys and phone works well. Most importantly, bring a friend. Everything is more fun with company.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Wear comfortable workout clothes you can move in: shorts or leggings, a breathable top, and supportive athletic shoes. Layers are smart for cool Saturday mornings on the lakefront. Sunglasses and a hat are optional but recommended. Avoid heavy cotton that stays wet; moisture-wicking fabric is ideal. You will be on sand, so skip your nicest gear.',
  },
  {
    question: 'What if it rains or the weather is bad?',
    answer:
      'Sandblast runs weather permitting. If conditions are unsafe (heavy rain, storms, extreme heat advisories, or high lake conditions), we cancel the session. Cancellations are posted to the Unify Fitness Instagram (@unifyfitness) as early as possible, and anyone registered through Calendly receives a direct notification. When in doubt, check Instagram Saturday morning before heading out.',
  },
  {
    question: 'Do I need experience? Who is this for?',
    answer:
      'No prior experience required. Sandblast is built for all levels: beginners, gym regulars, and athletes alike. Coach Nikita demonstrates every movement and offers modifications so you can push hard or scale back as needed. Expect a mix of strength and cardio: kettlebells, bands, slam balls, sprints, and more. The workout changes weekly, so it stays fresh whether it is your first session or your tenth.',
  },
  {
    question: 'Where do I park and how do I find the group?',
    answer:
      'Glencoe Beach has street and lot parking nearby. Arrive a few minutes early on summer weekends, as it can fill up. Head to the sand between the boardwalk and the shoreline and look for the Unify Fitness flag where the group meets. If you are unsure, check your booking confirmation or DM us on Instagram. We start promptly at 8:00 AM so you have time to settle in.',
  },
  {
    question: 'Is a waiver required?',
    answer:
      'Participation may require a Glencoe Park District waiver in addition to your Unify Fitness booking. If a waiver is needed, we will send instructions when you register or have you complete it on-site before class. Please arrive a few minutes early if it is your first time so we can get you checked in without cutting into the workout.',
  },
  {
    question: 'How do drop-ins and the 5-pack work?',
    answer: `Drop-ins are $${SANDBLAST.dropInPrice} per session. Book and pay online through Calendly before you arrive. The 5-pack is $${SANDBLAST.fivePackPrice} (save $${SANDBLAST.dropInPrice * 5 - SANDBLAST.fivePackPrice} vs. five separate drop-ins) and is ideal if you plan to come regularly all summer. After purchasing, reserve your Saturday spots through the same booking flow. Sessions are non-transferable; see refund details below.`,
  },
  {
    question: 'What is the refund and cancellation policy?',
    answer:
      'Bookings follow the Calendly cancellation policy shown at checkout. If we cancel due to weather, registered participants are notified and can reschedule for a future Saturday. For payment or scheduling questions, contact Unify Fitness directly. We are happy to help you find another date that works.',
  },
] as const;
