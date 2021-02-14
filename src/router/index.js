import { createRouter, createWebHistory } from "vue-router";

import RecipesSearch from '../components/Recipes/RecipesSearch'
import RecipeDetails from '../components/Recipes/RecipeDetails'
import NotFound from '../components/BaseComponents/Error/PageNotFound'

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: RecipesSearch,
  },
  {
    path: '/details/:recipeId',
    name: 'RecipeDetails',
    component: RecipeDetails,
    props: true,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { 
        top: 0,
        behavior: 'smooth'
      }
    }
  },
  routes
});

export default router;
