import React from 'react';
import { TargetIcon, CostIcon, RoiIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const ImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            De datos invisibles a decisiones estratégicas.
          </h2>
          <p className="text-lg text-slate-600">
            Nuestra IA conecta datos financieros, conductuales y organizacionales para identificar patrones de estrés, proyectar su impacto en la productividad y recomendar acciones personalizadas.
          </p>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl h-full group">
              <div className="text-teal-500 mb-4">
                <TargetIcon />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Áreas expuestas</h3>
              <p className="text-slate-600">Identifica qué áreas de tu organización son más vulnerables al burnout financiero.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-200">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl h-full group">
              <div className="text-teal-500 mb-4">
                <CostIcon />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Costo real</h3>
              <p className="text-slate-600">Calcula el impacto económico de la pérdida de bienestar en horas y productividad.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-400">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl h-full group">
              <div className="text-teal-500 mb-4">
                <RoiIcon />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">ROI tangible</h3>
              <p className="text-slate-600">Mide qué intervenciones y beneficios generan un retorno de inversión real y tangible.</p>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-20 text-center">
            <p className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-teal-100 to-emerald-100 inline-block px-6 py-3 rounded-lg">
                Lo que no se mide, se pierde. <span className="text-teal-600">Treevü lo anticipa.</span>
            </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ImpactSection;