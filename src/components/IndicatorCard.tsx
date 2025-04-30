
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
      <div className="card-header" onClick={toggleOpen}>
        <span>{indicator.title}</span>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
            {indicator.category}
          </span>
          {isOpen ? (
            <ChevronUp className="text-escutarisSecondary h-5 w-5" />
          ) : (
            <ChevronDown className="text-escutarisSecondary h-5 w-5" />
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
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm"
          >
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">O que mede:</p>
                <p>{indicator.details.description}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Fonte de dados:</p>
                <p>{indicator.details.source}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Ferramentas:</p>
                <p>{indicator.details.tools}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Fórmula / cálculo:</p>
                <p>{indicator.details.formula}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Frequência:</p>
                <p>{indicator.details.frequency}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Responsável:</p>
                <p>{indicator.details.responsible}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Meta:</p>
                <p>{indicator.details.target}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="font-medium text-escutarisPrimary">Método qualitativo:</p>
                <p>{indicator.details.method}</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md col-span-1 md:col-span-2">
                <p className="font-medium text-escutarisPrimary">Temas explorados:</p>
                <p>{indicator.details.topics}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IndicatorCard;
