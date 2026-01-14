
import React from 'react';

const topics = [
  {
    id: '01',
    title: 'Introdução ao Mundo da Ciência Aberta',
    description: 'Uma breve introdução aos conceitos fundamentais, pilares e a importância da transparência na pesquisa científica contemporânea.'
  },
  {
    id: '02',
    title: 'Plataformas e Ferramentas',
    description: 'Um guia prático sobre as principais plataformas que você pode utilizar para gerenciar, compartilhar e dar visibilidade ao seu trabalho.'
  },
  {
    id: '03',
    title: 'Exercícios e Próximos Passos Acadêmicos',
    description: 'Atividades práticas de fixação e um roteiro de estudos detalhado para guiar sua evolução contínua no ambiente acadêmico.'
  }
];

const Chapters: React.FC = () => {
  return (
    <section id="chapters" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">O que tem dentro?</h2>
          <p className="text-lg text-slate-600">
            Focado na prática acadêmica. Sem enrolação, apenas o caminho direto para dominar as ferramentas e os próximos passos da sua jornada.
          </p>
        </div>
        
        <div className="grid gap-6">
          {topics.map((topic) => (
            <div 
              key={topic.id} 
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all flex items-start space-x-8"
            >
              <span className="text-4xl font-black text-slate-100 group-hover:text-teal-100 transition-colors">
                {topic.id}
              </span>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {topic.title}
                </h4>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
