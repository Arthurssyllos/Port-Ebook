
import React, { useState } from 'react';

const SampleSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unverified'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/Arthurpereirasyllos@hotmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _captcha: "false",
            _template: "table",
            email: email,
            _subject: "🔥 NOVO LEAD: Amostra Ebook Ciência Aberta",
            message: `Lead: ${email} solicitou o capítulo grátis.`,
            _autoresponder: "Obrigado pelo seu interesse! Para receber o PDF da amostra, responda a este e-mail escrevendo 'eu quero'."
        })
      });

      // Se o status for 403, o e-mail ainda não foi ativado no FormSubmit
      if (response.status === 403) {
        setStatus('unverified');
        return;
      }

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Erro de conexão:", err);
      setStatus('error');
    }
  };

  return (
    <section id="sample" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block p-4 bg-teal-50 rounded-2xl mb-8">
          <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Pronto para começar a leitura?
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Informe seu melhor e-mail para receber o acesso ao primeiro capítulo completo da edição 2026.
        </p>

        {status === 'unverified' && (
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl max-w-2xl mx-auto mb-8 animate-in zoom-in">
            <h4 className="text-amber-800 font-bold text-xl mb-2">Ativação Necessária!</h4>
            <p className="text-amber-700 mb-4 text-sm">
              O sistema detectou que você ainda não ativou o formulário para <strong>Arthurpereirasyllos@hotmail.com</strong>.
            </p>
            <p className="text-amber-900 font-medium">
              Verifique seu Hotmail agora (incluindo Lixo Eletrônico) e clique no botão <strong>"Activate Form"</strong> enviado pelo FormSubmit. Após isso, tente novamente.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 bg-amber-200 hover:bg-amber-300 text-amber-900 px-6 py-2 rounded-xl font-bold transition-all"
            >
              Tentar novamente após ativar
            </button>
          </div>
        )}

        {status === 'success' ? (
          <div className="bg-teal-50 border border-teal-200 p-10 rounded-[2.5rem] animate-in zoom-in duration-500 max-w-2xl mx-auto shadow-sm">
            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-teal-500/20">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-teal-900 mb-4">Quase lá! Verifique seu e-mail.</h4>
            <div className="space-y-6 text-teal-800 leading-relaxed text-lg">
              <p>Enviamos uma mensagem de confirmação para você agora mesmo.</p>
              <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-teal-300 inline-block">
                <p className="font-semibold text-teal-900">
                  ⚠️ Importante: Responda ao e-mail com <br/>
                  <span className="text-3xl font-black text-teal-600 tracking-tight">"eu quero"</span>
                </p>
              </div>
            </div>
          </div>
        ) : status !== 'unverified' && (
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="relative space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail principal"
                  className="flex-grow px-7 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all text-slate-900 text-lg placeholder:text-slate-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'sending'}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl disabled:opacity-70 flex items-center justify-center min-w-[200px]"
                >
                  {status === 'sending' ? 'Enviando...' : 'Quero a Amostra'}
                </button>
              </div>
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-semibold border border-red-100 mt-4">
                  Erro de conexão. Verifique sua internet ou tente novamente em instantes.
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default SampleSection;
