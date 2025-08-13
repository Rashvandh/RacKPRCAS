import { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in-right' | 'bounce-in' | 'slide-in-left' | 'slide-in-up' | 'zoom-in';
}

const AnimationWrapper = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-in'
}: AnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
          : animation === 'fade-in' 
            ? 'opacity-0 translate-y-8'
            : animation === 'slide-in-right'
            ? 'opacity-0 translate-x-8'
            : animation === 'slide-in-left'
            ? 'opacity-0 -translate-x-8'
            : animation === 'slide-in-up'
            ? 'opacity-0 translate-y-8'
            : animation === 'zoom-in'
            ? 'opacity-0 scale-95'
            : 'opacity-0 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;