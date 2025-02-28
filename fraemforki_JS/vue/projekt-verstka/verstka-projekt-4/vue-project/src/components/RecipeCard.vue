<template>
  <div class="recipe-card">
    <div>{{ recipe.name }}</div>
    <button @click="addToFavorites(recipe)">Add to Favorites</button>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
  methods: {
    addToFavorites(recipe) {
      this.$emit("add-to-favorites", recipe);
    },
  },
};
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
