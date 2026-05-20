// src/components/Testimonials.tsx

"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Food Blogger",
    review:
      "This platform completely changed the way I discover recipes. The food ideas are premium and easy to cook.",
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Professional Chef",
    review:
      "The recipe collection is incredible. I love the clean design and the professional cooking inspiration.",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Healthy Lifestyle Coach",
    review:
      "Perfect place for healthy meals and trending dishes. Everything feels modern and beautifully designed.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-red-100 text-red-500 px-6 py-2 rounded-full font-semibold"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-black text-gray-900 mt-8"
          >
            What Our Users Say
          </motion.h2>

          <p className="text-gray-500 text-lg leading-8 mt-6">
            Thousands of food lovers trust our recipes and cooking inspiration
            every single day.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-gray-50 rounded-[35px] p-10 shadow-xl border border-gray-100"
            >
              
              {/* STARS */}
              <div className="flex items-center gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-600 leading-8 mt-8 text-lg">
                “{item.review}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-4 mt-10">
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-black text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {item.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}