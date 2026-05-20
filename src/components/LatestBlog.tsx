// src/components/LatestBlog.tsx

"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "10 Healthy Foods You Should Eat Everyday",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    category: "Healthy",
    date: "May 2026",
    link: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  },
  {
    title: "Secrets Behind Perfect Italian Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    category: "Pizza",
    date: "May 2026",
    link: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    title: "Best Homemade Burger Recipe Guide",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    category: "Burger",
    date: "May 2026",
    link: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
];

export default function LatestBlog() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
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
              Latest Blog
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
            >
              Latest Food News <br />
              & Cooking Tips
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
            View All Articles
          </motion.button>

        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
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
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[350px] object-cover"
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-semibold text-red-500 shadow-lg">
                    {blog.category}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  {/* DATE */}
                  <div className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                    📅 {blog.date}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-bold mt-5 leading-snug">
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 mt-5 leading-8">
                    Explore cooking secrets, healthy food ideas,
                    and trending recipes from professional chefs.
                  </p>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-8 text-red-500 font-semibold"
                  >
                    Read Full Article →
                  </motion.button>

                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}