import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';

const staff = [
  { name: 'MELISSA CESARE', role: 'Owner / Coach', img: '/content/home/brand.jpg' },
  { name: 'LESLIE GARRETT', role: 'Owner / Coach', img: '/content/home/brand.jpg' },
  { name: 'MARY BETH', role: 'Pilates', img: '/content/home/brand.jpg' },
];

function Card({ s }: { s: (typeof staff)[number] }) {
  return (
    <div className="card relative">
      <Image src={s.img} alt={s.name} width={480} height={600} className="h-80 w-full object-cover" />
      <div className="absolute inset-0 bg-overlay-25" />
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
        <div>
          <div className="font-display text-xl">{s.name}</div>
          <div className="text-neutral-300 text-sm">{s.role}</div>
        </div>
        <Link aria-label={`${s.name} Instagram`} href="https://instagram.com/unifygym" className="grid h-9 w-9 place-items-center rounded bg-white/90 text-neutral-900 hover:bg-white">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="panel-dark">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center font-display text-4xl tracking-wide2">OUR TEAM</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
          Our unique and inspiring fitness center unites highly trained professionals with our valued clients.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {staff.map((s) => <Card key={s.name} s={s} />)}
        </div>
        <div className="mt-10 text-center">
          <a href="/trainers" className="btn-outline-dark">Meet our other team members</a>
        </div>
      </div>
    </section>
  );
}
