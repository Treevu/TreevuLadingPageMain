import React, { useState } from 'react';
import { 
  ArrowRight, 
  Activity, 
  Smartphone, 
  LayoutDashboard, 
  Wallet, 
  PieChart, 
  MessageSquare, 
  Bell, 
  Search, 
  ChevronDown,
  Coffee,
  Car,
  ShoppingBag,
  Users,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Target,
  Store,
  User,
  Building2,
  Cpu,
  Scan,
  Trophy,
  Zap,
  LineChart,
  Globe,
  ShieldCheck
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

  // Theme colors helper
  const getThemeColor = () => {
    switch(activeView) {
      case 'PERSONA': return 'text-brand-primary';
      case 'EMPRESA': return 'text-segment-empresa';
      case 'COMERCIO': return 'text-segment-socio';
      default: return 'text-brand-primary';
    }
  };
  
  const getBgColor = () => {
    switch(activeView) {
      case 'PERSONA': return 'bg-brand-primary';
      case 'EMPRESA': return 'bg-segment-empresa';
      case 'COMERCIO': return 'bg-segment-socio';
      default: return 'bg-brand-primary';
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-treevu-base">
      {/* Animated Gradients Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary opacity-20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-segment-empresa opacity-20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-segment-socio opacity-20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ 
          backgroundImage: 'linear-gradient(#34d399 1px, transparent 1px), linear-gradient(to right, #34d399 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-treevu-surface border border-treevu-active text-brand-primary font-medium text-sm mb-8 animate-fade-in-up shadow-lg shadow-brand-primary/5">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Nueva Tecnología OCR 2.0 con Treevü Vision Engine™
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight mb-8 leading-tight">
            Bienestar Financiero <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-segment-empresa to-segment-socio">
              360° impulsado por IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-treevu-muted mb-10 max-w-3xl mx-auto leading-relaxed">
            Reduce la rotación de personal y aumenta el bienestar financiero de tu equipo con <span className="text-white font-semibold">IA predictiva</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-10">
            <a 
              href="#roi-calculator" 
              onClick={(e) => handleScroll(e, 'roi-calculator')}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-treevu-base text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Calcular ROI y Agenda Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#solutions"
              onClick={(e) => handleScroll(e, 'solutions')} 
              className="px-8 py-4 bg-treevu-surface hover:bg-treevu-active text-white border border-treevu-active text-lg font-semibold rounded-xl transition-colors flex items-center justify-center cursor-pointer"
            >
              Ver Ecosistema
            </a>
          </div>

          {/* Tech Stack Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 animate-fade-in-up text-gray-500 text-xs font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <Scan className="w-4 h-4 text-brand-primary" />
              Treevü Vision™
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-segment-empresa" />
              Cognitive Core™
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-segment-socio" />
              Agents Orchestrator™
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

        {/* PRODUCT MOCKUP (High Fidelity) */}
        <div className="relative mx-auto max-w-6xl animate-fade-in-up group">
            {/* Glow effect behind mockup */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${activeView === 'PERSONA' ? 'from-brand-primary via-emerald-900 to-brand-primary' : activeView === 'EMPRESA' ? 'from-segment-empresa via-blue-900 to-segment-empresa' : 'from-segment-socio via-purple-900 to-segment-socio'} rounded-[20px] blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            
            {/* Window Frame */}
            <div className="relative bg-[#0c0c0e] border border-treevu-active rounded-[20px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[650px] transition-all duration-500">
              
              {/* Sidebar (Real Menu) */}
              <div className="hidden md:flex w-64 bg-[#131315] border-r border-treevu-active flex-col p-6 transition-colors duration-300">
                 <div className="flex items-center gap-3 mb-10">
                   <div className={`w-8 h-8 rounded-lg ${getBgColor()} flex items-center justify-center font-display font-bold text-treevu-base text-lg shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-colors`}>T</div>
                   <span className="font-display font-bold text-xl tracking-tight text-white">Treevü</span>
                 </div>
                 
                 <div className="space-y-2">
                   <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${getBgColor()} bg-opacity-10 ${getThemeColor()} border border-current border-opacity-20 font-medium cursor-pointer transition-all`}>
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Dashboard</span>
                   </div>
                   <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                      {activeView === 'PERSONA' ? <Wallet className="w-5 h-5" /> : activeView === 'EMPRESA' ? <Users className="w-5 h-5" /> : <Target className="w-5 h-5" />}
                      <span>{activeView === 'PERSONA' ? 'Movimientos' : activeView === 'EMPRESA' ? 'Colaboradores' : 'Campañas IA'}</span>
                   </div>
                   <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                      <PieChart className="w-5 h-5" />
                      <span>{activeView === 'PERSONA' ? 'Radar 3 UIT' : activeView === 'EMPRESA' ? 'Analítica FWI' : 'Benchmark'}</span>
                   </div>
                   <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                      {activeView === 'PERSONA' ? <Trophy className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                      <span>{activeView === 'PERSONA' ? 'Logros y Nivel' : 'Asistente IA'}</span>
                   </div>
                 </div>

                 <div className="mt-auto">
                   <div className={`p-4 bg-gradient-to-br ${activeView === 'PERSONA' ? 'from-brand-primary/10' : activeView === 'EMPRESA' ? 'from-segment-empresa/10' : 'from-segment-socio/10'} to-transparent rounded-xl border border-white/10`}>
                     <div className={`flex items-center gap-2 mb-2 ${getThemeColor()} font-bold text-xs uppercase tracking-wide`}>
                        <Activity className="w-3 h-3" />
                        <span>Estado del Plan</span>
                     </div>
                     <p className="text-gray-400 text-xs mb-3">
                        {activeView === 'PERSONA' ? 'Plan Explorer: Coach IA Activo' : activeView === 'EMPRESA' ? 'Plan Growth: Predicción Activa' : 'Plan Amplify: Insights Activos'}
                     </p>
                     <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className={`h-full ${getBgColor()} w-full shadow-[0_0_10px_currentColor]`}></div>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Main Dashboard Content */}
              <div className="flex-1 bg-[#0c0c0e] flex flex-col">
                 
                 {/* Top Navigation */}
                 <div className="h-16 border-b border-treevu-active flex items-center justify-between px-8">
                    <div className="flex items-center bg-treevu-surface border border-treevu-active rounded-lg px-3 py-1.5 w-64 text-sm text-gray-400">
                       <Search className="w-4 h-4 mr-2" />
                       <span>Buscar...</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="relative cursor-pointer">
                          <Bell className="w-5 h-5 text-gray-400 hover:text-white" />
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-danger rounded-full border border-treevu-base"></div>
                       </div>
                       <div className="h-8 w-[1px] bg-treevu-active mx-2"></div>
                       <div className="flex items-center gap-2 cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center text-xs font-bold text-white">
                             {activeView === 'PERSONA' ? 'AM' : activeView === 'EMPRESA' ? 'HR' : 'MK'}
                          </div>
                          <span className="text-sm font-medium text-white hidden lg:block">
                            {activeView === 'PERSONA' ? 'Alejandro M.' : activeView === 'EMPRESA' ? 'HR Director' : 'Marketing Lead'}
                          </span>
                          <ChevronDown className="w-3 h-3 text-gray-500" />
                       </div>
                    </div>
                 </div>

                 {/* Scrollable Area - DYNAMIC CONTENT */}
                 <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
                    
                    <div className="mb-8 animate-fade-in-up flex justify-between items-end">
                       <div>
                        <h2 className="text-2xl font-display font-bold text-white">
                            {activeView === 'PERSONA' && 'Hola, Alejandro 👋'}
                            {activeView === 'EMPRESA' && 'Panel de Talento y Retención 📊'}
                            {activeView === 'COMERCIO' && 'Rendimiento de Negocio 🚀'}
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">
                            {activeView === 'PERSONA' && 'Tu Coach IA ha detectado 3 oportunidades de ahorro hoy.'}
                            {activeView === 'EMPRESA' && 'El FWI global ha subido. Revisa el Morning Brief.'}
                            {activeView === 'COMERCIO' && 'Tus campañas están superando al benchmark sectorial.'}
                        </p>
                       </div>
                       <div className={`px-3 py-1 rounded-full text-xs font-bold border ${activeView === 'PERSONA' ? 'border-brand-primary/30 text-brand-primary bg-brand-primary/10' : activeView === 'EMPRESA' ? 'border-segment-empresa/30 text-segment-empresa bg-segment-empresa/10' : 'border-segment-socio/30 text-segment-socio bg-segment-socio/10'}`}>
                           Actualizado: Hace 2 min
                       </div>
                    </div>

                    {/* PERSONA VIEW - (Includes: Radar 3UIT, Gamification, Coach IA, Manual Record, Marketplace VIP) */}
                    {activeView === 'PERSONA' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
                            <div className="lg:col-span-2 bg-[#18181b] rounded-2xl border border-treevu-active p-6 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Control de Gastos</h3>
                                        <p className="text-xs text-gray-500">IA categorizando en tiempo real</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                                            <span className="text-[10px] text-gray-400 uppercase">Real</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-treevu-active"></span>
                                            <span className="text-[10px] text-gray-400 uppercase">Meta</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between gap-2 h-48 w-full pt-4 border-b border-treevu-active/30 pb-2">
                                    {[
                                    { label: 'Alim', budget: '60%', expense: '35%', status: 'ok' },
                                    { label: 'Trans', budget: '60%', expense: '45%', status: 'ok' },
                                    { label: 'Serv', budget: '60%', expense: '25%', status: 'ok' },
                                    { label: 'Ocio', budget: '80%', expense: '75%', status: 'warn' },
                                    { label: 'Salud', budget: '80%', expense: '45%', status: 'ok' },
                                    { label: 'Ropa', budget: '100%', expense: '95%', status: 'warn' },
                                    { label: 'Otros', budget: '50%', expense: '20%', status: 'ok' },
                                    ].map((d, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                                        <div className="flex items-end justify-center w-full gap-1 h-full px-1">
                                            <div style={{height: d.budget}} className="w-1.5 md:w-2 bg-treevu-active/60 rounded-t-sm transition-all duration-300"></div>
                                            <div style={{height: d.expense}} className={`w-3 md:w-4 ${d.status === 'warn' ? 'bg-brand-accent' : 'bg-brand-primary'} rounded-t-sm relative shadow-[0_0_10px_rgba(52,211,153,0.15)] transition-all duration-300 group-hover:opacity-80`}></div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium uppercase">{d.label}</span>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* Widget: Radar 3 UIT */}
                            <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-6 flex flex-col justify-between relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">Radar Fiscal</h3>
                                            <p className="text-xs text-gray-500 mb-4">Meta: 3 UIT (S/ 15,450)</p>
                                        </div>
                                        <div className="bg-brand-primary/10 p-1.5 rounded-lg text-brand-primary">
                                            <Scan className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center py-4">
                                        <div className="relative w-32 h-32">
                                            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                                                <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" stroke="currentColor" />
                                                <path className="text-brand-primary drop-shadow-[0_0_4px_rgba(52,211,153,0.5)]" strokeDasharray="62, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" strokeLinecap="round" stroke="currentColor" />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <span className="text-xl font-bold text-white">62%</span>
                                                <span className="text-[9px] text-gray-400 uppercase tracking-wide">Avance</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 bg-treevu-surface rounded-lg p-3 border border-treevu-active flex justify-between items-center">
                                        <span className="text-xs text-gray-400">Devolución Est.</span>
                                        <span className="text-sm font-bold text-brand-primary">S/ 2,450</span>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            </div>

                            {/* Widget: Gamification Level */}
                            <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-6 relative overflow-hidden flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent">
                                    <Trophy className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-sm">Nivel 5: Estratega Fiscal</h4>
                                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                                        <span>2,450 XP</span>
                                        <span>Siguiente: Gurú</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-treevu-active rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-accent w-[80%]"></div>
                                    </div>
                                </div>
                            </div>

                             {/* Last Movements */}
                            <div className="lg:col-span-2 bg-[#18181b] rounded-2xl border border-treevu-active p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-white font-bold text-lg">Últimos Movimientos</h3>
                                    <button className="text-xs text-brand-primary font-bold hover:underline">Ver Marketplace VIP</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center p-3 rounded-xl bg-treevu-surface/50 border border-treevu-active hover:bg-treevu-surface transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center mr-3 border border-gray-700 group-hover:border-gray-600">
                                            <Car className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-white">Uber Ride</h4>
                                            <p className="text-xs text-gray-500">Deducible (3 UIT) • Hoy</p>
                                        </div>
                                        <span className="text-sm font-bold text-white">- S/ 18.50</span>
                                    </div>
                                    <div className="flex items-center p-3 rounded-xl bg-treevu-surface/50 border border-treevu-active hover:bg-treevu-surface transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center mr-3 border border-gray-700 group-hover:border-gray-600">
                                            <ShoppingBag className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-white">Zara Retail</h4>
                                            <p className="text-xs text-gray-500">No Deducible • 24 Oct</p>
                                        </div>
                                        <span className="text-sm font-bold text-white">- S/ 129.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* EMPRESA VIEW - (Includes: FWI, Churn Prediction, Segmentation, Morning Brief) */}
                    {activeView === 'EMPRESA' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
                            {/* KPI 1: FWI */}
                            <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-gray-500 uppercase">FWI Global</span>
                                    <TrendingUp className="w-4 h-4 text-segment-empresa" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">7.8/10</div>
                                <div className="flex items-center text-xs text-brand-primary">
                                    <ArrowRight className="w-3 h-3 rotate-[-45deg] mr-1" />
                                    +0.5 vs mes anterior
                                </div>
                            </div>
                            {/* KPI 2: Churn Risk */}
                            <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-5 bg-gradient-to-br from-treevu-surface to-red-900/10">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-brand-danger uppercase">Riesgo de Fuga</span>
                                    <AlertTriangle className="w-4 h-4 text-brand-danger" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">3.2%</div>
                                <div className="flex items-center text-xs text-brand-primary">
                                    <ArrowRight className="w-3 h-3 rotate-[45deg] mr-1" />
                                    -1.1% (Mejora)
                                </div>
                            </div>
                             {/* KPI 3: Engagement */}
                             <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-gray-500 uppercase">Onboarding</span>
                                    <Users className="w-4 h-4 text-segment-empresa" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">92%</div>
                                <div className="flex items-center text-xs text-gray-400">
                                    842 Usuarios Activos
                                </div>
                            </div>

                            {/* Chart: Segmentation (Stress by Area) */}
                            <div className="lg:col-span-2 bg-[#18181b] rounded-2xl border border-treevu-active p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-white font-bold text-lg">Segmentación de Estrés Financiero</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-brand-danger rounded-full"></span>
                                        <span className="text-xs text-gray-400">Alto Riesgo</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { area: 'Ventas', val: 75, color: 'bg-brand-danger', risk: 'Crítico' },
                                        { area: 'Tecnología', val: 45, color: 'bg-brand-accent', risk: 'Medio' },
                                        { area: 'Marketing', val: 30, color: 'bg-brand-primary', risk: 'Bajo' },
                                        { area: 'Operaciones', val: 55, color: 'bg-brand-accent', risk: 'Medio' },
                                    ].map((item, i) => (
                                        <div key={i} className="group cursor-pointer">
                                            <div className="flex justify-between text-xs text-gray-400 mb-1 group-hover:text-white transition-colors">
                                                <span className="font-bold">{item.area}</span>
                                                <span>{item.risk} ({item.val}%)</span>
                                            </div>
                                            <div className="w-full h-3 bg-treevu-active rounded-full overflow-hidden relative">
                                                <div className={`h-full ${item.color} transition-all duration-500`} style={{width: `${item.val}%`}}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Widget: Morning Brief (AI Insights) */}
                            <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-6 relative overflow-hidden flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-1.5 bg-segment-empresa/10 rounded text-segment-empresa">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg">Morning Brief</h3>
                                </div>
                                <div className="space-y-3 flex-1">
                                    <div className="p-3 rounded-lg bg-segment-empresa/10 border border-segment-empresa/30 text-xs text-gray-300">
                                        <strong className="text-segment-empresa block mb-1">Predicción IA</strong>
                                        El riesgo de fuga en Ventas aumentó por estrés de fin de Q. Activar "Adelanto de Sueldo" reduciría el riesgo en 15%.
                                    </div>
                                    <div className="p-3 rounded-lg bg-treevu-surface border border-treevu-active text-xs text-gray-400">
                                        <strong className="text-white block mb-1">Acción Requerida</strong>
                                        Aprobar presupuesto de bienestar Q4.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* COMERCIO VIEW - (Includes: Sales, ROAS, Benchmarking, Campaign Segmentation) */}
                    {activeView === 'COMERCIO' && (
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
                             {/* KPIs Top Row */}
                             <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-segment-socio/20 flex items-center justify-center text-segment-socio">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Ventas Atribuidas</p>
                                        <p className="text-2xl font-bold text-white">S/ 24,500</p>
                                    </div>
                                </div>
                                <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">ROAS Promedio</p>
                                        <p className="text-2xl font-bold text-white">8.4x</p>
                                    </div>
                                </div>
                                <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-5 flex items-center gap-4 bg-segment-socio/5 border-segment-socio/30">
                                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Market Share</p>
                                        <p className="text-2xl font-bold text-white">+12% vs Sector</p>
                                    </div>
                                </div>
                             </div>

                             {/* Chart: Benchmarking Sectorial */}
                             <div className="lg:col-span-2 bg-[#18181b] rounded-2xl border border-treevu-active p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-white font-bold text-lg">Benchmarking Sectorial</h3>
                                    <div className="flex gap-4 text-xs">
                                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-segment-socio"></span> Tú</div>
                                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-600"></span> Sector</div>
                                    </div>
                                </div>
                                <div className="h-32 flex items-end justify-between gap-4">
                                     {/* Mock Chart Bars */}
                                     {[
                                         { label: 'Conversión', you: 80, avg: 40 },
                                         { label: 'Ticket', you: 65, avg: 55 },
                                         { label: 'Recurrencia', you: 90, avg: 60 },
                                         { label: 'NPS', you: 75, avg: 50 },
                                     ].map((item, i) => (
                                         <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1 h-full">
                                             <div className="flex gap-1 items-end h-full w-full justify-center">
                                                 <div style={{height: `${item.you}%`}} className="w-4 bg-segment-socio rounded-t-sm hover:opacity-80 transition-all"></div>
                                                 <div style={{height: `${item.avg}%`}} className="w-4 bg-gray-700 rounded-t-sm"></div>
                                             </div>
                                             <span className="text-[10px] text-gray-500 uppercase">{item.label}</span>
                                         </div>
                                     ))}
                                </div>
                             </div>

                             {/* Widget: Competitor Insights */}
                             <div className="bg-[#18181b] rounded-2xl border border-treevu-active p-6 relative overflow-hidden">
                                 <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                     <ShieldCheck className="w-5 h-5 text-segment-socio" /> Insights
                                 </h3>
                                 <div className="space-y-4">
                                     <div className="p-3 bg-treevu-surface rounded-xl border border-treevu-active">
                                         <div className="flex justify-between mb-1">
                                            <span className="text-xs text-gray-400">Segmento "Jóvenes"</span>
                                            <span className="text-xs text-brand-primary font-bold">Oportunidad</span>
                                         </div>
                                         <p className="text-sm text-white">Tu competencia agotó stock de Sneakers. Lanza oferta flash ahora.</p>
                                     </div>
                                     <div className="p-3 bg-treevu-surface rounded-xl border border-treevu-active">
                                         <div className="flex justify-between mb-1">
                                            <span className="text-xs text-gray-400">Pricing</span>
                                            <span className="text-xs text-gray-400">Neutro</span>
                                         </div>
                                         <p className="text-sm text-white">Tus precios están 5% arriba del promedio de categoría.</p>
                                     </div>
                                 </div>
                             </div>

                             {/* Campaigns List with AI Tags */}
                             <div className="lg:col-span-3 bg-[#18181b] rounded-2xl border border-treevu-active p-6">
                                <h3 className="text-white font-bold text-lg mb-4">Campañas Activas con IA</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center p-3 rounded-xl bg-treevu-surface/50 border border-treevu-active">
                                        <div className="w-12 h-12 bg-segment-socio/20 text-segment-socio rounded-lg flex items-center justify-center mr-4">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="text-sm font-bold text-white">Flash Sale 30%</h4>
                                                <span className="px-1.5 py-0.5 rounded bg-brand-accent/20 text-brand-accent text-[9px] font-bold uppercase">IA Segmentado</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Target: Ahorradores High-Potential</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-segment-socio">14.2% CTR</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 rounded-xl bg-treevu-surface/50 border border-treevu-active">
                                        <div className="w-12 h-12 bg-brand-primary/20 text-brand-primary rounded-lg flex items-center justify-center mr-4">
                                            <Wallet className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="text-sm font-bold text-white">Cashback 15%</h4>
                                                <span className="px-1.5 py-0.5 rounded bg-brand-primary/20 text-brand-primary text-[9px] font-bold uppercase">Retención</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Target: Usuarios en Riesgo</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-segment-socio">8.5% CTR</div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    )}

                 </div>

                 {/* AI Floating Notification - DYNAMIC */}
                 <div className="absolute bottom-6 right-6 md:right-10 animate-fade-in-up">
                    <div className="bg-gradient-to-r from-[#18181b] to-[#202023] rounded-2xl border border-treevu-active p-4 flex items-center gap-4 shadow-2xl max-w-sm hover:scale-105 transition-transform cursor-pointer">
                       <div className={`w-10 h-10 rounded-full ${activeView === 'PERSONA' ? 'bg-brand-accent/10 border-brand-accent/20 text-brand-accent' : activeView === 'EMPRESA' ? 'bg-segment-empresa/10 border-segment-empresa/20 text-segment-empresa' : 'bg-segment-socio/10 border-segment-socio/20 text-segment-socio'} flex items-center justify-center flex-shrink-0 border`}>
                          <Smartphone className="w-5 h-5" />
                       </div>
                       <div className="flex-1">
                          <p className={`text-xs font-bold uppercase tracking-wide mb-0.5 ${activeView === 'PERSONA' ? 'text-brand-accent' : activeView === 'EMPRESA' ? 'text-segment-empresa' : 'text-segment-socio'}`}>Treevü Cognitive Core™</p>
                          <p className="text-xs text-gray-300 leading-snug">
                            {activeView === 'PERSONA' && 'Detecté un gasto recurrente. Podrías ahorrar S/ 45/mes cancelando servicios inactivos.'}
                            {activeView === 'EMPRESA' && 'Alerta: El equipo de Tecnología muestra signos de burnout (FWI bajo). Sugiero activar viernes flex.'}
                            {activeView === 'COMERCIO' && 'Insight: Tu competencia subió precios un 10%. Mantener los tuyos aumentará tu conversión un 15%.'}
                          </p>
                       </div>
                    </div>
                 </div>

              </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;