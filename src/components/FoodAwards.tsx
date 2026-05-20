// src/components/FoodAwards.tsx

"use client";

import { motion } from "framer-motion";

const awards = [
  {
    year: "2026",
    title: "Best Food Platform",
    organization: "Global Food Awards",
    icon: "🏆",
  },
  {
    year: "2025",
    title: "Top Delivery Experience",
    organization: "Digital Restaurant Summit",
    icon: "🚀",
  },
  {
    year: "2025",
    title: "Best UI/UX Design",
    organization: "Creative Web Awards",
    icon: "🎨",
  },
  {
    year: "2024",
    title: "Innovation In Food Tech",
    organization: "Future Tech Expo",
    icon: "⚡",
  },
];

export default function FoodAwards() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-orange-100 rounded-full blur-3xl opacity-20"></div>

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
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Awards & Recognition
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
          >
            Recognized Globally <br />
            For Excellence
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="text-gray-500 text-lg leading-8 mt-8"
          >
            Our food platform continues to receive international recognition
            for innovation, premium user experiences and world-class services.
          </motion.p>

        </div>

        {/* AWARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24">

          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="relative bg-white rounded-[40px] p-10 shadow-xl border border-gray-100 overflow-hidden group"
            >

              {/* YEAR */}
              <div className="absolute top-8 right-8 text-6xl font-black text-red-50">
                {award.year}
              </div>

              {/* ICON */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="w-24 h-24 rounded-3xl bg-red-500 flex items-center justify-center text-5xl shadow-2xl shadow-red-500/20 relative z-10"
              >
                {award.icon}
              </motion.div>

              {/* CONTENT */}
              <div className="relative z-10">

                <h3 className="text-4xl font-extrabold mt-10 leading-tight">
                  {award.title}
                </h3>

                <p className="text-gray-500 text-lg mt-6 leading-8">
                  Awarded by {award.organization} for outstanding
                  contributions to the food and technology industry.
                </p>

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    x: 5,
                  }}
                  className="mt-10 text-red-500 font-bold text-lg"
                >
                  View Details →
                </motion.button>

              </div>

              {/* GLOW */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

            </motion.div>
          ))}

        </div>

        {/* FEATURE SECTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-28 bg-black rounded-[45px] overflow-hidden"
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
            alt="Award Winning Restaurant"
            className="w-full h-[700px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/65"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div className="max-w-4xl">

              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-xl"
              >
                Trusted Worldwide
              </motion.span>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight"
              >
                Delivering Excellence <br />
                One Meal At A Time
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="text-gray-300 text-xl leading-9 mt-10"
              >
                From innovative food experiences to premium delivery systems,
                we continue redefining how the world experiences food online.
              </motion.p>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

                {[
                  {
                    value: "50+",
                    label: "Global Awards",
                  },
                  {
                    value: "10M+",
                    label: "Happy Users",
                  },
                  {
                    value: "120+",
                    label: "Countries",
                  },
                  {
                    value: "5K+",
                    label: "Restaurants",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                  >

                    <h3 className="text-4xl font-black text-white">
                      {stat.value}
                    </h3>

                    <p className="text-gray-300 mt-3">
                      {stat.label}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}