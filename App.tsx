
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import WhyTreevu from './components/WhyTreevu';
import Pricing from './components/Pricing';
import RoiCalculator from './components/RoiCalculator';
import FoundersForm from './components/FoundersForm';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-treevu-base text-treevu-text font-sans selection:bg-brand-primary selection:text-treevu-base">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Solutions />
        <WhyTreevu />
        <Pricing />
        <RoiCalculator />
        <FAQ />
        <FoundersForm />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
