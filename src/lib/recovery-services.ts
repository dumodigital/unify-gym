import type { BookableId } from '@/lib/recovery-data';

export const SQUARE_LOCATION_ID = 'LP8RPRW0SCATN';
export const SQUARE_TEAM_MEMBER_ID = 'TM5Vo-3txTBmGqSR';

export type RecoveryServiceFlow = 'booking' | 'purchase';

export type RecoveryServiceKey =
  | 'novapod-single'
  | 'sauna-dropin'
  | 'kore-session'
  | 'kore-intro'
  | 'novapod-5pack'
  | 'novapod-10pack'
  | 'kore-pack'
  | 'sauna-unlimited';

export type RecoveryService = {
  key: RecoveryServiceKey;
  displayName: string;
  priceFormatted: string;
  priceCents: number;
  serviceVariationId: string;
  flow: RecoveryServiceFlow;
};

export const RECOVERY_SERVICES: Record<RecoveryServiceKey, RecoveryService> = {
  'novapod-single': {
    key: 'novapod-single',
    displayName: 'NovaPod Single',
    priceFormatted: '$150',
    priceCents: 15000,
    serviceVariationId: 'IZEAHBXD7P5EYQSK3OZASFVR',
    flow: 'booking',
  },
  'sauna-dropin': {
    key: 'sauna-dropin',
    displayName: 'Sauna Drop-In',
    priceFormatted: '$29',
    priceCents: 2900,
    serviceVariationId: 'P4NPRQYTCXUZ7NCRVD37ATIG',
    flow: 'booking',
  },
  'kore-session': {
    key: 'kore-session',
    displayName: 'Kore Session',
    priceFormatted: '$150',
    priceCents: 15000,
    serviceVariationId: 'MMD542UMBHEEG5Z3A2WHJTZQ',
    flow: 'booking',
  },
  'kore-intro': {
    key: 'kore-intro',
    displayName: 'Kore Intro Session',
    priceFormatted: '$89',
    priceCents: 8900,
    serviceVariationId: '3TPDS6RRDZCQNWRHBWYHX6XO',
    flow: 'booking',
  },
  'novapod-5pack': {
    key: 'novapod-5pack',
    displayName: 'NovaPod 5-Pack',
    priceFormatted: '$700',
    priceCents: 70000,
    serviceVariationId: '7HHK4OSKLGAE555URSMP5MJ4',
    flow: 'purchase',
  },
  'novapod-10pack': {
    key: 'novapod-10pack',
    displayName: 'NovaPod 10-Pack',
    priceFormatted: '$1,200',
    priceCents: 120000,
    serviceVariationId: 'M6W23YUZSJ7ZLROSPWSTEUUG',
    flow: 'purchase',
  },
  'kore-pack': {
    key: 'kore-pack',
    displayName: 'Kore 10+1 Pack',
    priceFormatted: '$1,500',
    priceCents: 150000,
    serviceVariationId: 'BA6GE5L33KMWUUXSVLYYOB6A',
    flow: 'purchase',
  },
  'sauna-unlimited': {
    key: 'sauna-unlimited',
    displayName: 'Sauna Unlimited',
    priceFormatted: '$250',
    priceCents: 25000,
    serviceVariationId: 'YR4C6ZEHKLNVVLEAOB2CP6EK',
    flow: 'purchase',
  },
};

export const BOOKABLE_SERVICE_KEY: Record<BookableId, RecoveryServiceKey> = {
  'novapod-single': 'novapod-single',
  'novapod-5pack': 'novapod-5pack',
  'novapod-10pack': 'novapod-10pack',
  'sauna-dropin': 'sauna-dropin',
  membership: 'sauna-unlimited',
  'kore-single': 'kore-session',
  'koretherm-single': 'kore-session',
  'kore-pack': 'kore-pack',
  'kore-intro': 'kore-intro',
};

export function getRecoveryService(key: string) {
  return RECOVERY_SERVICES[key as RecoveryServiceKey] ?? null;
}

export function getServiceByVariationId(serviceVariationId: string) {
  return (
    Object.values(RECOVERY_SERVICES).find(
      (service) => service.serviceVariationId === serviceVariationId
    ) ?? null
  );
}
