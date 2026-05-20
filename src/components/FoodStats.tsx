// src/components/FoodStats.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    label: "Premium Recipes",
    icon: "🍽️",
    path: "/recipes",
  },
  {
    number: "5M+",
    label: "Happy Users",
    icon: "❤️",
    path: "/community",
  },
  {
    number: "500+",
    label: "Professional Chefs",
    icon: "👨‍🍳",
    path: "/chefs",
  },
  {
    number: "120+",
    label: "Food Categories",
    icon: "🔥",
    path: "/categories",
  },
];

export default function FoodStats() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* PARTICLES */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 rounded-full bg-red-300"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Platform Statistics
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
          >
            Millions Trust Our <br />
            Food Platform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg leading-8 mt-8"
          >
            Join a global food community discovering premium recipes,
            trending meals and world-class culinary experiences.
          </motion.p>

        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mt-20">

          {stats.map((stat, index) => (
            <Link key={index} href={stat.path}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="relative bg-white rounded-[35px] p-10 shadow-xl overflow-hidden group border border-gray-100 cursor-pointer"
              >

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="w-24 h-24 rounded-3xl bg-red-100 flex items-center justify-center text-5xl shadow-lg"
                >
                  {stat.icon}
                </motion.div>

                {/* NUMBER */}
                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="text-6xl font-extrabold mt-10"
                >
                  {stat.number}
                </motion.h3>

                {/* LABEL */}
                <p className="text-gray-500 text-lg mt-5 leading-8">
                  {stat.label}
                </p>

                {/* BOTTOM LINE */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  className="h-1 bg-red-500 rounded-full mt-10"
                />

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}