import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import TechStack from './components/TechStack';
import Pricing from './components/Pricing';
import FoundersForm from './components/FoundersForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-treevu-base text-treevu-text font-sans selection:bg-brand-primary selection:text-treevu-base">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <TechStack />
        <Pricing />
        <FoundersForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;