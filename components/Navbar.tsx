import React from 'react';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-brand-primary/20 p-1.5 rounded-full">
              <Terminal size={18} className="text-brand-primary" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-white">AUTOMATA<span className="text-brand-primary">.IA</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-full hover:bg-white/5">Serviços</button>
            <button onClick={() => scrollToSection('tech-stack')} className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-full hover:bg-white/5">Tecnologia</button>
            <button onClick={() => scrollToSection('case-study')} className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-full hover:bg-white/5">Cases</button>
          </div>

          {/* CTA */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm px-6 py-2.5 rounded-full hover:shadow-glow transition-all font-semibold transform hover:-translate-y-0.5"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </nav>
  );
};