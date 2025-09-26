'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function VideoBanner() {
  const [open, setOpen] = useState(false);
  // TODO: Replace with compressed video under 10MB
  const videoSrc = "/content/home/Unify Fitness Gym – A training facility located in Glencoe, Illinois. and 7 more pages - Personal - Microsoft_ Edge 2025-08-23 00-10-07.mp4";
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 py-10">
        <div onClick={() => setOpen(true)} className="relative h-[360px] cursor-pointer overflow-hidden rounded-2xl">
          <Image 
            src="/content/home/svc-training.svg" 
            alt="Video teaser" 
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-overlay-40" />
          <div className="absolute inset-0 grid place-items-center">
            <button className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-neutral-900 text-2xl hover:bg-white transition-all duration-300 hover:scale-110" aria-label="Play video">▶</button>
          </div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-overlay-60 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {videoSrc ? (
              <video src={videoSrc} controls className="w-full h-[60vh] bg-black"></video>
            ) : (
              <div className="w-full h-[60vh] bg-black flex items-center justify-center text-white">
                <p>Video coming soon...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
