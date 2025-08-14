import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CodingProfileProps {
  name: string;
  count: string | number;
  suffix: string;
  icon: string;
  color: 'orange' | 'yellow' | 'green' | 'purple';
  url: string;
}

export const CodingProfile: React.FC<CodingProfileProps> = ({
  name,
  count,
  suffix,
  icon,
  color,
  url
}) => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const colorClasses = {
    orange: 'from-orange-500 to-red-500',
    yellow: 'from-yellow-500 to-orange-500',
    green: 'from-green-500 to-teal-500',
    purple: 'from-purple-500 to-indigo-500'
  };

  const iconColors = {
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    purple: 'text-purple-500'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && typeof count === 'number') {
      const timer = setTimeout(() => {
        const increment = count / 50;
        const animate = () => {
          setAnimatedCount((prev) => {
            const next = prev + increment;
            if (next >= count) {
              return count;
            }
            requestAnimationFrame(animate);
            return next;
          });
        };
        animate();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isVisible, count]);

  const displayCount = typeof count === 'number' ? Math.floor(animatedCount) : count;

  return (
    <Card 
      ref={ref}
      className="glass-morphism border-0 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
    >
      <CardContent className="p-8 text-center">
        <div className="text-5xl mb-4">
          <i className={`${icon} ${iconColors[color]}`} />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
        <div className={`text-3xl font-bold ${iconColors[color]} mb-2`}>
          {displayCount}{suffix}
        </div>
        <Button
          className={`bg-gradient-to-r ${colorClasses[color]} text-white hover:scale-105 transform transition-all mt-4`}
          onClick={() => window.open(url, '_blank')}
        >
          Visit Profile
        </Button>
      </CardContent>
    </Card>
  );
};
