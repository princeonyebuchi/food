// src/app/categories/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";

const categories = [
  {
    id: 1,
    name: "Healthy Meals",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    recipes: "320+ Recipes",
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 2,
    name: "Italian Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    recipes: "180+ Recipes",
    color: "from-red-500 to-orange-400",
  },
  {
    id: 3,
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop",
    recipes: "250+ Recipes",
    color: "from-pink-500 to-rose-400",
  },
  {
    id: 4,
    name: "Seafood",
    image:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=1200&auto=format&fit=crop",
    recipes: "140+ Recipes",
    color: "from-cyan-500 to-blue-400",
  },
  {
    id: 5,
    name: "Fast Foods",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    recipes: "200+ Recipes",
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: 6,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    recipes: "170+ Recipes",
    color: "from-orange-500 to-red-400",
  },
  {
    id: 7,
    name: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
    recipes: "110+ Recipes",
    color: "from-amber-500 to-yellow-400",
  },
  {
    id: 8,
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
    recipes: "95+ Recipes",
    color: "from-purple-500 to-pink-400",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100 rounded-full opacity-40" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full opacity-30" />

        {/* FLOATING PARTICLES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 18 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute w-2 h-2 rounded-full bg-red-300/40"
              initial={{
                x: Math.random() * 1600,
                y: Math.random() * 900,
              }}
              animate={{
                y: [
                  Math.random() * 900,
                  Math.random() * 700,
                  Math.random() * 900,
                ],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 8 + index,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-red-100 text-red-500 px-6 py-3 rounded-full font-semibold"
          >
            <FiTrendingUp />
            Popular Food Categories
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mt-8 leading-tight"
          >
            Explore Food
            <span className="text-red-500"> Categories</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8"
          >
            Discover professional recipes, trending dishes, healthy meals,
            desserts and delicious food inspiration carefully organized into
            premium categories.
          </motion.p>

        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">

          {/* TOP BAR */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">

            <div>
              <h2 className="text-4xl font-black text-gray-900">
                Browse Categories
              </h2>

              <p className="text-gray-500 mt-4 leading-7">
                Choose your favorite food category and discover premium meals.
              </p>
            </div>

            <Link href="/recipes">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-3 bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-bold shadow-xl"
              >
                Explore Recipes
                <FiArrowRight />
              </motion.button>
            </Link>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group"
              >

                <Link href={`/recipes?category=${category.name}`}>

                  <div className="bg-white rounded-[35px] overflow-hidden shadow-2xl border border-gray-100 cursor-pointer">

                    {/* IMAGE */}
                    <div className="relative h-[260px] overflow-hidden">

                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/20" />

                      {/* RECIPES COUNT */}
                      <div
                        className={`absolute top-5 left-5 bg-gradient-to-r ${category.color} text-white px-5 py-2 rounded-full text-sm font-semibold shadow-xl`}
                      >
                        {category.recipes}
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-8">

                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FiClock />
                        Updated Daily
                      </div>

                      <h3 className="text-3xl font-black text-gray-900 mt-5">
                        {category.name}
                      </h3>

                      <p className="text-gray-500 leading-7 mt-4">
                        Discover delicious meals, premium cooking inspiration
                        and trending recipes from this category.
                      </p>

                      <motion.div
                        whileHover={{
                          x: 5,
                        }}
                        className="flex items-center gap-3 text-red-500 font-bold mt-7"
                      >
                        Explore Category
                        <FiArrowRight />
                      </motion.div>

                    </div>

                  </div>

                </Link>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-black rounded-[45px] px-10 py-20 text-center relative overflow-hidden shadow-2xl"
        >

          {/* BACKGROUND */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/20 rounded-full" />

          <div className="relative">

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready To Discover
              <br />
              Amazing Recipes?
            </h2>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto mt-8">
              Explore thousands of premium recipes, healthy meals and trending
              food inspiration designed for food lovers.
            </p>

            <Link href="/recipes">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="mt-10 bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl"
              >
                Start Exploring
              </motion.button>
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}