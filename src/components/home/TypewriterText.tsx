'use client';
import { useEffect, useState } from 'react';

const phrases = [
  "Unifying our community by enhancing the Mind & Body.",
  "Unifying strength and conditioning for all levels.",
  "Unifying personal training with cutting-edge equipment.", 
  "Unifying boxing, pilates, and chiropractic care.",
  "Unifying beginners and advanced athletes together.",
  "Unifying mind, body, and spirit through fitness."
];

export default function TypewriterText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pause for 2 seconds
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentText, currentPhraseIndex, isDeleting, isPaused]);

  return (
    <p className="max-w-3xl text-white mx-auto text-xl md:text-2xl min-h-[4rem] flex items-center justify-center font-medium drop-shadow-lg">
      <span>{currentText}</span>
      <span className="ml-1 animate-pulse text-primary">|</span>
    </p>
  );
}
