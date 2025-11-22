import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { CaseStudy } from './components/CaseStudy';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-brand-dark text-brand-text font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <Hero />
      <TechStack />
      <Services />
      <CaseStudy />
      <About />
      <Contact />
      
      <footer className="py-8 border-t border-white/5 text-center text-brand-muted text-sm bg-brand-dark relative z-10">
        <p>© {new Date().getFullYear()} Automata IA. Todos os direitos reservados.</p>
        <p className="mt-2 opacity-50 text-xs">Feito com n8n, React & ☕</p>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
};

export default App;