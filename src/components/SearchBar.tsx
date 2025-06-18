
import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200" size={18} />
      <input
        type="text"
        placeholder="Buscar indicadores..."
        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:border-escutarisPrimary transition-all duration-200 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
