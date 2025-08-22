import { cn } from '@/lib/utils';

export default function Section({
  className,
  children,
  as: Tag = 'section',
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) {
  return <Tag className={cn('px-4 py-16 sm:py-20', className)}>{children}</Tag>;
}
