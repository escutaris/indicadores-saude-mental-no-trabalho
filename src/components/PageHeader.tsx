
import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ThemeToggle from "./ThemeToggle";

const PageHeader: React.FC = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" 
            alt="Escutaris Logo" 
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-escutarisPrimary">
              Indicadores de Saúde Mental no Trabalho
            </h1>
            <p className="text-sm text-gray-600 hidden sm:block">
              Guia prático para gestão estratégica
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                
              </NavigationMenuItem>
              <NavigationMenuItem>
                
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
      
      <div className="bg-escutarisPrimary text-white py-3">
        <p className="text-center mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-sm sm:text-base">
          Guia prático para gestão estratégica da saúde mental em ambientes corporativos
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
