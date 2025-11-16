import React, { useState, useEffect } from 'react';
import { ProductivityIcon, RetentionIcon, EngagementIcon, AbsenteeismIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const metrics = [
  {
    icon: <ProductivityIcon />,
    title: 'Productividad Recuperada',
    description: 'Tiempo que tus empleados recuperan al reducir la distracción por estrés financiero.',
    config: { targetValue: 8.2, maxValue: 16, decimals: 1, prefix: '+', suffix: ' Horas/Mes', color: 'text-teal-600' }
  },
  {
    icon: <RetentionIcon />,
    title: 'Aumento de Retención',
    description: 'Incremento en la lealtad del talento al ofrecer apoyo financiero relevante y personalizado.',
    config: { targetValue: 15, maxValue: 100, decimals: 0, prefix: '+', suffix: '%', color: 'text-sky-600' }
  },
  {
    icon: <EngagementIcon />,
    title: 'Mejora del Engagement',
    description: 'Aumento del compromiso y la moral del equipo al sentirse respaldado por la empresa.',
    config: { targetValue: 22, maxValue: 100, decimals: 0, prefix: '+', suffix: '%', color: 'text-emerald-600' }
  },
  {
    icon: <AbsenteeismIcon />,
    title: 'Reducción de Ausentismo',
    description: 'Disminución de las ausencias no planificadas relacionadas con emergencias económicas.',
    config: { targetValue: 30, maxValue: 100, decimals: 0, prefix: '-', suffix: '%', color: 'text-amber-600' }
  },
];

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  isVisible: boolean;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetValue, duration = 1500, isVisible, prefix = '', suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const animatedValue = percentage * targetValue;
      setCount(animatedValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };
    
    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetValue, duration]);

  return (
    <>{prefix}{count.toFixed(decimals)}{suffix}</>
  );
};


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

        <div className="space-y-8 max-w-3xl mx-auto">
          {metrics.map((metric, index) => (
            <AnimateOnScroll key={index} delay={`delay-${index * 150}`}>
              {(isVisible) => (
                <div className="bg-slate-50 rounded-2xl shadow-lg p-8 flex text-slate-900">
                  {/* Left Gutter with Icon and Line */}
                  <div className="w-16 flex-shrink-0 flex flex-col items-center mr-6">
                      <div className="flex-shrink-0 h-14 w-14 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-lg z-10 [&>svg]:w-8 [&>svg]:h-8">
                          {metric.icon}
                      </div>
                      {index < metrics.length - 1 && (
                          <div className="flex-grow w-0.5 bg-teal-200 my-4 rounded-full"></div>
                      )}
                  </div>
                  
                  {/* Content Area */}
                  <div className="flex-grow">
                      <h4 className="text-xl font-bold text-slate-800">{metric.title}</h4>
                      <div className={`text-4xl md:text-5xl font-black my-3 ${metric.config.color}`}>
                          <AnimatedCounter isVisible={isVisible} {...metric.config} />
                      </div>
                      <p className="text-slate-600 text-lg">
                          {metric.description}
                      </p>
                  </div>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;