import { createRouter, createWebHistory } from "vue-router";

import RecipesSearch from '../components/Recipes/RecipesSearch'
import RecipeDetails from '../components/Recipes/RecipeDetails'

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: RecipesSearch,
    children: [
      {
        path: '/details/:recipeId',
        name: 'RecipeDetails',
        component: RecipeDetails,
        props: true,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
