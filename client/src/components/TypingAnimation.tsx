import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ phrases, className = '' }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className={`${className} relative`}>
      <span className="font-semibold">{currentText}</span>
      <span className="animate-pulse text-primary font-bold text-2xl">|</span>
    </div>
  );
};
