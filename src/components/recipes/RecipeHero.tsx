// src/components/recipes/RecipeHero.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function RecipeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop"
          alt="Food Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold mb-8"
            >
              🍴 Discover Amazing Recipes Everyday
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
            >
              Cook Delicious
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Food At Home
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl text-lg md:text-2xl text-zinc-300 leading-relaxed mb-10"
            >
              Explore premium recipes, healthy meals, quick snacks, and chef
              inspired cooking ideas made for every food lover.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/recipes"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Recipes
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-bold hover:bg-white/20 transition-all duration-300">
                <FiPlay className="group-hover:scale-125 transition-transform duration-300" />
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
            >
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <h3 className="text-4xl font-black text-white mb-2">
                  10K+
                </h3>
                <p className="text-zinc-300">
                  Delicious Recipes
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <h3 className="text-4xl font-black text-white mb-2">
                  5K+
                </h3>
                <p className="text-zinc-300">
                  Happy Food Lovers
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <h3 className="text-4xl font-black text-white mb-2">
                  500+
                </h3>
                <p className="text-zinc-300">
                  Professional Chefs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}