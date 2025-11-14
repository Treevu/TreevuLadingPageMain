import React from 'react';
import { LightbulbIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

// Fix: Add onOpenDemo prop type
interface CtaSectionProps {
  onOpenDemo: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="cta-final" className="py-20 md:py-28 bg-gradient-cta">
      <div className="container mx-auto px-6 text-center text-white">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto mb-4 text-glow-white">
            El bienestar financiero no es un lujo. Es un multiplicador para todos.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay="delay-200">
          <p className="text-lg text-teal-100 mb-10">
            Los cupos para el piloto son limitados. Descubre el impacto real en tu organización.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay="delay-400">
          <a 
            href="#"
            // Fix: Wire up onOpenDemo
            onClick={(e) => { e.preventDefault(); onOpenDemo(); }}
            className="inline-flex items-center justify-center bg-white text-teal-600 font-bold text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            <LightbulbIcon />
            <span className="ml-3">Solicita tu demo o únete al piloto</span>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CtaSection;
