import React from 'react';
import { Leaf, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-500 py-16 border-t border-treevu-active">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="relative">
                 <div className="absolute inset-0 bg-brand-primary blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                 <div className="relative bg-treevu-surface p-1.5 rounded-lg border border-treevu-active">
                   <Leaf className="h-5 w-5 text-brand-primary" />
                 </div>
               </div>
              <span className="font-display font-bold text-xl text-white">Treevü</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Transformando el estrés financiero en bienestar sostenible a través de Inteligencia Artificial y Economía Conductual.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-treevu-surface flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-treevu-base transition-all duration-300"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-treevu-surface flex items-center justify-center text-gray-400 hover:bg-segment-empresa hover:text-white transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-treevu-surface flex items-center justify-center text-gray-400 hover:bg-segment-socio hover:text-white transition-all duration-300"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Producto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')} className="hover:text-brand-primary transition-colors cursor-pointer">Personas</a></li>
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')} className="hover:text-segment-empresa transition-colors cursor-pointer">Empresas</a></li>
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')} className="hover:text-segment-socio transition-colors cursor-pointer">Comercios</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-white transition-colors cursor-pointer">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Compañía</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="hover:text-white transition-colors cursor-pointer">Manifiesto</a></li>
              <li><a href="#ai-logic" onClick={(e) => scrollToSection(e, '#ai-logic')} className="hover:text-white transition-colors cursor-pointer">Tecnología</a></li>
              <li><a href="#founders-offer" onClick={(e) => scrollToSection(e, '#founders-offer')} className="hover:text-white transition-colors cursor-pointer">Carreras</a></li>
              <li><a href="#founders-offer" onClick={(e) => scrollToSection(e, '#founders-offer')} className="hover:text-white transition-colors cursor-pointer">Contacto</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors cursor-not-allowed" title="Próximamente">Privacidad de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-not-allowed" title="Próximamente">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-not-allowed" title="Próximamente">Seguridad SOC2</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-treevu-active flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Treevü Inc. Hecho con 💚 en Lima y San Francisco.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Sistemas Operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;