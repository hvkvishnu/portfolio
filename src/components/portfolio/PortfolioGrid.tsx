import React from "react";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() =>
            item.link ? window.open(item.link, "_blank") : onItemClick(index)
          }
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
