
import React from "react";
import IndicatorCard from "./IndicatorCard";
import IndicatorsTable from "./IndicatorsTable";
import { Indicator } from "@/data/indicators";

interface ContentDisplayProps {
  indicators: Indicator[];
  viewMode: "cards" | "table";
  filters: {
    search: string;
    category: string | null;
  };
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ indicators, viewMode, filters }) => {
  const filteredIndicators = indicators.filter(indicator => {
    const matchesFilter = !filters.category || indicator.category === filters.category;
    const matchesSearch = !filters.search || 
      indicator.title.toLowerCase().includes(filters.search.toLowerCase()) || 
      indicator.details.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  if (viewMode === "cards") {
    if (filteredIndicators.length === 0) {
      return (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">Nenhum indicador encontrado</h3>
          <p className="mt-2 text-gray-500">Tente ajustar seus filtros ou termos de busca</p>
        </div>
      );
    }
    
    return (
      <div className="grid gap-6 grid-cols-1">
        {filteredIndicators.map((indicator) => (
          <IndicatorCard key={indicator.id} indicator={indicator} />
        ))}
      </div>
    );
  }
  
  return <IndicatorsTable indicators={indicators} filters={filters} />;
};

export default ContentDisplay;
