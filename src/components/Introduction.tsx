import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Introduction: React.FC = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }} className="mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-escutarisPrimary">Sobre os Indicadores de Saúde Mental no Trabalho</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700">
          <div className="space-y-4">
            <p>Os indicadores de saúde mental no trabalho são métricas essenciais que permitem às organizações monitorar, avaliar e melhorar o bem-estar psicológico de seus trabalhadores. Estes indicadores fornecem dados concretos sobre diversos aspectos da saúde mental no ambiente de trabalho, permitindo intervenções embasadas em evidências.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-escutarisSecondary">
                <h3 className="font-bold text-escutarisSecondary mb-2">Indicadores Reativos</h3>
                <p>
                  São métricas que medem eventos ou situações que já ocorreram, como absenteísmo, 
                  rotatividade e presenteísmo. Estes indicadores apontam problemas existentes 
                  e permitem uma resposta direcionada para resolver questões já manifestadas.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-escutarisPrimary">
                <h3 className="font-bold text-escutarisPrimary mb-2">Indicadores Proativos</h3>
                <p>
                  São métricas que avaliam fatores que podem prevenir problemas futuros, como engajamento, 
                  satisfação no trabalho e segurança psicológica. Estes indicadores permitem intervenções 
                  preventivas e o desenvolvimento de um ambiente de trabalho mais saudável mentalmente.
                </p>
              </div>
            </div>
            
            <h3 className="font-bold text-lg text-escutarisPrimary mt-4">Importância e Benefícios</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Identificação precoce:</span> Detectar riscos e problemas de saúde mental antes que se agravem.
              </li>
              <li>
                <span className="font-medium">Direcionamento de recursos:</span> Alocar investimentos de forma eficiente em programas de saúde mental.
              </li>
              <li>
                <span className="font-medium">Avaliação de intervenções:</span> Mensurar a eficácia das iniciativas implementadas.
              </li>
              <li>
                <span className="font-medium">Redução de custos:</span> Diminuir gastos relacionados ao absenteísmo, rotatividade e queda de produtividade.
              </li>
              <li>
                <span className="font-medium">Melhoria do clima organizacional:</span> Contribuir para um ambiente de trabalho mais saudável e produtivo.
              </li>
            </ul>
            
            <h3 className="font-bold text-lg text-escutarisPrimary mt-2">Como utilizar os indicadores</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <span className="font-medium">Definir linha de base:</span> Estabelecer os valores iniciais para comparações futuras.
              </li>
              <li>
                <span className="font-medium">Estabelecer metas:</span> Determinar objetivos realistas e mensuráveis para cada indicador.
              </li>
              <li>
                <span className="font-medium">Monitorar regularmente:</span> Acompanhar as métricas na frequência recomendada para cada indicador.
              </li>
              <li>
                <span className="font-medium">Analisar tendências:</span> Identificar padrões e correlações entre diferentes indicadores.
              </li>
              <li>
                <span className="font-medium">Implementar ações:</span> Desenvolver intervenções baseadas nos dados coletados.
              </li>
              <li>
                <span className="font-medium">Avaliar resultados:</span> Mensurar o impacto das intervenções e ajustar estratégias conforme necessário.
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </motion.div>;
};
export default Introduction;