
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Indicator } from "@/data/indicators";

interface IndicatorsTableProps {
  indicators: Indicator[];
  filters: { search: string; category: string | null };
}

const IndicatorsTable: React.FC<IndicatorsTableProps> = ({ indicators, filters }) => {
  const filteredIndicators = indicators.filter(indicator => {
    const matchesFilter = !filters.category || indicator.category === filters.category;
    const matchesSearch = !filters.search || 
      indicator.title.toLowerCase().includes(filters.search.toLowerCase()) || 
      indicator.details.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full rounded-md border">
      <ScrollArea className="h-[calc(100vh-240px)] w-full">
        <Table>
          <TableCaption>Tabela de Indicadores de Saúde Mental e Ocupacional no Trabalho</TableCaption>
          <TableHeader className="bg-gray-50 sticky top-0 z-10">
            <TableRow>
              <TableHead className="w-[180px]">Indicador de saúde mental</TableHead>
              <TableHead className="w-[180px]">O que mede</TableHead>
              <TableHead className="w-[150px]">Fonte de dados</TableHead>
              <TableHead className="w-[150px]">Ferramentas</TableHead>
              <TableHead className="w-[180px]">Fórmula / cálculo</TableHead>
              <TableHead className="w-[100px]">Frequência</TableHead>
              <TableHead className="w-[100px]">Responsável</TableHead>
              <TableHead className="w-[100px]">Meta</TableHead>
              <TableHead className="w-[150px]">Método qualitativo</TableHead>
              <TableHead className="w-[150px]">Temas explorados</TableHead>
              <TableHead className="w-[150px]">Referências científicas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIndicators.length === 0 ? (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-8">
                  Nenhum indicador encontrado
                </TableCell>
              </TableRow>
            ) : (
              filteredIndicators.map((indicator) => (
                <TableRow key={indicator.id}>
                  <TableCell className="font-medium border-r">
                    {indicator.title}
                    <Badge className="ml-1 bg-gray-200 text-gray-800 hover:bg-gray-300" variant="secondary">{indicator.category}</Badge>
                  </TableCell>
                  <TableCell className="border-r">{indicator.details.description}</TableCell>
                  <TableCell className="border-r">{indicator.details.source}</TableCell>
                  <TableCell className="border-r">{indicator.details.tools}</TableCell>
                  <TableCell className="border-r whitespace-pre-wrap">{indicator.details.formula}</TableCell>
                  <TableCell className="border-r">{indicator.details.frequency}</TableCell>
                  <TableCell className="border-r">{indicator.details.responsible}</TableCell>
                  <TableCell className="border-r">{indicator.details.target}</TableCell>
                  <TableCell className="border-r">{indicator.details.method}</TableCell>
                  <TableCell className="border-r whitespace-pre-wrap">{indicator.details.topics}</TableCell>
                  <TableCell className="whitespace-pre-wrap">
                    {indicator.details.references ? (
                      <div className="text-xs break-words max-w-[200px]">{indicator.details.references}</div>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default IndicatorsTable;
