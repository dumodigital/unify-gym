'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function VideoBanner() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 py-10">
        <div onClick={() => setOpen(true)} className="relative h-[360px] cursor-pointer overflow-hidden rounded-2xl">
          <Image src="/content/home/svc-training.jpg" alt="Video teaser" fill className="object-cover" />
          <div className="absolute inset-0 bg-overlay-40" />
          <div className="absolute inset-0 grid place-items-center">
            <button className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-neutral-900 text-2xl" aria-label="Play video">▶</button>
          </div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-overlay-60 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <video src="" controls className="w-full h-[60vh] bg-black"></video>
          </div>
        </div>
      )}
    </>
  );
}
