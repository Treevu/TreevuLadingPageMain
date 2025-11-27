import { useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";
import { 
  LayoutDashboard, 
  Users, 
  AlertTriangle, 
  Wallet, 
  Settings, 
  Bell, 
  Search,
  Leaf,
  TrendingDown,
  TrendingUp,
  LogOut,
  ArrowLeft,
  Calendar,
  Check,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Mock Data
const stressData = [
  { name: 'Ene', stress: 65, productivity: 78 },
  { name: 'Feb', stress: 59, productivity: 82 },
  { name: 'Mar', stress: 55, productivity: 85 },
  { name: 'Abr', stress: 48, productivity: 88 },
  { name: 'May', stress: 42, productivity: 92 },
  { name: 'Jun', stress: 35, productivity: 95 },
];

const departmentRisk = [
  { name: 'Logística', risk: 78, employees: 145 },
  { name: 'Ventas', risk: 45, employees: 89 },
  { name: 'Operaciones', risk: 62, employees: 210 },
  { name: 'Admin', risk: 25, employees: 45 },
  { name: 'IT', risk: 15, employees: 32 },
];

const notifications = [
  { title: "Alerta de Riesgo", desc: "Logística superó umbral de estrés (75%)", time: "Hace 2h", type: "alert" },
  { title: "Nómina Sincronizada", desc: "Cierre de ciclo quincenal completado", time: "Hace 5h", type: "success" },
  { title: "Nuevo Beneficio", desc: "Aliado 'SuperMarket' activado", time: "Ayer", type: "info" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden lg:flex flex-col relative overflow-hidden">
        {/* Subtle background pattern for sidebar */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        
        <div className="p-6 border-b border-slate-800 flex items-center gap-2 relative z-10">
          <Leaf className="h-6 w-6 text-lime-400" />
          <span className="font-heading font-bold text-xl text-white tracking-tight">Treevü</span>
        </div>
        
        <div className="p-4 space-y-1 flex-1 relative z-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 px-2">Principal</div>
          
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "talent", label: "Nómina & Talento", icon: Users },
            { id: "risk", label: "Risk Engine", icon: AlertTriangle, badge: "3" },
            { id: "dispersions", label: "Dispersiones", icon: Wallet }
          ].map((item) => (
            <Button 
              key={item.id}
              variant="ghost" 
              className={`w-full justify-start mb-1 transition-all duration-200 ${
                activeTab === item.id 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className={`mr-2 h-4 w-4 ${activeTab === item.id ? "text-lime-300" : "text-slate-400"}`} />
              {item.label}
              {item.badge && (
                <Badge variant="destructive" className="ml-auto text-[10px] h-5 px-1.5 bg-red-500/80 hover:bg-red-500">{item.badge}</Badge>
              )}
            </Button>
          ))}

          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-8 mb-4 px-2">Configuración</div>
          <Button variant="ghost" className="w-full justify-start hover:text-white hover:bg-white/5">
            <Settings className="mr-2 h-4 w-4 text-slate-400" />
            Ajustes Empresa
          </Button>

          <div className="mt-auto pt-4">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/5">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 relative z-10">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
              AC
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium text-white truncate">Admin Corp</div>
              <div className="text-xs text-slate-500 truncate">admin@empresa.com</div>
            </div>
            <LogOut className="h-4 w-4 text-slate-500 hover:text-white" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50">
        {/* Top Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-20 sticky top-0">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Leaf className="h-5 w-5 text-primary" />
              </Button>
            </Link>
            <div className="relative hidden md:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar empleado o ID..." 
                className="h-9 pl-9 pr-4 rounded-full bg-slate-100 border border-transparent text-sm w-64 focus:bg-white focus:border-primary/20 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 rounded-full transition-colors">
                  <Bell className="h-5 w-5 text-slate-500" />
                  <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 mr-4" align="end">
                <div className="px-4 py-3 border-b border-slate-100 font-semibold text-sm bg-slate-50/50">
                  Notificaciones
                </div>
                <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto">
                  {notifications.map((notif, i) => (
                    <div key={i} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-sm text-slate-800">{notif.title}</span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {notif.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{notif.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t border-slate-100 text-center">
                  <Button variant="ghost" size="sm" className="text-xs w-full text-primary">Marcar todas como leídas</Button>
                </div>
              </PopoverContent>
            </Popover>
            
            <div className="h-6 w-px bg-slate-200 mx-2" />
            
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-slate-900">Empresa Demo S.A.</div>
              <div className="text-xs text-slate-500 font-mono">ID: 88492-TX</div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <ScrollArea className="flex-1">
          <main className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
            
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h1 className="text-2xl font-heading font-bold text-slate-900 mb-1">Panel de Inteligencia</h1>
                <p className="text-slate-500 text-sm">Monitoreo de salud financiera y riesgo operativo en tiempo real.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="hidden sm:flex border-slate-200 text-slate-600 bg-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  Nov 2025
                </Button>
                <Badge variant="outline" className="bg-white px-3 py-1.5 h-auto text-sm border-green-200 text-green-700 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Sistema Activo
                </Badge>
                <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Descargar Reporte
                </Button>
              </div>
            </motion.div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Liquidez Dispersada", value: "$142,500.00", change: "+12.5%", trend: "up", color: "primary" },
                { title: "FWI Score (Bienestar)", value: "8.4/10", change: "+0.8 pts", trend: "up", color: "lime-500" },
                { title: "Ahorro en Rotación", value: "$45,200.00", change: "-15% Tasa", trend: "down", color: "teal-500" }
              ].map((kpi, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i}
                >
                  <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                    <CardHeader className="pb-2">
                      <CardDescription>{kpi.title}</CardDescription>
                      <CardTitle className="text-3xl font-bold text-slate-900 tracking-tight">{kpi.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex items-center text-sm font-medium ${kpi.trend === 'up' || kpi.title.includes('Ahorro') ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.trend === 'up' ? <TrendingUp className="mr-1 h-4 w-4" /> : <TrendingDown className="mr-1 h-4 w-4" />}
                        {kpi.change}
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 mt-4 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: kpi.title.includes('FWI') ? '84%' : '70%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full bg-${kpi.color}`} 
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Chart */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Impacto en Productividad</CardTitle>
                        <CardDescription>Correlación inversa: -Estrés = +Productividad</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[320px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={stressData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#064e3b" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#064e3b" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                          <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                            itemStyle={{ fontSize: '12px', fontWeight: 500 }}
                            labelStyle={{ marginBottom: '8px', color: '#64748b', fontSize: '12px' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="stress" 
                            name="Estrés Financiero" 
                            stroke="#f43f5e" 
                            fillOpacity={1} 
                            fill="url(#colorStress)" 
                            strokeWidth={2}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="productivity" 
                            name="Productividad" 
                            stroke="#064e3b" 
                            fillOpacity={1} 
                            fill="url(#colorProd)" 
                            strokeWidth={2}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Risk Clusters */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Clusters de Riesgo
                      <Badge variant="outline" className="ml-auto bg-amber-50 text-amber-600 border-amber-200">Atención</Badge>
                    </CardTitle>
                    <CardDescription>Departamentos vulnerables</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {departmentRisk.map((dept, i) => (
                        <div key={i} className="group cursor-default">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">{dept.name}</span>
                              {dept.risk > 60 && <AlertTriangle className="h-3 w-3 text-amber-500 animate-pulse" />}
                            </div>
                            <span className={`text-xs font-bold ${dept.risk > 60 ? 'text-amber-600' : 'text-slate-500'}`}>
                              {dept.risk}% Riesgo
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${dept.risk}%` }}
                              transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                              className={`h-full rounded-full ${
                                dept.risk > 70 ? 'bg-red-500' : 
                                dept.risk > 50 ? 'bg-amber-500' : 
                                'bg-green-500'
                              }`} 
                            />
                          </div>
                          <div className="flex justify-between mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span className="text-[10px] text-slate-400">{dept.employees} Colaboradores</span>
                            <span className="text-[10px] text-primary cursor-pointer hover:underline">Ver detalles</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
