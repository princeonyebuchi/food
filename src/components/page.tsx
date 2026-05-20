// src/components/recipes-search/page.tsx

"use client";

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const categories = [
  "All",
  "Healthy",
  "Desserts",
  "Seafood",
  "Pizza",
  "Burger",
  "Drinks",
  "Breakfast",
  "Pasta",
  "Chicken",
];

export default function RecipesSearch() {
  return (
    <section className="py-10">
      {/* SEARCH BAR */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white rounded-full shadow-2xl flex items-center overflow-hidden"
      >
        <div className="pl-8 text-gray-400">
          <FiSearch size={22} />
        </div>

        <input
          type="text"
          placeholder="Search recipes, meals, ingredients..."
          className="flex-1 px-6 py-6 outline-none text-lg"
        />

        <button className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-6 font-semibold">
          Search
        </button>
      </motion.div>

      {/* CATEGORY FILTERS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 mt-10"
      >
        {categories.map((item, index) => (
          <motion.button
            key={index}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={`px-7 py-3 rounded-full font-semibold transition ${
              index === 0
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 hover:bg-red-500 hover:text-white shadow-lg"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}