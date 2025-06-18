
import { Indicator } from './types';

export const reactiveIndicators: Indicator[] = [
  {
    id: 1,
    title: "Taxa de absenteísmo",
    category: "Reativo",
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
    title: "Taxa de frequência de transtornos mentais relacionados ao trabalho",
    category: "Reativo",
    details: {
      description: "O número de novos casos de distúrbios mentais e comportamentais (CID F) por hora trabalhada durante o período de referência (nexo comprovado pelo Médico do Trabalho)",
      source: "CAT - Comunicação de Acidente de Trabalho/Relatórios de Saude Ocupacional/ Relatório Anual do PCMSO",
      tools: "",
      formula: "(Número de novos casos de distúrbios mentais e comportamentais durante o período de referência) / (Número total de horas trabalhadas por trabalhadores no grupo de referência durante o período de referência) × 1.000.000",
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
    category: "Reativo",
    details: {
      description: "Saídas de colaboradores ligadas à saúde mental",
      source: "Entrevistas de desligamento",
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
    id: 9,
    title: "Fadiga",
    category: "Reativo",
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
    category: "Reativo",
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
    id: 12,
    title: "Violência no trabalho",
    category: "Reativo",
    details: {
      description: "Frequência de relatos, denúncias ou percepção de assédio, discriminação ou violência organizacional (pode também ser estratificado por tipo de violência: moral, sexual, institucional.)",
      source: "RH, SESMT, canal de denúncias, pesquisas internas",
      tools: "HSE-IT, ERI, JCQ, COPSOQ, questionários internos ou canal de ouvidoria",
      formula: "(número de relatos confirmados ou percebidos ÷ total de trabalhadores) × 100",
      frequency: "mensal",
      responsible: "SESTMT/RH / Compliance",
      target: "zero tolerância",
      method: "entrevistas, grupos focais",
      topics: "clima de medo, assédio, discriminação, segurança psicológica",
      references: "https://www.rbmt.org.br/details/234/pt-BR/violencia-no-trabalho--uma-revisao-da-literatura\nhttps://www.rbmt.org.br/details/218/pt-BR/analise-da-producao-cientifica-sobre-a-violencia-no-trabalho-em-servicos-hospitalares\nRev. Trib. Trab. 2. Reg., São Paulo, v. 15, n. 30, p. 60-74, jul./dez. 2023"
    }
  }
];
