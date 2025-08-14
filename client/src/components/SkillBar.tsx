import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
  color?: 'purple' | 'green' | 'blue' | 'yellow' | 'red' | 'pink';
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon, color = 'purple' }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const colorClasses = {
    purple: 'from-purple-600 to-indigo-600',
    green: 'from-green-600 to-emerald-600',
    blue: 'from-blue-600 to-cyan-600',
    yellow: 'from-yellow-600 to-orange-600',
    red: 'from-red-600 to-pink-600',
    pink: 'from-pink-600 to-rose-600'
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
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = level / 50;
        const animate = () => {
          setAnimatedLevel((prev) => {
            const next = prev + increment;
            if (next >= level) {
              return level;
            }
            requestAnimationFrame(animate);
            return next;
          });
        };
        animate();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    <div ref={ref} className="skill-item mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <i className={`${icon} text-lg`} />}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm font-semibold text-primary">{Math.round(animatedLevel)}%</span>
      </div>
      <div className="bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};
