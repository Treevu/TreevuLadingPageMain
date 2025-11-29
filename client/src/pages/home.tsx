import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";
import { RegistrationModal } from "@/components/modals/RegistrationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, Zap, Lock, GitBranch, Leaf } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      
      <main>
        <Hero />

        {/* PROBLEM SECTION */}
        <section className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">El Problema</h2>
              <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light">Dos realidades invisibilizadas que impactan el P&L</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Column 1 - Brecha de Tiempo */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-amber-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Leaf className="h-8 w-8 text-amber-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                      Brecha de Tiempo del Colaborador
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-base">
                      Pagan cada 15 o 30 días. La vida cobra <span className="text-amber-300 font-semibold">diariamente:</span> deudas, servicios, alimentos.
                    </p>

                    {/* Results Box */}
                    <div className="space-y-3 pt-4 border-t border-slate-700/50">
                      <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Resultado:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-amber-400 font-bold mt-1">→</span>
                          <span className="text-slate-300 text-sm">Deuda informal de corto plazo</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-amber-400 font-bold mt-1">→</span>
                          <span className="text-slate-300 text-sm">Intereses hasta 25% mensual</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-amber-400 font-bold mt-1">→</span>
                          <span className="text-slate-300 text-sm">Distracción mental = ausencias</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Column 2 - Ceguera de Riesgo */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl hover:border-red-500/50 transition-all duration-300 shadow-xl hover:shadow-red-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <AlertTriangle className="h-8 w-8 text-red-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                      Ceguera de Riesgo Operativo
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-base">
                      RR.HH. y CFO no ven la correlación: <span className="text-red-300 font-semibold">salud financiera = predictor de rotación y ausencias.</span>
                    </p>

                    {/* Results Box */}
                    <div className="space-y-3 pt-4 border-t border-slate-700/50">
                      <p className="text-xs font-mono text-red-400 uppercase tracking-widest">Costo invisible:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 font-bold mt-1">→</span>
                          <span className="text-slate-300 text-sm">Rotación anual: 15-30% en operaciones</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 font-bold mt-1">→</span>
                          <span className="text-slate-300 text-sm">Ausentismo: 3-5 días/mes por estrés</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-400 font-bold mt-1">→</span>
                          <span className="text-slate-300 text-sm">Reemplazo: $15K-$45K por colaborador</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cómo Funciona Treevü (EWA Lite)</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Middleware de orquestación: 4 pasos, cero contacto con dinero</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Cálculo Devengado Real",
                  desc: "Integración con reloj checador. Devengado neto exacto por hora.",
                  icon: Zap
                },
                {
                  step: "02",
                  title: "Validación de Riesgo",
                  desc: "EWA Engine aplica reglas corporativas. Límite max 50% devengado.",
                  icon: Lock
                },
                {
                  step: "03",
                  title: "Enrutamiento Seguro",
                  desc: "Instrucción enrutada a tesorería. Dispersión directa desde empresa.",
                  icon: GitBranch
                },
                {
                  step: "04",
                  title: "Conciliación Automática",
                  desc: "Retención en próxima nómina. Sin intermediación, sin fricción.",
                  icon: CheckCircle2
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                        {item.step}
                      </div>
                      <CardHeader className="pt-8">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto"
            >
              <Card className="border-2 border-primary bg-gradient-to-r from-primary/5 to-secondary/10 p-8">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-primary" />
                  El Diferencial: Modelo "No-Fintech"
                </h3>
                <p className="text-slate-600 mb-4">
                  No prestamos dinero. No tocamos capital. No asumimos riesgo crediticio. Treevü es <strong>middleware de orquestación pura</strong> que:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Costo de fondeo = $0</strong> (no captamos depósitos, no pagamos intereses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Riesgo regulatorio bajo</strong> (no estamos bajo IFPE/ITF, solo regulación de datos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Capital escalable:</strong> el dinero viene de la empresa, no de fondos VC ni deuda</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS SECTION - Keep existing Features component */}
        <Features />

        {/* DATA & MONETIZATION SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">Score Treevü & Monetización</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Datos de comportamiento como activo estratégico</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  title: "Financial Wellness Index (FWI)",
                  desc: "Score propietario que mide capacidad de pago real, estabilidad y disciplina financiera en tiempo real.",
                  metrics: ["Comportamiento de gasto", "Historial de retiros", "Patrones de salud financiera"]
                },
                {
                  title: "DaaS / APIaaS",
                  desc: "Datos y APIs para partners: bancos, seguros, fintechs pueden acceder a scores y patrones de riesgo.",
                  metrics: ["Validación de capacidad", "Segmentación de clientes", "Pricing dinámico"]
                },
                {
                  title: "Revenue Streams",
                  desc: "Modelo SaaS + transaccional + comisiones en ecosystem de beneficios.",
                  metrics: ["SaaS por empleado", "Fee por retiro/EWA", "Merchant comisiones"]
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-slate-900">{item.title}</CardTitle>
                      <CardDescription className="text-slate-600 text-base mt-2">{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.metrics.map((metric, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">Pensado para Escalar en LatAm</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Roadmap 36 meses: SaaS (1-6M) → DaaS (6-18M) → APIaaS (19-36M)</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    phase: "SaaS: 1Q2026 - 2Q2026 (Meses 1-6)",
                    title: "SaaS Core: B2E + B2B + B2B2B",
                    items: [
                      "App del Colaborador (wallet + coaching IA)",
                      "Dashboard Corporativo (FWI, clusters de riesgo)",
                      "Portal de Aliados (early payment, marketplace)"
                    ],
                    target: "HR, CFOs, medianas empresas (100-500 empleados)"
                  },
                  {
                    phase: "DaaS: 2Q2026 - 1Q2027 (Meses 6-18)",
                    title: "DaaS: Data as a Service",
                    items: [
                      "Score API para partners financieros",
                      "Risk Engine como servicio",
                      "Monetización por consultas de validación"
                    ],
                    target: "Bancos, seguros, fintechs en LatAm"
                  },
                  {
                    phase: "APIaaS: 2Q2027 - 4Q2027 (Meses 19-36)",
                    title: "Platform: Open API & Ecosystem",
                    items: [
                      "Marketplace de servicios financieros",
                      "White-label solution para payroll software",
                      "Gobernanza descentralizada de datos"
                    ],
                    target: "Global fintech infrastructure"
                  }
                ].map((roadmap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                              {roadmap.phase}
                            </Badge>
                            <CardTitle className="text-slate-900">{roadmap.title}</CardTitle>
                          </div>
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm mb-3">Capacidades</h4>
                            <ul className="space-y-2">
                              {roadmap.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <h4 className="font-semibold text-slate-900 text-sm mb-2">Target: Audiencia</h4>
                            <p className="text-sm text-slate-600">{roadmap.target}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6">
              Listo para transformar la <br/>
              <span className="text-primary">cultura financiera de su empresa?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Únase a empresas en LatAm que están reduciendo rotación, ausentismo y mejorando la vida de sus colaboradores con Treevü.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => setDemoModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/25"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                onClick={() => setDemoModalOpen(true)}
                className="text-slate-600 hover:text-primary text-lg"
              >
                Hablar con Ventas
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Implementación en 2 semanas
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Soporte Enterprise
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Seguridad Bancaria
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <RegistrationModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
}

// Import missing icon
import { AlertTriangle } from "lucide-react";
