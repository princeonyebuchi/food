// src/components/FoodGallery.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    link: "/gallery/delicious-recipe-1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    link: "/gallery/delicious-recipe-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    link: "/gallery/delicious-recipe-3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    link: "/gallery/delicious-recipe-4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    link: "/gallery/delicious-recipe-5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop",
    link: "/gallery/delicious-recipe-6",
  },
];

export default function FoodGallery() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 16 }).map((_, index) => (
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
              Food Gallery
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
            >
              Explore Delicious <br />
              Food Creations
            </motion.h2>

          </div>

          <Link href="/gallery">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              View Full Gallery
            </motion.button>
          </Link>

        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

          {galleryImages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
            >
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative overflow-hidden rounded-[35px] group cursor-pointer break-inside-avoid shadow-xl"
              >

                {/* IMAGE */}
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  src={item.image}
                  alt="Food"
                  className={`w-full object-cover ${
                    index % 2 === 0
                      ? "h-[520px]"
                      : "h-[380px]"
                  }`}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-8 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <h3 className="text-3xl font-bold text-white">
                    Delicious Recipe
                  </h3>

                  <p className="text-gray-200 mt-3 leading-7">
                    Explore premium dishes and creative food inspiration.
                  </p>

                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-6 text-red-400 font-semibold"
                  >
                    View Details →
                  </motion.button>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-red-300 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}