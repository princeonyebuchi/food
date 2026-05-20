// src/components/CustomerReviews.tsx

"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sophia Williams",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    review:
      "This platform completely changed how I discover recipes. The meals are amazing and the UI feels premium.",
    rating: "5.0",
    link: "https://example.com/sophia-review",
  },
  {
    name: "Daniel Smith",
    role: "Chef",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    review:
      "Absolutely mind blowing experience. Fast delivery, beautiful design and thousands of delicious recipes.",
    rating: "4.9",
    link: "https://example.com/daniel-review",
  },
  {
    name: "Olivia Brown",
    role: "Nutrition Expert",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    review:
      "I love the healthy food section and professional chef tutorials. Everything feels modern and smooth.",
    rating: "5.0",
    link: "https://example.com/olivia-review",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* BACKGROUND LIGHTS */}
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
        <div className="text-center max-w-4xl mx-auto">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Customer Reviews
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
          >
            Loved By Food Lovers <br />
            Around The World
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg leading-8 mt-8"
          >
            Thousands of food enthusiasts trust our platform daily
            for premium recipes, fast delivery and quality meals.
          </motion.p>

        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24">

          {reviews.map((review, index) => (
            <a
              key={index}
              href={review.link}
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
                  y: -12,
                  scale: 1.02,
                }}
                className="relative bg-white rounded-[40px] p-10 shadow-xl overflow-hidden group cursor-pointer"
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-red-100"
                    />

                    <div>

                      <h3 className="text-2xl font-bold">
                        {review.name}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {review.role}
                      </p>

                    </div>

                  </div>

                  {/* RATING */}
                  <div className="bg-red-100 text-red-500 px-4 py-2 rounded-full font-bold">
                    ⭐ {review.rating}
                  </div>

                </div>

                {/* REVIEW */}
                <p className="text-gray-600 leading-9 text-lg mt-10">
                  “{review.review}”
                </p>

                {/* QUOTE ICON */}
                <div className="absolute bottom-6 right-8 text-[120px] font-black text-red-50 leading-none">
                  ”
                </div>

                {/* GLOW */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}