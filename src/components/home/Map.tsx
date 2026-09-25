'use client';

export default function Map({ contained = false }: { contained?: boolean }) {
  const address = '664 Vernon Avenue, Glencoe, IL 60022';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const handleMapClick = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const frame = (
    <div className="relative h-[280px] w-full cursor-pointer group sm:h-[420px]" onClick={handleMapClick}>
      <iframe
        title="Unify Fitness Location"
        src="https://www.google.com/maps?q=664%20Vernon%20Avenue,%20Glencoe,%20IL%2060022&output=embed"
        className="h-full w-full border-0 pointer-events-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-200" />

      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="font-medium">Open in Maps</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 md:hidden">
        <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-center text-sm font-medium opacity-90">
          Tap to open in Maps app
        </div>
      </div>
    </div>
  );

  if (contained) {
    return <div className="overflow-hidden rounded-2xl shadow">{frame}</div>;
  }

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow">{frame}</div>
    </section>
  );
}
