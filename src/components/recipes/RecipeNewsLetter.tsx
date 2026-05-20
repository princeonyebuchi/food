// src/components/recipes/RecipeNewsletter.tsx

"use client";

export default function RecipeNewsletter() {
  return (
    <section className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-orange-500 to-pink-500 p-[1px] shadow-2xl">
        <div className="rounded-[2rem] bg-white dark:bg-black px-8 md:px-16 py-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-6">
            Subscribe To Our Newsletter
          </h2>

          <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
            Get delicious recipes, cooking inspiration, and food tips every
            week directly in your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-[400px] px-6 py-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white outline-none"
            />

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}