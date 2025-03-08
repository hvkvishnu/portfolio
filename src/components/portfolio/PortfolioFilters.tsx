import React from "react";

type PortfolioFilterProps = {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
};

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
