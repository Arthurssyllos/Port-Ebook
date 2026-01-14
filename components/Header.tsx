
import React from 'react';

const Header: React.FC = () => {
  const whatsappUrl = "https://wa.me/5512991907490?text=Olá%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ebook%20de%20ciência%20aberta%2C%20edição%202026.";

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logotipo / Nome da Marca */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight uppercase">OGuru_Dev</span>
        </div>

        {/* Botão de Reserva */}
        <div className="flex justify-end">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all border border-white/20 inline-block"
          >
            Reserve Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
