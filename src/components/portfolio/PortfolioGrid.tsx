import React from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "../../types";
import ScrollFadeIn from "../common/ScrollFadeIn";

type PortfolioGridProps = {
  items: PortfolioItem[];
  onItemClick: (index: number) => void;
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  items,
  onItemClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-20">
      {items.map((item, index) => (
        <ScrollFadeIn initialValue={{ opacity: 0, y: 100 }}>
          <motion.div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden cursor-pointer sm:w-full max-w-100"
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
        </ScrollFadeIn>
      ))}
    </div>
  );
};

export default PortfolioGrid;
