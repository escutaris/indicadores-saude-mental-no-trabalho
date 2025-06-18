
import React from "react";
import { BarChart2, LayoutGrid } from "lucide-react";

interface ViewToggleProps {
  viewMode: "cards" | "table";
  toggleViewMode: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, toggleViewMode }) => {
  return (
    <button 
      onClick={toggleViewMode}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-escutarisPrimary transition-all duration-200 shadow-sm hover:shadow-md font-medium"
    >
      {viewMode === "cards" ? (
        <>
          <BarChart2 size={18} className="text-escutarisPrimary" />
          <span>Ver como tabela</span>
        </>
      ) : (
        <>
          <LayoutGrid size={18} className="text-escutarisPrimary" />
          <span>Ver como cards</span>
        </>
      )}
    </button>
  );
};

export default ViewToggle;
