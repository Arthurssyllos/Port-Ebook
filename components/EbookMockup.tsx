
import React from 'react';

const EbookMockup: React.FC = () => {
  return (
    <div className="book-container drop-shadow-2xl">
      <div className="book">
        <div className="book-side"></div>
        <div className="book-front overflow-hidden">
          {/* Cover Geometric Pattern */}
          <div className="absolute inset-0 z-0 opacity-40">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <polygon points="0,0 100,0 50,50" fill="white" fillOpacity="0.1" />
               <polygon points="100,0 100,100 0,50" fill="white" fillOpacity="0.05" />
               <polygon points="0,100 100,100 50,0" fill="white" fillOpacity="0.1" />
             </svg>
          </div>
          
          <div className="relative z-10 flex flex-col h-full w-full justify-between items-center py-12">
            <p className="text-[10px] tracking-[0.2em] font-bold text-white/60 uppercase">
              Criado para Pesquisadores
            </p>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-black leading-none tracking-tighter">
                CIÊNCIA<br/>ABERTA
              </h2>
              <div className="w-12 h-1 bg-teal-400 mx-auto"></div>
            </div>
            
            <div className="space-y-1">
               <p className="text-xs font-medium text-white/80">Princípios, Práticas e Futuros</p>
               <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase">Edição 2026</p>
            </div>
          </div>
        </div>
        <div className="book-pages"></div>
      </div>
    </div>
  );
};

export default EbookMockup;
