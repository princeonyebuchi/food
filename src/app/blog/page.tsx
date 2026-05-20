// src/app/blog/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiSearch,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

const featuredPost = {
  title: "10 Professional Cooking Secrets Every Food Lover Should Know",
  image:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop",
  category: "Cooking Tips",
  author: "Chef Daniel",
  date: "May 20, 2026",
  time: "8 min read",
};

const blogPosts = [
  {
    id: 1,
    title: "Healthy Breakfast Recipes To Start Your Day",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    category: "Healthy",
    author: "Sophia Lee",
    date: "May 18, 2026",
    time: "5 min read",
  },
  {
    id: 2,
    title: "Best Homemade Italian Pasta Recipe",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    category: "Pasta",
    author: "Chef Marco",
    date: "May 15, 2026",
    time: "7 min read",
  },
  {
    id: 3,
    title: "Top 15 Delicious Desserts You Must Try",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
    category: "Desserts",
    author: "Emma Watson",
    date: "May 10, 2026",
    time: "6 min read",
  },
  {
    id: 4,
    title: "How To Cook Perfect Burgers At Home",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    category: "Burger",
    author: "John Smith",
    date: "May 08, 2026",
    time: "4 min read",
  },
  {
    id: 5,
    title: "Fresh Seafood Meals For Family Dinner",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
    category: "Seafood",
    author: "Chef Olivia",
    date: "May 04, 2026",
    time: "9 min read",
  },
  {
    id: 6,
    title: "Professional Pizza Recipes You’ll Love",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    category: "Pizza",
    author: "David Miller",
    date: "May 01, 2026",
    time: "5 min read",
  },
];

const categories = [
  "All",
  "Healthy",
  "Pasta",
  "Desserts",
  "Pizza",
  "Seafood",
  "Cooking Tips",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden">
      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-red-100 text-red-500 px-6 py-3 rounded-full font-semibold"
          >
            <FiTrendingUp />
            Latest Food Articles & Recipes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mt-10 leading-tight"
          >
            Explore Our
            <span className="text-red-500"> Food Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 leading-8 mt-8"
          >
            Discover cooking inspiration, professional recipes, healthy meals,
            trending dishes and premium food articles from expert chefs.
          </motion.p>

          {/* SEARCH */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mt-14 bg-white rounded-full shadow-2xl flex items-center overflow-hidden"
          >
            <div className="pl-7 text-gray-400">
              <FiSearch size={22} />
            </div>

            <input
              type="text"
              placeholder="Search blog articles..."
              className="flex-1 px-6 py-6 outline-none text-lg"
            />

            <button className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-6 font-bold">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-14 items-center bg-white rounded-[40px] shadow-2xl overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-[500px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-14">
              <div className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full font-semibold">
                {featuredPost.category}
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-8 leading-tight">
                {featuredPost.title}
              </h2>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 mt-8">
                <div className="flex items-center gap-2">
                  <FiUser />
                  {featuredPost.author}
                </div>

                <div className="flex items-center gap-2">
                  <FiCalendar />
                  {featuredPost.date}
                </div>

                <div className="flex items-center gap-2">
                  <FiClock />
                  {featuredPost.time}
                </div>
              </div>

              <p className="text-gray-600 leading-8 mt-8">
                Learn professional cooking techniques, discover delicious meals,
                and improve your kitchen skills with expert food inspiration and
                premium culinary guides.
              </p>

              <Link href="/blog/1">
                <button className="mt-10 flex items-center gap-3 bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-bold">
                  Read Article
                  <FiArrowRight />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`px-7 py-3 rounded-full font-semibold transition ${
                index === 0
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-500 hover:text-white shadow-lg"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-14">
            <div>
              <h2 className="text-4xl font-black text-gray-900">
                Latest Articles
              </h2>

              <p className="text-gray-500 mt-3">
                Explore premium food blogs and cooking inspiration.
              </p>
            </div>

            <button className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-bold">
              View All Posts
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[35px] overflow-hidden shadow-2xl group"
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <FiUser />
                      {post.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <FiClock />
                      {post.time}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mt-6 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 leading-7 mt-5">
                    Discover delicious recipes, cooking inspiration and
                    professional culinary tips from expert chefs.
                  </p>

                  <Link href={`/blog/${post.id}`}>
                    <button className="mt-8 flex items-center gap-3 bg-black hover:bg-red-500 transition text-white px-7 py-4 rounded-full font-bold">
                      Read More
                      <FiArrowRight />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}