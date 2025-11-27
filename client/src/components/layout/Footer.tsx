import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
                Treevü
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Transformando el estrés financiero en productividad operativa. 
              El primer Sistema Operativo de Inteligencia de Liquidez para empresas.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-slate-900 mb-4">Plataforma</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary">B2E: App Colaborador</a></li>
              <li><a href="#" className="hover:text-primary">B2B: Dashboard</a></li>
              <li><a href="#" className="hover:text-primary">B2B2B: Aliados</a></li>
              <li><a href="#" className="hover:text-primary">EWA Lite</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-primary">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Contacto</a></li>
              <li><a href="#" className="hover:text-primary">Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2025 Treevü. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <div className="h-2 w-2 rounded-full bg-lime-400"></div>
            <div className="h-2 w-2 rounded-full bg-teal-600"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
