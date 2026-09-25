'use client';

import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideClass = {
  fill: 'w-[min(20.5rem,calc(100%-1.25rem))] shrink-0 snap-center lg:w-auto lg:max-w-none lg:min-w-0 lg:flex-1 lg:snap-align-none',
  scroll:
    'w-[min(20.5rem,calc(100%-1.25rem))] shrink-0 snap-center lg:w-[220px] lg:max-w-[220px] lg:snap-start',
  third:
    'w-[min(20.5rem,calc(100%-1.25rem))] shrink-0 snap-center lg:w-[calc((100%-2.5rem)/3)] lg:max-w-none lg:flex-none lg:snap-align-none',
};

export default function CardCarousel({
  children,
  desktop = 'fill',
  label,
}: {
  children: React.ReactNode;
  desktop?: 'fill' | 'scroll' | 'third';
  label: string;
}) {
  const items = Children.toArray(children);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const updateIndex = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '16') || 16;
    const width = first.getBoundingClientRect().width + gap;
    if (width <= 0) return;
    setIndex(Math.round(el.scrollLeft / width));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateIndex, { passive: true });
    window.addEventListener('resize', updateIndex);
    return () => {
      el.removeEventListener('scroll', updateIndex);
      window.removeEventListener('resize', updateIndex);
    };
  }, [updateIndex]);

  const scrollTo = (next: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '16') || 16;
    const width = first.getBoundingClientRect().width + gap;
    const clamped = Math.max(0, Math.min(items.length - 1, next));
    el.scrollTo({ left: width * clamped, behavior: 'smooth' });
  };

  return (
    <div className="relative min-w-0 w-full">
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className={`flex min-w-0 w-full flex-row gap-4 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory touch-pan-x pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-5 ${
          desktop === 'scroll' ? '' : 'lg:overflow-x-visible'
        }`}
      >
        {items.map((child, i) => (
          <div key={i} className={`${slideClass[desktop]} flex [&>*]:h-full [&>*]:w-full [&>*]:min-w-0`}>
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollTo(index - 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label={`${label} slides`}>
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to card ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary' : 'w-2.5 bg-white/25'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollTo(index + 1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary"
              aria-label="Next card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {desktop === 'scroll' && (
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-[#0B0B0C] to-transparent lg:block" />
          )}
        </>
      )}
    </div>
  );
}
