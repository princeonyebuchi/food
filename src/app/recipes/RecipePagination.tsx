"use client";

import { motion } from "framer-motion";

export default function RecipePagination() {
  return (
    <div className="flex justify-center gap-4 py-16">
      {[1, 2, 3, 4].map((page) => (
        <motion.button
          key={page}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full font-bold transition ${
            page === 1
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 shadow-lg hover:bg-red-500 hover:text-white"
          }`}
        >
          {page}
        </motion.button>
      ))}
    </div>
  );
}