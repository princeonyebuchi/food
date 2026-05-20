// src/components/ChefSpecials.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const specials = [
  {
    title: "Premium Steak Deluxe",
    chef: "Chef Antonio",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    price: "$29",
    tag: "Chef Choice",
    link:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
  },
  {
    title: "Seafood Pasta",
    chef: "Chef Sophia",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    price: "$24",
    tag: "Best Seller",
    link:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },
  {
    title: "Luxury Sushi Box",
    chef: "Chef Kenji",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
    price: "$35",
    tag: "Trending",
    link:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },
];

export default function ChefSpecials() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Chef Specials
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
            >
              Signature Meals From <br />
              World Class Chefs
            </motion.h2>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-500/20"
          >
            Explore Menu
          </motion.button>

        </div>

        {/* SPECIALS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {specials.map((special, index) => (
            <Link
              key={index}
              href={special.link}
              target="_blank"
            >
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
                className="relative rounded-[40px] overflow-hidden group shadow-[0_40px_100px_rgba(255,0,0,0.15)] cursor-pointer"
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
                    src={special.image}
                    alt={special.title}
                    className="w-full h-[550px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* TAG */}
                  <div className="absolute top-8 left-8 bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-xl">
                    {special.tag}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-10">

                    <p className="text-red-400 font-semibold">
                      👨‍🍳 {special.chef}
                    </p>

                    <h3 className="text-4xl font-extrabold text-white mt-5">
                      {special.title}
                    </h3>

                    {/* PRICE + BUTTON */}
                    <div className="flex items-center justify-between mt-8">

                      <h4 className="text-5xl font-black text-white">
                        {special.price}
                      </h4>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black hover:bg-red-500 hover:text-white transition px-6 py-4 rounded-full font-bold shadow-xl"
                      >
                        Order Now
                      </motion.button>

                    </div>

                  </div>

                </div>

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