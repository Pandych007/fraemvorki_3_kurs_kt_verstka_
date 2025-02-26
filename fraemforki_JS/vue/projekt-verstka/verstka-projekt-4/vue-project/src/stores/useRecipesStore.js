import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecipesStore = defineStore("recipes", () => {
  const recipes = ref([]);
  const loading = ref(false);

  const fetchRecipes = async (query) => {
    if (!query.trim()) {
      recipes.value = [];
      return;
    }

    loading.value = true;
    try {
      const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await response.json();
      recipes.value = data.recipes || [];
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    recipes,
    loading,
    fetchRecipes,
  };
});
