// src/components/PricingPlans.tsx

"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "$9",
    description: "Perfect for casual food lovers.",
    features: [
      "Access to basic recipes",
      "Weekly meal updates",
      "Limited chef videos",
      "Community access",
    ],
    popular: false,
  },
  {
    title: "Premium",
    price: "$29",
    description: "Best for serious food enthusiasts.",
    features: [
      "Unlimited premium recipes",
      "Exclusive chef tutorials",
      "Priority food delivery",
      "Live cooking classes",
      "Premium support",
    ],
    popular: true,
  },
  {
    title: "Business",
    price: "$99",
    description: "For restaurants and food brands.",
    features: [
      "Restaurant dashboard",
      "Unlimited menu uploads",
      "Partner analytics",
      "Marketing tools",
      "Dedicated manager",
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 24 }).map((_, index) => (
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
            Pricing Plans
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
          >
            Choose The Perfect <br />
            Plan For You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg leading-8 mt-8"
          >
            Unlock premium recipes, exclusive chef content and powerful
            business tools with our flexible pricing plans.
          </motion.p>

        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24">

          {plans.map((plan, index) => (
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
              className={`relative rounded-[40px] overflow-hidden p-10 border ${
                plan.popular
                  ? "bg-red-500 border-red-400 shadow-[0_40px_100px_rgba(255,0,0,0.25)]"
                  : "bg-white/5 backdrop-blur-xl border-white/10"
              }`}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-white text-red-500 px-5 py-2 rounded-full text-sm font-bold shadow-xl">
                  Most Popular
                </div>
              )}

              {/* TITLE */}
              <h3
                className={`text-3xl font-extrabold ${
                  plan.popular ? "text-white" : "text-white"
                }`}
              >
                {plan.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className={`mt-5 leading-8 ${
                  plan.popular
                    ? "text-red-100"
                    : "text-gray-400"
                }`}
              >
                {plan.description}
              </p>

              {/* PRICE */}
              <div className="mt-10 flex items-end gap-2">

                <h2 className="text-7xl font-black text-white">
                  {plan.price}
                </h2>

                <span
                  className={`mb-3 ${
                    plan.popular
                      ? "text-red-100"
                      : "text-gray-400"
                  }`}
                >
                  /month
                </span>

              </div>

              {/* FEATURES */}
              <div className="space-y-5 mt-12">

                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex items-center gap-4"
                  >

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        plan.popular
                          ? "bg-white text-red-500"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      ✓
                    </div>

                    <p
                      className={`${
                        plan.popular
                          ? "text-white"
                          : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className={`w-full mt-14 py-5 rounded-full font-bold transition ${
                  plan.popular
                    ? "bg-white text-red-500 hover:bg-black hover:text-white"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                Get Started
              </motion.button>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}