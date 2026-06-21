'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { SANDBLAST } from '@/lib/sandblast-data';

const STORAGE_KEY = 'sandblast-announcement-dismissed';

export const ANNOUNCEMENT_BAR_HEIGHT = '2.5rem';

interface SandblastAnnouncementBarProps {
  onVisibleChange?: (visible: boolean) => void;
}

function isSeasonActive() {
  return new Date() <= new Date(SANDBLAST.seasonEndDate);
}

export default function SandblastAnnouncementBar({
  onVisibleChange,
}: SandblastAnnouncementBarProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = (nextVisible: boolean) => {
      setVisible(nextVisible);
      onVisibleChange?.(nextVisible);
    };

    if (pathname === '/sandblast' || !isSeasonActive()) {
      updateVisibility(false);
      return;
    }

    try {
      if (localStorage.getItem(STORAGE_KEY)) {
        updateVisibility(false);
        return;
      }
    } catch {
      // If storage is unavailable, still show the bar.
    }

    updateVisibility(true);
  }, [pathname, onVisibleChange]);

  const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Hide the bar even if persistence fails.
    }

    setVisible(false);
    onVisibleChange?.(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] border-b border-primary/20 bg-[#0B0B0C]/95 backdrop-blur"
      style={{ height: ANNOUNCEMENT_BAR_HEIGHT }}
    >
      <Link
        href="/sandblast"
        className="group mx-auto flex h-full max-w-7xl items-center justify-center gap-2 px-10 text-center text-xs text-neutral-200 transition-colors hover:text-white sm:gap-3 sm:px-12 sm:text-sm"
        prefetch
      >
        <span className="hidden sm:inline">
          Beach workouts at Glencoe Beach · {SANDBLAST.schedule}
        </span>
        <span className="sm:hidden">Saturdays at Glencoe Beach</span>
        <span className="font-medium text-primary transition-colors group-hover:text-white">
          Learn more →
        </span>
      </Link>

      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white sm:right-3"
        aria-label="Dismiss Sandblast announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
