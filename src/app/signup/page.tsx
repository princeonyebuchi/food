// src/app/signup/page.tsx

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
  FiPhone,
  FiUser,
} from "react-icons/fi";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
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

    console.log("User Data:", formData);

    alert(`
🎉 Account Created Successfully!

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
    `);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[140px]" />
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
              src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=1600&auto=format&fit=crop"
              alt="Food"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/20 px-5 py-2 text-sm font-black text-orange-300 backdrop-blur-xl">
                Premium Food Community
              </div>

              <h1 className="mb-6 max-w-xl text-6xl font-black leading-tight">
                Create Your Food Journey
              </h1>

              <p className="max-w-lg text-lg font-semibold leading-relaxed text-gray-200">
                Join thousands of food lovers discovering premium recipes,
                delicious meals, and chef-crafted experiences every day.
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
            {/* LOGO */}
            <Link
              href="/"
              className="mb-10 inline-block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-5xl font-black text-transparent"
            >
              Food.com
            </Link>

            {/* HEADER */}
            <div className="mb-10">
              <h2 className="mb-4 text-5xl font-black text-white">
                Create Account
              </h2>

              <p className="text-lg font-bold text-gray-200">
                Sign up and start exploring amazing recipes.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FULL NAME */}
              <div>
                <label className="mb-3 block text-base font-black text-white">
                  Full Name
                </label>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 transition-all duration-300 focus-within:border-orange-400">
                  <FiUser className="text-xl text-orange-400" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-transparent text-white font-semibold outline-none placeholder:font-bold placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-3 block text-base font-black text-white">
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
                    className="w-full bg-transparent text-white font-semibold outline-none placeholder:font-bold placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-3 block text-base font-black text-white">
                  Phone Number
                </label>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 transition-all duration-300 focus-within:border-orange-400">
                  <FiPhone className="text-xl text-orange-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-transparent text-white font-semibold outline-none placeholder:font-bold placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-3 block text-base font-black text-white">
                  Password
                </label>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 transition-all duration-300 focus-within:border-orange-400">
                  <FiLock className="text-xl text-orange-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    required
                    className="w-full bg-transparent text-white font-semibold outline-none placeholder:font-bold placeholder:text-gray-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-300 transition-all duration-300 hover:text-orange-400"
                  >
                    {showPassword ? (
                      <FiEyeOff size={22} />
                    ) : (
                      <FiEye size={22} />
                    )}
                  </button>
                </div>
              </div>

              {/* TERMS */}
              <label className="flex cursor-pointer items-start gap-3 text-sm font-semibold text-gray-300">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 accent-orange-500"
                />

                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-bold text-orange-400 hover:text-orange-300"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-bold text-orange-400 hover:text-orange-300"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 py-5 text-lg font-black shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Create Account

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            {/* DIVIDER */}
            <div className="relative my-10">
              <div className="border-t border-white/10" />

              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#020617] px-4 text-sm font-black text-gray-400">
                OR SIGN UP WITH
              </span>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-5">
              <button className="rounded-2xl border border-white/10 bg-white/5 py-4 font-black transition-all duration-300 hover:bg-white/10">
                Google
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 py-4 font-black transition-all duration-300 hover:bg-white/10">
                Facebook
              </button>
            </div>

            {/* FOOTER */}
            <p className="mt-10 text-center font-semibold text-gray-300">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-black text-orange-400 hover:text-orange-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}