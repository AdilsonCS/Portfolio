import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      
      {/* Background Effects - Deep Blue Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-brand-primary/20 text-sm font-medium text-brand-primary mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="text-brand-primary" />
            <span>Sistemas de Automação Inteligente</span>
          </div>
        </FadeIn>

        {/* Main Headline */}
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            Soluções Inteligentes, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-white">
              Possibilidades Infinitas
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Nossas estratégias impulsionadas por IA encontram a eficiência oculta e automatizam o complexo, combinando dados com criatividade para alcançar precisão absoluta.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg hover:shadow-glow transition-all flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">Solicitar Análise</span>
              <ArrowRight size={18} className="relative" />
            </button>
            
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 rounded-full glass-panel text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10"
            >
              <Bot size={18} className="text-brand-primary" />
              <span>Fale com a IA</span>
            </a>
          </div>
        </FadeIn>

        {/* Stats Bar (Glassmorphism) */}
        <FadeIn delay={600} className="w-full mt-20">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             {/* Decorative glow inside bar */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2" />
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500h+</h3>
              <p className="text-brand-muted text-sm uppercase tracking-wider">Horas Economizadas</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">50+</h3>
              <p className="text-brand-muted text-sm uppercase tracking-wider">Fluxos Ativos</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 flex items-center gap-4">
                <div className="text-right hidden md:block">
                    <p className="text-white font-bold">Stack Moderna</p>
                    <p className="text-brand-muted text-xs">n8n + OpenAI</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center shadow-glow">
                    <Bot className="text-white" size={24} />
                </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};