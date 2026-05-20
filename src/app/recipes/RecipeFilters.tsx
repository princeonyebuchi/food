"use client";

import { motion } from "framer-motion";

interface RecipeFiltersProps {
  active: string;
  setActive: (category: string) => void;
}

const filters = [
  "All",
  "Healthy",
  "Desserts",
  "Seafood",
  "Pizza",
  "Burger",
  "Drinks",
];

export default function RecipeFilters({
  active,
  setActive,
}: RecipeFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filters.map((filter, index) => (
        <motion.button
          key={index}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive(filter)}
          className={`px-7 py-3 rounded-full font-semibold transition ${
            active === filter
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 shadow-lg hover:bg-red-500 hover:text-white"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
}