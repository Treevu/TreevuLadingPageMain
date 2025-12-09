
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Store, 
  User, 
  Building2, 
  Scan, 
  Cpu, 
  MessageSquare,
  Shield,
  Lock,
  FileCheck
} from 'lucide-react';

type DashboardView = 'PERSONA' | 'EMPRESA' | 'COMERCIO';

const Hero: React.FC = () => {
  const [activeView, setActiveView] = useState<DashboardView>('PERSONA');
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#0B0B0C]">
      
      {/* --- NUEVO FONDO "CONTUNDENTE" --- */}
      
      {/* 1. Main Spotlight (Top Center) - Creates a stage effect */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* 2. Secondary Ambient Glows (Subtle, positioned at corners to avoid text overlap) */}
      <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-segment-empresa/5 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-segment-socio/5 rounded-full blur-[120px] pointer-events-none opacity-60" />

      {/* 3. Noise Texture for SaaS/Premium feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

      {/* 4. Technical Grid with Radial Mask (Fades out at edges) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto mb-12">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-treevu-surface/80 border border-treevu-active text-brand-primary font-medium text-sm mb-8 animate-fade-in-up shadow-lg shadow-brand-primary/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Nueva Tecnología OCR 2.0 con Treevü Vision Engine™
          </div>
          
          {/* Main Headline - Enhanced Drop Shadow for Contrast */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-white tracking-tighter mb-6 leading-[0.9] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            El Sistema <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Operativo</span>
          </h1>

          {/* Secondary Slogan */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-8 bg-gradient-to-r from-brand-primary via-white to-segment-empresa bg-clip-text text-transparent tracking-wide animate-fade-in-up">
            Inteligencia Artificial para el Bienestar Financiero
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transformamos un proceso transaccional estático en un <span className="text-brand-primary font-semibold">activo de datos dinámico</span>. Sin tocar tu flujo de caja, sin riesgo de balance.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            <a 
              href="#roi-calculator" 
              onClick={(e) => handleScroll(e, 'roi-calculator')}
              aria-label="Ir a la calculadora de ROI y agendar demostración"
              className="px-8 py-4 bg-gradient-to-br from-brand-primary to-brand-secondary text-treevu-base text-lg font-bold rounded-xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Calcular ROI y Agenda Demo
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
            <a 
              href="#solutions"
              onClick={(e) => handleScroll(e, 'solutions')} 
              aria-label="Explorar el ecosistema de soluciones Treevü"
              className="px-8 py-4 bg-treevu-surface hover:bg-treevu-surface text-white border border-treevu-active hover:border-treevu-muted text-lg font-semibold rounded-xl transition-colors flex items-center justify-center cursor-pointer"
            >
              Ver Ecosistema
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-wider mb-10 opacity-80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-segment-empresa" />
              <span>ISO 27001 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-primary" />
              <span>Encriptación AES-256</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-segment-socio" />
              <span>Sin Custodia de Fondos</span>
            </div>
          </div>

          {/* Tech Stack Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 animate-fade-in-up border-t border-treevu-active/50 pt-8 w-fit mx-auto px-10">
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <Scan className="w-4 h-4 text-brand-primary" />
              <span className="text-xs font-bold tracking-widest text-gray-400">TREEVÜ VISION™</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <Cpu className="w-4 h-4 text-segment-empresa" />
              <span className="text-xs font-bold tracking-widest text-gray-400">COGNITIVE CORE™</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <MessageSquare className="w-4 h-4 text-segment-socio" />
              <span className="text-xs font-bold tracking-widest text-gray-400">AGENTS ORCHESTRATOR™</span>
            </div>
          </div>
        </div>

        {/* DASHBOARD VIEW SELECTOR */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="bg-[#0c0c0e]/80 backdrop-blur-md border border-treevu-active p-1.5 rounded-2xl inline-flex gap-2 shadow-2xl">
            <button 
              onClick={() => setActiveView('PERSONA')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeView === 'PERSONA' ? 'bg-brand-primary text-treevu-base shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <User className="w-4 h-4" /> Persona
            </button>
            <button 
              onClick={() => setActiveView('EMPRESA')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeView === 'EMPRESA' ? 'bg-segment-empresa text-treevu-base shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Building2 className="w-4 h-4" /> Empresa
            </button>
            <button 
              onClick={() => setActiveView('COMERCIO')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeView === 'COMERCIO' ? 'bg-segment-socio text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <Store className="w-4 h-4" /> Comercio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
