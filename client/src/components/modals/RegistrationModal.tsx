import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationModal({ open, onOpenChange }: RegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        description: "Por favor completa los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const emailBody = `
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Teléfono: ${formData.phone || "No proporcionado"}
Mensaje: ${formData.message || "Sin mensaje adicional"}
      `.trim();

      // Simular envío y mostrar formulario para envío manual
      const subject = `Demo Treevü - ${formData.company}`;
      const mailtoLink = `mailto:contacto@treevu.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir cliente de correo
      window.location.href = mailtoLink;
      
      // Mostrar estado de éxito
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
        setSubmitted(false);
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      toast({
        description: "Error al enviar el formulario",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-0 overflow-hidden">
        {/* Close button */}
        <DialogClose className="absolute top-4 right-4 z-10">
          <X className="h-5 w-5 text-slate-400 hover:text-slate-200" />
        </DialogClose>

        <div className="relative">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {!submitted ? (
              <div className="p-8 md:p-12">
                <DialogHeader className="mb-8">
                  <DialogTitle className="text-3xl font-heading font-bold text-white mb-2">
                    Solicitar Demo
                  </DialogTitle>
                  <DialogDescription className="text-slate-400 text-base">
                    Cuéntanos sobre tu empresa y te contactaremos pronto para agendar una demo personalizada.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Nombre y Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Nombre Completo *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Juan García"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-primary"
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
                        placeholder="juan@empresa.com"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Empresa y Teléfono */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Empresa *</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Teléfono</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+51 9 8765 4321"
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Mensaje (Opcional)</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos qué te interesa de Treevü..."
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-primary resize-none h-24"
                    />
                  </div>

                  {/* Actions */}
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
                      disabled={isLoading}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                    >
                      {isLoading ? "Enviando..." : "Solicitar Demo"}
                      <ArrowRight className="ml-2 h-4 w-4" />
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
                  <div className="p-4 rounded-full bg-green-500/20 border border-green-500/50">
                    <CheckCircle2 className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="text-slate-400 mb-6">
                  Se abrirá tu cliente de correo para confirmar el envío a contacto@treevu.app
                </p>
                <p className="text-sm text-slate-500">
                  Nuestro equipo se pondrá en contacto contigo pronto.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
