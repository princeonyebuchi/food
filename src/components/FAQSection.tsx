// src/components/FAQSection.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse meals, choose your favorite recipes or foods, add them to cart and complete checkout securely.",
    link: "/order",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Most deliveries arrive within 15–30 minutes depending on your location and restaurant availability.",
    link: "/delivery",
  },
  {
    question: "Can I track my order live?",
    answer:
      "Yes, you can track your order in real-time directly from your dashboard after checkout.",
    link: "/tracking",
  },
  {
    question: "Do you offer healthy meal options?",
    answer:
      "Absolutely. We provide healthy, vegan, keto and nutrition-focused meal categories for all lifestyles.",
    link: "/healthy-meals",
  },
  {
    question: "Can restaurants partner with us?",
    answer:
      "Yes. Restaurants and chefs can easily join our growing food partner network worldwide.",
    link: "/partners",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* FLOATING PARTICLES */}
      {Array.from({ length: 24 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-red-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-semibold"
          >
            Frequently Asked Questions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight"
          >
            Everything You Need <br />
            To Know
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl mx-auto"
          >
            Find answers to common questions about ordering food,
            delivery services, partnerships and our premium platform.
          </motion.p>

        </div>

        {/* FAQ LIST */}
        <div className="mt-24 space-y-6">

          {faqs.map((faq, index) => {
            const isActive = active === index;

            return (
              <Link key={index} href={faq.link}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden cursor-pointer"
                >

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setActive(isActive ? null : index)
                    }
                    className="w-full flex items-center justify-between text-left p-8"
                  >

                    <h3 className="text-2xl font-bold text-white pr-10">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{
                        rotate: isActive ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white text-3xl font-light shrink-0"
                    >
                      +
                    </motion.div>

                  </button>

                  {/* ANSWER */}
                  <AnimatePresence>

                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-8 pb-8">

                          <div className="h-[1px] bg-white/10 mb-6"></div>

                          <p className="text-gray-400 text-lg leading-8">
                            {faq.answer}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              </Link>
            );
          })}

        </div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 bg-white rounded-[40px] p-14 text-center overflow-hidden"
        >

          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10">

            <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Still Have Questions?
            </h3>

            <p className="text-gray-500 text-lg leading-8 mt-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with
              orders, deliveries and partnerships.
            </p>

            <Link href="/support">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-red-500 hover:bg-red-600 transition text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-red-500/20"
              >
                Contact Support
              </motion.button>
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}