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
      // BOM (Byte Order Mark) para garantir que caracteres especiais sejam reconhecidos corretamente
      const BOM = "\uFEFF";
      
      // CSV header row
      let csvContent = BOM + "Título;Categoria;Descrição;Fonte;Ferramentas;Fórmula;Frequência;Responsável;Meta;Método;Temas;Referências\n";
      
      // Add each indicator as a CSV row, using semicolons (;) as separators for better compatibility
      filteredIndicators.forEach(indicator => {
        // Função para limpar e formatar texto para CSV
        const formatCSVField = (text: string) => {
          // Substitui quebras de linha por espaços para evitar problemas de formatação
          const cleanedText = text.replace(/\r?\n|\r/g, ' ');
          // Escapa aspas duplas duplicando-as
          return cleanedText.replace(/"/g, '""');
        };
        
        const row = [
          `"${formatCSVField(indicator.title)}"`,
          `"${formatCSVField(indicator.category)}"`,
          `"${formatCSVField(indicator.details.description)}"`,
          `"${formatCSVField(indicator.details.source)}"`,
          `"${formatCSVField(indicator.details.tools)}"`,
          `"${formatCSVField(indicator.details.formula)}"`,
          `"${formatCSVField(indicator.details.frequency)}"`,
          `"${formatCSVField(indicator.details.responsible)}"`,
          `"${formatCSVField(indicator.details.target)}"`,
          `"${formatCSVField(indicator.details.method)}"`,
          `"${formatCSVField(indicator.details.topics)}"`,
          `"${formatCSVField(indicator.details.references || "")}"`
        ].join(';');
        csvContent += row + "\n";
      });
      
      // Create a Blob with the CSV data and correct encoding
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
      
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
      <IndicatorsTable indicators={filteredIndicators} filters={filters} />
    </div>
  );
};

export default ContentDisplay;
