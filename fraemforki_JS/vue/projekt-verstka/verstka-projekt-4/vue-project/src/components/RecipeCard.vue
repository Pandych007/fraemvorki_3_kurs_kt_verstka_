<template>
  <div class="recipe-card">
    <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
    <h3>{{ recipe.name }}</h3>
    <p><strong>Difficulty:</strong> {{ recipe.difficulty || "Unknown" }}</p>
  </div>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
};
</script>

<style scoped>
.recipe-card {
  padding: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
