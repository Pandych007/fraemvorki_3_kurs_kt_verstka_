import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const difficulties = ["Easy", "Medium", "Hard"];

  const addToFavorites = (recipe) => {
    if (!favorites.value.some((fav) => fav.id === recipe.id)) {
      favorites.value.push({
        ...recipe,
        difficulty:
          recipe.difficulty || difficulties[Math.floor(Math.random() * difficulties.length)],
      });
    }
  };

  const removeFromFavorites = (recipeId) => {
    favorites.value = favorites.value.filter((fav) => fav.id !== recipeId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };
});
