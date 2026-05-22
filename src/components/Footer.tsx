
import React from "react";
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8 sm:py-12 mt-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Logo */}
          <img 
            src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" 
            alt="Logo Escutaris" 
            className="h-12 sm:h-16 mb-2 sm:mb-4"
          />
          
          {/* Título e texto de apoio */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-playfair font-bold text-escutarisPrimary">
              Fale com a Escutaris
            </h2>
            <p className="text-gray-600 text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed px-4">
              Tem dúvidas sobre como aplicar os conhecimentos ou precisa de suporte personalizado?
              <br className="hidden sm:block" />
              Nossa equipe está pronta te ajudar.
            </p>
          </div>
          
          {/* Ícones de redes sociais */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6">
            <a 
              href="https://www.escutaris.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              title="Website"
              aria-label="Visite nosso website"
            >
              <Globe size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.instagram.com/escutarissaudemental/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              title="Instagram"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/escutaris/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              title="LinkedIn"
              aria-label="Conecte-se conosco no LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@Escutaris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              title="YouTube"
              aria-label="Assista nossos vídeos no YouTube"
            >
              <Youtube size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          
          {/* Copyright e desenvolvido com amor */}
          <div className="text-center space-y-2">
            <p className="text-gray-600 text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Escutaris - Todos os direitos reservados
            </p>
            
            <p className="text-gray-600 text-gray-500 flex items-center justify-center text-xs sm:text-sm">
              Desenvolvido com 
              <span className="text-escutarisSecondary mx-1 text-base" aria-label="amor">
                ❤
              </span> 
              para promover saúde mental nas organizações.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
