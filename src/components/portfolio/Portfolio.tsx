import React, { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";
import GalleryModal from "./GalleryModal";
import { PortfolioItem } from "../../types";
import PortfolioFilter from "./PortfolioFilters";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "Awards",
    imageUrl: "src/assets/portfolio/A&B_Q1.jpg",
    title: "Above & Beyond 2024",
  },
  {
    id: 2,
    category: "Awards",
    imageUrl: "src/assets/portfolio/SpotAward_JUN2023.jpg",
    title: "Spot Award June 2023",
  },
  {
    id: 3,
    category: "Awards",
    imageUrl: "src/assets/portfolio/SpotAward_JAN2023.png",
    title: "Spot Award January 2023",
  },
  {
    id: 4,
    category: "Awards",
    imageUrl: "src/assets/portfolio/SpotAward_Aug2022.png",
    title: "Spot Award August 2022",
  },
  {
    id: 5,
    category: "Certifications",
    imageUrl: "design1_large.jpg",
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Awards");
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
    new Set(portfolioItems.map((item) => item.category))
  );
  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>

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
  );
};

export default Portfolio;
