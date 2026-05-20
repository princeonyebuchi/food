// src/components/Footer.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Company: [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Our Team",
      href: "/team",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],

  Recipes: [
    {
      name: "Trending Recipes",
      href: "/recipes/trending",
    },
    {
      name: "Healthy Meals",
      href: "/recipes/healthy",
    },
    {
      name: "Desserts",
      href: "/recipes/desserts",
    },
    {
      name: "Seafood",
      href: "/recipes/seafood",
    },
  ],

  Support: [
    {
      name: "Help Center",
      href: "/help-center",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      href: "/terms",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* PARTICLES */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.7, 0.2],
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

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-4 gap-16 py-24 border-b border-white/10">

          {/* BRAND */}
          <div>

            <Link href="/">
              <motion.h1
                whileHover={{
                  scale: 1.05,
                }}
                className="text-5xl font-black text-white cursor-pointer"
              >
                food
              </motion.h1>
            </Link>

            <p className="text-gray-400 leading-8 mt-8">
              Discover delicious recipes, professional cooking tutorials,
              healthy meals and food inspiration from around the world.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-10">

              {[
                {
                  icon: "F",
                  href: "https://facebook.com",
                },
                {
                  icon: "X",
                  href: "https://x.com",
                },
                {
                  icon: "I",
                  href: "https://instagram.com",
                },
                {
                  icon: "Y",
                  href: "https://youtube.com",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-lg font-bold cursor-pointer hover:bg-red-500 transition"
                  >
                    {item.icon}
                  </motion.div>
                </a>
              ))}

            </div>

          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>

              <h3 className="text-2xl font-bold text-white mb-8">
                {title}
              </h3>

              <ul className="space-y-5">

                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                  >
                    <motion.li
                      whileHover={{
                        x: 5,
                      }}
                      className="text-gray-400 hover:text-red-400 transition cursor-pointer"
                    >
                      {link.name}
                    </motion.li>
                  </Link>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 food.com Clone. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-gray-500">

            <Link href="/privacy-policy">
              <motion.p
                whileHover={{
                  color: "#ffffff",
                }}
                className="cursor-pointer transition"
              >
                Privacy
              </motion.p>
            </Link>

            <Link href="/terms">
              <motion.p
                whileHover={{
                  color: "#ffffff",
                }}
                className="cursor-pointer transition"
              >
                Terms
              </motion.p>
            </Link>

            <Link href="/cookies">
              <motion.p
                whileHover={{
                  color: "#ffffff",
                }}
                className="cursor-pointer transition"
              >
                Cookies
              </motion.p>
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}