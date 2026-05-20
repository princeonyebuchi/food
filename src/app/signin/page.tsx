// src/app/signin/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`
Welcome ${formData.name}

Email: ${formData.email}
Password: ${formData.password}
    `);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[140px]" />
      </div>

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden items-center justify-center p-10 lg:flex"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
              alt="Food"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/20 px-5 py-2 text-orange-300 backdrop-blur-xl">
                Premium Food Platform
              </div>

              <h1 className="mb-6 max-w-xl text-6xl font-black leading-tight">
                Discover Amazing Recipes & Luxury Meals
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-gray-300">
                Explore premium dishes, modern recipes, luxury meals, and chef
                crafted experiences from around the world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center px-6 py-12"
        >
          <div className="w-full max-w-xl rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl md:p-12">
            {/* Logo */}
            <Link
              href="/"
              className="mb-10 inline-block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-5xl font-black text-transparent"
            >
              Food.com
            </Link>

            {/* Header */}
            <div className="mb-10">
              <h2 className="mb-4 text-5xl font-black">Welcome Back</h2>

              <p className="text-lg text-gray-400">
                Sign in to continue your food journey.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-300">
                  Full Name
                </label>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 transition-all duration-300 focus-within:border-orange-400">
                  <FiUser className="text-xl text-orange-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-300">
                  Email Address
                </label>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 transition-all duration-300 focus-within:border-orange-400">
                  <FiMail className="text-xl text-orange-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-300">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-orange-400 hover:text-orange-300"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 transition-all duration-300 focus-within:border-orange-400">
                  <FiLock className="text-xl text-orange-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 transition-all duration-300 hover:text-orange-400"
                  >
                    {showPassword ? (
                      <FiEyeOff size={22} />
                    ) : (
                      <FiEye size={22} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-3 text-gray-400">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-orange-500"
                  />
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 py-5 text-lg font-bold shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Sign In
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-10">
              <div className="border-t border-white/10" />

              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#020617] px-4 text-sm text-gray-500">
                OR CONTINUE WITH
              </span>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-5">
              <button className="rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition-all duration-300 hover:bg-white/10">
                Google
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold transition-all duration-300 hover:bg-white/10">
                Facebook
              </button>
            </div>

            {/* Footer */}
            <p className="mt-10 text-center text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-orange-400 hover:text-orange-300"
              >
                Create Account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}