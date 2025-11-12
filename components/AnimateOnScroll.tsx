import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g., 'delay-300'
  animationType?: 'fadeUp' | 'scaleIn';
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
  children, 
  className = '', 
  delay = '', 
  animationType = 'fadeUp' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger a little before it's fully in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = {
    fadeUp: {
      initial: 'opacity-0 translate-y-8',
      final: 'opacity-100 translate-y-0'
    },
    scaleIn: {
      initial: 'opacity-0 scale-95',
      final: 'opacity-100 scale-100'
    }
  };

  const { initial, final } = animationClasses[animationType];

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${delay} ${
        isVisible ? final : initial
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
