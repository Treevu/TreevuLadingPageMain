import React, { useState, useEffect } from 'react';
import { CloseIcon, CheckIcon } from './icons';

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModal: React.FC<DemoFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    employeeCount: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        employeeCount: '',
      });
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-fadeInUp"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-8 w-full max-w-lg m-4 text-white transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <CloseIcon />
        </button>
        
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Solicita tu Demo Gratuita</h2>
            <p className="text-slate-400 text-center mb-6">Completa tus datos y nos pondremos en contacto.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-slate-300 mb-1">Email Corporativo</label>
                <input type="email" id="workEmail" name="workEmail" value={formData.workEmail} onChange={handleChange} required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-1">Nombre de la Empresa</label>
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="employeeCount" className="block text-sm font-medium text-slate-300 mb-1">Número de Empleados</label>
                <select id="employeeCount" name="employeeCount" value={formData.employeeCount} onChange={handleChange} required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors appearance-none bg-no-repeat bg-right-4" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`}}>
                  <option value="" disabled>Selecciona un rango</option>
                  <option value="50-100">50 - 100</option>
                  <option value="101-250">101 - 250</option>
                  <option value="251-500">251 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
             <div className="flex justify-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-teal-500 text-white flex items-center justify-center glow-shadow">
                    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
             </div>
            <h2 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h2>
            <p className="text-slate-300 mb-6">Gracias por tu interés en Treevü. Nuestro equipo se pondrá en contacto contigo pronto.</p>
            <button
                onClick={onClose}
                className="inline-flex items-center justify-center bg-slate-600 hover:bg-slate-500 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
            >
                Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoFormModal;
