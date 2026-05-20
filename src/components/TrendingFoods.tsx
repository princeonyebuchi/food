// src/components/TrendingFoods.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const trendingFoods = [
  {
    title: "Spicy Ramen Bowl",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
    orders: "12K Orders",
    rating: "4.9",
    path: "/trending/spicy-ramen-bowl",
  },
  {
    title: "Grilled Steak",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    orders: "9K Orders",
    rating: "4.8",
    path: "/trending/grilled-steak",
  },
  {
    title: "Creamy Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    orders: "15K Orders",
    rating: "5.0",
    path: "/trending/creamy-pasta",
  },
  {
    title: "Chocolate Pancakes",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    orders: "7K Orders",
    rating: "4.7",
    path: "/trending/chocolate-pancakes",
  },
];

export default function TrendingFoods() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            opacity: [0.2, 0.7, 0.2],
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
            >
              Trending Foods
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
            >
              Most Loved Meals <br />
              This Week
            </motion.h2>

          </div>

          <Link href="/trending">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-200"
            >
              Explore Trending
            </motion.button>
          </Link>

        </div>

        {/* TRENDING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {trendingFoods.map((food, index) => (
            <Link key={index} href={food.path}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  rotate: 1,
                }}
                className="relative bg-white rounded-[35px] overflow-hidden shadow-xl group cursor-pointer"
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
                    className="w-full h-[350px] object-cover"
                  />

                  {/* RATING */}
                  <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl px-4 py-2 rounded-full text-white font-semibold">
                    ⭐ {food.rating}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <p className="text-red-500 font-semibold">
                      🔥 Trending
                    </p>

                    <p className="text-gray-500 text-sm">
                      {food.orders}
                    </p>

                  </div>

                  <h3 className="text-3xl font-bold mt-5">
                    {food.title}
                  </h3>

                  <p className="text-gray-500 leading-8 mt-5">
                    Delicious premium meals loved by thousands
                    of food enthusiasts worldwide.
                  </p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-8 text-red-500 font-semibold"
                  >
                    Order Now →
                  </motion.button>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}