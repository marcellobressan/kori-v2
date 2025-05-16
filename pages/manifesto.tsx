import React, { useState } from 'react';

const content = {
  pt: {
    title: 'Manifesto da Kori',
    subtitle: 'Explorar Futuros para Cultivar Estratégias Comuns',
    items: [
      ['Futuros não são previsões. São possibilidades.', 'Na Kori, não buscamos acertar o amanhã — buscamos ampliá-lo. O futuro não é um destino, mas um campo de escolhas em disputa.'],
      ['Todo sinal importa.', 'Um tweet, uma tecnologia, uma mudança climática ou um meme. A Kori revela, conecta e interpreta esses fenômenos.'],
      ['A inteligência é coletiva.', 'Misturamos pontos de vista, disciplinas e experiências para enriquecer a imaginação estratégica.'],
      ['A complexidade não é um obstáculo. É um convite.', 'Da Litania à Metáfora, do Cluster ao Cenário, desenhamos sentido para o caos.'],
      ['A tecnologia serve à reflexão — não ao controle.', 'A IA é nossa parceira. Ela propõe, resume, conecta — mas quem decide somos nós.'],
      ['Governança importa.', 'Cada projeto tem regras claras. Democratizamos o acesso sem abrir mão da integridade.'],
      ['O futuro precisa de imaginação política.', 'Desenhamos transições possíveis. Questionamos metáforas vigentes. Celebramos futuros de crescimento e transformação.'],
      ['Exportar é compartilhar — não encerrar.', 'Gerar relatórios é uma forma de abrir conversas e inspirar decisões.'],
      ['O tempo da estratégia é agora.', 'Cultivamos futuros com urgência, cuidado e paciência.'],
      ['Kori é mais que uma plataforma. É uma comunidade.', 'Aberta a futuristas, pesquisadores, artistas, inovadores e sonhadores. Se você acredita que outro futuro é possível — Kori é para você.']
    ],
    footer: '🌐 www.kori.community (em breve)'
  },
  en: {
    title: 'Kori Manifesto',
    subtitle: 'Exploring Futures to Cultivate Shared Strategies',
    items: [
      ['Futures are not predictions. They are possibilities.', 'At Kori, we don’t seek to be right about tomorrow — we seek to expand it. The future is not a destination, but a field of contested choices.'],
      ['Every signal matters.', 'A tweet, a new tech, a climate shift, a meme. Kori reveals, connects, and interprets these phenomena.'],
      ['Intelligence is collective.', 'We mix viewpoints, disciplines, and experiences to enrich strategic imagination.'],
      ['Complexity is not an obstacle. It is an invitation.', 'From Litania to Metaphor, from Cluster to Scenario, we make sense of the chaos.'],
      ['Technology serves reflection — not control.', 'AI is our partner. It suggests, summarizes, connects — but we decide.'],
      ['Governance matters.', 'Every project has clear rules. We democratize access without compromising integrity.'],
      ['The future needs political imagination.', 'We sketch possible transitions. We question prevailing metaphors. We embrace futures of growth and transformation.'],
      ['Exporting is sharing — not closing.', 'Generating reports is a way to start conversations and inspire decisions.'],
      ['The time for strategy is now.', 'We cultivate futures with urgency, care, and patience.'],
      ['Kori is more than a platform. It is a community.', 'Open to futurists, researchers, artists, innovators, and dreamers. If you believe another future is possible — Kori is for you.']
    ],
    footer: '🌐 www.kori.community (coming soon)'
  }
};

export default function ManifestoLanding() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = content[lang];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">{t.title}</h1>
          <select value={lang} onChange={(e) => setLang(e.target.value as 'pt' | 'en')} className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1">
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
        </div>
        <p className="text-center text-xl text-gray-300">{t.subtitle}</p>

        <ul className="space-y-10">
          {t.items.map(([title, text], index) => (
            <li key={index}>
              <h2 className="text-2xl font-bold">{index + 1}. {title}</h2>
              <p className="text-gray-400">{text}</p>
            </li>
          ))}
        </ul>

        <footer className="pt-10 border-t border-gray-700 text-center text-sm text-gray-500">
          {t.footer}
        </footer>
      </div>
    </main>
  );
}
