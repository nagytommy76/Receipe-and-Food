import { createStore } from "vuex";
import Recipes from './Recipes/index'
import Screen from './Screen/index'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules:{
    Recipes,
    Screen,
  },
  plugins: [createPersistedState()],
});
