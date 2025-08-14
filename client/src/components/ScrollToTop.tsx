import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:scale-110 transform transition-all duration-300 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  );
};
