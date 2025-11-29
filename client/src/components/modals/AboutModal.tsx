import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X, Leaf, Users, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutModal({ open, onOpenChange }: AboutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-0 overflow-hidden">
        <DialogClose className="absolute top-4 right-4 z-10">
          <X className="h-5 w-5 text-slate-400 hover:text-slate-200" />
        </DialogClose>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-8 md:p-12"
        >
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <Leaf className="h-8 w-8 text-secondary" />
              Sobre Treevü
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8">
            {/* Mission */}
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Target className="h-6 w-6 text-secondary" />
                Nuestra Misión
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Treevü transforma la relación entre empresas y colaboradores en LatAm mediante inteligencia de liquidez operativa. Eliminamos el estrés financiero y la rotación no planificada, creando un ecosistema donde la salud financiera del empleado es un activo estratégico medible.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Zap className="h-6 w-6 text-secondary" />
                Nuestra Visión
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Ser el middleware de inteligencia de liquidez que conecta a empresas, colaboradores y aliados financieros en LatAm, permitiendo decisiones basadas en datos reales de salud financiera y riesgo operativo.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Users className="h-6 w-6 text-secondary" />
                Nuestros Valores
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">→</span>
                  <span><strong>Transparencia:</strong> Datos claros, sin sorpresas ocultas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">→</span>
                  <span><strong>Impacto Social:</strong> Reducir desigualdad financiera en LatAm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">→</span>
                  <span><strong>Seguridad:</strong> Regulación de datos, sin contacto con dinero</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">→</span>
                  <span><strong>Innovación:</strong> Reimaginar finanzas operativas</span>
                </li>
              </ul>
            </div>

            {/* Team Insight */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <p className="text-slate-200 text-sm">
                Treevü fue fundada por expertos en operaciones, finanzas y tecnología blockchain convencidos de que la liquidez inteligente es el futuro de la nómina en LatAm. Cero deuda, cero fintech, pura inteligencia.
              </p>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
