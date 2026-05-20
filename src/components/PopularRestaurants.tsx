// src/components/PopularRestaurants.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const restaurants = [
  {
    name: "Italiano House",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    cuisine: "Italian Cuisine",
    rating: "4.9",
    delivery: "15 mins",
    path: "/restaurants/italiano-house",
  },
  {
    name: "Burger Factory",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    cuisine: "American Burgers",
    rating: "4.8",
    delivery: "20 mins",
    path: "/restaurants/burger-factory",
  },
  {
    name: "Sushi World",
    image:
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=1200&auto=format&fit=crop",
    cuisine: "Japanese Sushi",
    rating: "5.0",
    delivery: "18 mins",
    path: "/restaurants/sushi-world",
  },
];

export default function PopularRestaurants() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">

      {/* BACKGROUND GLOW */}
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
              Popular Restaurants
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
            >
              Discover Top Rated <br />
              Restaurants Near You
            </motion.h2>

          </div>

          <Link href="/restaurants">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-red-500 transition text-white px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              View All Restaurants
            </motion.button>
          </Link>

        </div>

        {/* RESTAURANTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {restaurants.map((restaurant, index) => (
            <Link key={index} href={restaurant.path}>
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
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-[350px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  {/* RATING */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl px-5 py-2 rounded-full font-semibold shadow-lg">
                    ⭐ {restaurant.rating}
                  </div>

                  {/* DELIVERY */}
                  <div className="absolute bottom-6 left-6 bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-xl">
                    🚚 {restaurant.delivery}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <p className="text-red-500 font-semibold">
                    {restaurant.cuisine}
                  </p>

                  <h3 className="text-3xl font-bold mt-4">
                    {restaurant.name}
                  </h3>

                  <p className="text-gray-500 mt-5 leading-8">
                    Experience premium meals prepared by top chefs
                    using fresh and high-quality ingredients.
                  </p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-8 text-red-500 font-semibold"
                  >
                    Visit Restaurant →
                  </motion.button>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}