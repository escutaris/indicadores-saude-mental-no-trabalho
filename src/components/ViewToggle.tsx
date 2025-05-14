
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
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
    >
      {viewMode === "cards" ? (
        <>
          <BarChart2 size={18} />
          <span>Ver como tabela</span>
        </>
      ) : (
        <>
          <LayoutGrid size={18} />
          <span>Ver como cards</span>
        </>
      )}
    </button>
  );
};

export default ViewToggle;
