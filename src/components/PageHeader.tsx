import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ThemeToggle from "./ThemeToggle";
const PageHeader: React.FC = () => {
  return <header className="bg-background sticky top-0 z-50 w-full border-b shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-escutarisPrimary text-center">Indicadores de Saúde Mental no Trabalho</h1>
        </div>
        
        <div className="flex items-center space-x-2 absolute right-4">
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
        <p className="text-center mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">Guia prático para gestão estratégica da saúde mental em ambientes corporativos</p>
      </div>
    </header>;
};
export default PageHeader;