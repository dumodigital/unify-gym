

export default function Contact() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-4xl tracking-wide2">INQUIRE ABOUT ANYTHING HERE</h2>
          <p className="mt-3 uppercase text-sm tracking-wide2 text-neutral-500">
            Have questions, inquiries or would like to talk to us about joining our gym? We'd love to hear from you!
          </p>
          <div className="mt-6 space-y-1 text-neutral-300">
            <div className="font-semibold text-neutral-100">Unify Fitness</div>
            <div>664 Vernon Avenue, Glencoe, IL 60022</div>
            <a className="text-primary underline" href="mailto:info@unifygym.com">info@unifygym.com</a>
          </div>
        </div>
        <div className="relative h-72 w-full rounded-2xl overflow-hidden">
          <img src="/content/home/about.jpg" alt="About Unify Fitness" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
