'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full cursor-pointer transition-colors';

const variants = {
  primary: `${base} bg-primary hover:bg-primary/90 text-white`,
  outline: `${base} border border-white/20 hover:border-white/40 text-white`,
};

const sizes = {
  default: 'px-8 py-4 min-h-[44px]',
  compact: 'h-8 min-h-8 px-4 py-0 text-sm',
};

export default function RecoveryButton({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button',
  href,
  onClick,
  disabled,
  ariaLabel,
  showChevron = variant === 'primary',
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: 'button' | 'submit';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  showChevron?: boolean;
}) {
  const classes = `${variants[variant]} ${sizes[size]} ${disabled ? 'pointer-events-none cursor-not-allowed opacity-60' : ''} ${className}`;

  const content = (
    <>
      {children}
      {showChevron && <ChevronRight className={size === 'compact' ? 'h-4 w-4' : 'h-5 w-5'} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        onClick={(event) => {
          if (!href.startsWith('#')) return;
          const id = href.slice(1);
          const target = document.getElementById(id);
          if (!target) return;
          event.preventDefault();
          const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
          const top = target.getBoundingClientRect().top + window.scrollY - margin;
          const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </button>
  );
}
