
import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="mb-10 pt-2">
      <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 max-w-3xl">
        Métricas que permitem às organizações monitorar, avaliar e agir sobre
        o bem-estar psicológico de suas equipes — com base em evidências científicas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
        <div className="border-l-4 border-escutarisSecondary pl-5 py-1">
          <h3 className="text-xs font-bold uppercase tracking-widest text-escutarisSecondary mb-2">
            Indicadores Reativos
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            Medem eventos já ocorridos: absenteísmo, rotatividade, presenteísmo.
            Apontam problemas existentes e orientam respostas direcionadas.
          </p>
        </div>
        <div className="border-l-4 border-escutarisPrimary pl-5 py-1">
          <h3 className="text-xs font-bold uppercase tracking-widest text-escutarisPrimary mb-2">
            Indicadores Proativos
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            Avaliam fatores preventivos: engajamento, satisfação, segurança psicológica.
            Permitem intervenções antes que os problemas se manifestem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
