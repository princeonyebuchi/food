// src/components/RecipeVideos.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const videos = [
  {
    title: "How To Make Italian Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    duration: "12:45",
    path: "/videos/italian-pizza",
  },
  {
    title: "Perfect Burger Recipe",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    duration: "08:20",
    path: "/videos/perfect-burger",
  },
  {
    title: "Healthy Salad Secrets",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    duration: "10:15",
    path: "/videos/healthy-salad",
  },
];

export default function RecipeVideos() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-100 rounded-full blur-3xl opacity-30"></div>

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
              Recipe Videos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-7 leading-tight"
            >
              Watch Professional <br />
              Cooking Tutorials
            </motion.h2>
          </div>

          <Link href="/videos">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              Explore All Videos
            </motion.button>
          </Link>

        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {videos.map((video, index) => (
            <Link key={index} href={video.path}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                }}
                className="relative rounded-[35px] overflow-hidden group shadow-xl cursor-pointer"
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
                    src={video.image}
                    alt={video.title}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* PLAY BUTTON */}
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                    }}
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">

                      <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-3xl">
                        ▶
                      </div>

                    </div>
                  </motion.div>

                  {/* DURATION */}
                  <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-lg px-4 py-2 rounded-full text-white text-sm font-semibold">
                    {video.duration}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-8">

                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                      }}
                      className="text-3xl font-bold text-white leading-snug"
                    >
                      {video.title}
                    </motion.h3>

                    <p className="text-gray-200 mt-4 leading-7">
                      Learn amazing cooking techniques and create
                      delicious meals at home.
                    </p>

                  </div>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-red-300 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}