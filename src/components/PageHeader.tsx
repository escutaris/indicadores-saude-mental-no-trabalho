
import React from "react";
import ThemeToggle from "./ThemeToggle";

const PageHeader: React.FC = () => {
  return (
    <header className="bg-background dark:bg-background sticky top-0 z-50 w-full border-b shadow-sm">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
          <img 
            src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" 
            alt="Escutaris Logo" 
            className="h-8 sm:h-12 w-auto flex-shrink-0" 
          />
          <div className="flex flex-col min-w-0">
            <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-escutarisPrimary leading-tight">
              Indicadores de Saúde Mental no Trabalho
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
      
      <div className="bg-escutarisPrimary text-white py-2 sm:py-3">
        <p className="text-center mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base leading-relaxed">
          Guia prático para gestão estratégica da saúde mental em ambientes corporativos
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
