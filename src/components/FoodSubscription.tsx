// src/components/FoodSubscription.tsx

"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Weekly Box",
    meals: "7 Premium Meals",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Family Plan",
    meals: "20 Family Meals",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthy Plan",
    meals: "14 Healthy Meals",
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FoodSubscription() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 24 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            opacity: [0.2, 0.8, 0.2],
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
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Meal Subscription
          </motion.span>

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
            className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
          >
            Fresh Meals Delivered <br />
            Every Week
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
            className="text-gray-500 text-lg leading-8 mt-8"
          >
            Subscribe to personalized meal plans crafted by professional
            chefs and delivered straight to your door.
          </motion.p>

        </div>

        {/* SUBSCRIPTION GRID */}
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
              className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 group"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-[320px] object-cover"
                />

                {/* PRICE BADGE */}
                <div className="absolute top-6 right-6 bg-black text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl">
                  {plan.price}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-10">

                <h3 className="text-4xl font-extrabold">
                  {plan.title}
                </h3>

                <p className="text-gray-500 text-lg mt-5">
                  {plan.meals}
                </p>

                {/* FEATURES */}
                <div className="space-y-5 mt-10">

                  {[
                    "Fresh ingredients",
                    "Chef crafted recipes",
                    "Fast delivery included",
                    "Flexible scheduling",
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{
                        x: 5,
                      }}
                      className="flex items-center gap-4"
                    >

                      <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                        ✓
                      </div>

                      <p className="text-gray-600">
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
                  className="w-full mt-12 bg-red-500 hover:bg-red-600 transition text-white py-5 rounded-full font-bold shadow-xl shadow-red-500/20"
                >
                  Subscribe Now
                </motion.button>

              </div>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

            </motion.div>
          ))}

        </div>

        {/* FEATURE SECTION */}
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
          className="relative mt-28 bg-black rounded-[45px] overflow-hidden"
        >

          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600&auto=format&fit=crop"
            alt="Meal Subscription"
            className="w-full h-[750px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center px-6">

            <div className="max-w-5xl text-center">

              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-xl"
              >
                Personalized Meal Plans
              </motion.span>

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
                className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight"
              >
                Eat Better Without <br />
                The Stress
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
                Save time with healthy chef-prepared meals delivered weekly.
                Designed for busy professionals, families and food lovers.
              </motion.p>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                {[
                  {
                    value: "500K+",
                    label: "Subscribers",
                  },
                  {
                    value: "98%",
                    label: "Satisfaction Rate",
                  },
                  {
                    value: "24/7",
                    label: "Delivery Support",
                  },
                  {
                    value: "100%",
                    label: "Fresh Ingredients",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                  >

                    <h3 className="text-4xl font-black text-white">
                      {stat.value}
                    </h3>

                    <p className="text-gray-300 mt-3">
                      {stat.label}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14">

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
                  Start Subscription
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
                  Explore Meals
                </motion.button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}