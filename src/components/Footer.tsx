
import React from "react";
import { Instagram, Linkedin, Youtube, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" 
              alt="Logo Escutaris" 
              className="h-12 mx-auto md:mx-0"
            />
            <p className="mt-2 text-sm text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Escutaris. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm font-medium text-escutarisPrimary mb-3">
              Siga-nos nas redes sociais
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.escutaris.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-escutarisPrimary transition-colors"
                title="Website"
              >
                <Globe size={20} />
              </a>
              <a 
                href="https://www.instagram.com/escutarissaudemental/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-escutarisPrimary transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/escutaris/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-escutarisPrimary transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@Escutaris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-escutarisPrimary transition-colors"
                title="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
