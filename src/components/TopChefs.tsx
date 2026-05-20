// src/components/TopChefs.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const chefs = [
  {
    name: "Chef Antonio",
    role: "Italian Cuisine Expert",
    image:
      "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=1200&auto=format&fit=crop",
    recipes: "320 Recipes",
    link: "/chefs/chef-antonio",
  },
  {
    name: "Chef Sophia",
    role: "Healthy Food Specialist",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1200&auto=format&fit=crop",
    recipes: "210 Recipes",
    link: "/chefs/chef-sophia",
  },
  {
    name: "Chef Daniel",
    role: "Master Grill Chef",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    recipes: "185 Recipes",
    link: "/chefs/chef-daniel",
  },
  {
    name: "Chef Olivia",
    role: "Dessert Creator",
    image:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1200&auto=format&fit=crop",
    recipes: "270 Recipes",
    link: "/chefs/chef-olivia",
  },
];

export default function TopChefs() {
  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* PARTICLES */}
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
              Top Professional Chefs
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
            >
              Meet Our Expert <br />
              Culinary Masters
            </motion.h2>

          </div>

          <Link href="/chefs">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-200"
            >
              Explore All Chefs
            </motion.button>
          </Link>

        </div>

        {/* CHEFS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {chefs.map((chef, index) => (
            <Link
              key={index}
              href={chef.link}
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
                  scale: 1.02,
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
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-[420px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                  {/* SOCIALS */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition duration-500">

                    {["F", "I", "X"].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white font-bold cursor-pointer"
                      >
                        {item}
                      </motion.div>
                    ))}

                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-8">

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-white"
                    >
                      {chef.name}
                    </motion.h3>

                    <p className="text-red-300 mt-3 font-medium">
                      {chef.role}
                    </p>

                    <div className="flex items-center justify-between mt-6">

                      <div className="text-gray-200">
                        {chef.recipes}
                      </div>

                      <motion.button
                        whileHover={{
                          x: 5,
                        }}
                        className="text-white font-semibold"
                      >
                        View Profile →
                      </motion.button>

                    </div>

                  </div>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-red-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}