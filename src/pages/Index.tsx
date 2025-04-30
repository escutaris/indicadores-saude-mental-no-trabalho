
import { useState } from "react";
import IndicatorCard from "@/components/IndicatorCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const indicators = [
    {
      id: 1,
      title: "Taxa de absenteísmo",
      category: "RH",
      details: {
        description: "Faltas por motivos de saúde mental",
        source: "RH, folha de pagamento",
        tools: "GHQ; SRQ-20",
        formula: "(faltas por motivo mental ÷ total de dias programados) x 100",
        frequency: "mensal",
        responsible: "RH",
        target: "< 3%",
        method: "entrevistas semiestruturadas",
        topics: "causas de faltas; percepção de apoio"
      }
    },
    {
      id: 2,
      title: "Índice de rotatividade",
      category: "RH",
      details: {
        description: "Saídas de colaboradores ligadas à saúde mental",
        source: "RH",
        tools: "Questionário de Clima Organizacional; TIS-6",
        formula: "(saídas por saúde mental ÷ total de colaboradores) x 100",
        frequency: "trimestral",
        responsible: "RH",
        target: "< 10% anual",
        method: "grupos focais",
        topics: "motivos de saída; satisfação"
      }
    },
    {
      id: 3,
      title: "Engajamento",
      category: "Desenvolvimento",
      details: {
        description: "Motivação e envolvimento dos funcionários",
        source: "Pesquisas internas",
        tools: "UWES; Gallup Q12",
        formula: "média dos escores de vigor, dedicação e absorção",
        frequency: "semestral",
        responsible: "RH / Desenvolvimento",
        target: "> 4 (escala 0–6)",
        method: "entrevistas",
        topics: "motivação; alinhamento de propósito"
      }
    },
    {
      id: 4,
      title: "Satisfação no trabalho",
      category: "Bem-estar",
      details: {
        description: "Bem‑estar e equilíbrio emocional",
        source: "Pesquisas, entrevistas",
        tools: "SWLS; JSS",
        formula: "média dos itens de satisfação",
        frequency: "semestral",
        responsible: "RH",
        target: "> 75%",
        method: "entrevistas",
        topics: "equilíbrio; reconhecimento"
      }
    },
    {
      id: 5,
      title: "Estresse percebido",
      category: "Saúde",
      details: {
        description: "Nível de pressão e sobrecarga",
        source: "Questionários, plataformas",
        tools: "PSS-10; DASS-21",
        formula: "soma dos 10 itens",
        frequency: "trimestral",
        responsible: "SESMT",
        target: "< 14 (nível moderado)",
        method: "grupos focais",
        topics: "fontes de estresse; estratégias de coping"
      }
    },
    {
      id: 6,
      title: "Custo evitado com afastamentos",
      category: "Financeiro",
      details: {
        description: "Economia com afastamentos evitados por ações preventivas",
        source: "cálculo financeiro interno",
        tools: "WPAI; HPQ",
        formula: "(dias evitados de afastamento x custo médio diário)",
        frequency: "trimestral",
        responsible: "RH / Financeiro",
        target: "crescimento progressivo",
        method: "entrevistas com gestores",
        topics: "impacto financeiro da saúde mental"
      }
    },
    {
      id: 7,
      title: "Produtividade",
      category: "Desempenho",
      details: {
        description: "Entregas, metas cumpridas e desempenho funcional",
        source: "índices operacionais / metas cumpridas",
        tools: "IWPQ; HPQ",
        formula: "média dos escores autorreferidos de desempenho",
        frequency: "mensal",
        responsible: "RH / Líderes",
        target: "manter > 75%",
        method: "reuniões de feedback",
        topics: "barreiras à produtividade; condições de trabalho"
      }
    },
    {
      id: 8,
      title: "Clima organizacional",
      category: "Ambiente",
      details: {
        description: "Qualidade das relações e percepção do ambiente",
        source: "pesquisas internas, formulários de clima",
        tools: "PFQ; OCQ",
        formula: "média dos fatores de clima por dimensão",
        frequency: "anual",
        responsible: "RH",
        target: "> 80% de favorabilidade",
        method: "rodas de conversa",
        topics: "relações interpessoais; reconhecimento; confiança"
      }
    },
    {
      id: 9,
      title: "Acidentabilidade",
      category: "Segurança",
      details: {
        description: "Relação entre fatores mentais e acidentes de trabalho",
        source: "CAT, registros de incidentes, SESMT",
        tools: "NFR; FAS",
        formula: "frequência e gravidade de acidentes associados a estresse",
        frequency: "trimestral",
        responsible: "SESMT",
        target: "queda contínua de incidentes",
        method: "análise de causa raiz",
        topics: "fadiga, atenção, pressão emocional"
      }
    },
    {
      id: 10,
      title: "Presenteísmo",
      category: "Saúde",
      details: {
        description: "Presença física sem desempenho efetivo",
        source: "autoavaliação, líderes imediatos",
        tools: "SPS-6; WLQ",
        formula: "proporção de dias com presença e baixo rendimento",
        frequency: "semestral",
        responsible: "RH / SESMT",
        target: "reduzir para < 10%",
        method: "análise de jornada e feedbacks",
        topics: "exaustão, sintomas ignorados, falta de apoio"
      }
    },
    {
      id: 11,
      title: "Segurança psicológica",
      category: "Ambiente",
      details: {
        description: "Grau de confiança e liberdade para se expressar no ambiente de trabalho",
        source: "formulários anônimos, pesquisas de clima",
        tools: "Edmondson; Frazier",
        formula: "média das respostas por dimensão (ex: voz, apoio, erros)",
        frequency: "anual",
        responsible: "RH / Desenvolvimento",
        target: "> 80%",
        method: "entrevistas anônimas",
        topics: "abertura para erros, confiança mútua, escuta ativa"
      }
    }
  ];

  const categories = [...new Set(indicators.map(indicator => indicator.category))];

  const filteredIndicators = indicators.filter(indicator => {
    const matchesFilter = !activeFilter || indicator.category === activeFilter;
    const matchesSearch = !searchTerm || 
      indicator.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      indicator.details.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" 
            alt="Logo Escutaris" 
            className="h-20 mb-4"
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-escutarisPrimary text-center">
              Indicadores de Saúde Mental no Trabalho
            </h1>
            <p className="text-gray-600 mt-2 text-center max-w-2xl">
              Guia prático para acompanhamento e gestão estratégica da saúde mental em ambientes corporativos
            </p>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar indicadores..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-escutarisPrimary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveFilter(null)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium",
                !activeFilter 
                  ? "bg-escutarisPrimary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  activeFilter === category
                    ? "bg-escutarisPrimary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredIndicators.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">Nenhum indicador encontrado</h3>
            <p className="mt-2 text-gray-500">Tente ajustar seus filtros ou termos de busca</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1">
            {filteredIndicators.map((indicator) => (
              <IndicatorCard key={indicator.id} indicator={indicator} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
