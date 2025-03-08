export type PortfolioItem = {
  id: number;
  category: string;
  imageUrl: string;
  title?: string;
  link?: string; // Optional, only for external links
};

export type PortfolioFiltersProps = {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export type PortfolioGridProps = {
  filteredItems: PortfolioItem[];
  openGallery: (image: string) => void;
};

export type GalleryModalProps = {
  selectedImage: string | null;
  isOpen: boolean;
  closeGallery: () => void;
};
