import React from "react";
import { motion } from "framer-motion";

type GalleryModalProps = {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
};

const GalleryModal: React.FC<GalleryModalProps> = ({
  imageUrl,
  isOpen,
  onClose,
  onNext,
  onPrev,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 no-scroll">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative p-4"
      >
        <img
          src={imageUrl}
          alt="Gallery Image"
          className="max-w-full max-h-[80vh] rounded-lg shadow-lg bg-white"
        />
      </motion.div>

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={onClose}
      >
        ×
      </button>

      {/* Navigation */}
      <button className="absolute left-4 text-white text-2xl" onClick={onPrev}>
        ◀ Prev
      </button>
      <button className="absolute right-4 text-white text-2xl" onClick={onNext}>
        Next ▶
      </button>

      {/* Title */}
      {title && (
        <div className="absolute bottom-4 text-white text-lg bg-gray-900 bg-opacity-50 p-2 rounded">
          {title}
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
