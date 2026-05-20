// src/components/FoodDelivery.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Delivery",
    desc: "Hot and fresh meals delivered to your doorstep in minutes.",
    icon: "⚡",
    path: "/delivery",
  },
  {
    title: "Live Tracking",
    desc: "Track your orders in real-time directly from your device.",
    icon: "📍",
    path: "/tracking",
  },
  {
    title: "Best Quality",
    desc: "Premium ingredients prepared by professional chefs.",
    icon: "👨‍🍳",
    path: "/premium-meals",
  },
];

export default function FoodDelivery() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 22 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + index,
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
              Fast Food Delivery
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
            >
              Get Your Favorite <br />
              Meals Delivered Fast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg leading-8 mt-8 max-w-xl"
            >
              Experience ultra-fast food delivery with premium quality meals,
              real-time tracking and top-rated chefs preparing your food.
            </motion.p>

            {/* FEATURES */}
            <div className="space-y-8 mt-14">

              {features.map((feature, index) => (
                <Link key={index} href={feature.path}>
                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    className="flex items-start gap-5 cursor-pointer"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center text-3xl shadow-2xl shadow-red-500/20">
                      {feature.icon}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 mt-3 leading-7">
                        {feature.desc}
                      </p>

                    </div>

                  </motion.div>
                </Link>
              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-14">

              <Link href="/order">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-5 rounded-full font-bold shadow-2xl shadow-red-500/20"
                >
                  Order Food Now
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-8 py-5 rounded-full font-semibold backdrop-blur-xl hover:bg-white hover:text-black transition"
                >
                  Learn More
                </motion.button>
              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
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
              className="absolute w-[550px] h-[550px] bg-red-500/20 rounded-full blur-3xl"
            />

            {/* IMAGE CARD */}
            <Link href="/delivery">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative w-full max-w-[550px] rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(255,0,0,0.25)] cursor-pointer"
              >

                <img
                  src="https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop"
                  alt="Food Delivery"
                  className="w-full h-[700px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* FLOATING DELIVERY CARD */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute top-8 left-8 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl"
                >

                  <p className="text-gray-500 text-sm">
                    Delivery Time
                  </p>

                  <h3 className="text-4xl font-extrabold mt-2">
                    15 Min
                  </h3>

                  <p className="text-green-500 font-semibold mt-2">
                    ● Live Tracking Enabled
                  </p>

                </motion.div>

                {/* BOTTOM CARD */}
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-8 right-8 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white shadow-2xl"
                >

                  <p className="text-gray-300">
                    Orders Delivered
                  </p>

                  <h3 className="text-4xl font-extrabold mt-2">
                    500K+
                  </h3>

                </motion.div>

              </motion.div>
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
}