"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCoffee,
  FiHeart,
  FiStar,
  FiShoppingBag,
  FiSun,
  FiAward,
} from "react-icons/fi";

const categories = [
  {
    id: 1,
    title: "Healthy Meals",
    icon: <FiHeart size={28} />,
    recipes: "120+ Recipes",
    href: "/recipes/healthy",
  },
  {
    id: 2,
    title: "Breakfast",
    icon: <FiCoffee size={28} />,
    recipes: "80+ Recipes",
    href: "/recipes/breakfast",
  },
  {
    id: 3,
    title: "Desserts",
    icon: <FiStar size={28} />,
    recipes: "95+ Recipes",
    href: "/recipes/desserts",
  },
  {
    id: 4,
    title: "Fast Food",
    icon: <FiShoppingBag size={28} />,
    recipes: "70+ Recipes",
    href: "/recipes/fast-food",
  },
  {
    id: 5,
    title: "Vegan",
    icon: <FiSun size={28} />,
    recipes: "60+ Recipes",
    href: "/recipes/vegan",
  },
  {
    id: 6,
    title: "Chef Specials",
    icon: <FiAward size={28} />,
    recipes: "40+ Recipes",
    href: "/recipes/specials",
  },
];

export default function RecipeCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <Link key={category.id} href={category.href}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100 cursor-pointer hover:border-red-200 transition relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative w-16 h-16 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-lg">
              {category.icon}
            </div>

            <div className="relative mt-8">
              <h3 className="text-2xl font-black text-gray-900">
                {category.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {category.recipes}
              </p>

              <button className="mt-6 bg-black hover:bg-red-500 transition text-white px-6 py-3 rounded-full font-semibold">
                Explore Category
              </button>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}