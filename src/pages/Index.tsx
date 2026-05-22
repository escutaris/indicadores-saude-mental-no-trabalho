
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import HeroBanner from "@/components/HeroBanner";
import Introduction from "@/components/Introduction";
import ControlPanel from "@/components/ControlPanel";
import ContentDisplay from "@/components/ContentDisplay";
import References from "@/components/References";
import Footer from "@/components/Footer";
import { indicators, getCategories } from "@/data/indicators/index";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  
  const categories = getCategories();

  const filters = {
    search: searchTerm,
    category: activeFilter
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "cards" ? "table" : "cards");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader />
      <HeroBanner />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Introduction />
        
        <ControlPanel 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          viewMode={viewMode}
          toggleViewMode={toggleViewMode}
        />

        <ContentDisplay 
          indicators={indicators} 
          viewMode={viewMode} 
          filters={filters} 
        />

        <References />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
