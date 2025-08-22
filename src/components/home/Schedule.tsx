'use client';
import { useState } from 'react';

const tabs = ['All Events', 'Cardio', 'CrossFit', 'Gym', 'Powerlifting'] as const;

export default function Schedule() {
  const [active, setActive] = useState<typeof tabs[number]>('Powerlifting');
  const events: Array<{ id: string; title: string; time: string }> = []; // placeholder

  return (
    <section className="bg-neutral-900 text-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-4xl tracking-wide2 text-center">TRAINING HOURS AND CLASSES</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 rounded-md uppercase tracking-wide2 text-sm border ${
                active === t ? 'border-primary text-primary' : 'border-neutral-700 text-neutral-300 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-10 text-center text-neutral-400">
          {events.length === 0 ? 'No events available.' : 'Events will render here.'}
        </div>
      </div>
    </section>
  );
}
