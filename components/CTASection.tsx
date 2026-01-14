
import React from 'react';

const CTASection: React.FC = () => {
  const whatsappUrl = "https://wa.me/5512991907490?text=Olá%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ebook%20de%20ciência%20aberta%2C%20edição%202026.";

  const scrollToSample = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
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
    <section className="py-24 mesh-gradient text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
          Junte-se à vanguarda da <br/><span className="text-teal-400">pesquisa transparente.</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Entre em contato agora para garantir sua reserva do ebook completo e receba um desconto exclusivo de 30% para antecipados.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-900 rounded-2xl font-bold text-base transition-all inline-flex items-center justify-center shadow-xl shadow-teal-500/20 min-w-[240px] min-h-[56px]"
          >
            Garantir Acesso Antecipado
          </a>
          <button 
            onClick={scrollToSample}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl font-bold text-base transition-all text-center inline-flex items-center justify-center min-w-[240px] min-h-[56px]"
          >
            Ler Capítulo Amostra
          </button>
        </div>
      </div>
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default CTASection;
