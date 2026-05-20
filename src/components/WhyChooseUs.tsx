// src/components/WhyChooseUs.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Fast & Easy Recipes",
    description:
      "Cook delicious meals quickly with simple step-by-step instructions.",
    path: "/recipes",
  },
  {
    icon: "👨‍🍳",
    title: "Top Professional Chefs",
    description:
      "Learn recipes and cooking secrets from experienced world-class chefs.",
    path: "/chefs",
  },
  {
    icon: "🥗",
    title: "Healthy Ingredients",
    description:
      "Fresh and healthy food ideas carefully selected for every lifestyle.",
    path: "/healthy-foods",
  },
  {
    icon: "🌎",
    title: "Global Food Community",
    description:
      "Join millions of food lovers sharing recipes and cooking experiences.",
    path: "/community",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
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

        {/* TOP */}
        <div className="text-center max-w-4xl mx-auto">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
          >
            Bringing Food Lovers <br />
            Together Worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg leading-8 mt-8"
          >
            Explore thousands of amazing recipes, connect with top chefs,
            and discover unforgettable cooking experiences every day.
          </motion.p>

        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => (
            <Link key={index} href={feature.path}>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 overflow-hidden group cursor-pointer"
              >

                {/* LIGHT EFFECT */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.2,
                  }}
                  className="text-7xl relative z-10"
                >
                  {feature.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold text-white mt-8 relative z-10">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-5 leading-7 relative z-10">
                  {feature.description}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  className="mt-8 text-red-400 font-semibold relative z-10"
                >
                  Learn More →
                </motion.button>

                {/* GLOW */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}