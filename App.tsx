
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Chapters from './components/Chapters';
import SampleSection from './components/SampleSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Chapters />
        <SampleSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
