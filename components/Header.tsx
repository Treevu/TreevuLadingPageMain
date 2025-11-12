import React, { useState, useEffect, useRef } from 'react';
import { TreevuLogo } from './icons';

// Fix: Add onOpenDemo prop type
interface HeaderProps {
  onOpenDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      
      setScrolled(currentY > 50);
      
      // Determine scroll direction
      if (currentY > lastY.current && currentY > 0) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      
      lastY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once.

  return (
    <header className={`
      sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/80
      transition-all duration-300 ease-in-out
      ${(scrolled && scrollingDown) ? 'opacity-80' : 'opacity-100'}
    `}>
      <div className={`
        container mx-auto px-6 flex justify-between items-center
        transition-all duration-300 ease-in-out
        ${scrolled ? 'py-2' : 'py-4'}
      `}>
        <a href="#" aria-label="Treevü Home">
            <TreevuLogo className="h-8" />
        </a>
        <a 
          href="#cta-final" 
          // Fix: Wire up onOpenDemo
          onClick={(e) => { e.preventDefault(); onOpenDemo(); }}
          className="hidden sm:inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Solicita tu demo
        </a>
      </div>
    </header>
  );
};

export default Header;
