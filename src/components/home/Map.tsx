export default function Map() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow">
        <div className="relative h-[420px] w-full">
          <iframe
            title="Unify Fitness Location"
            src="https://www.google.com/maps?q=664%20Vernon%20Avenue,%20Glencoe,%20IL%2060022&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
