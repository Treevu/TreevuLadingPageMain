import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ImpactSection from './components/ImpactSection';
import KeyMetricsSection from './components/KeyMetricsSection';
import OpportunitySection from './components/OpportunitySection';
import TrustSection from './components/TrustSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DemoFormModal from './components/DemoFormModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white text-slate-800 antialiased">
      <Header onOpenDemo={handleOpenModal} />
      <main>
        <Hero onOpenDemo={handleOpenModal} />
        <ProblemSection />
        <ImpactSection />
        <KeyMetricsSection />
        <OpportunitySection onOpenDemo={handleOpenModal} />
        <TrustSection />
        <CtaSection onOpenDemo={handleOpenModal} />
      </main>
      <Footer />
      <DemoFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
