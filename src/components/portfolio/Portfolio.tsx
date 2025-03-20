import React, { useState } from "react";
import PortfolioGrid from "./PortfolioGrid";
import GalleryModal from "./GalleryModal";
import { PortfolioItem } from "../../types";
import PortfolioFilter from "./PortfolioFilters";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "Recognitions",
    imageUrl: "src/assets/portfolio/A&B_Q1.jpg",
    title: "Above & Beyond 2024",
  },
  {
    id: 2,
    category: "Recognitions",
    imageUrl: "src/assets/portfolio/SpotAward_JUN2023.jpg",
    title: "Spot Award June 2023",
  },
  {
    id: 3,
    category: "Recognitions",
    imageUrl: "src/assets/portfolio/SpotAward_JAN2023.png",
    title: "Spot Award January 2023",
  },
  {
    id: 4,
    category: "Recognitions",
    imageUrl: "src/assets/portfolio/SpotAward_Aug2022.png",
    title: "Spot Award August 2022",
  },
  {
    id: 5,
    category: "Certifications",
    imageUrl: "src/assets/portfolio/AWS_SAA.jpg",
    link: "https://www.credly.com/badges/ffa2737a-55cd-4b1e-b3f0-c59a0d54da3e/public_url",
    title: "AWS SAA CO3",
  },
  {
    id: 6,
    category: "Certifications",
    imageUrl: "src/assets/portfolio/Coursera_Angular.jpg",
    link: "https://coursera.org/share/b2b0ca4720b96345fcd02440b8e6033c",
    title: "SPA with AngularJS",
  },
  {
    id: 7,
    category: "Certifications",
    imageUrl: "src/assets/portfolio/NPTEL_Ethical_Hacking.jpeg",
    title: "Ethical Hacking",
  },
  {
    id: 8,
    category: "Certifications",
    imageUrl: "src/assets/portfolio/NPTEL_Python.jpeg",
    title: "Programming, Data Structures and Algorithms using Python",
  },
  {
    id: 9,
    category: "Certifications",
    imageUrl: "src/assets/portfolio/GCP_AI_Badge.png",
    link: "https://www.credly.com/badges/4d25f9df-fdc1-436e-8093-87ba7fc13797/public_url",
    title:
      "Develop Advanced Enterprise Search and Conversation Applications Skill Badge",
  },
  {
    id: 10,
    category: "Awards",
    imageUrl: "src/assets/portfolio/Hackathon_2022.jpeg",
    title: "Winner of Hackathon 2022",
  },
  {
    id: 11,
    category: "Awards",
    imageUrl: "src/assets/portfolio/Hackathon_2023.JPG",
    title: "Runner up of Hackathon 2023",
  },
  {
    id: 12,
    category: "Awards",
    imageUrl: "src/assets/portfolio/Hackathon_2024.png",
    title: "Winner of hackathon 2024",
  },
];

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
    new Set(portfolioItems.map((item) => item.category))
  );
  const filteredItems = portfolioItems.filter(
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
