
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Introduction: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.3 }} 
      className="mb-8"
    >
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-escutarisPrimary">
            Sobre os Indicadores de Saúde Mental no Trabalho
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300">
          <div className="space-y-6">
            <p className="text-sm sm:text-base leading-relaxed">
              Os indicadores de saúde mental no trabalho são métricas essenciais que permitem às organizações monitorar, avaliar e melhorar o bem-estar psicológico de seus trabalhadores. Estes indicadores fornecem dados concretos sobre diversos aspectos da saúde mental no ambiente de trabalho, permitindo intervenções embasadas em evidências científicas.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-md border-l-4 border-escutarisSecondary">
                <h3 className="font-bold text-escutarisSecondary mb-3 text-base sm:text-lg">
                  Indicadores Reativos
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  São métricas que medem eventos ou situações que já ocorreram, como absenteísmo, 
                  rotatividade e presenteísmo. Estes indicadores apontam problemas existentes 
                  e permitem uma resposta direcionada para resolver questões já manifestadas.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-md border-l-4 border-escutarisPrimary">
                <h3 className="font-bold text-escutarisPrimary mb-3 text-base sm:text-lg">
                  Indicadores Proativos
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  São métricas que avaliam fatores que podem prevenir problemas futuros, como engajamento, 
                  satisfação no trabalho e segurança psicológica. Estes indicadores permitem intervenções 
                  preventivas e o desenvolvimento de um ambiente de trabalho mais saudável mentalmente.
                </p>
              </div>
            </div>
            
            <h3 className="font-bold text-lg sm:text-xl text-escutarisPrimary mt-6">
              Importância e Benefícios
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 space-y-3 text-sm sm:text-base">
              <li className="leading-relaxed">
                <span className="font-medium">Identificação precoce:</span> Detectar riscos e problemas de saúde mental antes que se agravem.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Direcionamento de recursos:</span> Alocar investimentos de forma eficiente em programas de saúde mental.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Avaliação de intervenções:</span> Mensurar a eficácia das iniciativas implementadas.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Redução de custos:</span> Diminuir gastos relacionados ao absenteísmo, rotatividade e queda de produtividade.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Melhoria do clima organizacional:</span> Contribuir para um ambiente de trabalho mais saudável e produtivo.
              </li>
            </ul>
            
            <h3 className="font-bold text-lg sm:text-xl text-escutarisPrimary mt-6">
              Como utilizar os indicadores
            </h3>
            <ol className="list-decimal pl-4 sm:pl-6 space-y-3 text-sm sm:text-base">
              <li className="leading-relaxed">
                <span className="font-medium">Definir linha de base:</span> Estabelecer os valores iniciais para comparações futuras.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Estabelecer metas:</span> Determinar objetivos realistas e mensuráveis para cada indicador.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Monitorar regularmente:</span> Acompanhar as métricas na frequência recomendada para cada indicador.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Analisar tendências:</span> Identificar padrões e correlações entre diferentes indicadores.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Implementar ações:</span> Desenvolver intervenções baseadas nos dados coletados.
              </li>
              <li className="leading-relaxed">
                <span className="font-medium">Avaliar resultados:</span> Mensurar o impacto das intervenções e ajustar estratégias conforme necessário.
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Introduction;
