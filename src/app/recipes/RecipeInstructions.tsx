interface RecipeInstructionsProps {
  steps: string[];
}

export default function RecipeInstructions({
  steps,
}: RecipeInstructionsProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl mt-10">
      <h2 className="text-3xl font-black mb-6">
        Instructions
      </h2>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-5">
            <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <p className="text-gray-600 leading-7 flex-1">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}