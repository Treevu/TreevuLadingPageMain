import React, { useState, useEffect } from 'react';
import { CodeIcon, BankIcon, MiningIcon, RetailIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const industryCosts = [
  {
    icon: <CodeIcon />,
    main: 'Cuesta entre <span class="text-teal-600 font-bold">$80K y $150K USD</span> reemplazar a un desarrollador senior en la industria <strong>Tech</strong>.',
    sub: 'La alta demanda y la especialización de habilidades hacen que la rotación en este sector sea extremadamente costosa.',
    source: 'Fuente: U.S. Bureau of Labor Statistics'
  },
  {
    icon: <BankIcon />,
    main: 'Un analista o ejecutivo calificado en <strong>Banca y Finanzas</strong> tiene un costo de rotación de <span class="text-teal-600 font-bold">$45K a $75K USD</span>.',
    sub: 'La pérdida de confianza del cliente y el conocimiento del mercado son costos intangibles que se suman a la cifra.',
    source: 'Fuente: Society for Human Resource Management (SHRM)'
  },
  {
    icon: <MiningIcon />,
    main: 'Reemplazar un ingeniero especializado en <strong>Minería e Industria</strong> puede costar hasta <span class="text-teal-600 font-bold">$250K USD</span>.',
    sub: 'El largo tiempo de adaptación y el alto riesgo operativo elevan significativamente los costos de rotación.',
    source: 'Fuente: Mining Industry Human Resources Council'
  },
  {
    icon: <RetailIcon />,
    main: 'El sector <strong>Retail</strong> enfrenta una tasa de rotación promedio del <span class="text-teal-600 font-bold">40% al 60% anual</span>.',
    sub: 'Esto representa un desafío constante para la capacitación, la consistencia del servicio y la moral del equipo.',
    source: 'Fuente: National Retail Federation'
  },
];

const CostOfTurnoverSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % industryCosts.length);
            setIsFading(false);
        }, 500);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const currentIndustry = industryCosts[activeIndex];

  return (
    <section id="costo-rotacion" className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 text-glow-white">
            La Rotación Silenciosa: ¿Cuánto le Cuesta a tu Industria?
          </h2>
          <p className="text-lg text-slate-300">
            El bienestar financiero es un factor clave en la retención. Perder talento especializado cuesta mucho más que invertir en su estabilidad.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-300" className="flex justify-center">
            <div className="w-full max-w-2xl">
                 <div className="bg-slate-50 rounded-2xl shadow-lg p-8 relative min-h-[300px] flex text-slate-900">
                    {/* Left Gutter with Icon and Line */}
                    <div className="w-12 flex-shrink-0 flex flex-col items-center mr-6">
                        <div className="flex-shrink-0 h-12 w-12 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg z-10 [&>svg]:w-6 [&>svg]:h-6">
                            {currentIndustry.icon}
                        </div>
                        <div className="flex-grow w-0.5 bg-teal-200 mt-4 rounded-full"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="flex-grow pt-1">
                        <div className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                            <p 
                                className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug"
                                dangerouslySetInnerHTML={{ __html: currentIndustry.main }}
                            />
                            <p className="mt-4 text-lg text-slate-600">
                                {currentIndustry.sub}
                            </p>
                            <p className="mt-6 text-sm text-slate-500 text-right italic">
                                {currentIndustry.source}
                            </p>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="absolute bottom-6 right-8 text-sm font-semibold text-slate-400">
                        {activeIndex + 1} / {industryCosts.length}
                    </div>
                 </div>
            </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CostOfTurnoverSection;