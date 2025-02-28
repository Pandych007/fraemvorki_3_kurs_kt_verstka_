import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/LoginView.vue";
import PrivateView from "../components/PrivateView.vue";
import PublicView from "../components/PublicView.vue";
import HomeView from "../components/HomeView.vue";

function checkAuth() {
  let password = localStorage.getItem("token");
  if (password === "") {
    return true;
  } else {
    return false;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/users",
      component: PublicView,
    },
    {
      path: "/profile",
      component: PrivateView,
    },
    {
      path: "/login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/private" && !checkAuth()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
