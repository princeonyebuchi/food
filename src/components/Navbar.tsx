// src/components/Navbar.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useMemo } from "react";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // FIXED PARTICLES (Hydration Safe)
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, index) => ({
        id: index,
        initialX: Math.random() * 1600,
        initialY: Math.random() * 120,

        animateY: [
          Math.random() * 120,
          Math.random() * 40,
          Math.random() * 120,
        ],

        animateX: [
          Math.random() * 1600,
          Math.random() * 1600,
          Math.random() * 1600,
        ],
      })),
    []
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200 overflow-hidden"
    >
      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <motion.span
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-red-400/40"
            initial={{
              x: particle.initialX,
              y: particle.initialY,
              opacity: 0.3,
            }}
            animate={{
              y: particle.animateY,
              x: particle.animateX,
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* GLOW EFFECT */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-transparent via-red-200/20 to-transparent blur-3xl"
      />

      {/* NAV CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-14">
          {/* LOGO */}
          <Link href="/">
            <motion.h1
              whileHover={{
                scale: 1.08,
                rotate: -2,
              }}
              className="text-4xl font-black tracking-tight text-red-500 cursor-pointer relative"
            >
              food

              <motion.span
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -top-2 -right-4 w-3 h-3 bg-red-500 rounded-full"
              />
            </motion.h1>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -3 }}
                className="relative text-[15px] font-semibold text-gray-700 hover:text-red-500 transition cursor-pointer group"
              >
                <Link href={item.path}>{item.name}</Link>

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: 6,
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition shadow-md"
          >
            <FiSearch size={20} />
          </motion.button>

          {/* SIGN IN */}
          <Link href="/signin">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold shadow-xl shadow-red-200 transition relative overflow-hidden"
            >
              <motion.span
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <span className="relative z-10">
                Sign In
              </span>
            </motion.button>
          </Link>

          {/* MOBILE MENU */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 90 }}
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-100"
          >
            <FiMenu size={22} />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}