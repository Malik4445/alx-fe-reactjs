import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // New state for favorites and recommendations
  favorites: [],
  recommendations: [],

  // Existing actions...
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // New actions for favorites and recommendations
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set(state => {
    // This is a mock recommendation system.
    // In a real app, this logic would be more sophisticated.
    const favoriteRecipes = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
    );
    // Get 3 random recipes from the favorite list
    const recommended = [...favoriteRecipes].sort(() => 0.5 - Math.random()).slice(0, 3);
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;