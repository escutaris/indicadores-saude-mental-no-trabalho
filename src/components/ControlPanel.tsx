
import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ViewToggle from "./ViewToggle";

interface ControlPanelProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categories: string[];
  activeFilter: string | null;
  setActiveFilter: (category: string | null) => void;
  viewMode: "cards" | "table";
  toggleViewMode: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  searchTerm,
  setSearchTerm,
  categories,
  activeFilter,
  setActiveFilter,
  viewMode,
  toggleViewMode
}) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="flex items-center gap-4">
        <ViewToggle viewMode={viewMode} toggleViewMode={toggleViewMode} />
        <CategoryFilter 
          categories={categories} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
      </div>
    </div>
  );
};

export default ControlPanel;
