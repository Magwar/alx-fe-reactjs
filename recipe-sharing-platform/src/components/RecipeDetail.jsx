import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
    // Get the recipe ID from the URL parameters using useParams hook
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // find recipe by id (convert id to number since data.json uses numbers)
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>Recipe not found.</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-blue-300 shadow rounded-lg p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-6">{recipe.title}</h1>
      <p className="text-gray-700 mt-4">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-green-600">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;