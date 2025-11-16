import React, { useState, useEffect } from "react";
import { CloseIcon } from "./icons";

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoFormModal: React.FC<DemoFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    employeeCount: "",
    interest: "equipo", // 'equipo' or 'comercio'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        employeeCount: "",
        interest: "equipo",
      });
    }
  }, [isOpen]);

  const isPersonalEmail = (email: string) => {
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "aol.com",
      "icloud.com",
      "protonmail.com",
      "pm.me",
      "yandex.com",
      "yandex.ru",
      "mail.com",
      "zoho.com",
      "gmx.com",
      "gmx.net",
      "fastmail.com",

      // Latinoamérica
      "hotmail.es",
      "hotmail.com.mx",
      "live.com.pe",
      "gmail.com.pe",
      "yahoo.es",
      "yahoo.com.ar",
      "outlook.es",

      // Europa
      "orange.fr",
      "free.fr",
      "wanadoo.fr",
      "libero.it",
      "virgilio.it",
      "web.de",
      "t-online.de",

      // Otros
      "inbox.com",
      "usa.com",
      "europe.com",
      "asia.com",
      "post.com",
    ];
    const domain = email.split("@")[1]?.toLowerCase();
    return personalDomains.includes(domain);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "workEmail") {
      if (value && isPersonalEmail(value)) {
        setEmailError("Por favor, usa un email corporativo");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPersonalEmail(formData.workEmail)) {
      setEmailError("Por favor, usa un email corporativo");
      return;
    }
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
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
        onClick={(e) => e.stopPropagation()}
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Inscríbete al Piloto Gratuito
            </h2>
            <p className="text-slate-400 text-center mb-6">
              Completa tus datos para ser de los primeros en acceder.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tu interés principal
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.interest === "equipo"
                        ? "bg-teal-500/20 border-teal-500"
                        : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value="equipo"
                      checked={formData.interest === "equipo"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-semibold text-sm">
                      Mejorar mi equipo
                    </span>
                  </label>
                  <label
                    className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.interest === "comercio"
                        ? "bg-teal-500/20 border-teal-500"
                        : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value="comercio"
                      checked={formData.interest === "comercio"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-semibold text-sm">
                      Llegar a más clientes
                    </span>
                  </label>
                </div>
              </div>

              <div className="relative border-t border-slate-700/60 !mt-8 !mb-6">
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-slate-800 px-2 text-xs text-slate-400">
                  DETALLES
                </span>
              </div>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Email Corporativo
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-2.5 focus:ring-2 focus:border-teal-500 outline-none transition-colors ${
                    emailError
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-600 focus:ring-teal-500"
                  }`}
                />
                {emailError && (
                  <p className="text-red-400 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="employeeCount"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Número de Empleados / Clientes
                </label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors appearance-none bg-no-repeat bg-right-4"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  }}
                >
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  <option value="10-49">10 - 49</option>
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
                {isLoading ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-teal-500 text-white flex items-center justify-center glow-shadow">
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              ¡Solicitud Enviada!
            </h2>
            <p className="text-slate-300 mb-6">
              Gracias por tu interés en Treevü. Nuestro equipo se pondrá en
              contacto contigo pronto.
            </p>
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
