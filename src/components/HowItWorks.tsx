// src/components/HowItWorks.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Meal",
    description:
      "Browse thousands of delicious recipes and premium meals from top chefs.",
    icon: "🍔",
    path: "/meals",
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Quickly order your favorite meals with our smooth and secure platform.",
    icon: "🛒",
    path: "/checkout",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description:
      "Get your meals delivered hot and fresh directly to your doorstep.",
    icon: "🚚",
    path: "/delivery",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* PARTICLES */}
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

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
          >
            How It Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
          >
            Order Delicious Meals <br />
            In 3 Simple Steps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg leading-8 mt-8"
          >
            Experience a seamless food ordering journey with fast delivery,
            premium quality meals and an amazing user experience.
          </motion.p>

        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24 relative">

          {/* CONNECTING LINE */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 rounded-full"></div>

          {steps.map((step, index) => (
            <Link key={index} href={step.path}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -12,
                }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 text-center overflow-hidden group cursor-pointer"
              >

                {/* STEP NUMBER */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 8,
                  }}
                  className="w-24 h-24 mx-auto rounded-3xl bg-red-500 flex items-center justify-center text-5xl shadow-2xl shadow-red-500/30 relative z-10"
                >
                  {step.icon}
                </motion.div>

                {/* NUMBER */}
                <div className="absolute top-6 right-6 text-7xl font-black text-white/5">
                  {step.number}
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold text-white mt-10">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-8 mt-6">
                  {step.description}
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  className="mt-10 text-red-400 font-semibold"
                >
                  Learn More →
                </motion.button>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}