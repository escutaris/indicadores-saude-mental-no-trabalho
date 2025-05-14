
import React from "react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeFilter: string | null;
  setActiveFilter: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button 
        onClick={() => setActiveFilter(null)}
        className={cn(
          "px-3 py-1 rounded-full text-sm font-medium",
          !activeFilter 
            ? "bg-escutarisPrimary text-white" 
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        )}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            activeFilter === category
              ? "bg-escutarisPrimary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
