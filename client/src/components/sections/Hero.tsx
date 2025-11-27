import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_digital_tree_data_visualization_for_fintech_hero.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-linear-to-bl from-secondary/20 via-primary/5 to-transparent -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-linear-to-tr from-primary/5 to-transparent -z-10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Inteligencia de Riesgo Operativo
            </div>
            
            <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900">
              Plataforma de Inteligencia de <span className="text-gradient">Liquidez</span> para Nóminas de Alta Rotación
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Transforma el estrés financiero en productividad. Treevü no es fintech, es middleware de orquestación que conecta a colaboradores, empresas y aliados en un ecosistema de datos integrado.
            </p>

            {/* Impact Bullets */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900">Reducción de Rotación:</span>
                  <span className="text-slate-600 ml-2">-23% anual, ahorro de $45K por replacement</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900">Menos Ausentismo:</span>
                  <span className="text-slate-600 ml-2">-18 horas perdidas/mes por estrés financiero</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900">Más Productividad:</span>
                  <span className="text-slate-600 ml-2">+12% en engagement de colaboradores</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base shadow-xl shadow-primary/20 transition-all hover:scale-105">
                  Ver Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary">
                <PlayCircle className="mr-2 h-5 w-5" />
                Cómo funciona
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-100"><div className="w-1.5 h-1.5 rounded-full bg-green-600"/></div>
                Sin Costo Financiero
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-100"><div className="w-1.5 h-1.5 rounded-full bg-green-600"/></div>
                Cero Riesgo Regulatorio
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-100"><div className="w-1.5 h-1.5 rounded-full bg-green-600"/></div>
                Integración API
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/50 bg-white/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none" />
              <img 
                src={heroImage} 
                alt="Treevü Intelligence Platform" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Cards - Mock Data */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px]"
              >
                <div className="text-xs text-slate-500 mb-1">Ahorro en Rotación Anual</div>
                <div className="text-2xl font-bold text-primary">$450K</div>
                <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-[75%] bg-lime-400" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100"
              >
                <div className="text-xs text-slate-500 mb-1">FWI Promedio</div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-800">69/100</span>
                  <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-md">↑ 18%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
