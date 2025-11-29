import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BlogModal({ open, onOpenChange }: BlogModalProps) {
  const articles = [
    {
      title: "Rotación Operativa: El Costo Invisible que CFOs Ignoran",
      excerpt: "Por qué la salud financiera del equipo es el predictor #1 de retention",
      date: "Nov 2024",
      category: "Finanzas"
    },
    {
      title: "EWA vs Préstamos: Por Qué No Somos una Fintech",
      excerpt: "La diferencia fundamental entre orquestación y endeudamiento",
      date: "Oct 2024",
      category: "Educación"
    },
    {
      title: "FWI Score: Midiendo Liquidez en Tiempo Real",
      excerpt: "Cómo nuestro sistema detecta estrés financiero antes que HR",
      date: "Sep 2024",
      category: "Producto"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
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
              <BookOpen className="h-8 w-8 text-secondary" />
              Blog Treevü
            </DialogTitle>
            <p className="text-slate-400 text-base mt-2">Insights sobre liquidez, operaciones y finanzas en LatAm</p>
          </DialogHeader>

          <div className="space-y-4">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-secondary/50 hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-white group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 mt-1 flex-shrink-0" />
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.date}</span>
                </div>
              </motion.div>
            ))}

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-8 text-center">
              <p className="text-slate-300 mb-4">¿Tienes historias sobre rotación o liquidez que contar?</p>
              <a 
                href="mailto:blog@treevu.app"
                className="text-secondary hover:text-secondary/80 font-semibold flex items-center justify-center gap-2"
              >
                Escríbenos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
