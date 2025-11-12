import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const teamMembers = [
  {
    name: 'Javier Pérez',
    role: 'CEO & Estratega de Negocios',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Elena Rodríguez',
    role: 'Directora de Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Experto en Finanzas Corporativas',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=256&h=256&fit=crop&ixlib=rb-4.0.3',
  },
];


const TrustSection: React.FC = () => {
  return (
    <section id="confianza" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <AnimateOnScroll className="md:col-span-3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">Creado por un equipo<br/> obsesionado con los datos.</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Treevü está formada por un equipo con décadas de experiencia en <span className="font-semibold text-slate-800">estrategia de negocios, finanzas corporativas y ciencia de datos.</span> Nuestra misión: que las personas vivan mejor y las empresas tomen decisiones más inteligentes.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animationType="scaleIn" delay="delay-300" className="md:col-span-2">
              <div className="bg-teal-500 text-white p-8 rounded-xl shadow-2xl shadow-teal-500/30 transform md:rotate-3">
                <p className="text-xl font-medium">
                  No somos un sistema de beneficios.
                </p>
                <p className="text-2xl font-bold mt-2">
                  Somos el radar predictivo del bienestar financiero de tu organización.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="mt-20 md:mt-28">
            <AnimateOnScroll>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">Conoce al Equipo</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <AnimateOnScroll key={member.name} delay={`delay-${index * 200}`}>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-teal-300">
                    <img
                      src={member.imageUrl}
                      alt={`Foto de ${member.name}`}
                      className="w-28 h-28 rounded-full mx-auto mb-5 object-cover ring-4 ring-white shadow-md"
                    />
                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                    <p className="text-teal-600 font-semibold mt-1">{member.role}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;