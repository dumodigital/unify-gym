'use client';

import RecoveryButton from './RecoveryButton';

export default function BookNow({ className = '' }: { className?: string }) {
  return (
    <RecoveryButton href="#menu" className={className}>
      Book Now
    </RecoveryButton>
  );
}
