// src/app/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHeart,
  FiPlay,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const featuredRecipes = [
  {
    id: 1,
    title: "Creamy Italian Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    category: "Pasta",
    rating: "4.9",
    time: "25 mins",
  },
  {
    id: 2,
    title: "Classic Cheeseburger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    category: "Burger",
    rating: "4.8",
    time: "18 mins",
  },
  {
    id: 3,
    title: "Healthy Green Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop",
    category: "Healthy",
    rating: "4.7",
    time: "12 mins",
  },
];

const categories = [
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Seafood",
    image:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-30" />

        {/* FLOATING PARTICLES */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-red-100 text-red-500 px-6 py-3 rounded-full font-semibold"
            >
              <FiTrendingUp />
              #1 Food Recipe Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mt-8"
            >
              Discover
              <span className="text-red-500"> Delicious</span>
              <br />
              Recipes & Food
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 leading-8 mt-8 max-w-2xl"
            >
              Explore thousands of professional recipes, healthy meals,
              desserts, seafood dishes and premium cooking inspiration
              from around the world.
            </motion.p>

            {/* SEARCH */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 bg-white shadow-2xl rounded-full flex items-center overflow-hidden border border-gray-100"
            >
              <div className="pl-8 text-gray-400">
                <FiSearch size={22} />
              </div>

              <input
                type="text"
                placeholder="Search recipes, ingredients, meals..."
                className="flex-1 px-5 py-6 outline-none text-gray-700"
              />

              <button className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-6 font-semibold">
                Search
              </button>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5 mt-10">
              <Link href="/recipes">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-9 py-5 rounded-full font-bold flex items-center gap-3 shadow-xl"
                >
                  Explore Recipes
                  <FiArrowRight />
                </motion.button>
              </Link>

              <Link href="/categories">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-black hover:bg-gray-900 transition text-white px-9 py-5 rounded-full font-bold flex items-center gap-3"
                >
                  <FiPlay />
                  Watch Tutorials
                </motion.button>
              </Link>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-14">
              <div>
                <h3 className="text-4xl font-black text-gray-900">
                  15K+
                </h3>
                <p className="text-gray-500 mt-2">
                  Recipes Available
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-gray-900">
                  8K+
                </h3>
                <p className="text-gray-500 mt-2">
                  Active Food Lovers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-gray-900">
                  4.9
                </h3>
                <p className="text-gray-500 mt-2">
                  User Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
                alt="Food Hero"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 -left-10 bg-white rounded-[30px] shadow-2xl p-7 w-[280px]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">
                    Today's Special
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mt-2">
                    Grilled Salmon
                  </h3>
                </div>

                <div className="bg-red-100 text-red-500 w-14 h-14 rounded-full flex items-center justify-center">
                  <FiHeart size={24} />
                </div>
              </div>

              <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FiClock />
                  30 mins
                </div>

                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400" />
                  4.9
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <div>
              <h2 className="text-5xl font-black text-gray-900">
                Food Categories
              </h2>

              <p className="text-gray-500 mt-5 max-w-2xl leading-8">
                Discover premium meals from different food categories.
              </p>
            </div>

            <Link href="/categories">
              <button className="hidden md:flex items-center gap-3 bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold">
                View All
                <FiArrowRight />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="group"
              >
                <Link href="/recipes">
                  <div className="relative h-[350px] rounded-[35px] overflow-hidden shadow-xl">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-3xl font-black text-white">
                        {category.name}
                      </h3>

                      <button className="mt-5 bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-full font-semibold">
                        Explore
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED RECIPES */}
      <section className="px-6 py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900">
              Featured Recipes
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
              Handpicked recipes professionally selected for food lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[35px] overflow-hidden shadow-2xl border border-gray-100 group"
              >
                <div className="relative h-[300px] overflow-hidden">
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
                  <div className="flex items-center gap-6 text-gray-500">
                    <div className="flex items-center gap-2">
                      <FiClock />
                      {recipe.time}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiStar className="text-yellow-400" />
                      {recipe.rating}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mt-6">
                    {recipe.title}
                  </h3>

                  <p className="text-gray-500 mt-5 leading-7">
                    Discover delicious recipes packed with flavor and
                    premium cooking inspiration.
                  </p>

                  <Link href="/recipes">
                    <button className="mt-8 bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-bold">
                      View Recipe
                    </button>
                  </Link>
                </div>
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
          className="max-w-7xl mx-auto bg-red-500 rounded-[45px] px-10 py-24 text-center relative overflow-hidden shadow-2xl"
        >
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          <div className="relative">
            <div className="flex items-center justify-center gap-3 text-red-100 mb-6">
              <FiUsers />
              Join Thousands Of Food Lovers
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white">
              Ready To Explore Amazing Recipes?
            </h2>

            <p className="text-red-100 text-lg leading-8 mt-6 max-w-2xl mx-auto">
              Discover premium meals, healthy dishes and professional
              cooking inspiration every single day.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
              <Link href="/recipes">
                <button className="bg-white hover:bg-black hover:text-white transition text-red-500 px-10 py-5 rounded-full font-black text-lg">
                  Browse Recipes
                </button>
              </Link>

              <Link href="/signup">
                <button className="border border-white/30 hover:bg-white hover:text-red-500 transition text-white px-10 py-5 rounded-full font-black text-lg">
                  Join Community
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}