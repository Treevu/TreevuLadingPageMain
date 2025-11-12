import React from 'react';
import { TreevuLogoWhite } from './icons';
import FaqItem from './FaqItem';

const faqs = [
    {
        question: "¿Qué es Treevü y cómo funciona?",
        answer: "Treevü es una plataforma de IA que se integra con tus sistemas para analizar datos (financieros, de RRHH, etc.) de forma anónima. Identifica patrones de estrés financiero, predice su impacto en la productividad y te da recomendaciones para mejorar el bienestar de tu equipo."
    },
    {
        question: "¿La información de mis empleados es privada y segura?",
        answer: "Absolutamente. La privacidad es nuestra máxima prioridad. Todos los datos se anonimizan y se procesan de forma agregada. Nunca accedemos a información personal identificable. Cumplimos con los más altos estándares de seguridad de datos."
    },
    {
        question: "¿Quiénes son elegibles para el programa piloto gratuito?",
        answer: "El piloto está diseñado para empresas con más de 50 empleados que buscan soluciones innovadoras para la gestión de talento y el bienestar organizacional. Los cupos son limitados y buscamos socios comprometidos con la mejora continua."
    }
];

const Footer: React.FC = () => {
  const hashtags = [
    '#BienestarFinanciero',
    '#IAOrganizacional',
    '#ProductividadHumana',
    '#Treevü',
    '#Fintech',
    '#PeopleAnalytics',
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center text-white mb-8">Preguntas Frecuentes</h2>
            <div>
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
        
        <div className="text-center">
            <div className="mb-8 flex justify-center">
                <TreevuLogoWhite className="h-10" />
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
            {hashtags.map((tag) => (
                <span key={tag} className="text-sm font-medium hover:text-white transition-colors hover:text-glow-white">{tag}</span>
            ))}
            </div>
            <div className="flex justify-center gap-x-6 mb-8">
            <a href="#" className="text-sm hover:text-white transition-colors hover:text-glow-white">Sobre nosotros</a>
            <a href="#" className="text-sm hover:text-white transition-colors hover:text-glow-white">Política de Privacidad</a>
            <a href="#" className="text-sm hover:text-white transition-colors hover:text-glow-white">Términos de Servicio</a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Treevü. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;