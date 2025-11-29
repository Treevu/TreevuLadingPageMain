import { useState } from "react";
import { 
  LayoutDashboard, 
  Smartphone, 
  Store, 
  Zap, 
  ShieldCheck, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Wallet,
  Brain,
  Target,
  PiggyBank,
  Activity,
  CreditCard,
  Users,
  Building,
  Gift,
  FileText,
  BarChart3,
  Settings,
  ShoppingBag,
  Tag,
  Leaf
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { RegistrationModal } from "@/components/modals/RegistrationModal";

// B2E Content (Collaborator)
const b2eTabs = [
  {
    id: "dashboard",
    label: "Mi Dashboard",
    icon: LayoutDashboard,
    content: (
      <div className="space-y-6">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-heading font-bold text-lg text-slate-900">Hola, Alex</h4>
              <p className="text-sm text-slate-500">Nivel A • 1250 pts</p>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200">Racha: 5 días 🔥</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <div className="text-xs text-slate-400 mb-1">FWI Score</div>
              <div className="text-2xl font-bold text-slate-800">65<span className="text-xs text-slate-400 font-normal">/100</span></div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <div className="text-xs text-slate-400 mb-1">Devengado Disp.</div>
              <div className="text-2xl font-bold text-emerald-600">$450</div>
            </div>
          </div>

          <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 mb-3">
            <div className="flex gap-2">
              <Activity className="h-4 w-4 text-amber-600 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-800">Gasto Hormiga Detectado</div>
                <p className="text-xs text-amber-700 mt-0.5">$45 en café esta semana. ¿Reducimos a la mitad?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "goals",
    label: "Metas",
    icon: Target,
    content: (
      <div className="space-y-4">
        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 flex gap-3 items-center">
          <PiggyBank className="h-8 w-8 text-emerald-600" />
          <div>
            <div className="text-sm font-bold text-emerald-900">Potencia tu Ahorro</div>
            <div className="text-xs text-emerald-700">Estás a $150 de completar tu fondo de emergencia.</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between text-sm font-medium mb-2">
              <span>Fondo de Emergencia</span>
              <span className="text-slate-500">35%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[35%]" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span>$350 / $1,000</span>
              <span>Meta: Dic 2024</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between text-sm font-medium mb-2">
              <span>Vacaciones 2025</span>
              <span className="text-slate-500">16%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[16%]" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span>$400 / $2,500</span>
              <span>Meta: Jun 2025</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "brain",
    label: "Treevü Brain",
    icon: Brain,
    content: (
      <div className="bg-slate-900 text-slate-100 p-4 rounded-xl h-64 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-purple-500/10" />
        <div className="relative z-10 flex-1 flex flex-col justify-end space-y-3">
          <div className="flex gap-3 items-start">
            <div className="bg-slate-800 p-2 rounded-lg rounded-bl-none">
              <p className="text-xs leading-relaxed">Hola Alex, ya analicé tus finanzas de esta semana. Tu gasto en transporte subió un 15%. ¿Quieres ver el desglose?</p>
            </div>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Pregunta a Treevü Brain..." 
              className="flex-1 bg-slate-800 border-none text-xs rounded-full px-4 py-2 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
            <Button size="sm" className="rounded-full bg-emerald-500 hover:bg-emerald-600 h-8 w-8 p-0">
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "ewa",
    label: "Nómina",
    icon: Wallet,
    content: (
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Disponible EWA (50% Límite)</div>
          <div className="text-3xl font-bold text-slate-900 mb-4">$450.00</div>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Solicitar Adelanto</Button>
          <div className="mt-3 text-xs text-slate-400">Próximo corte: 15 Oct • 12/30 días trabajados</div>
        </div>
        
        <div className="space-y-2">
          <h5 className="text-xs font-semibold text-slate-500 uppercase">Historial Reciente</h5>
          <div className="bg-slate-50 p-3 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-sm font-medium text-slate-900">Adelanto Nómina</div>
              <div className="text-xs text-slate-500">Hace 2 días • Enviado a Banco</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-900">$100.00</div>
              <div className="text-xs text-slate-400">Fee: $2.50</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

// B2B Content (HR Dashboard)
const b2bTabs = [
  {
    id: "executive",
    label: "Dashboard Ejecutivo",
    icon: BarChart3,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">FWI Promedio</div>
            <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
              69 pts <span className="text-xs text-emerald-600 bg-emerald-50 px-1 rounded">+4 pts</span>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Riesgo Operativo</div>
            <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Medio <span className="text-xs text-amber-600 bg-amber-50 px-1 rounded">⚠️ 2 áreas</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-slate-900 text-sm">Focos de Riesgo (FWI &lt; 50)</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div>
                  <div className="text-sm font-medium text-slate-900">Ventas</div>
                  <div className="text-xs text-slate-500">1 persona en riesgo</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">Intervenir</Button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div>
                  <div className="text-sm font-medium text-slate-900">Logística</div>
                  <div className="text-xs text-slate-500">1 persona en riesgo</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">Intervenir</Button>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "inbox",
    label: "Gestión Solicitudes",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-slate-900 text-sm">Inbox de Pagos</h4>
          <Button size="sm" variant="outline" className="h-7 text-xs">Descargar Payload</Button>
        </div>
        <div className="space-y-2">
          {[
            { id: "REQ-8821", user: "Sarah Connor", amount: "$150.00", dest: "Chase ****4492" },
            { id: "REQ-8822", user: "Mike Ross", amount: "$20.00", dest: "Internal Savings" }
          ].map((req, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-slate-900">{req.user}</div>
                <div className="text-xs text-slate-500">{req.id} • {req.dest}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-slate-700">{req.amount}</span>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-6 w-6 text-red-500 hover:bg-red-50 hover:text-red-600"><Activity className="h-3 w-3 rotate-45" /></Button>
                  <Button size="icon" variant="ghost" className="h-6 w-6 text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"><CheckCircle2 className="h-3 w-3" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "treepoints",
    label: "TreePoints",
    icon: Gift,
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl text-white shadow-lg">
          <div className="text-xs text-white/80 uppercase tracking-wider mb-1">Sistema Saludable</div>
          <div className="text-2xl font-bold mb-2">125,000 pts</div>
          <div className="flex gap-4 text-xs text-white/90">
            <span>Tasa Canje: 68%</span>
            <span>Impacto FWI: +5.2</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h5 className="text-xs font-semibold text-slate-500 uppercase">Acciones Recomendadas</h5>
          <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm font-bold text-slate-800">Bono Retención: IT</div>
              <Badge variant="outline" className="text-[10px]">FWI Alto / Canje Bajo</Badge>
            </div>
            <p className="text-xs text-slate-500 mb-3">Se sugiere incentivar el uso de puntos en este departamento.</p>
            <Button size="sm" className="w-full h-7 text-xs bg-indigo-600 hover:bg-indigo-700">Crear Campaña</Button>
          </div>
        </div>
      </div>
    )
  }
];

// B2B2B Content (Merchant Portal)
const b2b2bTabs = [
  {
    id: "merchant",
    label: "Portal Aliados",
    icon: Store,
    content: (
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-lime-700" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Whole Foods Market</div>
                <div className="text-xs text-slate-500">Nivel Oro • WF-8821</div>
              </div>
            </div>
            <Badge className="bg-lime-500 hover:bg-lime-600 border-none">Pago Listo</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
             <div>
               <div className="text-xs text-slate-500">Ingresos Totales</div>
               <div className="text-lg font-bold text-slate-900 flex items-center gap-1">
                 $124.5k <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 rounded">+12%</span>
               </div>
             </div>
             <div>
               <div className="text-xs text-slate-500">Conversión</div>
               <div className="text-lg font-bold text-slate-900 flex items-center gap-1">
                 4.8% <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 rounded">+0.5%</span>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <h4 className="font-semibold text-slate-900 text-sm mb-3">Perfil del Cliente (FWI)</h4>
          <div className="flex gap-2 h-24 items-end">
            <div className="w-1/3 bg-emerald-500/20 rounded-t-lg relative group h-[60%]">
              <div className="absolute bottom-2 left-0 w-full text-center text-xs font-bold text-emerald-700">FWI Alto</div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold bg-white px-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">30%</div>
            </div>
            <div className="w-1/3 bg-amber-500/20 rounded-t-lg relative group h-[45%]">
              <div className="absolute bottom-2 left-0 w-full text-center text-xs font-bold text-amber-700">FWI Medio</div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold bg-white px-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">45%</div>
            </div>
            <div className="w-1/3 bg-red-500/20 rounded-t-lg relative group h-[25%]">
              <div className="absolute bottom-2 left-0 w-full text-center text-xs font-bold text-red-700">FWI Bajo</div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold bg-white px-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">25%</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "offers",
    label: "Ofertas Activas",
    icon: Tag,
    content: (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-slate-900 text-sm">Mis Campañas</h4>
          <Button size="sm" className="h-7 text-xs bg-lime-600 hover:bg-lime-700">Nueva Oferta</Button>
        </div>

        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex justify-between items-center">
             <div className="flex gap-3 items-center">
               <div className="bg-green-100 p-2 rounded-lg">
                 <Leaf className="h-4 w-4 text-green-700" />
               </div>
               <div>
                 <div className="font-bold text-sm text-slate-900">Canasta Orgánica</div>
                 <div className="text-xs text-slate-500">Evergreen • Todos los segmentos</div>
               </div>
             </div>
             <div className="text-right">
               <Badge variant="secondary" className="bg-green-50 text-green-700 mb-1">$20 OFF</Badge>
               <div className="text-[10px] text-slate-400">412 canjes</div>
             </div>
          </div>
        </div>
      </div>
    )
  }
];

const features = [
  {
    title: "B2E: App del Colaborador",
    description: "Más que una wallet, un coach conductual. 'Verdad del Gasto' e IA contextual para mejorar la salud financiera.",
    icon: Smartphone,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    tabs: b2eTabs
  },
  {
    title: "B2B: Dashboard Corporativo",
    description: "Nómina como inteligencia predictiva. Detecta clusters de riesgo y correlaciona estrés financiero con absentismo.",
    icon: LayoutDashboard,
    color: "text-teal-600",
    bg: "bg-teal-100",
    tabs: b2bTabs
  },
  {
    title: "B2B2B: Portal de Aliados",
    description: "Supply Chain Finance y Marketplace segmentado por capacidad de pago real. Early Payment automático.",
    icon: Store,
    color: "text-lime-600",
    bg: "bg-lime-100",
    tabs: b2b2bTabs
  }
];

const techSpecs = [
  {
    title: "EWA Lite",
    description: "Sin fondeo externo. Orquestación pura de flujo de caja.",
    icon: Zap,
  },
  {
    title: "Cero Riesgo",
    description: "Modelo No-Fintech. Sin regulación IFPE/ITF requerida.",
    icon: ShieldCheck,
  },
  {
    title: "Data Graph",
    description: "Grafo de comportamiento financiero propietario.",
    icon: TrendingUp,
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -left-64 top-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            El Ecosistema de <span className="text-primary">Tres Puntas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Conectamos a la Empresa, al Colaborador y al Comercio Aliado en un ecosistema integrado de datos.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((f, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <motion.div variants={item}>
                  <Card className="h-full border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white cursor-pointer relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full ${f.bg.replace('bg-', 'bg-')}`} />
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                        <f.icon className={`h-7 w-7 ${f.color}`} />
                      </div>
                      <CardTitle className="font-heading text-xl text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                        {f.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-500 leading-relaxed">
                        {f.description}
                      </p>
                    </CardContent>
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] border-0 shadow-2xl p-0 gap-0 bg-white overflow-hidden rounded-2xl">
                <div className={`h-2 w-full ${f.bg.replace('bg-', 'bg-')}`} />
                
                <div className="p-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center shrink-0`}>
                      <f.icon className={`h-6 w-6 ${f.color}`} />
                    </div>
                    <div>
                      <DialogTitle className="font-heading text-xl text-slate-900">{f.title}</DialogTitle>
                      <DialogDescription className="text-slate-500 mt-1">
                        Explora las capacidades clave del módulo.
                      </DialogDescription>
                    </div>
                  </div>
                </div>

                <div className="p-0">
                  <Tabs defaultValue={f.tabs[0].id} className="w-full">
                    <div className="px-6 pt-4">
                      <TabsList className="w-full justify-start h-auto p-1 bg-slate-100 rounded-lg mb-4 overflow-x-auto flex-nowrap">
                        {f.tabs.map((tab) => (
                          <TabsTrigger 
                            key={tab.id} 
                            value={tab.id}
                            className="flex-shrink-0 text-xs data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                          >
                            <tab.icon className="h-3 w-3 mr-2" />
                            {tab.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                    
                    <div className="px-6 pb-6 min-h-[300px]">
                      {f.tabs.map((tab) => (
                        <TabsContent key={tab.id} value={tab.id} className="mt-0 focus-visible:outline-none">
                           <motion.div
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.3 }}
                           >
                             {tab.content}
                           </motion.div>
                        </TabsContent>
                      ))}
                    </div>
                  </Tabs>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <DialogClose asChild>
                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900">
                      ← Cerrar
                    </Button>
                  </DialogClose>
                  <Button 
                    size="sm" 
                    onClick={() => setDemoModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                  >
                    Solicitar Demo <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-400/20 rounded-full -ml-10 -mb-10 blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-lime-300 text-xs font-bold uppercase tracking-wider mb-6">
                Arquitectura EWA Lite
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">La Innovación "No-Fintech"</h3>
              <p className="text-slate-200 text-lg mb-8 leading-relaxed">
                Nuestro modelo elimina los cuellos de botella clásicos de capital y regulación. 
                Treevü opera como un middleware de orquestación. No prestamos, no tocamos dinero, no asumimos riesgo.
              </p>
              <div className="flex flex-wrap gap-4">
                {techSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
                    <spec.icon className="h-4 w-4 text-lime-300" />
                    <span className="font-medium text-sm">{spec.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-lime-300 text-xs font-mono mb-2 tracking-widest">PASO 01</div>
                <div className="font-heading font-semibold text-lg mb-1">Cálculo en Tiempo Real</div>
                <div className="text-sm text-slate-300">Integración API con reloj checador para devengado neto exacto.</div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm translate-x-4 hover:translate-x-2 transition-transform hover:bg-white/10">
                <div className="text-lime-300 text-xs font-mono mb-2 tracking-widest">PASO 02</div>
                <div className="font-heading font-semibold text-lg mb-1">Risk Engine & Validación</div>
                <div className="text-sm text-slate-300">Aplicación de reglas corporativas y límites de seguridad (50%).</div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-lime-300 text-xs font-mono mb-2 tracking-widest">PASO 03</div>
                <div className="font-heading font-semibold text-lg mb-1">Ejecución Directa</div>
                <div className="text-sm text-slate-300">Dispersión desde tesorería empresarial. Cero intermediación.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <RegistrationModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
}
