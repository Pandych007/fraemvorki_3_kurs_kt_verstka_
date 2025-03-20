<template>
  <div class="container">
    <h1>Favorite Recipes ({{ favorites.length }})</h1>

    <select v-model="selectedDifficulty" class="filter-select">
      <option value="All">All</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>

    <div v-if="filteredFavorites.length === 0" class="no-favorites">
      No favorite recipes matching your filter.
    </div>

    <div class="recipes">
      <div v-for="recipe in filteredFavorites" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
        <h3>{{ recipe.name }}</h3>
        <p><strong>Difficulty:</strong> {{ recipe.difficulty }}</p>
        <button @click="removeFromFavorites(recipe.id)" class="btn remove-btn">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoritesStore } from "../store/useFavoritesStore.js";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

export default {
  setup() {
    const favoritesStore = useFavoritesStore();
    const { favorites } = storeToRefs(favoritesStore);
    const { removeFromFavorites } = favoritesStore;
    const selectedDifficulty = ref("All");

    const filteredFavorites = computed(() => {
      if (selectedDifficulty.value === "All") {
        return favorites.value;
      }
      return favorites.value.filter((recipe) => recipe.difficulty === selectedDifficulty.value);
    });

    return {
      favorites,
      removeFromFavorites,
      selectedDifficulty,
      filteredFavorites,
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

.filter-select {
  margin: 10px 0;
  padding: 8px;
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

.remove-btn {
  background: #d9534f;
}

.remove-btn:hover {
  background: #c9302c;
}
</style>
