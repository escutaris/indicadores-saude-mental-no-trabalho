
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggleTheme = () => {
    toggleTheme();
    toast({
      title: `Modo ${theme === 'light' ? 'escuro' : 'claro'} ativado`,
      description: `O tema foi alterado para o modo ${theme === 'light' ? 'escuro' : 'claro'}.`,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleTheme}
      className="rounded-full"
      aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
