"use client";

export default function PopularRecipes() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-xl">
      <h2 className="text-4xl font-black text-gray-900">
        Popular Recipes
      </h2>

      <p className="text-gray-500 mt-4 leading-7">
        Discover the most loved recipes from our food community.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100"
          >
            <div className="h-[220px] bg-red-100" />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Delicious Recipe {item}
              </h3>

              <p className="text-gray-500 mt-3">
                Premium recipe inspiration with amazing flavors.
              </p>

              <button className="mt-6 bg-black hover:bg-red-500 transition text-white px-6 py-3 rounded-full font-semibold">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}