interface RecipeStatsProps {
  calories: string;
  servings: string;
  difficulty: string;
}

export default function RecipeStats({
  calories,
  servings,
  difficulty,
}: RecipeStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
        <h3 className="text-2xl font-black text-red-500">
          {calories}
        </h3>

        <p className="text-gray-500 mt-2">Calories</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
        <h3 className="text-2xl font-black text-red-500">
          {servings}
        </h3>

        <p className="text-gray-500 mt-2">Servings</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl text-center">
        <h3 className="text-2xl font-black text-red-500">
          {difficulty}
        </h3>

        <p className="text-gray-500 mt-2">Difficulty</p>
      </div>
    </div>
  );
}