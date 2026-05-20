import Link from "next/link";

export default function RecipeCTA() {
  return (
    <section className="py-24">
      <div className="bg-red-500 rounded-[40px] p-16 text-center text-white">
        <h2 className="text-5xl font-black">
          Start Cooking Today
        </h2>

        <p className="mt-6 text-red-100 text-lg">
          Explore thousands of professional recipes.
        </p>

        <Link href="/recipes">
          <button className="mt-10 bg-white text-red-500 px-10 py-5 rounded-full font-black hover:bg-black hover:text-white transition">
            Explore Recipes
          </button>
        </Link>
      </div>
    </section>
  );
}