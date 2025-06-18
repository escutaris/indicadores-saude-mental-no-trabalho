
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const References: React.FC = () => {
  const references = [
    "GOLDBERG, D. P.; HILLIER, V. F. A scaled version of the General Health Questionnaire. Psychological Medicine, v. 9, n. 1, p. 139–145, 1979. DOI: 10.1017/S0033291700021644.",
    "HATCH, D. J. et al. Work environment and mental health: A study of Danish employees. Psychological Medicine, v. 25, n. 5, p. 1051–1059, 1995. DOI: 10.1017/S0033291700033069.",
    "SCHAUFELI, W. B. et al. The measurement of engagement and burnout: A two sample confirmatory factor analytic approach. Journal of Happiness Studies, v. 3, p. 71–92, 2002. DOI: 10.1023/A:1015630930326.",
    "COHEN, S. et al. A global measure of perceived stress. Journal of Health and Social Behavior, v. 24, n. 4, p. 385–396, 1983. DOI: 10.2307/2136404.",
    "LEE, E.-H. Review of the psychometric evidence of the Perceived Stress Scale. Asian Nursing Research, v. 6, n. 4, p. 121–127, 2012. DOI: 10.1016/j.anr.2012.08.004.",
    "JUDGE, T. A. et al. The job satisfaction–job performance relationship: A qualitative and quantitative review. Psychological Bulletin, v. 127, n. 3, p. 376–407, 2001. DOI: 10.1037/0021-9010.86.3.767.",
    "PAVOT, W.; DIENER, E. Review of the Satisfaction with Life Scale. Psychological Assessment, v. 5, n. 2, p. 164–172, 1993. DOI: 10.1037/1040-3590.5.2.164.",
    "FRAZIER, M. L. et al. Psychological safety: A meta-analytic review and extension. Personnel Psychology, v. 70, n. 1, p. 113–165, 2017. DOI: 10.1111/peps.12183.",
    "JAMES, L. R.; JONES, A. P. Organizational climate: A review of theory and research. Psychological Bulletin, v. 81, n. 12, p. 1096–1112, 1974. DOI: 10.1037/0021-9010.67.3.438.",
    "GOETZEL, R. Z. et al. Health, absence, disability, and presenteeism cost estimates of certain physical and mental health conditions affecting U.S. employers. Journal of Occupational and Environmental Medicine, v. 46, n. 4, p. 398–412, 2004. DOI: 10.1097/01.JOM.0000121151.40462.2F.",
    "KOOPMAN, C. et al. Stanford Presenteeism Scale: Health status and employee productivity. Journal of Occupational and Environmental Medicine, v. 44, n. 1, p. 14–20, 2002.",
    "SLUITER, J. K. et al. Need for Recovery Scale: A questionnaire to assess the need for recovery after work. Applied Ergonomics, v. 34, p. 149–157, 2003. DOI: 10.1016/S0001-4575(99)00123-1.",
    "VERCAMBRE, M. N. et al. Work environment and fatigue in nurses. Journal of Occupational and Environmental Medicine, v. 51, n. 8, p. 926–933, 2009. DOI: 10.1097/JOM.0b013e3181a4940.",
    "RABIN, R.; DE CHARRO, F. EQ-5D: A measure of health status from the EuroQol Group. Annals of Medicine, v. 33, n. 5, p. 337–343, 2001. DOI: 10.1080/078538901750236890.",
    "TEIXEIRA, A. P. T.; TEIXEIRA, A. C. O. Violência no trabalho: uma revisão da literatura. Revista Brasileira de Medicina do Trabalho, v. 15, n. 30, p. 60–74, jul./dez. 2023. Disponível em: https://www.rbmt.org.br/details/234/pt-BR/violencia-no-trabalho--uma-revisao-da-literatura."
  ];

  return (
    <div className="mb-8">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl sm:text-2xl text-escutarisPrimary flex items-center gap-2 flex-wrap">
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
            <span>Referências Científicas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
              Fundamentação científica dos indicadores e ferramentas utilizados neste guia.
            </p>
            <div className="space-y-4">
              {references.map((reference, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-md border-l-4 border-escutarisPrimary"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-escutarisPrimary font-bold text-sm sm:text-base flex-shrink-0 mt-0.5">
                      {index + 1}.
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs sm:text-sm break-words">
                      {reference}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default References;
