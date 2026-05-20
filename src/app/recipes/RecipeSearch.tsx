"use client";

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

interface RecipeSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RecipeSearch({
  value,
  onChange,
}: RecipeSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto bg-white rounded-full shadow-2xl overflow-hidden flex items-center"
    >
      <div className="pl-7 text-gray-400">
        <FiSearch size={22} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search recipes..."
        className="flex-1 px-5 py-6 outline-none text-lg"
      />

      <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-6 font-semibold transition">
        Search
      </button>
    </motion.div>
  );
}