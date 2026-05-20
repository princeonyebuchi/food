// src/components/Categories.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Pizza",
    emoji: "🍕",
    recipes: "120+ Recipes",
    path: "/categories/pizza",
  },
  {
    title: "Burger",
    emoji: "🍔",
    recipes: "98+ Recipes",
    path: "/categories/burger",
  },
  {
    title: "Desserts",
    emoji: "🍰",
    recipes: "150+ Recipes",
    path: "/categories/desserts",
  },
  {
    title: "Seafood",
    emoji: "🍤",
    recipes: "80+ Recipes",
    path: "/categories/seafood",
  },
  {
    title: "Healthy",
    emoji: "🥗",
    recipes: "200+ Recipes",
    path: "/categories/healthy",
  },
  {
    title: "Drinks",
    emoji: "🍹",
    recipes: "60+ Recipes",
    path: "/categories/drinks",
  },
];

export default function Categories() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Explore Categories
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-extrabold text-black mt-6 leading-tight"
            >
              Browse By Food <br />
              Category
            </motion.h2>
          </div>

          <Link href="/categories">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              View All Categories
            </motion.button>
          </Link>

        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((item, index) => (
            <Link key={index} href={item.path}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="relative bg-white rounded-[32px] p-8 shadow-md hover:shadow-2xl transition overflow-hidden group cursor-pointer"
              >

                {/* FLOATING LIGHT */}
                <motion.div
                  animate={{
                    x: ["-100%", "150%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/40 to-transparent"
                />

                {/* EMOJI */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.2,
                  }}
                  className="text-7xl relative z-10"
                >
                  {item.emoji}
                </motion.div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold mt-8 relative z-10">
                  {item.title}
                </h3>

                {/* RECIPES */}
                <p className="text-gray-500 mt-3 text-lg relative z-10">
                  {item.recipes}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  className="mt-8 text-red-500 font-semibold flex items-center gap-2 relative z-10"
                >
                  Explore Now →
                </motion.button>

                {/* DECORATION */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-100 rounded-full opacity-30"></div>

              </motion.div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}