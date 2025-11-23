import React from 'react';
import { Database, ArrowRightLeft } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <FadeIn>
                <div className="inline-block px-4 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold mb-4">
                    CASE DE SUCESSO
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Agente de IA com <span className="text-brand-primary">Memória Contextual</span>
                </h2>
                <p className="text-lg text-brand-muted leading-relaxed">
                O maior problema dos chatbots comuns é esquecer o que foi dito há 5 minutos. Nossos Agentes resolvem "conversas picadas" usando um <strong>Buffer de Memória</strong> inteligente.
                </p>

                <div className="space-y-6 mt-8">
                    <div className="flex gap-4 group">
                        <div className="mt-1 w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-primary/50 transition-colors">
                            <Database size={24} className="text-brand-primary" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Supabase Vector Store</h4>
                            <p className="text-sm text-brand-muted mt-1">Armazenamos o histórico de conversas e preferências do cliente para consultas futuras.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 group">
                        <div className="mt-1 w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-secondary/50 transition-colors">
                            <ArrowRightLeft size={24} className="text-brand-secondary" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Orquestração n8n</h4>
                            <p className="text-sm text-brand-muted mt-1">A IA decide quando consultar o banco de dados e quando apenas responder casualmente.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
          </div>

          {/* Right: Visual Mockup */}
          <div className="lg:w-1/2 w-full">
            <FadeIn delay={200}>
                <div className="relative">
                    {/* Diagram Lines Background */}
                    <div className="absolute -z-10 inset-0 opacity-10">
                        <svg width="100%" height="100%">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    {/* Mock Phone Interface */}
                    <div className="mx-auto w-[320px] bg-brand-dark border-[6px] border-brand-surfaceHighlight rounded-[3rem] shadow-2xl shadow-brand-primary/20 relative overflow-hidden ring-1 ring-white/10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-dark rounded-b-2xl z-20"></div>
                        
                        {/* Chat Screen */}
                        <div className="bg-[#0f172a] w-full h-[550px] rounded-[2.5rem] overflow-hidden flex flex-col relative">
                            {/* Chat Header */}
                            <div className="bg-brand-surfaceHighlight/80 backdrop-blur-md p-4 pt-10 flex items-center gap-3 border-b border-white/5 z-10">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white text-xs">
                                    <BotIcon />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Assistente Virtual</p>
                                    <div className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <p className="text-brand-muted text-[10px]">Online via n8n</p>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div className="flex-1 p-4 space-y-4 overflow-y-auto font-sans text-xs">
                                <ChatBubble type="user" text="Oi, queria agendar para amanhã às 15h." />
                                <ChatBubble type="bot" text="Olá! 😊 Verifiquei aqui e às 15h já está ocupado." />
                                <ChatBubble type="bot" text="Tenho 16:30 disponível. Você prefere esse horário ou na quinta-feira?" />
                                <ChatBubble type="user" text="Pode ser 16:30 então." />
                                <ChatBubble type="bot" text="Perfeito! Agendado para amanhã, 16:30. Te enviei o invite no email cadastrado (joao@email.com). Precisa de mais algo?" isThinking={false} />
                            </div>

                            {/* Input Mock */}
                            <div className="p-4 bg-brand-surfaceHighlight/50 backdrop-blur-sm absolute bottom-0 w-full border-t border-white/5">
                                <div className="h-10 bg-white/5 rounded-full w-full flex items-center px-4 text-white/20 text-xs">
                                    Digite sua mensagem...
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floater Badge n8n */}
                    <div className="absolute top-32 -right-4 md:-right-12 glass-panel p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce border border-brand-primary/30" style={{ animationDuration: '3s' }}>
                        <div className="w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                        <span className="text-xs font-mono text-white font-bold">Fluxo Ativo</span>
                    </div>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

const BotIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
)

const ChatBubble: React.FC<{ type: 'user' | 'bot'; text: string; isThinking?: boolean }> = ({ type, text, isThinking }) => {
    const isUser = type === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl ${
                isUser 
                ? 'bg-brand-primary text-white rounded-tr-none shadow-glow' 
                : 'bg-brand-surfaceHighlight text-brand-muted border border-white/5 rounded-tl-none'
            }`}>
                <p className="leading-relaxed">{text}</p>
                <p className={`text-[9px] text-right mt-1 opacity-50`}>
                    {isThinking ? 'Digitando...' : '10:42'}
                </p>
            </div>
        </div>
    )
}