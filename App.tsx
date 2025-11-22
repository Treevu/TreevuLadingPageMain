import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import RoiCalculator from './components/RoiCalculator';
import FoundersForm from './components/FoundersForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-treevu-base text-treevu-text font-sans selection:bg-brand-primary selection:text-treevu-base">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Pricing />
        <RoiCalculator />
        <FoundersForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;