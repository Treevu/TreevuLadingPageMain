import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { ChartBarIcon } from './icons';

interface DepartmentData {
  departmentName: string;
  score: number;
  mainConcern: string;
}

interface FinancialData {
  overallScore: number;
  stressLevel: 'Bajo' | 'Medio' | 'Alto';
  productivityImpact: string;
  departmentBreakdown: DepartmentData[];
}

// Fix: Add onOpenDemo prop type
interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<FinancialData | null>(null);

  const fetchFinancialData = async () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          overallScore: { type: Type.INTEGER, description: 'Puntaje general de bienestar financiero de 1 a 100.' },
          stressLevel: { type: Type.STRING, enum: ['Bajo', 'Medio', 'Alto'], description: 'Nivel de estrés financiero predominante.' },
          productivityImpact: { type: Type.STRING, description: 'Porcentaje de impacto en la productividad, ej: "-5.2%".' },
          departmentBreakdown: {
            type: Type.ARRAY,
            description: 'Desglose por 3 departamentos clave.',
            items: {
              type: Type.OBJECT,
              properties: {
                departmentName: { type: Type.STRING, description: 'Nombre del departamento.' },
                score: { type: Type.INTEGER, description: 'Puntaje de bienestar del departamento.' },
                mainConcern: { type: Type.STRING, description: 'Principal preocupación financiera del departamento.' },
              },
              required: ['departmentName', 'score', 'mainConcern'],
            },
          },
        },
        required: ['overallScore', 'stressLevel', 'productivityImpact', 'departmentBreakdown'],
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Simula los datos de bienestar financiero para un equipo de una empresa de tecnología de 250 empleados. Incluye un puntaje general, nivel de estrés, impacto en productividad y un desglose por 3 departamentos clave: Ingeniería, Ventas y Marketing.',
        config: {
          responseMimeType: "application/json",
          responseSchema: responseSchema,
        },
      });

      const parsedData = JSON.parse(response.text);
      setData(parsedData);

    } catch (e) {
      console.error(e);
      setError('No se pudieron cargar los datos. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="relative bg-slate-900 text-white py-24 md:py-40 overflow-hidden">
       <div className="absolute inset-0 bg-gradient-dark-hero opacity-60"></div>
       <div className="absolute inset-0 -top-1/2 -left-1/3 w-2/3 h-2/3 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
       <div className="absolute inset-0 -bottom-1/2 -right-1/3 w-2/3 h-2/3 bg-sky-500/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="container relative mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 leading-tight mb-6 max-w-4xl mx-auto opacity-0 animate-fadeInUp text-glow-white" style={{ animationDelay: '0.1s' }}>
          El Ecosistema de Bienestar que Potencia a tu Equipo y a tu Negocio.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Mejora la productividad y retención de tu equipo midiendo su salud financiera. Como valor agregado, tus colaboradores acceden a un ecosistema de ofertas que conecta a comercios con clientes de alto valor.
        </p>
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.5s' }}
        >
          <a 
            href="#cta-final"
            // Fix: Wire up onOpenDemo
            onClick={(e) => { e.preventDefault(); onOpenDemo(); }}
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 glow-shadow animate-pulse-slow cursor-pointer"
          >
            Solicita tu demo gratuita
          </a>
          <button
            onClick={fetchFinancialData}
            disabled={isLoading}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-slate-300 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-slate-300 hover:text-slate-900 hover:glow-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChartBarIcon />
            <span className="ml-3">{isLoading ? 'Generando...' : 'Ver datos en vivo'}</span>
          </button>
        </div>
      </div>

      <div className="container relative mx-auto px-6 text-center z-10 mt-12">
        {error && <p className="text-red-400 text-center animate-fadeInUp">{error}</p>}
        {data && (
           <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 sm:p-8 text-left max-w-4xl mx-auto opacity-0 animate-fadeInUp border-glow-teal" style={{ animationDelay: '0.2s' }}>
             <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">Análisis de Bienestar Financiero (Simulado)</h3>
             <div className="grid sm:grid-cols-3 gap-6 text-center mb-6 border-b border-slate-700 pb-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-teal-400 text-glow-teal">{data.overallScore}<span className="text-2xl text-teal-200">/100</span></div>
                  <p className="text-sm text-slate-300 mt-1">Puntaje General</p>
                </div>
                <div>
                   <div className="text-4xl sm:text-5xl font-black text-amber-400">{data.stressLevel}</div>
                   <p className="text-sm text-slate-300 mt-1">Nivel de Estrés</p>
                </div>
                <div>
                   <div className="text-4xl sm:text-5xl font-black text-rose-400">{data.productivityImpact}</div>
                   <p className="text-sm text-slate-300 mt-1">Impacto Productividad</p>
                </div>
             </div>
             <h4 className="font-semibold text-lg text-slate-200 mb-4 text-center sm:text-left">Puntaje por Departamento:</h4>
             <div className="space-y-5">
              {data.departmentBreakdown.map((dep, index) => (
                <div key={dep.departmentName}>
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="text-sm font-semibold text-white">{dep.departmentName}</p>
                    <p className="text-xs text-slate-400">Preocupación: {dep.mainConcern}</p>
                  </div>
                  <div className="group relative bg-slate-700/50 rounded-full h-5 p-0.5">
                    <div 
                      className="absolute bottom-full mb-2 w-max px-3 py-1.5 bg-slate-900 text-white text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ left: `${dep.score}%`, transform: 'translateX(-50%)' }}
                    >
                      {dep.score}/100
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-900"></div>
                    </div>
                    <div 
                        className="bg-gradient-to-r from-teal-400 to-sky-500 h-full rounded-full animate-bar"
                        style={{ 
                            width: `${dep.score}%`,
                            animationDelay: `${0.4 + index * 0.15}s`
                        }}
                    ></div>
                  </div>
                </div>
              ))}
             </div>
           </div>
        )}
      </div>

    </section>
  );
};

export default Hero;