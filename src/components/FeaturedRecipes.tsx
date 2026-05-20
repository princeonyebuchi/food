"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiStar } from "react-icons/fi";

const featuredRecipes = [
  {
    id: 1,
    title: "Creamy Italian Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    category: "Pasta",
    time: "25 mins",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Classic Cheeseburger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    category: "Burger",
    time: "18 mins",
    rating: "4.8",
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full font-semibold text-sm">
              Featured Meals
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">
              Featured Recipes
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl leading-8">
              Explore handpicked premium recipes carefully selected for food
              lovers around the world.
            </p>
          </div>

          <Link href="/recipes">
            <button className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold">
              View All Recipes
            </button>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[35px] overflow-hidden shadow-2xl border border-gray-100 group"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-6 left-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {recipe.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                {/* META */}
                <div className="flex items-center gap-6 text-gray-500">
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
                <h3 className="text-3xl font-black text-gray-900 mt-6 leading-snug">
                  {recipe.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 mt-5 leading-7">
                  Discover delicious recipes packed with flavor, freshness,
                  premium ingredients and professional cooking inspiration.
                </p>

                {/* BUTTON */}
                <Link href={`/recipes/${recipe.id}`}>
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="mt-8 bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-bold"
                  >
                    View Recipe
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}