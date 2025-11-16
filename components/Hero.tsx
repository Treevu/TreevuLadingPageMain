import React from 'react';

// Fix: Add onOpenDemo prop type
interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {

  return (
    <section className="relative bg-slate-900 text-white py-24 md:py-40 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-dark-hero opacity-60"></div>
       <div className="absolute inset-0 -top-1/2 -left-1/3 w-2/3 h-2/3 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
       <div className="absolute inset-0 -bottom-1/2 -right-1/3 w-2/3 h-2/3 bg-sky-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container relative mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 leading-tight mb-6 max-w-4xl mx-auto opacity-0 animate-fadeInUp text-glow-white" style={{ animationDelay: '0.1s' }}>
          El Ecosistema de Bienestar que Potencia a tu Equipo y a tu Negocio.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Potencia la productividad y retención de tu equipo con data financiera y un ecosistema de beneficios único.
        </p>
        <div 
          className="flex justify-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.5s' }}
        >
          <a 
            href="#cta-final"
            // Fix: Wire up onOpenDemo
            onClick={(e) => { e.preventDefault(); onOpenDemo(); }}
            className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 glow-shadow animate-pulse-slow cursor-pointer"
          >
            Inscríbete al piloto gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;