import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecipesStore = defineStore("recipes", () => {
  const recipes = ref([]);
  const searchQuery = ref("");
  const favorites = ref([]);

  const fetchRecipes = async () => {
    if (!searchQuery.value) return;
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchQuery.value}`);
      const data = await response.json();
      recipes.value = data.recipes || [];
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const addToFavorites = (recipe) => {
    if (!favorites.value.some((fav) => fav.id === recipe.id)) {
      favorites.value.push({ ...recipe });
    }
  };

  const removeFromFavorites = (recipeId) => {
    favorites.value = favorites.value.filter((fav) => fav.id !== recipeId);
  };

  return {
    recipes,
    searchQuery,
    favorites,
    fetchRecipes,
    addToFavorites,
    removeFromFavorites,
  };
});
