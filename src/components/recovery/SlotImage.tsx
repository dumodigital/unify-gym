import Image from 'next/image';

export default function SlotImage({
  src,
  alt,
  swapTo,
  className = '',
  ratio = 'aspect-[16/9]',
}: {
  src: string;
  alt: string;
  swapTo: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl ${ratio} ${className}`}
      data-swap-to={swapTo}
    >
      {/* placeholder — swap to real Recovery photo later */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
    </div>
  );
}
