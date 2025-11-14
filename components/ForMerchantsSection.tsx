import React from 'react';
import { HighValueCustomerIcon, SalesGrowthIcon, BrandLoyaltyIcon } from './icons';
import AnimateOnScroll from './AnimateOnScroll';

const benefits = [
    {
        icon: <HighValueCustomerIcon />,
        title: 'Conecta con Clientes de Alto Valor',
        description: 'Accede a una audiencia con estabilidad financiera, mayor poder adquisitivo y dispuesta a invertir en productos y servicios de calidad.',
        delay: 'delay-0'
    },
    {
        icon: <SalesGrowthIcon />,
        title: 'Impulsa tus Ventas',
        description: 'Crea ofertas exclusivas y personalizadas que generan un mayor ticket promedio y una tasa de conversión superior a los canales tradicionales.',
        delay: 'delay-200'
    },
    {
        icon: <BrandLoyaltyIcon />,
        title: 'Construye Lealtad de Marca',
        description: 'Asocia tu marca con el bienestar y la exclusividad, generando clientes recurrentes y de alto valor de vida (LTV).',
        delay: 'delay-400'
    }
];

const ForMerchantsSection: React.FC = () => {
  return (
    <section id="comercios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Un Ecosistema que Genera Valor Adicional
          </h2>
          <p className="text-lg text-slate-600">
            Al mejorar el bienestar de tus equipos, creas una red de consumidores de alto valor, abriendo una oportunidad única para marcas y comercios asociados que quieran formar parte de nuestro ecosistema de ofertas.
          </p>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} delay={benefit.delay}>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-teal-400 transition-colors duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl h-full">
                <div className="text-teal-500 mb-4">
                    {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
                </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForMerchantsSection;