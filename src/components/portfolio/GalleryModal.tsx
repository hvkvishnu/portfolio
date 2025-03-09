import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type GalleryModalProps = {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title?: string;
};

const GalleryModal: React.FC<GalleryModalProps> = ({ imageUrl, isOpen, onClose, onNext, onPrev, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Image Animation */}
          <motion.img
            key={imageUrl}
            src={imageUrl}
            alt="Gallery Image"
            className="max-w-9/10 max-h-[80vh] rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />

          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 text-white text-3xl rounded-full p-2"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>

          {/* Navigation */}
          <motion.button
            className="absolute left-4 text-white text-2xl rounded-full p-3"
            onClick={onPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            ◀
          </motion.button>

          <motion.button
            className="absolute right-4 text-white text-2xl rounded-full p-3"
            onClick={onNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            ▶
          </motion.button>

          {/* Title */}
          {title && (
            <motion.div
              className="absolute bottom-4 text-white text-lg bg-opacity-50 p-2 rounded"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {title}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
