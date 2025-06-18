
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IndicatorDetail {
  description: string;
  source: string;
  tools: string;
  formula: string;
  frequency: string;
  responsible: string;
  target: string;
  method: string;
  topics: string;
  references?: string;
}

interface IndicatorProps {
  indicator: {
    id: number;
    title: string;
    category: string;
    details: IndicatorDetail;
  };
}

const IndicatorCard: React.FC<IndicatorProps> = ({ indicator }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      layout
      className="card-health overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="card-header focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 rounded-md" 
        onClick={toggleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleOpen();
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Fechar' : 'Abrir'} detalhes do indicador ${indicator.title}`}
      >
        <span className="text-base sm:text-lg font-semibold">{indicator.title}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full whitespace-nowrap">
            {indicator.category}
          </span>
          {isOpen ? (
            <ChevronUp className="text-escutarisSecondary h-5 w-5 flex-shrink-0" />
          ) : (
            <ChevronDown className="text-escutarisSecondary h-5 w-5 flex-shrink-0" />
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="font-medium text-escutarisPrimary mb-2">O que mede:</p>
                  <p className="whitespace-pre-wrap leading-relaxed">{indicator.details.description}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="font-medium text-escutarisPrimary mb-2">Fonte de dados:</p>
                  <p className="leading-relaxed">{indicator.details.source}</p>
                </div>
                
                {indicator.details.tools && (
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <p className="font-medium text-escutarisPrimary mb-2">Ferramentas:</p>
                    <p className="leading-relaxed">{indicator.details.tools}</p>
                  </div>
                )}
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="font-medium text-escutarisPrimary mb-2">Fórmula / cálculo:</p>
                  <p className="whitespace-pre-wrap leading-relaxed">{indicator.details.formula}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="font-medium text-escutarisPrimary mb-2">Frequência:</p>
                  <p className="leading-relaxed">{indicator.details.frequency}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="font-medium text-escutarisPrimary mb-2">Responsável:</p>
                  <p className="leading-relaxed">{indicator.details.responsible}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="font-medium text-escutarisPrimary mb-2">Meta:</p>
                  <p className="leading-relaxed">{indicator.details.target}</p>
                </div>
                
                {indicator.details.method && (
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <p className="font-medium text-escutarisPrimary mb-2">Método qualitativo:</p>
                    <p className="leading-relaxed">{indicator.details.method}</p>
                  </div>
                )}
                
                {indicator.details.topics && (
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <p className="font-medium text-escutarisPrimary mb-2">Temas explorados:</p>
                    <p className="leading-relaxed">{indicator.details.topics}</p>
                  </div>
                )}
              </div>
            </div>
            
            {indicator.details.references && (
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <p className="font-medium text-escutarisPrimary mb-2">Referências científicas:</p>
                <p className="text-xs sm:text-sm break-words leading-relaxed">{indicator.details.references}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IndicatorCard;
