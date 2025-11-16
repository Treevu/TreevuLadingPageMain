import React, { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const stats = [
    {
      main: 'El <span class="text-teal-600 font-bold">60% de los empleados</span> identifica el estrés financiero como su principal fuente de preocupación.',
      sub: 'Esto afecta directamente su concentración, salud mental y compromiso laboral.',
      source: 'Fuente: PwC Employee Financial Wellness Survey'
    },
    {
      main: 'Cada empleado te cuesta entre <span class="text-teal-600 font-bold">11 y 14 horas de productividad</span> al mes debido al estrés financiero.',
      sub: 'Esto equivale a una pérdida anual de casi $500 mil millones para las empresas a nivel global.',
      source: 'Fuente: Global Wellness Institute'
    },
    {
      main: 'En LATAM, el <span class="text-teal-600 font-bold">68% de los trabajadores</span> vive "al día", y un 45% tiene deudas que superan el 40% de sus ingresos.',
      sub: 'La inestabilidad económica regional agrava el problema y la necesidad de soluciones efectivas.',
      source: 'Fuente: Estudios Regionales 2024'
    },
    {
      main: 'Los colaboradores con alto estrés financiero tienen <span class="text-teal-600 font-bold">2.5 veces más probabilidades</span> de buscar un nuevo empleo.',
      sub: 'El bienestar ya no es un beneficio opcional, es una estrategia clave para la retención de talento.',
      source: 'Fuente: Deloitte Human Capital Trends'
    },
];

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % stats.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentStat = stats[activeIndex];

  return (
    <section id="problema" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimateOnScroll className="md:pr-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    El estrés financiero de tu equipo te está costando más de lo que crees: <span className="text-teal-600">hasta 14 horas de productividad perdidas</span> al mes. Por empleado.
                </h2>
                <p className="text-lg text-slate-600">
                   El estrés financiero no es un problema personal, es un lastre organizacional. Se traduce en presentismo, menor innovación y una rotación costosa que impacta directamente en tu balance final.
                </p>
            </AnimateOnScroll>
          
            <AnimateOnScroll delay="delay-300">
                <div className="bg-slate-50 rounded-xl p-8 shadow-lg border-l-4 border-teal-500 relative min-h-[260px] flex flex-col justify-center">
                    <div className="absolute -top-5 -left-5 h-12 w-12 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                    </div>
                    <div className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                      <p 
                        className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug"
                        dangerouslySetInnerHTML={{ __html: currentStat.main }}
                      />
                      <p className="mt-4 text-lg text-slate-600 font-medium">
                        {currentStat.sub}
                      </p>
                      <p className="mt-4 text-sm text-slate-500 text-right italic">
                        {currentStat.source}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-6 text-sm font-semibold text-slate-400">
                        {activeIndex + 1} / {stats.length}
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;