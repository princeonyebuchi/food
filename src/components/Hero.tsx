// src/components/Hero.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiArrowRight,
  FiPlay,
  FiStar,
} from "react-icons/fi";

const popularSearches = [
  "Healthy Meals",
  "Pasta",
  "Desserts",
  "Seafood",
  "Pizza",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-white pt-32 pb-24">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-200/40 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute w-2 h-2 rounded-full bg-red-300/50"
            initial={{
              x: Math.random() * 1600,
              y: Math.random() * 900,
              opacity: 0.3,
            }}
            animate={{
              y: [
                Math.random() * 900,
                Math.random() * 700,
                Math.random() * 900,
              ],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white shadow-lg border border-red-100 px-5 py-3 rounded-full"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-red-500 text-white">
                <FiStar />
              </span>

              <span className="font-semibold text-gray-700">
                #1 Food & Recipe Platform
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mt-10"
            >
              Discover
              <span className="text-red-500"> Delicious</span>
              <br />
              Recipes Every Day
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 leading-8 mt-8 max-w-2xl"
            >
              Explore premium recipes, healthy meals, trending dishes,
              cooking tutorials and world-class food inspiration made for
              passionate food lovers.
            </motion.p>

            {/* SEARCH */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-white shadow-2xl rounded-full flex items-center overflow-hidden border border-gray-100"
            >
              <div className="pl-7 text-gray-400">
                <FiSearch size={22} />
              </div>

              <input
                type="text"
                placeholder="Search recipes, meals, desserts..."
                className="flex-1 px-5 py-6 outline-none text-lg bg-transparent"
              />

              <Link href="/recipes">
                <button className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-6 font-semibold flex items-center gap-3">
                  Search
                  <FiArrowRight />
                </button>
              </Link>
            </motion.div>

            {/* POPULAR SEARCHES */}
            <div className="flex flex-wrap gap-4 mt-8">
              {popularSearches.map((item, index) => (
                <Link
                  key={index}
                  href={`/recipes?category=${item}`}
                >
                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="px-5 py-3 rounded-full bg-white border border-gray-200 hover:bg-red-500 hover:text-white transition text-sm font-semibold text-gray-700 shadow-md"
                  >
                    {item}
                  </motion.button>
                </Link>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-5 mt-12">

              <Link href="/recipes">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-9 py-5 rounded-full font-bold text-lg shadow-2xl shadow-red-200 flex items-center gap-3"
                >
                  Explore Recipes
                  <FiArrowRight />
                </motion.button>
              </Link>

              <Link href="/blog">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center gap-4 bg-white border border-gray-200 px-8 py-5 rounded-full shadow-lg font-semibold text-gray-800 hover:bg-black hover:text-white transition"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white">
                    <FiPlay />
                  </span>

                  Watch Tutorials
                </motion.button>
              </Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                {
                  number: "10K+",
                  label: "Recipes",
                },
                {
                  number: "50K+",
                  label: "Food Lovers",
                },
                {
                  number: "4.9★",
                  label: "Ratings",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
                >
                  <h3 className="text-3xl font-black text-gray-900">
                    {item.number}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
                alt="Delicious Food"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* FLOATING CARD 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-10 -left-10 bg-white rounded-3xl shadow-2xl p-5 w-[240px]"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
                    alt="Pizza"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-black text-gray-900">
                    Italian Pizza
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Trending Recipe
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARD 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 -right-10 bg-white rounded-3xl shadow-2xl p-6 w-[260px]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    Daily Visitors
                  </p>

                  <h3 className="text-4xl font-black text-gray-900 mt-2">
                    120K+
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-black">
                  +
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}