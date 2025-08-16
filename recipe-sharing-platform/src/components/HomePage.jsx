import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg"/>
                <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
                <Link to={`/recipe/${recipe.id}`} className="inline-block mt-4 text-blue-500 hover:underline">
                  View Recipe
                </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;