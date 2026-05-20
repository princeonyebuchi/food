"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function RecipeCTA() {
  return (
    <section className="relative overflow-hidden bg-black rounded-[40px] px-8 md:px-16 py-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block bg-red-500/20 text-red-400 px-6 py-3 rounded-full font-semibold"
        >
          Premium Cooking Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-black text-white mt-8 leading-tight"
        >
          Ready To Cook Something Amazing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl mx-auto"
        >
          Explore thousands of premium recipes, healthy meals,
          trending dishes and professional cooking inspiration.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link href="/recipes">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl"
            >
              Explore Recipes
              <FiArrowRight />
            </motion.button>
          </Link>

          <Link href="/categories">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="border border-white/20 hover:border-red-500 hover:bg-red-500 transition text-white px-10 py-5 rounded-full font-bold text-lg"
            >
              Browse Categories
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}