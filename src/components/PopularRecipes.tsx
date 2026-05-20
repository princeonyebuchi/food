"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiStar } from "react-icons/fi";

const popularRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    category: "Pasta",
    time: "25 mins",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Classic Beef Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    category: "Burger",
    time: "18 mins",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Healthy Green Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop",
    category: "Healthy",
    time: "15 mins",
    rating: "4.7",
  },
];

export default function PopularRecipes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {popularRecipes.map((recipe, index) => (
        <motion.div
          key={recipe.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-gray-100 group"
        >
          {/* IMAGE */}
          <div className="relative h-[260px] overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute top-5 left-5 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {recipe.category}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-7">
            {/* META */}
            <div className="flex items-center gap-5 text-gray-500 text-sm">
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
            <h3 className="text-2xl font-black text-gray-900 mt-5">
              {recipe.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-7 mt-4">
              Enjoy premium recipes packed with delicious flavors and
              professional cooking inspiration.
            </p>

            {/* BUTTON */}
            <Link href={`/recipes/${recipe.id}`}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
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