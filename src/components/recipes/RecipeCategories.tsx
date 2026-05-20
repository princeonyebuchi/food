"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    recipes: "120+ Recipes",
    href: "/recipes/healthy",
  },
  {
    id: 2,
    name: "Desserts",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
    recipes: "80+ Recipes",
    href: "/recipes/desserts",
  },
  {
    id: 3,
    name: "Seafood",
    image:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=1200&auto=format&fit=crop",
    recipes: "60+ Recipes",
    href: "/recipes/seafood",
  },
  {
    id: 4,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    recipes: "95+ Recipes",
    href: "/recipes/pizza",
  },
  {
    id: 5,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    recipes: "70+ Recipes",
    href: "/recipes/burger",
  },
  {
    id: 6,
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    recipes: "110+ Recipes",
    href: "/recipes/pasta",
  },
];

export default function RecipeCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          className="group"
        >
          <Link href={category.href}>
            <div className="relative h-[320px] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-black">
                  {category.name}
                </h3>

                <p className="mt-3 text-white/80">
                  {category.recipes}
                </p>

                <button className="mt-6 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-full font-semibold">
                  Explore Recipes
                </button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}