import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/1234567890" // Replace with real number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`bg-brand-surfaceHighlight border border-brand-accentGreen/30 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
      >
        Converse com a Isa 🤖
      </div>
      
      <div className="relative">
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <div className="bg-[#25D366] p-4 rounded-full shadow-lg shadow-green-900/20 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <MessageCircle size={28} className="text-white fill-white" />
        </div>
      </div>
    </a>
  );
};