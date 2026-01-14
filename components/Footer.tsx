
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight uppercase">Ciência Aberta</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Capacitando pesquisadores em todo o mundo a adotar transparência, reprodutibilidade e inovação colaborativa no século XXI.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 OGuru_Dev. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacidade</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
