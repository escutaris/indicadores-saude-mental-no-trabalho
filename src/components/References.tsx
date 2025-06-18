
import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const References: React.FC = () => {
  const references = [
    {
      title: "General Health Questionnaire - Scaled Version",
      authors: "Goldberg, D. P. & Hillier, V. F.",
      year: "1979",
      url: "https://doi.org/10.1017/S0033291700021644"
    },
    {
      title: "Work Environment and Mental Health in Danish Employees",
      authors: "Hatch, D. J. et al.",
      year: "1995",
      url: "https://doi.org/10.1017/S0033291700033069"
    },
    {
      title: "The Measurement of Engagement and Burnout",
      authors: "Schaufeli, W. B. et al.",
      year: "2002",
      url: "https://doi.org/10.1023/A:1015630930326"
    },
    {
      title: "A Global Measure of Perceived Stress",
      authors: "Cohen, S. et al.",
      year: "1983",
      url: "https://doi.org/10.2307/2136404"
    },
    {
      title: "Review of the Psychometric Evidence of the Perceived Stress Scale",
      authors: "Lee, E.-H.",
      year: "2012",
      url: "https://doi.org/10.1016/j.anr.2012.08.004"
    },
    {
      title: "The Job Satisfaction–Job Performance Relationship",
      authors: "Judge, T. A. et al.",
      year: "2001",
      url: "https://doi.org/10.1037/0021-9010.86.3.767"
    },
    {
      title: "Review of the Satisfaction with Life Scale",
      authors: "Pavot, W. & Diener, E.",
      year: "1993",
      url: "https://doi.org/10.1037/1040-3590.5.2.164"
    },
    {
      title: "Psychological Safety: A Meta-Analytic Review and Extension",
      authors: "Frazier, M. L. et al.",
      year: "2017",
      url: "https://doi.org/10.1111/peps.12183"
    },
    {
      title: "Organizational Climate: A Review of Theory and Research",
      authors: "James, L. R. & Jones, A. P.",
      year: "1974",
      url: "https://doi.org/10.1037/0021-9010.67.3.438"
    },
    {
      title: "Health, Absence, Disability, and Presenteeism Cost Estimates",
      authors: "Goetzel, R. Z. et al.",
      year: "2004",
      url: "https://doi.org/10.1097/01.JOM.0000121151.40462.2F"
    },
    {
      title: "Stanford Presenteeism Scale: Health Status and Employee Productivity",
      authors: "Koopman, C. et al.",
      year: "2002",
      url: "https://doi.org/10.1097/01.jom.0000014006.15516.45"
    },
    {
      title: "Need for Recovery Scale: A Questionnaire to Assess Recovery After Work",
      authors: "Sluiter, J. K. et al.",
      year: "2003",
      url: "https://doi.org/10.1016/S0001-4575(99)00123-1"
    },
    {
      title: "Work Environment and Fatigue in Nurses",
      authors: "Vercambre, M. N. et al.",
      year: "2009",
      url: "https://doi.org/10.1097/JOM.0b013e3181a4940e"
    },
    {
      title: "EQ-5D: A Measure of Health Status from the EuroQol Group",
      authors: "Rabin, R. & de Charro, F.",
      year: "2001",
      url: "https://doi.org/10.1080/07853890175022090"
    },
    {
      title: "Violência no Trabalho: Uma Revisão da Literatura",
      authors: "Teixeira, A. P. T. & Teixeira, A. C. O.",
      year: "2023",
      url: "https://www.rbmt.org.br/details/234/pt-BR/violencia-no-trabalho--uma-revisao-da-literatura"
    }
  ];

  return (
    <div className="mb-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="references" className="border rounded-lg">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center gap-2 text-xl sm:text-2xl text-escutarisPrimary font-semibold">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span>Referências Científicas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
                Clique nas referências abaixo para acessar os estudos científicos que fundamentam este guia.
              </p>
              <div className="grid gap-3 sm:gap-4">
                {references.map((reference, index) => (
                  <a
                    key={index}
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-md border-l-4 border-escutarisPrimary hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-escutarisPrimary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-escutarisPrimary font-bold text-sm sm:text-base flex-shrink-0 mt-0.5">
                        {index + 1}.
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base leading-tight group-hover:text-escutarisPrimary transition-colors duration-200 break-words">
                          {reference.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 break-words">
                          {reference.authors} ({reference.year})
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-escutarisPrimary transition-colors duration-200 flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default References;
