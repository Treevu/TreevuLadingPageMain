import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PlanType, PricingPlan } from '../types';

const plans: Record<PlanType, PricingPlan[]> = {
  [PlanType.PERSONA]: [
    {
      name: 'Starter',
      price: 'Gratis',
      period: 'Siempre',
      description: 'Para quienes inician su camino al orden.',
      features: ['Registro manual ilimitado', 'IA básica (Lectura simple)', 'Gamificación (Niveles 1-5)', 'Reportes mensuales'],
      cta: 'Crear cuenta gratis',
      highlight: false
    },
    {
      name: 'Explorer',
      price: '$9',
      period: '/ mes',
      description: 'Maximiza tu devolución fiscal.',
      features: ['Todo lo de Starter', 'Coach IA Personal', 'Radar Fiscal (Alerta 3 UIT)', 'Marketplace VIP'],
      cta: 'Comenzar prueba',
      highlight: true
    }
  ],
  [PlanType.EMPRESA]: [
    {
      name: 'Launch',
      price: 'Desde $7',
      period: '/ usuario / mes',
      description: 'Bienestar financiero básico.',
      features: ['KPIs globales anonimizados', 'Financial Wellness Index', 'Onboarding digital'],
      cta: 'Contactar Ventas',
      highlight: false
    },
    {
      name: 'Growth',
      price: 'Cotizar',
      period: 'Soluciones a medida',
      description: 'Analítica predictiva de retención.',
      features: ['Todo lo de Launch', 'Predicción Riesgo de Fuga', 'Segmentación por áreas', 'Morning Brief Ejecutivo'],
      cta: 'Agendar Consultoría',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Para grandes corporaciones.',
      features: ['Integraciones API / ERP', 'Customer Success Manager', 'Soporte 24/7', 'Marca blanca opcional'],
      cta: 'Agendar reunión',
      highlight: false
    }
  ],
  [PlanType.COMERCIO]: [
    {
      name: 'Connect',
      price: 'Gratis',
      period: '(Comisión CPA)',
      description: 'Únete al marketplace.',
      features: ['Perfil de negocio', 'Listado en Marketplace', 'Estadísticas de visitas'],
      cta: 'Registrar comercio',
      highlight: false
    },
    {
      name: 'Amplify',
      price: '$39',
      period: '/ mes',
      description: 'Ventas impulsadas por IA.',
      features: ['Todo lo de Connect', 'IA para campañas dirigidas', 'Benchmarking sectorial', 'Insights de competencia'],
      cta: 'Empezar ahora',
      highlight: true
    }
  ]
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanType>(PlanType.PERSONA);

  // Helper to get active color based on tab
  const getActiveColor = () => {
    switch(activeTab) {
      case PlanType.PERSONA: return 'text-brand-primary border-brand-primary shadow-[0_0_15px_rgba(52,211,153,0.3)]';
      case PlanType.EMPRESA: return 'text-segment-empresa border-segment-empresa shadow-[0_0_15px_rgba(96,165,250,0.3)]';
      case PlanType.COMERCIO: return 'text-segment-socio border-segment-socio shadow-[0_0_15px_rgba(192,132,252,0.3)]';
    }
  };

  const getButtonColor = (isHighlight: boolean) => {
    if (!isHighlight) return 'bg-treevu-active text-white hover:bg-gray-600';
    switch(activeTab) {
      case PlanType.PERSONA: return 'bg-brand-primary text-treevu-base hover:bg-brand-secondary';
      case PlanType.EMPRESA: return 'bg-segment-empresa text-treevu-base hover:bg-blue-400';
      case PlanType.COMERCIO: return 'bg-segment-socio text-white hover:bg-purple-500';
    }
  };

  return (
    <section id="pricing" className="py-32 bg-treevu-base border-t border-treevu-active">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Planes flexibles</h2>
          <p className="text-treevu-muted max-w-xl mx-auto text-lg">
            Escala el bienestar financiero a tu ritmo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-treevu-surface p-1.5 rounded-2xl border border-treevu-active inline-flex">
            {Object.values(PlanType).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === type
                    ? `bg-treevu-base border border-treevu-active ${getActiveColor()}`
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {type.charAt(0) + type.slice(1).toLowerCase() + 's'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid (Flexbox for centering) */}
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {plans[activeTab].map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative w-full md:max-w-[48%] lg:max-w-[32%] min-w-[320px] bg-treevu-surface rounded-3xl transition-all duration-300 overflow-hidden flex flex-col ${
                plan.highlight 
                  ? 'border-2 shadow-2xl z-10 scale-105' 
                  : 'border border-treevu-active hover:border-gray-600'
              }`}
              style={{ borderColor: plan.highlight ? (activeTab === PlanType.PERSONA ? '#34D399' : activeTab === PlanType.EMPRESA ? '#60A5FA' : '#C084FC') : '' }}
            >
              {plan.highlight && (
                <div className={`absolute top-0 left-0 w-full text-center py-2 text-xs font-bold uppercase tracking-widest text-treevu-base`}
                     style={{ backgroundColor: activeTab === PlanType.PERSONA ? '#34D399' : activeTab === PlanType.EMPRESA ? '#60A5FA' : '#C084FC' }}>
                  <div className="flex justify-center items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Recomendado
                  </div>
                </div>
              )}
              
              <div className="p-8 pt-12 flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-treevu-muted text-sm mb-8 min-h-[40px]">{plan.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-treevu-muted ml-2 text-sm font-medium">{plan.period}</span>
                </div>
                
                <a 
                  href="#founders-offer"
                  className={`block w-full py-4 px-4 rounded-xl text-center font-bold transition-all shadow-lg hover:shadow-xl ${getButtonColor(!!plan.highlight)}`}
                >
                  {plan.cta}
                </a>
              </div>

              <div className="px-8 pb-8">
                <div className="h-px w-full bg-treevu-active mb-6"></div>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${activeTab === PlanType.PERSONA ? 'text-brand-primary' : activeTab === PlanType.EMPRESA ? 'text-segment-empresa' : 'text-segment-socio'}`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;