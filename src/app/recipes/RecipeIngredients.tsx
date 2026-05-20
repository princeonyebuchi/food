interface RecipeIngredientsProps {
  ingredients: string[];
}

export default function RecipeIngredients({
  ingredients,
}: RecipeIngredientsProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">
      <h2 className="text-3xl font-black mb-6">
        Ingredients
      </h2>

      <ul className="space-y-4 text-gray-600">
        {ingredients.map((ingredient, index) => (
          <li key={index}>• {ingredient}</li>
        ))}
      </ul>
    </div>
  );
}