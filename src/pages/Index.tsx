
import { useState } from "react";
import IndicatorCard from "@/components/IndicatorCard";
import IndicatorsTable from "@/components/IndicatorsTable";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, BarChart2, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  
  const indicators = [
    {
      id: 1,
      title: "Taxa de absenteísmo",
      category: "RH",
      details: {
        description: "Faltas por motivos de saúde mental (aqui inclui os motivadores osteomusculares)",
        source: "RH, folha de pagamento, sesmt",
        tools: "",
        formula: "(dias/horas perdidos por CID F e M) / (dias/horas totais) * 100",
        frequency: "mensal",
        responsible: "RH",
        target: "< 3%",
        method: "entrevistas semiestruturadas",
        topics: "causas de faltas; percepção de apoio",
        references: "10.1017/S0033291700021644; 10.1017/S0033291700033069"
      }
    },
    {
      id: 2,
      title: "Taxa de frequência de lesões ocupacionais não fatais",
      category: "Segurança",
      details: {
        description: "O número de novos casos de lesões ocupacionais não fatais por hora trabalhada pela população em questão durante o período de referência",
        source: "CAT",
        tools: "",
        formula: "(Número de novos casos dedoença ocupacional não fatal durante o período de referência) / (Número total de horas trabalhadas por trabalhadores no grupo de referência durante o período de referência) × 1.000.000",
        frequency: "mensal",
        responsible: "RH",
        target: "zero",
        method: "",
        topics: "",
        references: "http://www.ilo.org/global/statistics-and-databases/standards-and-guidelines/resolutions-adopted-by-international-conferences-of-labour-statisticians/lang--en/index.htm"
      }
    },
    {
      id: 3,
      title: "Índice de rotatividade",
      category: "RH",
      details: {
        description: "Saídas de colaboradores ligadas à saúde mental",
        source: "RH",
        tools: "",
        formula: "(saídas por saúde mental ÷ total de colaboradores) × 100",
        frequency: "trimestral",
        responsible: "RH",
        target: "< 10% anual",
        method: "grupos focais",
        topics: "motivos de saída; satisfação",
        references: "IBCDH / ABRH / GPTW / CIEE"
      }
    },
    {
      id: 4,
      title: "Engajamento",
      category: "Desenvolvimento",
      details: {
        description: "Motivação e envolvimento dos funcionários",
        source: "Pesquisas internas",
        tools: "UWES; Gallup Q12/ EngajaS/A",
        formula: "média dos escores de vigor, dedicação e absorção",
        frequency: "semestral",
        responsible: "RH / Desenvolvimento",
        target: "> 4 (escala 0–6)",
        method: "entrevistas",
        topics: "motivação; alinhamento de propósito",
        references: "https://doi.org/10.1177/0013164405282471; https://doi.org/10.1037/0021-9010.87.2.268; https://www.engajasa.com.br/"
      }
    },
    {
      id: 5,
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
        topics: "equilíbrio; reconhecimento",
        references: "https://doi.org/10.1207/s15327752jpa4901_13; https://doi.org/10.1007/BF00929796"
      }
    },
    {
      id: 6,
      title: "Estresse percebido",
      category: "Saúde",
      details: {
        description: "Estress percebido",
        source: "Questionários, plataformas",
        tools: "PSS-10",
        formula: "soma dos 10 itens",
        frequency: "trimestral",
        responsible: "SESMT",
        target: "< 14",
        method: "grupos focais",
        topics: "fontes de estresse; estratégias de coping",
        references: "10.2307/2136404; 10.1016/j.anr.2012.08.004"
      }
    },
    {
      id: 7,
      title: "Produtividade",
      category: "Desempenho",
      details: {
        description: "Desempenho relacionado ao bem‑estar mental",
        source: "Avaliação de desempenho",
        tools: "IWPQ; HPQ",
        formula: "são avaliados Horas de trabalho declaradas vs. padrão esperado\n\nFaltas (absenteísmo) nos últimos 28 dias\n\nDesempenho relativo (autoavaliação de produtividade de 0 a 10)\n\nDesempenho ideal (benchmark do que seria o melhor desempenho possível)",
        frequency: "mensal",
        responsible: "RH",
        target: "> 95%",
        method: "entrevistas de desempenho",
        topics: "fatores de engajamento; bloqueios",
        references: "https://journals.lww.com/joem/abstract/2002/01000/stanford_presenteeism_scale__health_status_and.4.aspx; https://link.springer.com/article/10.2165/00019053-199304050-00006"
      }
    },
    {
      id: 8,
      title: "Clima organizacional",
      category: "Ambiente",
      details: {
        description: "Percepção de justiça\nComprometimento organizacional afetivo",
        source: "Pesquisas de clima",
        tools: "PFQ; OCQ",
        formula: "média dos escores de clima",
        frequency: "anual",
        responsible: "RH",
        target: "> 70%",
        method: "grupos focais",
        topics: "colaboração; comunicação; confiança",
        references: "10.1080/02678370500357936; 10.1037/0021-9010.67.3.438"
      }
    },
    {
      id: 9,
      title: "Acidentabilidade",
      category: "Segurança",
      details: {
        description: "Fadiga acumulada ao final da jornada de trabalho e a necessidade de descanso",
        source: "Pesquisas internas",
        tools: "NFR; FAS",
        formula: "Soma das pontuações em escala Likert",
        frequency: "mensal",
        responsible: "SESMT",
        target: "Quanto maior, maior a necessidade de recuperação.",
        method: "análise de incidentes; entrevistas",
        topics: "causas de acidentes; condições de trabalho",
        references: "https://doi.org/10.17652/rpot/2015.3.594; 10.17652/rpot/2015.3.594"
      }
    },
    {
      id: 10,
      title: "Presenteísmo",
      category: "Saúde",
      details: {
        description: "Produtividade reduzida apesar da presença",
        source: "Pesquisas internas",
        tools: "SPS-6; WLQ",
        formula: "média dos escores de presenteísmo",
        frequency: "trimestral",
        responsible: "RH / SESMT",
        target: "Quanto maior, melhor (SPS-6) ou pior (WLQ)",
        method: "entrevistas",
        topics: "barreiras à performance; apoio necessário",
        references: "10.1371/journal.pone.0301787; 10.2147/NDT.S258508"
      }
    },
    {
      id: 11,
      title: "Segurança psicológica",
      category: "Ambiente",
      details: {
        description: "nível de confiança e liberdade que as pessoas sentem para se expressar, questionar, assumir riscos interpessoais e admitir erros no ambiente de trabalho, sem medo de sofrer humilhação, punição ou retaliação.",
        source: "Pesquisas internas",
        tools: "Edmondson's Psych. Quest.; Frazier Scale",
        formula: "percentual de respostas positivas",
        frequency: "semestral",
        responsible: "RH / lideranças",
        target: "> 80% concordo",
        method: "grupos focais",
        topics: "abertura ao feedback; confiança",
        references: "10.2307/2666999; 10.1111/peps.12183"
      }
    }
  ];

  const categories = [...new Set(indicators.map(indicator => indicator.category))];

  const filters = {
    search: searchTerm,
    category: activeFilter
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "cards" ? "table" : "cards");
  };

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
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleViewMode}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {viewMode === "cards" ? (
                <>
                  <BarChart2 size={18} />
                  <span>Ver como tabela</span>
                </>
              ) : (
                <>
                  <LayoutGrid size={18} />
                  <span>Ver como cards</span>
                </>
              )}
            </button>
            
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
        </div>

        {viewMode === "cards" ? (
          indicators.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">Nenhum indicador encontrado</h3>
              <p className="mt-2 text-gray-500">Tente ajustar seus filtros ou termos de busca</p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1">
              {indicators
                .filter(indicator => {
                  const matchesFilter = !activeFilter || indicator.category === activeFilter;
                  const matchesSearch = !searchTerm || 
                    indicator.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    indicator.details.description.toLowerCase().includes(searchTerm.toLowerCase());
                  
                  return matchesFilter && matchesSearch;
                })
                .map((indicator) => (
                  <IndicatorCard key={indicator.id} indicator={indicator} />
                ))
              }
            </div>
          )
        ) : (
          <IndicatorsTable indicators={indicators} filters={filters} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
