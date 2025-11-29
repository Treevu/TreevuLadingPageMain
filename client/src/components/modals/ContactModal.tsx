import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) return;

    const emailBody = `
Nombre: ${formData.name}
Email: ${formData.email}
Asunto: ${formData.subject || "Sin asunto"}
Mensaje: ${formData.message}
    `.trim();

    const subject = formData.subject || "Contacto desde Treevü";
    const mailtoLink = `mailto:contacto@treevu.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

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
        >
          {!submitted ? (
            <div className="p-8 md:p-12">
              <DialogHeader className="mb-8">
                <DialogTitle className="text-3xl font-heading font-bold text-white mb-2">
                  Contacta con Nosotros
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-700/50">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-semibold text-slate-300">Email</span>
                  </div>
                  <a href="mailto:contacto@treevu.app" className="text-secondary hover:text-secondary/80 text-sm">
                    contacto@treevu.app
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-semibold text-slate-300">Teléfono</span>
                  </div>
                  <p className="text-slate-400 text-sm">+51 1 XXXX-XXXX</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-semibold text-slate-300">Ubicación</span>
                  </div>
                  <p className="text-slate-400 text-sm">LatAm</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nombre *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-secondary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-secondary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Asunto</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿De qué se trata?"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Mensaje *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tu mensaje..."
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-secondary resize-none h-24"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => onOpenChange(false)}
                    className="flex-1 text-slate-400 hover:text-slate-200 border border-slate-700"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-semibold shadow-lg shadow-secondary/20"
                  >
                    Enviar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/20 border border-secondary/50">
                  <Mail className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-slate-400">
                Gracias por contactarnos. Te responderemos pronto.
              </p>
            </motion.div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
