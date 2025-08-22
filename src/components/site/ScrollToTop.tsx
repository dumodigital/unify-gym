'use client';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:bg-white hover:text-neutral-900"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
