// src/components/recipes/RecipeGrid.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiStar } from "react-icons/fi";

interface Recipe {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  rating: string;
}

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({
  recipes,
}: RecipeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {recipes.map((recipe, index) => (
        <motion.div
          key={recipe.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -10,
          }}
          className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 group"
        >
          {/* IMAGE */}
          <div className="relative h-[280px] overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              {recipe.category}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-7">
            {/* META */}
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{recipe.time}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiStar className="text-yellow-400" />
                <span>{recipe.rating}</span>
              </div>
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-black text-gray-900 mt-5 leading-snug">
              {recipe.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-7 mt-4">
              Discover delicious meals packed with flavor,
              freshness and premium cooking inspiration.
            </p>

            {/* BUTTON */}
            <Link href={`/recipes/${recipe.id}`}>
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="mt-7 bg-black hover:bg-red-500 transition text-white px-7 py-3 rounded-full font-semibold"
              >
                View Recipe
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}