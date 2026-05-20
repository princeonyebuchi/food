// src/app/contact/page.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={24} />,
    title: "Email Address",
    value: "support@foodclone.com",
    link: "mailto:support@foodclone.com",
  },
  {
    icon: <FiPhone size={24} />,
    title: "Phone Number",
    value: "+1 (234) 567-890",
    link: "tel:+1234567890",
  },
  {
    icon: <FiMapPin size={24} />,
    title: "Office Location",
    value: "New York, United States",
    link: "#",
  },
  {
    icon: <FiClock size={24} />,
    title: "Working Hours",
    value: "Mon - Fri : 9AM - 6PM",
    link: "#",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto text-center">
          
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-red-100 text-red-500 px-6 py-3 rounded-full font-semibold"
          >
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mt-8 leading-tight"
          >
            Let’s Talk About
            <span className="text-red-500"> Food</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8"
          >
            Have questions, feedback or partnership ideas? Our team is always
            ready to help you discover amazing food experiences.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-10 lg:p-14"
          >
            
            <div>
              <h2 className="text-4xl font-black text-gray-900">
                Send Us A Message
              </h2>

              <p className="text-gray-500 leading-8 mt-5">
                Fill out the form below and our support team will respond as
                soon as possible.
              </p>
            </div>

            {/* FORM */}
            <form className="mt-12 space-y-7">
              
              <div className="grid md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition"
                  />
                </div>

              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Message
                </label>

                <textarea
                  rows={7}
                  placeholder="Write your message..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition resize-none"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                type="submit"
                className="bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl flex items-center gap-3"
              >
                Send Message
                <FiSend />
              </motion.button>

            </form>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            
            {/* INFO CARDS */}
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{
                  y: -5,
                }}
                className="block bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 transition"
              >
                
                <div className="flex items-start gap-6">
                  
                  <div className="w-16 h-16 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-3 leading-7">
                      {item.value}
                    </p>
                  </div>

                </div>

              </motion.a>
            ))}

            {/* EXTRA CARD */}
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="bg-black rounded-[40px] p-10 text-white overflow-hidden relative"
            >
              
              <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-red-500/20 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl font-black leading-tight">
                  Join Our Food Community
                </h2>

                <p className="text-gray-300 leading-8 mt-6">
                  Discover premium recipes, healthy meals, restaurant guides
                  and trending dishes from around the world.
                </p>

                <Link href="/recipes">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="mt-8 bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-full font-bold"
                  >
                    Explore Recipes
                  </motion.button>
                </Link>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>
    </main>
  );
}