export default function RecipeNewsletter() {
  return (
    <section className="py-24">
      <div className="bg-black rounded-[40px] p-16 text-center text-white">
        <h2 className="text-5xl font-black">
          Subscribe To Our Newsletter
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Get premium recipes directly in your inbox.
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-10 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-7 py-5 rounded-full text-black outline-none"
          />

          <button className="bg-red-500 hover:bg-red-600 px-10 py-5 rounded-full font-bold transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}