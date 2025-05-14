
import React from "react";
import IndicatorCard from "./IndicatorCard";
import IndicatorsTable from "./IndicatorsTable";
import { Indicator } from "@/data/indicators";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

  const exportToCSV = () => {
    try {
      // CSV header row
      let csvContent = "Título,Categoria,Descrição,Fonte,Ferramentas,Fórmula,Frequência,Responsável,Meta,Método,Temas\n";
      
      // Add each indicator as a CSV row
      filteredIndicators.forEach(indicator => {
        const row = [
          `"${indicator.title.replace(/"/g, '""')}"`,
          `"${indicator.category.replace(/"/g, '""')}"`,
          `"${indicator.details.description.replace(/"/g, '""')}"`,
          `"${indicator.details.source.replace(/"/g, '""')}"`,
          `"${indicator.details.tools.replace(/"/g, '""')}"`,
          `"${indicator.details.formula.replace(/"/g, '""')}"`,
          `"${indicator.details.frequency.replace(/"/g, '""')}"`,
          `"${indicator.details.responsible.replace(/"/g, '""')}"`,
          `"${indicator.details.target.replace(/"/g, '""')}"`,
          `"${indicator.details.method.replace(/"/g, '""')}"`,
          `"${indicator.details.topics.replace(/"/g, '""')}"`
        ].join(',');
        csvContent += row + "\n";
      });
      
      // Create a Blob with the CSV data
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      
      // Create a download link
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "indicadores-saude-mental.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Exportação concluída",
        description: "Os dados foram exportados com sucesso para CSV",
      });
    } catch (error) {
      console.error("Error exporting to CSV:", error);
      toast({
        title: "Erro na exportação",
        description: "Ocorreu um erro ao exportar os dados",
        variant: "destructive",
      });
    }
  };

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
      <div className="space-y-4">
        <div className="flex justify-end">
          <Button
            onClick={exportToCSV}
            variant="outline"
            className="text-sm flex items-center gap-2"
            disabled={filteredIndicators.length === 0}
          >
            <Download className="h-4 w-4" />
            Exportar dados
          </Button>
        </div>
        <div className="grid gap-6 grid-cols-1">
          {filteredIndicators.map((indicator) => (
            <IndicatorCard key={indicator.id} indicator={indicator} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          onClick={exportToCSV}
          variant="outline"
          className="text-sm flex items-center gap-2"
          disabled={filteredIndicators.length === 0}
        >
          <Download className="h-4 w-4" />
          Exportar dados
        </Button>
      </div>
      <IndicatorsTable indicators={indicators} filters={filters} />
    </div>
  );
};

export default ContentDisplay;
