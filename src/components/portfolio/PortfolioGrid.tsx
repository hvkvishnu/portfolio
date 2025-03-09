import React from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "../../types";

type PortfolioGridProps = {
  items: PortfolioItem[];
  onItemClick: (index: number) => void;
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  items,
  onItemClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() =>
            item.link ? window.open(item.link, "_blank") : onItemClick(index)
          }
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
