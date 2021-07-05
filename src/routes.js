import { createWebHistory, createRouter } from "vue-router";
import Login from './components/Login.vue';
import Recipes from './components/Recipes.vue';
import RecipeDetails from "./components/RecipeDetails.vue";
import BookMarks from './components/BookMarks.vue';

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  }, {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/details/:id",
    name: "Recipe Details",
    component: RecipeDetails,
  },
  {
    path: "/bookmarks",
    name: "BookMarks",
    component: BookMarks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;