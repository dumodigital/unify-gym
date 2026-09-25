'use client';

import { useState } from 'react';
import { BOOKABLE_SERVICE_KEY } from '@/lib/recovery-services';
import { type BookableId } from '@/lib/recovery-data';
import RecoveryButton from './RecoveryButton';
import BookingModal from './BookingModal';

export default function BookButton({
  bookableId,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
}: {
  bookableId: BookableId;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'default' | 'compact';
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RecoveryButton
        variant={variant}
        size={size}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </RecoveryButton>
      <BookingModal
        serviceKey={BOOKABLE_SERVICE_KEY[bookableId]}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
