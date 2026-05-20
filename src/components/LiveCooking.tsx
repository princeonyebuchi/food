// src/components/LiveCooking.tsx

"use client";

import { motion } from "framer-motion";

const sessions = [
  {
    chef: "Chef Antonio",
    title: "Italian Pasta Masterclass",
    time: "Live Today • 7:00 PM",
    viewers: "12K Watching",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    chef: "Chef Sophia",
    title: "Healthy Salad Creations",
    time: "Tomorrow • 5:30 PM",
    viewers: "8K Interested",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    chef: "Chef Kenji",
    title: "Luxury Sushi Experience",
    time: "Friday • 8:00 PM",
    viewers: "15K Watching",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function LiveCooking() {
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Live Cooking Sessions
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
            >
              Learn From Top Chefs <br />
              In Real Time
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
            View All Sessions
          </motion.button>

        </div>

        {/* LIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {sessions.map((session, index) => (
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
                  src={session.image}
                  alt={session.title}
                  className="w-full h-[550px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* LIVE BADGE */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute top-8 left-8 bg-red-500 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 shadow-2xl"
                >
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  LIVE
                </motion.div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-10">

                  <p className="text-red-400 font-semibold">
                    👨‍🍳 {session.chef}
                  </p>

                  <h3 className="text-4xl font-extrabold text-white mt-5 leading-tight">
                    {session.title}
                  </h3>

                  {/* INFO */}
                  <div className="flex items-center justify-between mt-8">

                    <div>

                      <p className="text-white font-semibold">
                        {session.time}
                      </p>

                      <p className="text-gray-300 mt-2">
                        {session.viewers}
                      </p>

                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="bg-white text-black hover:bg-red-500 hover:text-white transition px-6 py-4 rounded-full font-bold shadow-xl"
                    >
                      Join Now
                    </motion.button>

                  </div>

                </div>

              </div>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM FEATURE CARD */}
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

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

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
                className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
              >
                Exclusive Access
              </motion.span>

              <h2 className="text-5xl font-extrabold text-white mt-8 leading-tight">
                Join Interactive Cooking Experiences
              </h2>

              <p className="text-gray-400 text-lg leading-8 mt-8">
                Learn premium cooking techniques, ask questions live
                and connect with famous chefs from around the world.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="mt-10 bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-red-500/20"
              >
                Start Watching
              </motion.button>

            </div>

            {/* RIGHT */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative"
            >

              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop"
                alt="Cooking"
                className="rounded-[35px] shadow-2xl w-full h-[500px] object-cover"
              />

              {/* PLAY BUTTON */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >

                <div className="w-28 h-28 rounded-full bg-red-500 text-white flex items-center justify-center text-4xl shadow-[0_20px_60px_rgba(255,0,0,0.5)] cursor-pointer">
                  ▶
                </div>

              </motion.div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}