
import React from "react";

const PageHeader: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 min-w-0">
          <img
            src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png"
            alt="Escutaris"
            className="h-9 sm:h-12 w-auto flex-shrink-0"
          />
          <div className="hidden sm:block h-8 w-px bg-gray-200" />
          <div className="min-w-0">
            <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-escutarisPrimary leading-tight truncate">
              Indicadores de Saúde Mental no Trabalho
            </h1>
            <p className="hidden sm:block text-xs text-gray-500 mt-0.5">
              Guia prático para gestão estratégica — Escutaris
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
