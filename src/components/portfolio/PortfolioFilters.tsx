import React from "react";
import { motion } from "framer-motion";

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
        <motion.button
          key={category}
          className={`px-4 py-2 rounded-lg transition-all ${
            activeCategory === category
              ? "btn-primary-fixed"
              : "btn-secondary-fixed"
          }`}
          onClick={() => onSelectCategory(category)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
