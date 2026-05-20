// src/components/FoodNFT.tsx

"use client";

import { motion } from "framer-motion";

const nftFoods = [
  {
    title: "Golden Wagyu Burger",
    chef: "Chef Alexander",
    bid: "2.4 ETH",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Seafood Plate",
    chef: "Chef Sophia",
    bid: "3.1 ETH",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Diamond Sushi Roll",
    chef: "Chef Kenji",
    bid: "5.8 ETH",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FoodNFT() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 35 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-pink-400 rounded-full"
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
            className="inline-block bg-white/10 backdrop-blur-xl text-pink-400 px-5 py-2 rounded-full text-sm font-semibold border border-white/10"
          >
            Digital Food Collectibles
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
            Own Exclusive <br />
            Food NFTs
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
            className="text-gray-400 text-lg leading-8 mt-8"
          >
            Discover limited edition chef-crafted digital collectibles
            inspired by the world’s most luxurious meals.
          </motion.p>

        </div>

        {/* NFT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24">

          {nftFoods.map((food, index) => (
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
                y: -15,
                rotate: 1,
              }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden group"
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
                  src={food.image}
                  alt={food.title}
                  className="w-full h-[420px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* LIVE BADGE */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-6 left-6 bg-pink-500 text-white px-5 py-2 rounded-full font-bold shadow-2xl"
                >
                  ● LIVE BID
                </motion.div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-3xl font-black text-white leading-tight">
                  {food.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  By {food.chef}
                </p>

                {/* BID */}
                <div className="flex items-center justify-between mt-10">

                  <div>

                    <p className="text-gray-500 text-sm">
                      Current Bid
                    </p>

                    <h4 className="text-3xl font-black text-pink-400 mt-2">
                      {food.bid}
                    </h4>

                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="bg-white text-black hover:bg-pink-500 hover:text-white transition px-6 py-4 rounded-full font-bold shadow-xl"
                  >
                    Place Bid
                  </motion.button>

                </div>

              </div>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

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
          className="relative mt-32 rounded-[50px] overflow-hidden border border-white/10"
        >

          {/* VIDEO-LIKE BACKGROUND */}
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop"
            alt="Future Food"
            className="w-full h-[800px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/75"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div className="max-w-5xl">

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
                className="inline-block bg-white/10 backdrop-blur-xl border border-white/10 text-pink-400 px-5 py-2 rounded-full text-sm font-semibold"
              >
                The Future Of Food
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
                Food Meets <br />
                Blockchain Innovation
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
                Join the next generation food ecosystem where exclusive
                recipes, chef experiences and digital collectibles become assets.
              </motion.p>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

                {[
                  {
                    value: "12K+",
                    label: "NFT Owners",
                  },
                  {
                    value: "350+",
                    label: "Exclusive Drops",
                  },
                  {
                    value: "$2M+",
                    label: "Marketplace Volume",
                  },
                  {
                    value: "120+",
                    label: "Celebrity Chefs",
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-pink-500 hover:bg-pink-600 transition text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-pink-500/30"
                >
                  Explore Marketplace
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white hover:text-black transition text-white px-10 py-5 rounded-full font-bold"
                >
                  Watch Demo
                </motion.button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}