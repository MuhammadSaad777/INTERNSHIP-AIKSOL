function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md transition hover:shadow-lg">
      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
        <button
          onClick={() => onDelete(recipe.id)}
          className="rounded-md bg-red-500 px-2.5 py-1 text-xs text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>

      <div className="mb-3">
        <p className="mb-1 text-sm font-medium text-gray-600">Ingredients</p>
        <p className="whitespace-pre-line text-sm text-gray-500">{recipe.ingredients}</p>
      </div>

      <div>
        <p className="mb-1 text-sm font-medium text-gray-600">Instructions</p>
        <p className="whitespace-pre-line text-sm text-gray-500">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeCard;