import React from 'react';
import { Workflow, Brain, Database } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const TechStack: React.FC = () => {
  const techGroups = [
    {
      id: 1,
      name: "Orquestração",
      icon: <Workflow className="w-8 h-8 text-brand-primary" />,
      items: ["n8n", "Webhooks", "API Rest"],
      desc: "Fluxos complexos e conectividade"
    },
    {
      id: 2,
      name: "Inteligência",
      icon: <Brain className="w-8 h-8 text-brand-secondary" />,
      items: ["OpenAI", "Gemini", "Claude 3"],
      desc: "Raciocínio e processamento natural"
    },
    {
      id: 3,
      name: "Dados & Backend",
      icon: <Database className="w-8 h-8 text-blue-300" />,
      items: ["Supabase", "PostgreSQL", "Vector DB"],
      desc: "Memória persistente e segurança"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative border-y border-white/5 bg-brand-surface/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-white">Minha Stack Técnica</h2>
            <p className="text-brand-muted">
              99% <span className="text-brand-primary font-medium">No-Code</span> para velocidade, 1% <span className="text-brand-secondary font-medium">Low-Code</span> para personalização ilimitada.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techGroups.map((group, idx) => (
            <FadeIn key={group.id} delay={idx * 100}>
              <div className="p-8 rounded-3xl glass-panel hover:border-brand-primary/30 transition-all h-full group">
                <div className="mb-6 bg-brand-surface w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{group.name}</h3>
                <p className="text-sm text-brand-muted mb-6">{group.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-text group-hover:border-brand-primary/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};