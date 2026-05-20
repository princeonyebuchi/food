// src/components/AIRecipeGenerator.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const recipes = [
  {
    title: "AI Healthy Bowl",
    time: "15 mins",
    calories: "320 kcal",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    link: "/recipes/ai-healthy-bowl",
  },
  {
    title: "Smart Protein Burger",
    time: "25 mins",
    calories: "540 kcal",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    link: "/recipes/smart-protein-burger",
  },
  {
    title: "Future Sushi Plate",
    time: "18 mins",
    calories: "410 kcal",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
    link: "/recipes/future-sushi-plate",
  },
];

export default function AIRecipeGenerator() {
  return (
    <section className="relative py-36 bg-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      {/* PARTICLES */}
      {Array.from({ length: 35 }).map((_, index) => (
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
          className="absolute w-2 h-2 bg-cyan-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

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
              className="inline-block bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold"
            >
              AI Powered Cooking
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
                duration: 0.8,
              }}
              className="text-5xl lg:text-7xl font-black mt-8 leading-tight"
            >
              Generate Recipes <br />
              With Artificial <br />
              Intelligence
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
              className="text-gray-600 text-xl leading-9 mt-10"
            >
              Enter ingredients you already have and our AI instantly
              creates delicious personalized recipes tailored to your taste.
            </motion.p>

            {/* SEARCH BOX */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="mt-12 bg-white rounded-[35px] shadow-2xl border border-gray-100 p-6"
            >

              <p className="font-bold text-lg mb-5">
                Enter Ingredients
              </p>

              <div className="flex flex-col lg:flex-row gap-4">

                <input
                  type="text"
                  placeholder="Chicken, Rice, Tomato..."
                  className="flex-1 px-6 py-5 rounded-2xl border border-gray-200 outline-none focus:border-cyan-400 text-lg"
                />

                <Link href="/ai-recipes">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="bg-cyan-400 hover:bg-cyan-300 transition text-black px-10 py-5 rounded-2xl font-black shadow-[0_20px_60px_rgba(0,255,255,0.25)]"
                  >
                    Generate AI Recipe
                  </motion.button>
                </Link>

              </div>

            </motion.div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              {[
                "Personalized Recipes",
                "Nutrition Analysis",
                "AI Cooking Assistant",
                "Smart Meal Planning",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 5,
                  }}
                  className="flex items-center gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-cyan-400 text-black flex items-center justify-center font-black">
                    ✓
                  </div>

                  <p className="font-semibold text-gray-700">
                    {feature}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative bg-black rounded-[45px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.2)]"
            >

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop"
                alt="AI Recipe"
                className="w-full h-[750px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* AI PANEL */}
              <div className="absolute bottom-0 left-0 w-full p-10">

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-cyan-300 font-semibold">
                        AI Generated
                      </p>

                      <h3 className="text-4xl font-black text-white mt-3">
                        Smart Meal Suggestion
                      </h3>

                    </div>

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center text-4xl"
                    >
                      🤖
                    </motion.div>

                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-10">

                    {[
                      {
                        label: "Calories",
                        value: "420",
                      },
                      {
                        label: "Protein",
                        value: "34g",
                      },
                      {
                        label: "Cook Time",
                        value: "20m",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-2xl p-5 text-center"
                      >

                        <h4 className="text-3xl font-black text-white">
                          {item.value}
                        </h4>

                        <p className="text-gray-300 mt-2">
                          {item.label}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* GENERATED RECIPES */}
        <div className="mt-32">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>

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
                className="inline-block bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold"
              >
                AI Generated Meals
              </motion.span>

              <h2 className="text-5xl font-black mt-8 leading-tight">
                Smart Recipe Suggestions
              </h2>

            </div>

            <Link href="/recipes">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-black hover:bg-cyan-400 hover:text-black transition text-white px-8 py-4 rounded-full font-bold"
              >
                Explore More Recipes
              </motion.button>
            </Link>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">

            {recipes.map((recipe, index) => (
              <Link key={index} href={recipe.link}>
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
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 group cursor-pointer"
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
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-[350px] object-cover"
                    />

                    {/* AI BADGE */}
                    <div className="absolute top-6 left-6 bg-cyan-400 text-black px-5 py-2 rounded-full font-black shadow-xl">
                      AI RECIPE
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <h3 className="text-3xl font-black">
                      {recipe.title}
                    </h3>

                    <div className="flex items-center gap-4 mt-6">

                      <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
                        ⏱ {recipe.time}
                      </div>

                      <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
                        🔥 {recipe.calories}
                      </div>

                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="w-full mt-8 bg-black hover:bg-cyan-400 hover:text-black transition text-white py-5 rounded-full font-bold"
                    >
                      View Recipe
                    </motion.button>

                  </div>

                  {/* GLOW */}
                  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

                </motion.div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}