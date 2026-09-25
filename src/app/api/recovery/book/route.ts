import { NextResponse } from 'next/server';
import {
  SQUARE_LOCATION_ID,
  SQUARE_TEAM_MEMBER_ID,
  getRecoveryService,
} from '@/lib/recovery-services';
import { squareErrorMessage, squareJson } from '@/lib/square-server';

export const dynamic = 'force-dynamic';

type Buyer = {
  givenName?: string;
  familyName?: string;
  email?: string;
  phone?: string;
};

type CatalogObject = {
  object?: {
    version?: number | string;
    item_variation_data?: {
      service_duration?: number;
    };
  };
};

type CustomerSearch = {
  customers?: { id?: string }[];
};

type CustomerCreate = {
  customer?: { id?: string };
};

type PaymentCreate = {
  payment?: { id?: string };
};

type BookingCreate = {
  booking?: { id?: string; start_at?: string };
};

function locationId() {
  return process.env.SQUARE_LOCATION_ID || SQUARE_LOCATION_ID;
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return phone.trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function findOrCreateCustomer(buyer: Required<Buyer>) {
  const search = await squareJson<CustomerSearch>('/v2/customers/search', {
    method: 'POST',
    body: JSON.stringify({
      query: {
        filter: {
          email_address: {
            exact: buyer.email,
          },
        },
      },
    }),
  });

  if (!search.ok) {
    return {
      ok: false as const,
      status: search.status,
      error: squareErrorMessage(search.body, 'Could not look up your customer profile.'),
      square: search.body,
    };
  }

  const existingId = search.body.customers?.[0]?.id;
  if (existingId) {
    return { ok: true as const, customerId: existingId };
  }

  const created = await squareJson<CustomerCreate>('/v2/customers', {
    method: 'POST',
    body: JSON.stringify({
      given_name: buyer.givenName,
      family_name: buyer.familyName,
      email_address: buyer.email,
      phone_number: normalizePhone(buyer.phone),
    }),
  });

  if (!created.ok || !created.body.customer?.id) {
    return {
      ok: false as const,
      status: created.status,
      error: squareErrorMessage(created.body, 'Could not create your customer profile.'),
      square: created.body,
    };
  }

  return { ok: true as const, customerId: created.body.customer.id };
}

export async function POST(request: Request) {
  let payload: {
    serviceKey?: string;
    startAt?: string;
    sourceId?: string;
    buyer?: Buyer;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const service = getRecoveryService(payload.serviceKey ?? '');
  if (!service) {
    return NextResponse.json({ error: 'Unknown service.' }, { status: 400 });
  }

  const givenName = payload.buyer?.givenName?.trim() ?? '';
  const familyName = payload.buyer?.familyName?.trim() ?? '';
  const email = payload.buyer?.email?.trim().toLowerCase() ?? '';
  const phone = payload.buyer?.phone?.trim() ?? '';
  const sourceId = payload.sourceId?.trim() ?? '';
  const startAt = payload.startAt?.trim() ?? '';

  if (!givenName || !familyName || !isEmail(email) || phone.replace(/\D/g, '').length < 10) {
    return NextResponse.json(
      { error: 'Please enter a valid first name, last name, email, and phone number.' },
      { status: 400 }
    );
  }

  if (!sourceId) {
    return NextResponse.json({ error: 'Card details are missing. Please try again.' }, { status: 400 });
  }

  if (service.flow === 'booking' && !startAt) {
    return NextResponse.json({ error: 'Please choose a date and time.' }, { status: 400 });
  }

  const customer = await findOrCreateCustomer({ givenName, familyName, email, phone });
  if (!customer.ok) {
    return NextResponse.json({ error: customer.error, square: customer.square }, { status: customer.status });
  }

  const payment = await squareJson<PaymentCreate>('/v2/payments', {
    method: 'POST',
    body: JSON.stringify({
      source_id: sourceId,
      idempotency_key: crypto.randomUUID(),
      amount_money: {
        amount: service.priceCents,
        currency: 'USD',
      },
      location_id: locationId(),
      customer_id: customer.customerId,
      note: service.displayName,
      autocomplete: true,
    }),
  });

  if (!payment.ok || !payment.body.payment?.id) {
    return NextResponse.json(
      {
        error: squareErrorMessage(payment.body, 'Payment did not go through. Please try another card.'),
        square: payment.body,
      },
      { status: payment.status }
    );
  }

  if (service.flow !== 'booking') {
    return NextResponse.json({
      ok: true,
      flow: service.flow,
      serviceKey: service.key,
      displayName: service.displayName,
      priceFormatted: service.priceFormatted,
      paymentId: payment.body.payment.id,
    });
  }

  const catalog = await squareJson<CatalogObject>(`/v2/catalog/object/${service.serviceVariationId}`);
  if (!catalog.ok || catalog.body.object?.version == null) {
    return NextResponse.json(
      {
        ok: false,
        code: 'BOOKING_AFTER_PAYMENT_FAILED',
        error:
          'Your payment went through. We will reach out to schedule your session.',
        paymentId: payment.body.payment.id,
        square: catalog.body,
      },
      { status: 502 }
    );
  }

  const durationMs = catalog.body.object.item_variation_data?.service_duration;
  const durationMinutes =
    typeof durationMs === 'number' && durationMs > 0 ? Math.round(durationMs / 60000) : undefined;

  const booking = await squareJson<BookingCreate>('/v2/bookings', {
    method: 'POST',
    body: JSON.stringify({
      idempotency_key: crypto.randomUUID(),
      booking: {
        location_id: locationId(),
        start_at: startAt,
        customer_id: customer.customerId,
        appointment_segments: [
          {
            team_member_id: SQUARE_TEAM_MEMBER_ID,
            service_variation_id: service.serviceVariationId,
            service_variation_version: catalog.body.object.version,
            ...(durationMinutes ? { duration_minutes: durationMinutes } : {}),
          },
        ],
      },
    }),
  });

  if (!booking.ok) {
    return NextResponse.json(
      {
        ok: false,
        code: 'BOOKING_AFTER_PAYMENT_FAILED',
        error:
          'Your payment went through. We will reach out to schedule your session.',
        paymentId: payment.body.payment.id,
        square: booking.body,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    flow: service.flow,
    serviceKey: service.key,
    displayName: service.displayName,
    priceFormatted: service.priceFormatted,
    paymentId: payment.body.payment.id,
    bookingId: booking.body.booking?.id ?? null,
    startAt: booking.body.booking?.start_at ?? startAt,
  });
}
