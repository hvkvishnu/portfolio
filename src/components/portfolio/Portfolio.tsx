import React, { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";
import GalleryModal from "./GalleryModal";
import PortfolioFilter from "./PortfolioFilters";
import { PortfolioItems } from "../../constants/portfolio.constant";

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Recognitions");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handleNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  const handlePrev = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );

  const categories = Array.from(
    new Set(PortfolioItems.map((item) => item.category))
  );
  const filteredItems = PortfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="portfolio">
      <div className="h-full lg:h-screen p-6 mt-20">
        <h2 className="line-after header text-4xl font-bold mb-10">
          Portfolio
        </h2>

        {/* Category Filters */}
        <PortfolioFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Portfolio Grid */}
        <PortfolioGrid items={filteredItems} onItemClick={handleOpen} />

        {/* Gallery Modal */}
        {selectedIndex !== null && (
          <GalleryModal
            imageUrl={filteredItems[selectedIndex].imageUrl}
            isOpen={selectedIndex !== null}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
            title={filteredItems[selectedIndex].title}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
