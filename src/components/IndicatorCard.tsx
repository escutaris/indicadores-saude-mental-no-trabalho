
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

export const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Field: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <dt className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">{value}</dd>
    </div>
  );
};

const IndicatorCard: React.FC<IndicatorProps> = ({ indicator }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isReativo = indicator.category === "Reativo";
  const accentColor = isReativo ? "#B74722" : "#4D6E3F";

  return (
    <motion.div
      layout
      variants={cardVariants}
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
      className="card-health overflow-hidden"
      style={{ borderLeft: `3px solid ${accentColor}33` }}
      whileTap={{ x: 0 }}
    >
      <div
        className="card-header focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Fechar" : "Abrir"} detalhes: ${indicator.title}`}
      >
        <span className="font-semibold text-gray-800 pr-3">{indicator.title}</span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full"
            style={{
              backgroundColor: `${accentColor}18`,
              color: accentColor,
            }}
          >
            {indicator.category}
          </span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
              <dl>
                <Field label="O que mede" value={indicator.details.description} />
                <Field label="Fonte de dados" value={indicator.details.source} />
                <Field label="Ferramentas" value={indicator.details.tools} />
                <Field label="Fórmula / cálculo" value={indicator.details.formula} />
              </dl>
              <dl>
                <Field label="Frequência" value={indicator.details.frequency} />
                <Field label="Responsável" value={indicator.details.responsible} />
                <Field label="Meta" value={indicator.details.target} />
                <Field label="Método qualitativo" value={indicator.details.method} />
                <Field label="Temas explorados" value={indicator.details.topics} />
              </dl>
            </div>
            {indicator.details.references && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <dt className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Referências científicas
                </dt>
                <dd className="text-xs leading-relaxed text-gray-500 break-words">
                  {indicator.details.references}
                </dd>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IndicatorCard;
