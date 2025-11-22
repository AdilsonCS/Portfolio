import React from 'react';
import { MessageSquareText, Cable, ScanSearch, ArrowUpRight, ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <FadeIn delay={0}>
            <div className="group h-[420px] rounded-[32px] p-8 glass-card flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
              {/* Top Right Icon */}
              <div className="self-end">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                    <ArrowUpRight className="text-white opacity-70 group-hover:opacity-100" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto relative z-10">
                <div className="mb-6 p-3 bg-brand-primary/10 w-fit rounded-2xl text-brand-primary border border-brand-primary/20">
                    <ScanSearch size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight uppercase">
                  Consultoria &<br/>Estratégia
                </h3>
                <p className="text-brand-muted mb-6 line-clamp-2">
                    Mapeamento de processos e blueprint de automação para sua empresa escalar.
                </p>
                <button className="px-6 py-2 rounded-full bg-brand-primary text-white text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-brand-secondary transition-colors uppercase">
                    Saiba Mais <ArrowUpRight size={14} />
                </button>
              </div>
              
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </FadeIn>

          {/* Card 2 - Highlighted */}
          <FadeIn delay={200}>
             <div className="group h-[420px] rounded-[32px] p-8 glass-card flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border-brand-primary/30">
              <div className="self-end">
                <div className="w-12 h-12 rounded-full bg-brand-primary border border-brand-primary flex items-center justify-center">
                    <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                 <div className="mb-6 p-3 bg-brand-secondary/10 w-fit rounded-2xl text-brand-secondary border border-brand-secondary/20">
                    <MessageSquareText size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight uppercase">
                  Agentes de IA<br/>Personalizados
                </h3>
                 <p className="text-brand-muted mb-6 line-clamp-2">
                    Isa, sua atendente 24/7. Atende, agenda e qualifica leads automaticamente.
                </p>
                <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-white/20 transition-colors uppercase border border-white/20">
                    Saiba Mais <ArrowUpRight size={14} />
                </button>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-brand-secondary/10 opacity-100 pointer-events-none" />
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={400}>
             <div className="group h-[420px] rounded-[32px] p-8 glass-card flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="self-end">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                    <ArrowUpRight className="text-white opacity-70 group-hover:opacity-100" size={20} />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <div className="mb-6 p-3 bg-blue-500/10 w-fit rounded-2xl text-blue-400 border border-blue-500/20">
                    <Cable size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight uppercase">
                  Integrações de<br/>Ecossistema
                </h3>
                 <p className="text-brand-muted mb-6 line-clamp-2">
                    Conexão total entre APIs, CRMs e Bancos de Dados. Seus dados fluindo livres.
                </p>
                <button className="px-6 py-2 rounded-full bg-brand-primary text-white text-xs font-bold tracking-widest flex items-center gap-2 hover:bg-brand-secondary transition-colors uppercase">
                    Saiba Mais <ArrowUpRight size={14} />
                </button>
              </div>
              
               <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </FadeIn>

        </div>
        
        {/* Side Section (from visual reference) */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
                 <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Potência da IA, <br/>
                    Foco no Usuário, <br/>
                    <span className="text-brand-primary">Centrado na Marca</span>
                 </h2>
                 <p className="mt-6 text-brand-muted text-lg leading-relaxed">
                    Usando IA, unimos dados e propósito para criar automações impactantes que elevam sua marca e operação no mundo digital.
                 </p>
            </FadeIn>
            <div className="space-y-4">
                 <FadeIn delay={200}>
                    <div className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:border-brand-primary/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                            <span className="font-bold text-white">Automações de Impacto</span>
                        </div>
                        <ChevronRight className="text-brand-muted group-hover:text-white transition-colors" />
                    </div>
                 </FadeIn>
                 <FadeIn delay={300}>
                    <div className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:border-brand-primary/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                             <div className="h-2 w-2 rounded-full bg-brand-secondary"></div>
                            <span className="font-bold text-white">Estratégia, Criatividade e Resultados</span>
                        </div>
                        <ChevronRight className="text-brand-muted group-hover:text-white transition-colors" />
                    </div>
                 </FadeIn>
            </div>
        </div>

      </div>
    </section>
  );
};