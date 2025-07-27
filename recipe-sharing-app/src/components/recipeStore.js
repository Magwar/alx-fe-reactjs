import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: applyFilter(updated, state.searchTerm),
      };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: applyFilter(updated, state.searchTerm),
      };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: applyFilter(updated, state.searchTerm),
        favorites: state.favorites.filter((favId) => favId !== id),
        recommendations: state.recommendations.filter((rec) => rec.id !== id),
      };
    });
  },

  setSearchTerm: (term) => {
    set((state) => ({
      searchTerm: term,
      filteredRecipes: applyFilter(state.recipes, term),
    }));
  },

  setRecipes: (recipes) => {
    set((state) => ({
      recipes,
      filteredRecipes: applyFilter(recipes, state.searchTerm),
    }));
  },

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      // Very basic mock logic for demo purposes
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

const applyFilter = (recipes, term) =>
  recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );