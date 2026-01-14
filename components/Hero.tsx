
import React from 'react';
import EbookMockup from './EbookMockup';

const Hero: React.FC = () => {
  const scrollToSample = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('sample');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-geometric pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-block px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full">
            <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">Lançamento em 2026</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
            Valor real para pesquisadores e praticantes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">ciência aberta</span>.
          </h1>
          
          <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
            Navegue pelo cenário em constante evolução da transparência acadêmica. Um guia completo para a próxima geração de colaborações globais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToSample}
              className="bg-teal-500 hover:bg-teal-400 text-slate-900 px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-teal-500/20 whitespace-nowrap text-lg"
            >
              Baixar Amostra Grátis
            </button>
            <div className="flex items-center space-x-2 text-slate-400 text-sm italic">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Acesso imediato ao Cap. 01</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-700">
          <EbookMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
