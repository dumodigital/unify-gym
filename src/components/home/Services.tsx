import Link from 'next/link';

const services = [
  { title: 'PERSONAL TRAINING', img: '/content/home/svc-training.svg' },
  { title: 'BOXING / MARTIAL ARTS', img: '/content/home/svc-boxing.svg' },
  { title: 'CHIROPRACTIC', img: '/content/home/svc-chiro.svg' },
  { title: 'PILATES', img: '/content/home/svc-pilates.svg' },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-16">
      {services.map((s) => (
        <div key={s.title} className="relative h-64 overflow-hidden group">
          <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-overlay-40" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <h3 className="font-display text-3xl tracking-wide2">{s.title}</h3>
              <Link href="#" className="mt-4 inline-flex btn-ghost">Learn more</Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
