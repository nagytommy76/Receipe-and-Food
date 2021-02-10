import { createStore } from "vuex";
import Recipes from './Recipes/index'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules:{
    Recipes,
  },
  plugins: [createPersistedState()],
});
