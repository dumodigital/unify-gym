import { NextResponse } from 'next/server';
import {
  SQUARE_LOCATION_ID,
  SQUARE_TEAM_MEMBER_ID,
  getServiceByVariationId,
} from '@/lib/recovery-services';
import { squareErrorMessage, squareJson } from '@/lib/square-server';

export const dynamic = 'force-dynamic';

type Availability = {
  start_at?: string;
};

export async function GET(request: Request) {
  const serviceVariationId = new URL(request.url).searchParams.get('serviceVariationId');
  if (!serviceVariationId) {
    return NextResponse.json({ error: 'Missing serviceVariationId.' }, { status: 400 });
  }

  const service = getServiceByVariationId(serviceVariationId);
  if (!service || service.flow !== 'booking') {
    return NextResponse.json({ error: 'That service is not available to book.' }, { status: 400 });
  }

  const start = new Date();
  const end = new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
  const locationId = process.env.SQUARE_LOCATION_ID || SQUARE_LOCATION_ID;

  const result = await squareJson<{ availabilities?: Availability[] }>(
    '/v2/bookings/availability/search',
    {
      method: 'POST',
      body: JSON.stringify({
        query: {
          filter: {
            start_at_range: {
              start_at: start.toISOString(),
              end_at: end.toISOString(),
            },
            location_id: locationId,
            segment_filters: [
              {
                service_variation_id: serviceVariationId,
                team_member_id_filter: {
                  any: [SQUARE_TEAM_MEMBER_ID],
                },
              },
            ],
          },
        },
      }),
    }
  );

  if (!result.ok) {
    return NextResponse.json(
      {
        error: squareErrorMessage(result.body, 'Could not load available times.'),
        square: result.body,
      },
      { status: result.status }
    );
  }

  const startAtTimes = Array.from(
    new Set(
      (result.body.availabilities ?? [])
        .map((slot) => slot.start_at)
        .filter((value): value is string => Boolean(value))
    )
  ).sort();

  return NextResponse.json({ startAtTimes });
}
