// src/components/Newsletter.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Newsletter() {
  // HYDRATION SAFE PARTICLES
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, index) => ({
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      {/* FLOATING PARTICLES */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
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
            top: particle.top,
            left: particle.left,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-black rounded-[50px] overflow-hidden px-8 md:px-16 py-20"
        >
          {/* INNER GLOW */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-red-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* BADGE */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Newsletter
            </motion.span>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
            >
              Get Weekly Delicious <br />
              Food Recipes
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg leading-8 mt-8"
            >
              Subscribe to our newsletter and receive premium recipes,
              cooking tips, healthy meal ideas and trending food updates.
            </motion.p>

            {/* INPUT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-5 mt-14"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-black px-8 py-6 rounded-full outline-none text-lg shadow-2xl"
              />

              <Link href="/subscribe">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-6 rounded-full font-bold text-lg shadow-2xl shadow-red-500/20 relative overflow-hidden cursor-pointer"
                >
                  {/* BUTTON LIGHT */}
                  <motion.span
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />

                  <span className="relative z-10">
                    Subscribe Now
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
              {[
                {
                  number: "50K+",
                  label: "Subscribers",
                  link: "/subscribers",
                },
                {
                  number: "10K+",
                  label: "Recipes",
                  link: "/recipes",
                },
                {
                  number: "4.9★",
                  label: "User Rating",
                  link: "/reviews",
                },
              ].map((item, index) => (
                <Link key={index} href={item.link}>
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 cursor-pointer"
                  >
                    <h3 className="text-4xl font-extrabold text-white">
                      {item.number}
                    </h3>

                    <p className="text-gray-400 mt-3">
                      {item.label}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}