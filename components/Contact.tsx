import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { FormData } from '../types';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    whatsapp: '',
    painPoint: '',
    budget: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API Call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Pronto para escalar?</h2>
          <p className="text-brand-muted">Preencha o formulário para uma análise de automação gratuita.</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50 border border-white/10">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <div className="flex justify-center">
                <div className="h-20 w-20 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} className="text-brand-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Recebido!</h3>
              <p className="text-brand-muted">Meu assistente virtual ou eu entraremos em contato pelo WhatsApp em breve.</p>
              <button 
                onClick={() => setStatus('idle')} 
                className="text-brand-primary hover:text-brand-secondary underline text-sm mt-4 transition-colors"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-white/20"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-white/20"
                  placeholder="(11) 99999-9999"
                  value={form.whatsapp}
                  onChange={e => setForm({...form, whatsapp: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Desafio Atual</label>
                <textarea 
                  required
                  rows={3}
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-white/20"
                  placeholder="Ex: Perco muito tempo agendando reuniões..."
                  value={form.painPoint}
                  onChange={e => setForm({...form, painPoint: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">Investimento Estimado</label>
                <select 
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  value={form.budget}
                  onChange={e => setForm({...form, budget: e.target.value})}
                >
                  <option value="" disabled className="bg-brand-dark">Selecione uma opção</option>
                  <option value="small" className="bg-brand-dark">Até R$ 2.000</option>
                  <option value="medium" className="bg-brand-dark">R$ 2.000 - R$ 5.000</option>
                  <option value="large" className="bg-brand-dark">R$ 5.000 - R$ 10.000</option>
                  <option value="enterprise" className="bg-brand-dark">Acima de R$ 10.000</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70 transform hover:-translate-y-1"
              >
                {status === 'submitting' ? 'Enviando...' : 'Solicitar Análise Gratuita'}
                {!status && <Send size={18} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};