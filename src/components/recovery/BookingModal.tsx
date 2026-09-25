'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { ChevronLeft, X } from 'lucide-react';
import {
  SQUARE_LOCATION_ID,
  type RecoveryService,
  type RecoveryServiceKey,
  RECOVERY_SERVICES,
} from '@/lib/recovery-services';
import RecoveryButton from './RecoveryButton';

type Step = 'schedule' | 'checkout' | 'success' | 'paid-unscheduled';

type Confirmation = {
  displayName: string;
  priceFormatted: string;
  startAt?: string | null;
  flow: RecoveryService['flow'];
};

const TIME_ZONE = 'America/Chicago';

let squarePayments: ReturnType<NonNullable<Window['Square']>['payments']> | null = null;

function loadSquareScript() {
  if (window.Square) return Promise.resolve(window.Square);
  return new Promise<NonNullable<Window['Square']>>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-square-sdk]');
    if (existing) {
      existing.addEventListener('load', () =>
        window.Square ? resolve(window.Square) : reject(new Error('Square did not load.'))
      );
      existing.addEventListener('error', () => reject(new Error('Square did not load.')));
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://web.squarecdn.com/v1/square.js';
    script.async = true;
    script.dataset.squareSdk = 'true';
    script.onload = () =>
      window.Square ? resolve(window.Square) : reject(new Error('Square did not load.'));
    script.onerror = () => reject(new Error('Square did not load.'));
    document.head.appendChild(script);
  });
}

async function getSquarePayments() {
  const applicationId = process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID;
  if (!applicationId) {
    throw new Error('Card payments are not configured yet.');
  }
  const Square = await loadSquareScript();
  if (!squarePayments) {
    squarePayments = Square.payments(applicationId, SQUARE_LOCATION_ID);
  }
  return squarePayments;
}

const CARD_STYLE = {
  '.input-container': {
    borderColor: '#333333',
    borderRadius: '12px',
  },
  '.input-container.is-focus': {
    borderColor: '#00C2FF',
  },
  '.input-container.is-error': {
    borderColor: '#f87171',
  },
  input: {
    color: '#ffffff',
    backgroundColor: '#141414',
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  'input::placeholder': {
    color: '#999999',
  },
  'input.is-focus': {
    color: '#ffffff',
  },
  'input.is-error': {
    color: '#f87171',
  },
  '.message-text': {
    color: '#00C2FF',
  },
  '.message-icon': {
    color: '#00C2FF',
  },
  '.message-text.is-error': {
    color: '#f87171',
  },
  '.message-icon.is-error': {
    color: '#f87171',
  },
} as const;

function formatDateLabel(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(iso));
}

function formatDateKey(iso: string) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(iso));
}

function formatTimeLabel(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(iso));
}

function formatFullWhen(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(iso));
}

function SquareCardField({
  onReady,
}: {
  onReady: (tokenize: () => Promise<string>) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<{ destroy: () => Promise<void> | void; tokenize: () => Promise<{ status: string; token?: string; errors?: { message?: string }[] }> } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function attach() {
      try {
        if (cancelled || !containerRef.current) return;
        const payments = await getSquarePayments();
        if (cancelled || !containerRef.current) return;
        const card = await payments.card({
          style: CARD_STYLE,
        });
        if (cancelled) {
          await card.destroy();
          return;
        }
        await card.attach(containerRef.current);
        if (cancelled) {
          await card.destroy();
          return;
        }
        cardRef.current = card;
        onReady(async () => {
          const result = await card.tokenize();
          if (result.status === 'OK' && result.token) return result.token;
          const message = result.errors?.map((item) => item.message).filter(Boolean).join(' ');
          throw new Error(message || 'Please check your card details.');
        });
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Could not load the card field.');
        }
      }
    }

    void attach();

    return () => {
      cancelled = true;
      const card = cardRef.current;
      cardRef.current = null;
      if (card) void card.destroy();
    };
  }, [onReady]);

  return (
    <div>
      <div
        ref={containerRef}
        className="min-h-[90px]"
      />
      {error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}
    </div>
  );
}

export default function BookingModal({
  serviceKey,
  isOpen,
  onClose,
}: {
  serviceKey: RecoveryServiceKey | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const service = serviceKey ? RECOVERY_SERVICES[serviceKey] : null;
  const [step, setStep] = useState<Step>('schedule');
  const [startAtTimes, setStartAtTimes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStartAt, setSelectedStartAt] = useState('');
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [timesError, setTimesError] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const tokenizeRef = useRef<(() => Promise<string>) | null>(null);

  const onCardReady = useCallback((tokenize: () => Promise<string>) => {
    tokenizeRef.current = tokenize;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !submitting) onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose, submitting]);

  useEffect(() => {
    if (!isOpen || !service) return;
    setStep(service.flow === 'booking' ? 'schedule' : 'checkout');
    setStartAtTimes([]);
    setSelectedDate('');
    setSelectedStartAt('');
    setTimesError('');
    setFormError('');
    setConfirmation(null);
    setSubmitting(false);
    tokenizeRef.current = null;

    if (service.flow !== 'booking') return;

    let cancelled = false;
    setLoadingTimes(true);
    fetch(`/api/recovery/availability?serviceVariationId=${encodeURIComponent(service.serviceVariationId)}`)
      .then(async (res) => {
        const data = (await res.json()) as { startAtTimes?: string[]; error?: string };
        if (!res.ok) throw new Error(data.error || 'Could not load available times.');
        if (cancelled) return;
        const times = data.startAtTimes ?? [];
        setStartAtTimes(times);
        if (times[0]) setSelectedDate(formatDateKey(times[0]));
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setTimesError(err instanceof Error ? err.message : 'Could not load available times.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingTimes(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, service]);

  const dates = useMemo(() => {
    const map = new Map<string, string>();
    startAtTimes.forEach((iso) => {
      const key = formatDateKey(iso);
      if (!map.has(key)) map.set(key, iso);
    });
    return Array.from(map.entries()).map(([key, iso]) => ({ key, iso }));
  }, [startAtTimes]);

  const timesForDate = useMemo(
    () => startAtTimes.filter((iso) => formatDateKey(iso) === selectedDate),
    [startAtTimes, selectedDate]
  );

  if (!isOpen || !service) return null;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!service) return;
    setFormError('');
    if (service.flow === 'booking' && !selectedStartAt) {
      setFormError('Please choose a date and time.');
      return;
    }
    setSubmitting(true);
    try {
      const tokenize = tokenizeRef.current;
      if (!tokenize) throw new Error('Card field is still loading. Please wait a moment.');
      const sourceId = await tokenize();
      const res = await fetch('/api/recovery/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceKey: service.key,
          startAt: service.flow === 'booking' ? selectedStartAt : undefined,
          sourceId,
          buyer: { givenName, familyName, email, phone },
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        code?: string;
        error?: string;
        displayName?: string;
        priceFormatted?: string;
        startAt?: string;
        flow?: RecoveryService['flow'];
      };
      if (data.code === 'BOOKING_AFTER_PAYMENT_FAILED') {
        setConfirmation({
          displayName: service.displayName,
          priceFormatted: service.priceFormatted,
          startAt: selectedStartAt,
          flow: service.flow,
        });
        setStep('paid-unscheduled');
        return;
      }
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setConfirmation({
        displayName: data.displayName || service.displayName,
        priceFormatted: data.priceFormatted || service.priceFormatted,
        startAt: data.startAt,
        flow: data.flow || service.flow,
      });
      setStep('success');
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recovery-booking-title"
      onClick={() => {
        if (!submitting) onClose();
      }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
    >
      <div
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-5">
          <div className="min-w-0">
            <h2
              id="recovery-booking-title"
              className="font-display text-lg tracking-wide2 text-white sm:text-xl"
            >
              {service.displayName}
            </h2>
            <p className="mt-1 text-sm text-primary">{service.priceFormatted}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            className="grid h-11 w-11 place-items-center rounded-md text-white/60 transition-colors hover:bg-white/5 hover:text-white disabled:opacity-40"
            aria-label="Close booking"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {step === 'schedule' && (
          <div className="flex flex-col gap-6 px-5 py-6 sm:px-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide2 text-primary">Select a date</p>
              {loadingTimes ? (
                <p className="mt-4 text-sm text-white/60">Loading times...</p>
              ) : timesError ? (
                <p className="mt-4 text-sm text-red-400">{timesError}</p>
              ) : dates.length === 0 ? (
                <p className="mt-4 text-sm text-white/60">
                  No times are open in the next 30 days. Call us at (224) 522-9040.
                </p>
              ) : (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {dates.map((date) => {
                    const selected = date.key === selectedDate;
                    return (
                      <button
                        key={date.key}
                        type="button"
                        onClick={() => {
                          setSelectedDate(date.key);
                          setSelectedStartAt('');
                        }}
                        className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          selected
                            ? 'bg-primary text-white'
                            : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                        }`}
                      >
                        {formatDateLabel(date.iso)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {!loadingTimes && !timesError && timesForDate.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wide2 text-primary">Select a time</p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {timesForDate.map((iso) => {
                    const selected = iso === selectedStartAt;
                    return (
                      <button
                        key={iso}
                        type="button"
                        onClick={() => setSelectedStartAt(iso)}
                        className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                          selected
                            ? 'bg-primary text-white'
                            : 'border border-white/20 text-white/80 hover:border-white/40 hover:text-white'
                        }`}
                      >
                        {formatTimeLabel(iso)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <RecoveryButton
              className="w-full"
              disabled={!selectedStartAt}
              onClick={() => setStep('checkout')}
            >
              Continue
            </RecoveryButton>
          </div>
        )}

        {step === 'checkout' && (
          <form className="flex flex-col gap-4 px-5 py-6 sm:px-6" onSubmit={handleSubmit}>
            {service.flow === 'booking' && (
              <button
                type="button"
                onClick={() => {
                  setFormError('');
                  setStep('schedule');
                }}
                className="inline-flex items-center gap-1 self-start text-sm text-white/60 transition-colors hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to times
              </button>
            )}
            {service.flow === 'booking' && selectedStartAt && (
              <p className="text-sm text-white/70">
                {formatFullWhen(selectedStartAt)}
              </p>
            )}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block text-sm text-white/70">
                First name
                <input
                  required
                  value={givenName}
                  onChange={(event) => setGivenName(event.target.value)}
                  autoComplete="given-name"
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:border-primary focus:outline-none"
                />
              </label>
              <label className="block text-sm text-white/70">
                Last name
                <input
                  required
                  value={familyName}
                  onChange={(event) => setFamilyName(event.target.value)}
                  autoComplete="family-name"
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:border-primary focus:outline-none"
                />
              </label>
            </div>
            <label className="block text-sm text-white/70">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:border-primary focus:outline-none"
              />
            </label>
            <label className="block text-sm text-white/70">
              Phone
              <input
                required
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 focus:border-primary focus:outline-none"
              />
            </label>
            <div>
              <p className="mb-2 text-sm text-white/70">Card</p>
              <SquareCardField onReady={onCardReady} />
            </div>
            {formError ? <p className="text-sm text-red-400">{formError}</p> : null}
            <RecoveryButton type="submit" className="w-full" disabled={submitting}>
              {submitting ? 'Processing...' : `Pay ${service.priceFormatted}`}
            </RecoveryButton>
          </form>
        )}

        {step === 'success' && confirmation && (
          <div className="flex flex-col items-start gap-4 px-5 py-8 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-wide2 text-primary">Confirmed</p>
            <h3 className="font-display text-3xl tracking-wide2 text-white">You are all set.</h3>
            {confirmation.flow === 'booking' && confirmation.startAt ? (
              <p className="text-base leading-relaxed text-white/70">
                {confirmation.displayName} is booked for {formatFullWhen(confirmation.startAt)}.
              </p>
            ) : (
              <p className="text-base leading-relaxed text-white/70">
                Your {confirmation.displayName} purchase is confirmed.
              </p>
            )}
            <RecoveryButton className="mt-2 w-full" onClick={onClose}>
              Done
            </RecoveryButton>
          </div>
        )}

        {step === 'paid-unscheduled' && confirmation && (
          <div className="flex flex-col items-start gap-4 px-5 py-8 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-wide2 text-primary">Payment received</p>
            <h3 className="font-display text-3xl tracking-wide2 text-white">We will be in touch.</h3>
            <p className="text-base leading-relaxed text-white/70">
              Your payment went through. We will reach out to schedule your session.
            </p>
            <RecoveryButton className="mt-2 w-full" onClick={onClose}>
              Done
            </RecoveryButton>
          </div>
        )}
      </div>
    </div>
  );
}

declare global {
  interface Window {
    Square?: {
      payments: (
        applicationId: string,
        locationId: string
      ) => {
        card: (options?: { style?: Record<string, Record<string, string>> }) => Promise<{
          attach: (element: HTMLElement) => Promise<void>;
          destroy: () => Promise<void>;
          tokenize: () => Promise<{
            status: string;
            token?: string;
            errors?: { message?: string }[];
          }>;
        }>;
      };
    };
  }
}
