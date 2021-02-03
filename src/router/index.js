import { createRouter, createWebHistory } from "vue-router";

import RecipesSearch from '../components/Recipes/RecipesSearch'

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: RecipesSearch
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
