import { FaDumbbell } from 'react-icons/fa6';

export default function Page() {
  return (
    <main className="min-h-[60vh] grid place-items-center">
      <div className="text-center space-y-4">
        <h1 className="font-display text-5xl tracking-wide2">Unify Gym</h1>
        <p className="text-neutral-300">Stack sanity check</p>
        <div className="inline-flex items-center gap-2 text-primary">
          <FaDumbbell aria-hidden />
          <span>React 19 • Next 15 • Tailwind 4</span>
        </div>
      </div>
    </main>
  );
}
