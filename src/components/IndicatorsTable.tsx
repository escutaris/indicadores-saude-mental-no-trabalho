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
import { Indicator } from "@/data/indicators/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface IndicatorsTableProps {
  indicators: Indicator[];
  filters: { search: string; category: string | null };
}

const IndicatorsTable: React.FC<IndicatorsTableProps> = ({ indicators, filters }) => {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: 'ascending' | 'descending' | null;
  }>({
    key: '',
    direction: null,
  });

  const filteredIndicators = indicators.filter(indicator => {
    const matchesFilter = !filters.category || indicator.category === filters.category;
    const matchesSearch = !filters.search || 
      indicator.title.toLowerCase().includes(filters.search.toLowerCase()) || 
      indicator.details.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const sortedIndicators = React.useMemo(() => {
    const sortableItems = [...filteredIndicators];
    if (sortConfig.key && sortConfig.direction) {
      sortableItems.sort((a, b) => {
        let aValue = sortConfig.key === 'title' ? a.title : 
                     a.details[sortConfig.key as keyof typeof a.details] || '';
        let bValue = sortConfig.key === 'title' ? b.title : 
                     b.details[sortConfig.key as keyof typeof b.details] || '';
        
        aValue = aValue.toString().toLowerCase();
        bValue = bValue.toString().toLowerCase();

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredIndicators, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' | null = 'ascending';
    
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'ascending') {
        direction = 'descending';
      } else if (sortConfig.direction === 'descending') {
        direction = null;
      }
    }
    
    setSortConfig({ key, direction });
  };

  const getSortIcon = (name: string) => {
    if (sortConfig.key !== name) {
      return null;
    }
    return sortConfig.direction === 'ascending' ? (
      <ChevronUp className="h-4 w-4 inline ml-1" />
    ) : (
      <ChevronDown className="h-4 w-4 inline ml-1" />
    );
  };

  return (
    <div className="w-full rounded-md border">
      <div className="block md:hidden p-4 bg-gray-50 border-b font-medium">
        <p>Role horizontalmente para ver todos os dados</p>
      </div>
      <ScrollArea className="h-[calc(100vh-240px)] w-full">
        <div className="min-w-max">
          <Table>
            <TableCaption>Tabela de Indicadores de Saúde Mental e Ocupacional no Trabalho</TableCaption>
            <TableHeader className="bg-gray-50 sticky top-0 z-10">
              <TableRow>
                <TableHead 
                  className="w-[180px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('title')}
                >
                  Indicador de saúde mental {getSortIcon('title')}
                </TableHead>
                <TableHead 
                  className="w-[180px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('description')}
                >
                  O que mede {getSortIcon('description')}
                </TableHead>
                <TableHead 
                  className="w-[150px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('source')}
                >
                  Fonte de dados {getSortIcon('source')}
                </TableHead>
                <TableHead 
                  className="w-[150px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('tools')}
                >
                  Ferramentas {getSortIcon('tools')}
                </TableHead>
                <TableHead className="w-[180px]">Fórmula / cálculo</TableHead>
                <TableHead 
                  className="w-[100px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('frequency')}
                >
                  Frequência {getSortIcon('frequency')}
                </TableHead>
                <TableHead 
                  className="w-[100px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('responsible')}
                >
                  Responsável {getSortIcon('responsible')}
                </TableHead>
                <TableHead 
                  className="w-[100px] cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort('target')}
                >
                  Meta {getSortIcon('target')}
                </TableHead>
                <TableHead className="w-[150px]">Método qualitativo</TableHead>
                <TableHead className="w-[150px]">Temas explorados</TableHead>
                <TableHead className="w-[150px]">Referências científicas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedIndicators.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-8">
                    Nenhum indicador encontrado
                  </TableCell>
                </TableRow>
              ) : (
                sortedIndicators.map((indicator) => (
                  <TableRow key={indicator.id} className="hover:bg-gray-50">
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
        </div>
      </ScrollArea>
    </div>
  );
};

export default IndicatorsTable;
