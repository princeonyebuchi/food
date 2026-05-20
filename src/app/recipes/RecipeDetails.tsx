interface RecipeDetailsProps {
  title: string;
  description: string;
}

export default function RecipeDetails({
  title,
  description,
}: RecipeDetailsProps) {
  return (
    <div>
      <h1 className="text-5xl font-black text-gray-900">
        {title}
      </h1>

      <p className="text-gray-600 text-lg leading-8 mt-6">
        {description}
      </p>
    </div>
  );
}