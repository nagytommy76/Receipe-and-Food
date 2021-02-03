import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
axios.defaults.baseURL = 'https://api.spoonacular.com'
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount("#app");