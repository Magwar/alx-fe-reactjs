import { useEffect } from "react";
import { useRecipeStore } from "./RecipeStore";

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const recommended = useRecipeStore((state) => state.recommendations);
  const generateRecommendations =
    useRecipeStore.getState().generateRecommendations;

  useEffect(() => {
    generateRecommendations();
  }, []);

  const validRecommendations = recommended
    .map((r) => recipes.find((x) => x.id === r.id))
    .filter(Boolean);

  return (
    <div>
      <h2>Recommended for You</h2>
      {validRecommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        validRecommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;