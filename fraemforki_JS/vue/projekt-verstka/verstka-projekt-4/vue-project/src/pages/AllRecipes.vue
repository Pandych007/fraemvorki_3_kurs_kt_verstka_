<template>
  <div class="container">
    <h1>All Recipes</h1>

    <!-- Поле ввода для поиска рецептов -->
    <input
      v-model="searchQuery"
      @input="fetchRecipes"
      placeholder="Search for recipes..."
      class="search-input"
    />

    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="recipes.length === 0" class="no-results">No recipes found.</div>

    <div class="recipes">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
// import { useRecipesStore } from "../store/useRecipesStore.js";
import { storeToRefs } from "pinia";
import RecipeCard from "../components/RecipeCard.vue";
import { ref, watch } from "vue";

export default {
  components: { RecipeCard },
  setup() {
    const recipesStore = useRecipesStore();
    const { recipes, loading } = storeToRefs(recipesStore);
    const { fetchRecipes } = recipesStore;

    const searchQuery = ref("");

    watch(searchQuery, () => {
      fetchRecipes(searchQuery.value);
    });

    return {
      searchQuery,
      recipes,
      loading,
      fetchRecipes,
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
  margin: 10px 0;
  font-size: 16px;
}

.loading {
  color: blue;
}

.no-results {
  color: red;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
