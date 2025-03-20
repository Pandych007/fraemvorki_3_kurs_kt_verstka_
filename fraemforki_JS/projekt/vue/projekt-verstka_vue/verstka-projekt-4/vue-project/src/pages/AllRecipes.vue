<template>
  <div class="container">
    <input
      v-model="searchQuery"
      @input="fetchRecipes"
      placeholder="Search recipes..."
      class="search-input"
    />

    <div v-if="recipes.length === 0 && searchQuery" class="no-results">No results found</div>

    <div class="recipes">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
        <h3>{{ recipe.name }}</h3>
        <button @click="addToFavorites(recipe)" class="btn">Add to Favorites</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRecipesStore } from "../store/useRecipesStore.js";
import { useFavoritesStore } from "../store/useFavoritesStore.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const recipesStore = useRecipesStore();
    const favoritesStore = useFavoritesStore();

    const { recipes, searchQuery } = storeToRefs(recipesStore);
    const { fetchRecipes } = recipesStore;
    const { addToFavorites } = favoritesStore;

    return {
      recipes,
      searchQuery,
      fetchRecipes,
      addToFavorites,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.recipe-card {
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.btn {
  margin-top: 10px;
  padding: 8px 12px;
  background: #ff6600;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn:hover {
  background: #e65c00;
}
</style>
