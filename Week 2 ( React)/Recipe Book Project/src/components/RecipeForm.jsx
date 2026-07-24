import { useState } from 'react';

function RecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name.trim() || !formData.ingredients.trim() || !formData.instructions.trim()) {
      return;
    }

    onAddRecipe({
      id: Date.now(),
      name: formData.name,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
    });

    setFormData({ name: '', ingredients: '', instructions: '' });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-gray-800">Add a Recipe</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Recipe Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          placeholder="e.g. Spaghetti Carbonara"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="ingredients" className="text-sm font-medium text-gray-700">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          rows={4}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          placeholder="One ingredient per line"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="instructions" className="text-sm font-medium text-gray-700">
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          rows={5}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          placeholder="Step-by-step instructions"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-orange-600 py-2 text-sm font-medium text-white hover:bg-orange-700"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;