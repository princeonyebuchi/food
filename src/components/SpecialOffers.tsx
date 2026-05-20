// src/components/SpecialOffers.tsx

"use client";

import { motion } from "framer-motion";

const offers = [
  {
    title: "Italian Pizza Combo",
    discount: "50% OFF",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    description:
      "Enjoy premium Italian pizza with exclusive combo deals.",
    link: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    title: "Healthy Salad Bowl",
    discount: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Fresh healthy meals prepared with organic ingredients.",
    link: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
];

export default function SpecialOffers() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + index,
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
            Special Offers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
          >
            Delicious Deals You <br />
            Can’t Resist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg leading-8 mt-8"
          >
            Get exclusive discounts on trending meals,
            premium recipes and chef special combos.
          </motion.p>

        </div>

        {/* OFFERS GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">

          {offers.map((offer, index) => (
            <a
              key={index}
              href={offer.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative rounded-[40px] overflow-hidden group shadow-2xl cursor-pointer"
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
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/50"></div>

                  {/* DISCOUNT BADGE */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute top-8 right-8 bg-red-500 text-white px-6 py-4 rounded-2xl text-2xl font-extrabold shadow-2xl"
                  >
                    {offer.discount}
                  </motion.div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-10">

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl font-extrabold text-white"
                    >
                      {offer.title}
                    </motion.h3>

                    <p className="text-gray-200 mt-5 leading-8 text-lg max-w-xl">
                      {offer.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-5 mt-10">

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-bold shadow-2xl shadow-red-500/20"
                      >
                        Order Now
                      </motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-white/30 backdrop-blur-xl text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
                      >
                        View Menu
                      </motion.button>

                    </div>

                  </div>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              </motion.div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}