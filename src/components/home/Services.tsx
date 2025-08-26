import Link from 'next/link';

const services = [
  { 
    title: 'PERSONAL TRAINING', 
    img: '/content/home/team.jpg',
    status: 'active',
    link: '/trainers',
    buttonText: 'Meet Our Trainers'
  },
  { 
    title: 'BOXING / MARTIAL ARTS', 
    img: '/content/home/boxing.jpg',
    status: 'coming-soon',
    link: '/services/boxing',
    buttonText: 'Coming Soon'
  },
  { 
    title: 'CHIROPRACTIC', 
    img: '/content/home/chiro.jpg',
    status: 'active',
    link: '/services/chiropractic',
    buttonText: 'Learn More'
  },
  { 
    title: 'PILATES', 
    img: '/content/home/pilates.jpg',
    status: 'active',
    link: '/membership',
    buttonText: 'View Membership'
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl tracking-wide2 mb-4">OUR SERVICES</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of fitness and wellness services designed to help you reach your goals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
        <div key={s.title} className="relative h-64 overflow-hidden group">
          <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-overlay-40" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <h3 className="font-display text-3xl tracking-wide2">{s.title}</h3>
              {s.status === 'coming-soon' ? (
                <span className="mt-4 inline-flex btn-ghost">{s.buttonText}</span>
              ) : (
                <Link 
                  href={s.link}
                  className="mt-4 inline-flex btn-ghost hover:bg-white hover:text-neutral-900 transition-all duration-300"
                >
                  {s.buttonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
