import { ImageIcon } from 'lucide-react';

type Props = {
  label: string;
  ratio?: string;
  dims?: string;
  mobileNote?: string;
  tag?: string;
  className?: string;
  swapTo?: string;
};

export default function ImagePlaceholder({
  label,
  ratio = 'aspect-[16/9]',
  dims,
  mobileNote,
  tag,
  className = '',
  swapTo,
}: Props) {
  return (
    <div
      className={`relative w-full ${ratio} overflow-hidden rounded-2xl border-2 border-dashed border-[#00C2FF]/50 bg-gradient-to-br from-[#0A2E4D] via-[#0c3a5e] to-[#00C2FF]/20 ${className}`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      {tag && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#FF7A59] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {tag}
        </span>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="h-7 w-7 text-white/70" />
        <p className="max-w-[90%] text-sm font-semibold leading-snug text-white">
          {label}
        </p>
        {dims && (
          <p className="text-xs text-white/60">Recommended: {dims}</p>
        )}
        {mobileNote && (
          <p className="text-xs text-[#F4E2B8]">📱 {mobileNote}</p>
        )}
        {swapTo && (
          <p className="mt-1 text-[10px] text-white/40">Swap with: {swapTo}</p>
        )}
      </div>
    </div>
  );
}
