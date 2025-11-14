import React from 'react';
import { ProductivityIcon, RetentionIcon, EngagementIcon, AbsenteeismIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const metrics = [
  {
    icon: <ProductivityIcon />,
    value: '8.2 Horas/Mes',
    title: 'Productividad Recuperada',
    description: 'Tiempo que tus empleados recuperan al reducir la distracción por estrés financiero.',
    delay: 'delay-0',
    valueClassName: 'text-4xl'
  },
  {
    icon: <RetentionIcon />,
    value: '+15%',
    title: 'Aumento de Retención',
    description: 'Incremento en la lealtad del talento al ofrecer apoyo financiero relevante y personalizado.',
    delay: 'delay-200'
  },
  {
    icon: <EngagementIcon />,
    value: '+22%',
    title: 'Mejora del Engagement',
    description: 'Aumento del compromiso y la moral del equipo al sentirse respaldado por la empresa.',
    delay: 'delay-400'
  },
  {
    icon: <AbsenteeismIcon />,
    value: '-30%',
    title: 'Reducción de Ausentismo',
    description: 'Disminución de las ausencias no planificadas relacionadas con emergencias económicas.',
    delay: 'delay-600'
  },
];

const KeyMetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 text-glow-white">
            Impacto Medible en tu Ecosistema
          </h2>
          <p className="text-lg text-slate-300">
            Conecta el bienestar de tu equipo con los resultados del negocio. Treevü traduce datos complejos en KPIs claros y accionables.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <AnimateOnScroll key={index} delay={metric.delay} className="relative group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/50 hover:glow-shadow flex flex-col items-center justify-center min-h-[260px]">
                <div className="flex justify-center text-teal-400 mb-4">
                  {metric.icon}
                </div>
                <h3 className={`${metric.valueClassName || 'text-5xl'} font-black text-white`}>{metric.value}</h3>
                <h4 className="text-md font-semibold text-slate-200 mt-2">{metric.title}</h4>
              </div>
               <div className="absolute bottom-full mb-3 w-60 p-3 bg-slate-950 text-white text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 pointer-events-none left-1/2 -translate-x-1/2 z-10 border border-slate-700">
                {metric.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-950"></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
