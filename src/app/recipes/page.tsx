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

const heroRecipes = [
  {
    id: 1,
    title: "Luxury Truffle Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Premium Sushi Bowl",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Creamy Steak Delight",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
  },
];

const recipes = [
  {
    id: 1,
    title: "Crispy Chicken Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop",
    category: "Fast Food",
    rating: 4.9,
    time: "18 mins",
  },
  {
    id: 2,
    title: "Italian Seafood Pasta",
    image:
      "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1400&auto=format&fit=crop",
    category: "Italian",
    rating: 5.0,
    time: "28 mins",
  },
  {
    id: 3,
    title: "Fresh Avocado Salad",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1400&auto=format&fit=crop",
    category: "Healthy",
    rating: 4.8,
    time: "10 mins",
  },
  {
    id: 4,
    title: "Chocolate Pancake Stack",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1400&auto=format&fit=crop",
    category: "Dessert",
    rating: 4.9,
    time: "20 mins",
  },
  {
    id: 5,
    title: "Luxury Seafood Platter",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1400&auto=format&fit=crop",
    category: "Seafood",
    rating: 5.0,
    time: "35 mins",
  },
  {
    id: 6,
    title: "Tropical Smoothie Mix",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1400&auto=format&fit=crop",
    category: "Drinks",
    rating: 4.7,
    time: "8 mins",
  },
];

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Seafood",
  "Healthy",
  "Italian",
  "Drinks",
];

export default function RecipesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full" />
      </div>

      {/* Hero */}
      <section className="relative px-6 lg:px-20 pt-24 pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 mb-6 font-semibold">
              <FiTrendingUp /> #1 Premium Recipe Collection
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] mb-8 text-white tracking-tight">
              Delicious
              <span className="block text-orange-400">
                Food Recipes
              </span>
            </h1>

            <p className="text-white text-lg leading-relaxed max-w-2xl mb-10 font-medium">
              Discover luxury recipes, premium meals, chef-crafted dishes, and
              unforgettable flavors designed to make your food website stand out
              with elegance and style.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/20 flex items-center justify-center gap-3 text-white">
                Explore Recipes
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-white" />
              </button>

              <button className="border border-white/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 bg-[#0f172a] text-white">
                <FiPlay /> Watch Videos
              </button>
            </div>

            <div className="flex flex-wrap gap-10">
              <div>
                <h3 className="text-4xl font-black text-orange-400">15K+</h3>
                <p className="text-white font-medium">Premium Recipes</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-orange-400">8M+</h3>
                <p className="text-white font-medium">Monthly Visitors</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-orange-400">120+</h3>
                <p className="text-white font-medium">Expert Chefs</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {heroRecipes.map((recipe, index) => (
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  key={recipe.id}
                  className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f172a] shadow-2xl ${
                    index === 0 ? "col-span-2 h-[350px]" : "h-[260px]"
                  }`}
                >
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    priority
                    quality={100}
                    unoptimized
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-orange-500 px-4 py-2 rounded-full text-sm font-bold text-white">
                        Featured
                      </span>

                      <button className="bg-black/60 p-3 rounded-full hover:bg-orange-500 transition-all duration-300">
                        <FiHeart className="text-white" />
                      </button>
                    </div>

                    <h2 className="text-3xl font-black leading-tight text-white">
                      {recipe.title}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-6 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto bg-[#0f172a] border border-white/10 rounded-[35px] p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="text-4xl font-black mb-2 text-white">
                Find Your Favorite Meals
              </h2>
              <p className="text-white text-lg font-medium">
                Search thousands of luxury recipes instantly.
              </p>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-4 bg-[#020617] border border-white/10 rounded-2xl px-6 py-5 w-full lg:w-[450px]">
                <FiSearch className="text-orange-400 text-2xl" />

                <input
                  type="text"
                  placeholder="Search recipes, categories, ingredients..."
                  className="bg-transparent outline-none w-full text-white placeholder:text-gray-300"
                />
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-500/20 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-20 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-5xl font-black mb-3 text-white">
                Top Categories
              </h2>

              <p className="text-white text-lg font-medium">
                Explore our most popular food collections.
              </p>
            </div>

            <Link
              href="#"
              className="text-orange-400 font-bold text-lg hover:text-orange-300"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0f172a] border border-white/10 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-300 rounded-3xl py-6 font-bold text-white"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Cards */}
      <section className="px-6 lg:px-20 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-5xl font-black mb-3 text-white">
                Popular Recipes
              </h2>

              <p className="text-white text-lg font-medium">
                Hand-picked premium dishes loved by food enthusiasts.
              </p>
            </div>

            <button className="hidden md:flex items-center gap-3 bg-[#0f172a] hover:bg-orange-500 transition-all duration-300 border border-white/10 px-7 py-4 rounded-2xl font-bold text-white">
              Explore More
              <FiArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[35px] bg-[#0f172a] border border-white/10 shadow-2xl cursor-pointer"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute top-5 left-5 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-bold shadow-lg text-white">
                    {recipe.category}
                  </div>

                  <button className="absolute top-5 right-5 bg-black/60 p-3 rounded-full hover:bg-orange-500 transition-all duration-300">
                    <FiHeart className="text-white" />
                  </button>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-5 text-sm">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <FiClock className="text-orange-400" />
                      {recipe.time}
                    </div>

                    <div className="flex items-center gap-2 text-yellow-400 font-bold">
                      <FiStar />
                      {recipe.rating}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                    {recipe.title}
                  </h3>

                  <p className="text-white leading-relaxed mb-7 font-medium">
                    Enjoy restaurant-quality meals with rich flavors, fresh
                    ingredients, and premium cooking experiences.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <FiUsers />
                      2.5k Reviews
                    </div>

                    <Link
                      href={`/recipes/${recipe.id}`}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl font-bold shadow-xl shadow-orange-500/20 text-white"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}