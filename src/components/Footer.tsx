
import React from "react";
import { Globe, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img 
            src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" 
            alt="Logo Escutaris" 
            className="h-16 mb-6"
          />
          
          {/* Título e texto de apoio */}
          <h2 className="text-2xl font-playfair font-bold text-escutarisPrimary mb-4">
            Fale com a Escutaris
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            Tem dúvidas sobre como aplicar os conhecimentos ou precisa de suporte personalizado?
            <br />
            Nossa equipe está pronta te ajudar.
          </p>
          
          {/* Ícones de redes sociais */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.escutaris.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors"
              title="Website"
              aria-label="Visite nosso website"
            >
              <Globe size={24} />
            </a>
            <a 
              href="https://www.instagram.com/escutarissaudemental/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors"
              title="Instagram"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/escutaris/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors"
              title="LinkedIn"
              aria-label="Conecte-se conosco no LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@Escutaris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-escutarisPrimary hover:text-escutarisPrimary/80 transition-colors"
              title="YouTube"
              aria-label="Assista nossos vídeos no YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-600 mb-2">
            © {new Date().getFullYear()} Escutaris - Todos os direitos reservados
          </p>
          
          {/* Desenvolvimento com amor */}
          <p className="text-gray-600 flex items-center justify-center">
            Desenvolvido com 
            <span className="text-escutarisSecondary mx-1">
              ❤
            </span> 
            para promover saúde mental nas organizações.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
