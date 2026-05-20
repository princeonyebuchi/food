"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiStar } from "react-icons/fi";

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    image: string;
    category: string;
    time: string;
    rating: string;
  };
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[35px] overflow-hidden shadow-2xl group"
    >
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
          {recipe.category}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-2">
            <FiClock />
            <span>{recipe.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiStar className="text-yellow-400" />
            <span>{recipe.rating}</span>
          </div>
        </div>

        <h2 className="text-3xl font-black text-gray-900 mt-5">
          {recipe.title}
        </h2>

        <p className="text-gray-500 mt-4 leading-7">
          Delicious professional recipe packed with flavor and inspiration.
        </p>

        <Link href={`/recipes/${recipe.id}`}>
          <button className="mt-8 bg-black hover:bg-red-500 text-white px-7 py-4 rounded-full font-bold transition">
            View Recipe
          </button>
        </Link>
      </div>
    </motion.div>
  );
}