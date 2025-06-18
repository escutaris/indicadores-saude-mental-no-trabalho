
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
    <div className="mb-6 sm:mb-8">
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:gap-4 sm:justify-between sm:items-center">
        <div className="w-full sm:max-w-md">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:gap-4">
          <ViewToggle viewMode={viewMode} toggleViewMode={toggleViewMode} />
          <CategoryFilter 
            categories={categories} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
