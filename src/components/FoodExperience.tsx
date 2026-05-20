// src/components/FoodExperience.tsx

"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Luxury Dining",
    description:
      "Experience premium meals crafted by world-class chefs with unforgettable flavors.",
    icon: "🍽️",
  },
  {
    title: "Fast Delivery",
    description:
      "Get your favorite meals delivered hot and fresh in minutes anywhere you are.",
    icon: "🚀",
  },
  {
    title: "Healthy Choices",
    description:
      "Explore nutritious and healthy meals designed for modern lifestyles.",
    icon: "🥗",
  },
  {
    title: "Global Recipes",
    description:
      "Discover recipes and cuisines inspired by cultures from around the world.",
    icon: "🌍",
  },
];

export default function FoodExperience() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + index,
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
            Premium Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
          >
            More Than Food <br />
            It’s An Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg leading-8 mt-8"
          >
            We combine technology, premium meals and beautiful design
            to create the ultimate food platform experience.
          </motion.p>

        </div>

        {/* EXPERIENCE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="relative bg-white rounded-[40px] p-10 shadow-xl overflow-hidden group border border-gray-100"
            >

              {/* ICON */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                className="w-24 h-24 rounded-3xl bg-red-500 flex items-center justify-center text-5xl shadow-2xl shadow-red-500/20"
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-4xl font-extrabold mt-10">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-lg leading-8 mt-6">
                {item.description}
              </p>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  x: 5,
                }}
                className="mt-10 text-red-500 font-bold text-lg"
              >
                Discover More →
              </motion.button>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM PREMIUM CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-28 rounded-[45px] overflow-hidden"
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Food"
            className="w-full h-[700px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div className="max-w-4xl">

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="text-5xl lg:text-7xl font-black text-white leading-tight"
              >
                Crafted For Food Lovers <br />
                Who Expect More
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-gray-300 text-xl leading-9 mt-10"
              >
                Enjoy premium meals, elegant experiences and unforgettable
                flavors all in one beautifully designed platform.
              </motion.p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-red-500/30"
                >
                  Explore Now
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white hover:text-black transition text-white px-10 py-5 rounded-full font-bold"
                >
                  Watch Experience
                </motion.button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}