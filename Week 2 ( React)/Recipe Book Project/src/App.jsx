import { useState } from 'react';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import RecipeCard from './components/RecipeCard';

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Pancakes',
      ingredients: 'Flour\nEggs\nMilk\nSugar\nBaking powder',
      instructions: 'Mix dry ingredients. Add wet ingredients. Cook on a hot griddle until golden.',
    },
  ]);

  function handleAddRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  function handleDeleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div>
      <Header />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-[350px_1fr]">
        <div>
          <RecipeForm onAddRecipe={handleAddRecipe} />
        </div>

        <div>
          {recipes.length === 0 ? (
            <p className="text-center text-gray-400">No recipes yet — add one!</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDeleteRecipe} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;