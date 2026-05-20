// src/components/recipes/RecipeFilters.tsx

"use client";

import { motion } from "framer-motion";

interface RecipeFiltersProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function RecipeFilters({
  categories,
  activeCategory,
  setActiveCategory,
}: RecipeFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {categories.map((category, index) => (
        <motion.button
          key={index}
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setActiveCategory(category)}
          className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
            activeCategory === category
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}