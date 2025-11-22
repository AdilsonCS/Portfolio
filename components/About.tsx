import React from 'react';
import { ShieldCheck, Target, CreditCard } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-brand-surfaceHighlight rounded-2xl border border-white/10 flex items-center justify-center shadow-glass">
              <ShieldCheck className="w-10 h-10 text-brand-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            Mais que código: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Estratégia e Segurança.</span>
          </h2>
          
          <p className="text-xl text-brand-muted leading-relaxed mb-12">
            Não sou apenas um "fazedor de automações". Minha bagagem vem do desenvolvimento de 
            <span className="text-white font-medium mx-1 underline decoration-brand-primary decoration-2 underline-offset-4">Sistemas de Pagamentos</span> e 
            <span className="text-white font-medium mx-1 underline decoration-brand-secondary decoration-2 underline-offset-4">Infraestrutura Crítica</span>. 
            Trago o rigor da engenharia de software, segurança de dados e estabilidade para o mundo do No-Code/Low-Code.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={100}>
            <div className="glass-panel p-8 rounded-2xl flex items-center gap-5 text-left hover:border-brand-primary/30 transition-colors group">
                <div className="bg-brand-primary/10 p-4 rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors text-brand-primary">
                    <CreditCard size={28} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Background Financeiro</h4>
                    <p className="text-sm text-brand-muted mt-1">Experiência com APIs críticas e dados sensíveis.</p>
                </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="glass-panel p-8 rounded-2xl flex items-center gap-5 text-left hover:border-brand-secondary/30 transition-colors group">
                <div className="bg-brand-secondary/10 p-4 rounded-xl group-hover:bg-brand-secondary group-hover:text-white transition-colors text-brand-secondary">
                    <Target size={28} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">Foco em ROI</h4>
                    <p className="text-sm text-brand-muted mt-1">Automação que gera lucro ou economia real de tempo.</p>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};