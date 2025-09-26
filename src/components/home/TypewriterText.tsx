'use client';
import { useEffect, useState } from 'react';

const phrases = [
  "Premier gym in Glencoe, Illinois.",
  "Expert personal training for all fitness levels.",
  "Certified Pilates instruction & chiropractic care.",
  "North Shore's most trusted fitness community.",
  "Transform your body at Unify Fitness Glencoe."
];

export default function TypewriterText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Start typewriter effect after header animation completes
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 1800); // Start after header animation (1.2s + 0.6s delay)
    
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
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
  }, [currentText, currentPhraseIndex, isDeleting, isPaused, hasStarted]);

  return (
    <p className="max-w-3xl text-white mx-auto text-lg md:text-xl min-h-[3rem] flex items-center justify-center font-medium">
      <span>{currentText}</span>
      <span className="ml-1 animate-pulse text-blue-400">|</span>
    </p>
  );
}
