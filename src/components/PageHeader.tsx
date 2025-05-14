import React from "react";
import { motion } from "framer-motion";
const PageHeader: React.FC = () => {
  return <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.img initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} src="/lovable-uploads/467189bd-1025-41fd-8c1a-a39f87632853.png" alt="Logo Escutaris" className="h-20 mb-4" />
        <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }} className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-escutarisPrimary text-center">Indicadores de Saúde Mental no Trabalho</h1>
          <p className="text-gray-600 mt-2 text-center mx-auto max-w-2xl">
            Guia prático para acompanhamento e gestão estratégica da saúde mental em ambientes corporativos
          </p>
        </motion.div>
      </div>
    </header>;
};
export default PageHeader;