export type BookableId =
  | 'novapod-single'
  | 'novapod-5pack'
  | 'novapod-10pack'
  | 'sauna-dropin'
  | 'membership'
  | 'kore-single'
  | 'koretherm-single'
  | 'kore-pack'
  | 'kore-intro';

export type OfferBadge = 'MOST POPULAR' | 'NEW' | 'BEST VALUE';

export type Bookable = {
  id: BookableId;
  name: string;
  benefit: string;
  priceLabel: string;
  /** Square hosted URL. Collected on the client call. Never iframe this. */
  squareUrl: string;
  highlight?: boolean;
  subtle?: boolean;
  badge?: OfferBadge;
  compareAtPrice?: string;
  savings?: string;
  unitPrice?: string;
  group: 'wellness' | 'aesthetics' | 'membership';
  note?: string;
};

/**
 * Square URLs stay empty until the client call.
 * After that: drop the official Appointments embed / Web Payments SDK into BookingEmbed.
 * Fallback is open-in-new-tab, never an iframe of the hosted checkout URL.
 */
export const BOOKABLES: Record<BookableId, Bookable> = {
  'novapod-single': {
    id: 'novapod-single',
    name: 'Single',
    benefit: 'One full-body session.',
    priceLabel: '$150',
    squareUrl: '',
    group: 'wellness',
  },
  'novapod-5pack': {
    id: 'novapod-5pack',
    name: '5-Pack',
    benefit: 'Five full-body sessions.',
    priceLabel: '$700',
    compareAtPrice: '$750',
    squareUrl: '',
    badge: 'MOST POPULAR',
    highlight: true,
    group: 'wellness',
  },
  'novapod-10pack': {
    id: 'novapod-10pack',
    name: '10-Pack',
    benefit: 'Ten full-body sessions.',
    priceLabel: '$1,200',
    compareAtPrice: '$1,500',
    squareUrl: '',
    badge: 'BEST VALUE',
    highlight: true,
    group: 'wellness',
  },
  'sauna-dropin': {
    id: 'sauna-dropin',
    name: 'Drop-In',
    benefit: 'One infrared sauna session.',
    priceLabel: '$29',
    squareUrl: '',
    group: 'wellness',
  },
  membership: {
    id: 'membership',
    name: 'Unlimited Sauna Membership',
    benefit: 'Unlimited infrared sauna, come as often as you want.',
    priceLabel: '$250/mo',
    squareUrl: '',
    badge: 'BEST VALUE',
    highlight: true,
    group: 'membership',
  },
  'kore-single': {
    id: 'kore-single',
    name: 'KoreSCULPT Single',
    benefit: 'One KoreSCULPT session.',
    priceLabel: '$150',
    squareUrl: '',
    group: 'aesthetics',
  },
  'koretherm-single': {
    id: 'koretherm-single',
    name: 'KoreTHERM Single',
    benefit: 'One KoreTHERM session.',
    priceLabel: '$150',
    squareUrl: '',
    group: 'aesthetics',
  },
  'kore-pack': {
    id: 'kore-pack',
    name: '10 + 1 Pack',
    benefit: '11 sessions, buy 10 get 1 free, use on either machine.',
    priceLabel: '$1,500',
    compareAtPrice: '$1,650',
    squareUrl: '',
    badge: 'BEST VALUE',
    highlight: true,
    group: 'aesthetics',
  },
  'kore-intro': {
    id: 'kore-intro',
    name: 'Introductory Session',
    benefit: 'One KoreSCULPT or KoreTHERM session.',
    priceLabel: '$89',
    squareUrl: '',
    group: 'aesthetics',
  },
};

export const NOVAPOD_MENU: BookableId[] = [
  'novapod-single',
  'novapod-5pack',
  'novapod-10pack',
];

export const SAUNA_MENU: BookableId[] = ['sauna-dropin'];

export const SCULPTING_MENU: BookableId[] = [
  'kore-single',
  'koretherm-single',
  'kore-pack',
];

export const MEMBERSHIP_PERKS = [
  'Unlimited ClearLight infrared sauna',
  'No session counting',
  'No gym membership required',
] as const;

export const NOVAPOD_THERAPIES = [
  {
    title: 'Infrared Heat Therapy',
    icon: 'Flame',
    description:
      'Penetrating warmth helps relax muscles, improve circulation and promote detoxification.',
  },
  {
    title: 'Red & Near-Infrared Light',
    icon: 'Sun',
    description:
      'Supports cellular repair, reduces inflammation and promotes healthier skin.',
  },
  {
    title: 'Lymphatic Vibration Massage',
    icon: 'Waves',
    description:
      'Encourages lymphatic drainage to reduce fluid retention and support detoxification.',
  },
  {
    title: 'Magnetic Balance Therapy',
    icon: 'Magnet',
    description:
      "Helps relax muscles, improve circulation and support the body's natural healing process.",
  },
  {
    title: 'Deepwave Therapy',
    icon: 'Activity',
    description:
      'Designed to improve mobility, ease discomfort and promote deep tissue recovery.',
  },
  {
    title: 'Oxygen Ion Air Therapy',
    icon: 'Wind',
    description:
      'Creates a refreshing, purified environment that promotes relaxation and supports healthy breathing.',
  },
] as const;

export const RECOVERY_OUTCOMES = [
  {
    title: 'Recover Faster',
    description: 'Walk out looser than you walked in, ready for the next session.',
  },
  {
    title: 'Reduce Inflammation',
    description: 'Infrared heat and light work below the surface, where soreness lives.',
  },
  {
    title: 'Improve Sleep',
    description: 'Calm the nervous system that deep, restful sleep depends on.',
  },
  {
    title: 'Reduce Stress',
    description: 'Time in a private suite, away from the noise, to reset.',
  },
  {
    title: 'Increase Energy',
    description: 'Better circulation and less stiffness. You leave ready, not drained.',
  },
  {
    title: 'Feel Your Best',
    description: 'Look better, move better, and feel like yourself again.',
  },
] as const;

export const EXPERIENCE_DETAILS = [
  {
    title: 'Private Recovery Suite',
    icon: 'Home',
    description: 'Your own space, reserved just for you.',
  },
  {
    title: 'Fresh Chilled Eucalyptus Towel',
    icon: 'Leaf',
    description: 'A cool, calming finish to every session.',
  },
  {
    title: 'Filtered Water',
    icon: 'Droplet',
    description: 'Hydrate before and after, on us.',
  },
  {
    title: 'Bluetooth Entertainment',
    icon: 'Bluetooth',
    description: 'Your music, your podcast, your reset.',
  },
  {
    title: 'Clean, Spa-Like Environment',
    icon: 'Sparkles',
    description: 'Immaculate, calm, and designed to relax.',
  },
] as const;

export const WHY_REASONS = [
  {
    title: 'Premium Technology',
    description: "State-of-the-art recovery equipment you won't find anywhere else.",
  },
  {
    title: 'Personalized Experience',
    description: 'Private suites and tools to meet your individual recovery goals.',
  },
  {
    title: 'Clean, Modern Environment',
    description: 'Designed to help you relax, reset and recharge.',
  },
  {
    title: 'For Every Lifestyle',
    description:
      'Perfect for athletes, active adults, busy professionals and anyone who wants to feel their best.',
  },
] as const;

export const RECOVERY_FAQ = [
  {
    question: 'Do I need to be a Unify Gym member to book?',
    answer:
      'No. Unify Recovery is open to everyone. You do not need a Unify Gym membership to book any service.',
  },
  {
    question: 'What happens on my first visit?',
    answer:
      'Your first visit starts with a quick consultation. We get to know your goals, walk you through your options, and match you with the right service so you get the most out of every session.',
  },
  {
    question: 'Should I start with the NovaPod, the infrared sauna, or body sculpting?',
    answer:
      'It depends on your goal. Choose the NovaPod for full-body recovery, the infrared sauna to relax, detox, and unwind, and KoreSCULPT or KoreTHERM to shape and tighten. Not sure? Start with a quick consultation and we will point you to the right fit.',
  },
  {
    question: "What's the difference between KoreSCULPT and KoreTHERM?",
    answer:
      'Both are non-invasive body treatments. KoreSCULPT sculpts, smooths, and tightens by stimulating lymphatic flow and breaking down stubborn tissue. KoreTHERM uses alternating heat and cold to fire up your metabolism and target stubborn fat. Your pack works on either one, so you can mix and match.',
  },
  {
    question: 'How often should I come to feel a difference?',
    answer:
      'It depends on the service and your goals. Some people feel the relaxation and recovery right away, while bigger goals build with consistent sessions over time. We will recommend a simple schedule based on what you choose.',
  },
  {
    question: 'How soon will I see results?',
    answer:
      'Everyone responds differently. Relaxation and that refreshed, recovered feeling can be immediate, while body sculpting and longer-term goals come with consistency over several sessions. Results vary from person to person.',
  },
  {
    question: "Is it safe, and is there anyone who shouldn't use it?",
    answer:
      'Yes, our services are safe when used as directed. Before your first session we review a short health and safety questionnaire. Some conditions, such as pregnancy, pacemakers or implants, heat sensitivity, or recent procedures, may need medical clearance or make a particular service a poor fit. When in doubt, just ask us.',
  },
  {
    question: 'What should I wear and bring?',
    answer:
      'Just come in comfortable clothing. Depending on the service you may change or adjust for the session, and we provide a private changing area and towels. We take care of the rest.',
  },
  {
    question: 'What does the sauna membership include, and does it cover the NovaPod?',
    answer:
      'The membership covers unlimited ClearLight infrared sauna, come as often as you like with no session counting. The NovaPod and body sculpting are booked separately and are not included in the sauna membership.',
  },
  {
    question: 'Do packages expire, and how do the monthly and annual memberships work if I want to pause or cancel?',
    answer:
      'We ask for 24 hours notice to cancel or reschedule a session. The sauna membership is a simple month-to-month unlimited plan. Reach out to our team anytime with questions about your membership or a package.',
  },
] as const;

export const recoverySchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': 'https://unifygym.com/recovery#business',
  name: 'Unify Recovery',
  description:
    'Infrared sauna, full-body NovaPod therapy, and results-driven body sculpting in a private suite inside Unify Gym in Glencoe, IL.',
  url: 'https://unifygym.com/recovery',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Unify Fitness',
    url: 'https://unifygym.com',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '664 Vernon Avenue',
    addressLocality: 'Glencoe',
    addressRegion: 'IL',
    postalCode: '60022',
    addressCountry: 'US',
  },
  telephone: '+12245229040',
  areaServed: ['Glencoe', 'Winnetka', 'Highland Park', 'North Shore', 'Chicago'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Unify Recovery Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'NovaPod Single Session',
        price: '150',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'NovaPod 5-Pack',
        price: '700',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'NovaPod 10-Pack',
        price: '1200',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'ClearLight Infrared Sauna Drop-In',
        price: '29',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Unlimited Infrared Sauna Membership',
        price: '250',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '250',
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
      },
      {
        '@type': 'Offer',
        name: 'KoreSCULPT Single Session',
        price: '150',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'KoreTHERM Single Session',
        price: '150',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'KoreSCULPT and KoreTHERM 10 + 1 Pack',
        price: '1500',
        priceCurrency: 'USD',
      },
    ],
  },
};
