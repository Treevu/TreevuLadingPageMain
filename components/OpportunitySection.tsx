import React from 'react';
import { CheckIcon, RocketIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

// Fix: Add onOpenDemo prop type
interface OpportunitySectionProps {
  onOpenDemo: () => void;
}

const OpportunitySection: React.FC<OpportunitySectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="piloto" className="py-20 md:py-28 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-500/10 filter blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-sky-500/10 filter blur-3xl translate-x-1/2"></div>
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Únete al Piloto del Ecosistema Treevü</h2>
            <p className="text-lg text-slate-300 mb-12">
              Sé de los primeros en transformar el bienestar de tu equipo en una ventaja competitiva. Obtén insights únicos y ofréceles a tus colaboradores acceso a una red de beneficios exclusivos de comercios asociados.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-left max-w-3xl mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Durante el piloto, tu empresa recibirá:</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-4 text-slate-300 text-lg">Para Empresas: Diagnóstico personalizado de bienestar financiero por área.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-4 text-slate-300 text-lg">Para Comercios: Acceso a la red de usuarios de alto valor.</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-4 text-slate-300 text-lg">Recomendaciones de acción y crecimiento basadas en IA para ambos.</span>
                </li>
              </ul>
              <p className="mt-8 text-center font-semibold text-teal-400 border-t border-slate-700 pt-6">Sin costo. Sin compromiso. Solo crecimiento y aprendizaje.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay="delay-400">
            <a 
              href="#cta-final"
              // Fix: Wire up onOpenDemo
              onClick={(e) => { e.preventDefault(); onOpenDemo(); }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 glow-shadow cursor-pointer"
            >
              <RocketIcon />
              <span className="ml-3">Regístrate para el piloto gratuito</span>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;