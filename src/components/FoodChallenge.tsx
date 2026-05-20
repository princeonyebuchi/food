// src/components/FoodChallenge.tsx

"use client";

import { motion } from "framer-motion";

const challenges = [
  {
    title: "Spicy King Challenge",
    reward: "$5,000 Reward",
    participants: "12K Participants",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Healthy Meal Contest",
    reward: "$3,500 Reward",
    participants: "8K Participants",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Ultimate Burger Battle",
    reward: "$7,000 Reward",
    participants: "15K Participants",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FoodChallenge() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 28 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -35, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.9, 0.2],
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

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
              className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Community Challenges
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
              className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
            >
              Compete, Cook & <br />
              Win Amazing Rewards
            </motion.h2>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-500/20"
          >
            Join Challenges
          </motion.button>

        </div>

        {/* CHALLENGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {challenges.map((challenge, index) => (
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
              }}
              className="relative rounded-[40px] overflow-hidden group shadow-[0_40px_100px_rgba(255,0,0,0.15)]"
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
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-[550px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* REWARD BADGE */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute top-8 left-8 bg-yellow-400 text-black px-5 py-2 rounded-full font-black shadow-2xl"
                >
                  🏆 {challenge.reward}
                </motion.div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-10">

                  <p className="text-red-400 font-semibold">
                    🔥 {challenge.participants}
                  </p>

                  <h3 className="text-4xl font-extrabold text-white mt-5 leading-tight">
                    {challenge.title}
                  </h3>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="mt-8 bg-white text-black hover:bg-red-500 hover:text-white transition px-8 py-4 rounded-full font-bold shadow-xl"
                  >
                    Participate Now
                  </motion.button>

                </div>

              </div>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

            </motion.div>
          ))}

        </div>

        {/* LEADERBOARD SECTION */}
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
          className="relative mt-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[45px] overflow-hidden p-14"
        >

          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

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
                  className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
                >
                  Top Competitors
                </motion.span>

                <h2 className="text-5xl font-extrabold text-white mt-8 leading-tight">
                  Challenge Leaderboard
                </h2>

              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-bold shadow-xl"
              >
                View Rankings
              </motion.button>

            </div>

            {/* LEADERBOARD */}
            <div className="space-y-6 mt-16">

              {[
                {
                  rank: "#1",
                  name: "Sophia Williams",
                  points: "12,450 Points",
                  badge: "👑",
                },
                {
                  rank: "#2",
                  name: "Daniel Carter",
                  points: "11,980 Points",
                  badge: "🔥",
                },
                {
                  rank: "#3",
                  name: "Emma Johnson",
                  points: "10,720 Points",
                  badge: "⭐",
                },
              ].map((user, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 10,
                  }}
                  className="bg-white/5 border border-white/10 rounded-[30px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >

                  <div className="flex items-center gap-6">

                    {/* RANK */}
                    <div className="w-20 h-20 rounded-3xl bg-red-500 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-red-500/20">
                      {user.rank}
                    </div>

                    {/* INFO */}
                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {user.badge} {user.name}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        {user.points}
                      </p>

                    </div>

                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="bg-white text-black hover:bg-red-500 hover:text-white transition px-8 py-4 rounded-full font-bold"
                  >
                    View Profile
                  </motion.button>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}