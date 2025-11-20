import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Check, User, Building2 } from 'lucide-react';

const FoundersForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [segment, setSegment] = useState<'PERSONA' | 'EMPRESA'>('EMPRESA');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="founders-offer" className="py-32 relative overflow-hidden bg-[#0f0f11]">
      {/* Gold gradient background accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-yellow-200 to-brand-accent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent opacity-5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-treevu-surface rounded-[2.5rem] shadow-2xl border border-treevu-active overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Content */}
            <div className="p-10 md:p-14 md:w-1/2 relative overflow-hidden flex flex-col justify-center">
               {/* Decorative elements */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/10 to-transparent"></div>
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-bold uppercase tracking-widest text-xs">
                   <Sparkles className="w-3 h-3" />
                   Programa de Partners
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-white">
                   Únete como <br/>
                   <span className="text-brand-accent">Partner Fundador</span>
                 </h2>
                 
                 <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                   {segment === 'EMPRESA' 
                     ? 'Sé parte del grupo selecto de empresas que definirá el futuro del bienestar financiero B2B. Cupos limitados Q3 2025.' 
                     : 'Accede antes que nadie a la tecnología de finanzas personales más avanzada de LATAM. Sé un Early Adopter.'}
                 </p>
                 
                 <ul className="space-y-5">
                   {[
                     'Prioridad en integraciones de IA',
                     'Visibilidad destacada en Marketplace',
                     'Tarifas preferenciales de por vida',
                     'Acceso a roadmap de producto'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center text-gray-300">
                       <div className="w-6 h-6 rounded-full bg-brand-accent flex items-center justify-center mr-4 shadow-lg shadow-brand-accent/20">
                         <Check className="w-3 h-3 text-treevu-base font-bold" strokeWidth={4} />
                       </div>
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Right Form */}
            <div className="p-10 md:p-14 md:w-1/2 bg-treevu-base relative">
              
              {/* Segment Toggle */}
              {!isSuccess && (
                <div className="flex bg-treevu-surface border border-treevu-active rounded-xl p-1 mb-8">
                  <button 
                    onClick={() => setSegment('EMPRESA')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      segment === 'EMPRESA' 
                        ? 'bg-treevu-active text-white shadow-lg' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    Para Empresa
                  </button>
                  <button 
                    onClick={() => setSegment('PERSONA')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      segment === 'PERSONA' 
                        ? 'bg-treevu-active text-white shadow-lg' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    Para Mí
                  </button>
                </div>
              )}

              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up min-h-[400px]">
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 border border-brand-primary/50">
                    <Check className="w-10 h-10 text-brand-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-3">¡Solicitud Recibida!</h3>
                  <p className="text-gray-400 mb-8">
                    {segment === 'EMPRESA' 
                     ? 'Nuestro equipo de Founders Corporate te contactará en menos de 24 horas.' 
                     : 'Has sido añadido a la lista prioritaria. Revisa tu correo para tu código de acceso.'}
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-primary font-bold hover:text-brand-secondary underline transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Nombre completo</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-treevu-surface border border-treevu-active text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      placeholder="Ej. Elon Musk"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Correo {segment === 'EMPRESA' ? 'Corporativo' : 'Personal'}</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-treevu-surface border border-treevu-active text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                      placeholder={segment === 'EMPRESA' ? 'elon@tesla.com' : 'elon@gmail.com'}
                    />
                  </div>

                   {segment === 'EMPRESA' && (
                     <div className="animate-fade-in-up">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Nombre de la Empresa</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-treevu-surface border border-treevu-active text-white placeholder-gray-600 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                        placeholder="Tesla Inc."
                      />
                    </div>
                   )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-accent hover:bg-[#e5bb12] text-treevu-base py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        {segment === 'EMPRESA' ? 'Solicitar Demo VIP' : 'Unirme a la Waitlist'}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersForm;