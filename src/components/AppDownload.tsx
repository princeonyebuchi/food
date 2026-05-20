// src/components/AppDownload.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AppDownload() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Mobile App
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
            >
              Download Our <br />
              Food Mobile App
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg leading-8 mt-8 max-w-xl"
            >
              Discover delicious recipes, cooking tutorials,
              trending meals and professional chefs directly
              from your smartphone anytime anywhere.
            </motion.p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {[
                "10K+ Recipes",
                "Video Tutorials",
                "Healthy Meals",
                "Top Chefs",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>

                  <p className="text-white text-lg font-medium">
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-14">

              <Link href="/app-store">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-5 rounded-2xl font-bold flex items-center gap-4 shadow-2xl cursor-pointer"
                >
                  <span className="text-3xl"></span>

                  <div className="text-left">
                    <p className="text-sm">
                      Download on the
                    </p>

                    <h3 className="text-lg">
                      App Store
                    </h3>
                  </div>
                </motion.button>

              </Link>

              <Link href="/google-play">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-4 shadow-2xl shadow-red-500/20 cursor-pointer"
                >
                  <span className="text-3xl">
                    ▶
                  </span>

                  <div className="text-left">
                    <p className="text-sm">
                      Get it on
                    </p>

                    <h3 className="text-lg">
                      Google Play
                    </h3>
                  </div>
                </motion.button>

              </Link>

            </div>

          </motion.div>

          {/* RIGHT PHONE MOCKUP */}
          <Link href="/mobile-app">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center cursor-pointer"
            >

              {/* GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"
              />

              {/* PHONE */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative w-[320px] h-[650px] bg-white rounded-[50px] p-5 shadow-[0_40px_100px_rgba(255,0,0,0.25)] border-[8px] border-gray-900 overflow-hidden"
              >

                {/* SCREEN */}
                <div className="w-full h-full rounded-[35px] overflow-hidden relative">

                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                    alt="Food App"
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* APP UI */}
                  <div className="absolute top-0 left-0 w-full p-6">

                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl">

                      <p className="text-gray-500 text-sm">
                        Trending Recipe
                      </p>

                      <h3 className="text-2xl font-bold mt-2">
                        Italian Pizza
                      </h3>

                      <div className="flex items-center justify-between mt-5">

                        <div className="flex items-center gap-2 text-yellow-500 font-semibold">
                          ⭐ 4.9
                        </div>

                        <div className="text-gray-500">
                          25 mins
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </Link>

        </div>
      </div>
    </section>
  );
}