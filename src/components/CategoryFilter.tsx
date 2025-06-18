
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
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md",
          !activeFilter 
            ? "bg-escutarisPrimary text-white shadow-md" 
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-escutarisPrimary"
        )}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md",
            activeFilter === category
              ? "bg-escutarisPrimary text-white shadow-md"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-escutarisPrimary"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
