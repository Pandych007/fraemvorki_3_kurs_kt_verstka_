import { createRouter, createWebHistory } from "vue-router";
import AllRecipes from "../pages/AllRecipes.vue";
import FavoriteRecipes from "../pages/FavoriteRecipes.vue";

const routes = [
  { path: "/", component: AllRecipes },
  { path: "/favorites", component: FavoriteRecipes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
