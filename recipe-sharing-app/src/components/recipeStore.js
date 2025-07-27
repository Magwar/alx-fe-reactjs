import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

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
}));

// Utility for filtering
const applyFilter = (recipes, term) => {
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
};