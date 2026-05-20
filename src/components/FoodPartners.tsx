// src/components/FoodPartners.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Uber Eats",
    icon: "🚗",
    link: "https://www.ubereats.com",
  },
  {
    name: "DoorDash",
    icon: "🛵",
    link: "https://www.doordash.com",
  },
  {
    name: "Grubhub",
    icon: "🍔",
    link: "https://www.grubhub.com",
  },
  {
    name: "Food Panda",
    icon: "🐼",
    link: "https://www.foodpanda.com",
  },
  {
    name: "Zomato",
    icon: "🍕",
    link: "https://www.zomato.com",
  },
  {
    name: "Deliveroo",
    icon: "📦",
    link: "https://deliveroo.co.uk",
  },
];

export default function FoodPartners() {
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
        <div className="text-center max-w-4xl mx-auto">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Trusted Partners
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mt-8 leading-tight"
          >
            Partnered With The <br />
            Biggest Food Brands
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg leading-8 mt-8"
          >
            We collaborate with globally recognized food and delivery
            companies to bring premium experiences to our users.
          </motion.p>

        </div>

        {/* PARTNERS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 mt-24">

          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.link}
              target="_blank"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="relative bg-white border border-gray-100 rounded-[35px] p-8 flex flex-col items-center justify-center shadow-lg group overflow-hidden cursor-pointer"
              >

                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="text-6xl"
                >
                  {partner.icon}
                </motion.div>

                {/* NAME */}
                <h3 className="text-xl font-bold mt-6 text-center">
                  {partner.name}
                </h3>

                {/* GLOW */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"></div>

              </motion.div>
            </Link>
          ))}

        </div>

        {/* BOTTOM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 bg-black rounded-[40px] overflow-hidden p-14 text-center"
        >

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/20 via-orange-500/10 to-red-500/20"></div>

          <div className="relative z-10">

            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Become A Food Partner <br />
              And Grow Your Business
            </h3>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl mx-auto">
              Join our growing network of restaurants, chefs and delivery
              companies to reach millions of hungry customers worldwide.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-red-500/20"
            >
              Partner With Us
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}