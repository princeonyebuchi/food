// src/components/InstagramFeed.tsx

"use client";

import { motion } from "framer-motion";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + index,
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Instagram Feed
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
            >
              Follow Our Food <br />
              Journey Online
            </motion.h2>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            Follow Us
          </motion.button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="relative rounded-[35px] overflow-hidden group shadow-xl"
            >

              {/* IMAGE */}
              <motion.img
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={post.image}
                alt="Food Post"
                className="w-full h-[350px] object-cover"
              />

              {/* OVERLAY */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
              >

                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  whileHover={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold shadow-2xl"
                >
                  ❤️ View Post
                </motion.div>

              </motion.div>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM SOCIAL CARD */}
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
          className="relative mt-24 bg-black rounded-[40px] overflow-hidden p-14 text-center"
        >

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/20 via-orange-500/10 to-red-500/20"></div>

          <div className="relative z-10">

            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Join Millions Of Food Lovers <br />
              On Social Media
            </h3>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl mx-auto">
              Discover daily recipes, food inspiration and chef creations
              shared by our amazing global food community.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-5 mt-10">

              {[
                "Instagram",
                "TikTok",
                "YouTube",
                "Facebook",
              ].map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-500 transition"
                >
                  {social}
                </motion.button>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}