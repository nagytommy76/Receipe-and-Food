import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'https://api.spoonacular.com'
const app = createApp(App)

import BaseButton from './components/BaseComponents/Form/BaseButton'
app.component('base-button', BaseButton)

app.component('form-input', defineAsyncComponent(() => import('./components/BaseComponents/Form/FormInput')))
app.component('form-select', defineAsyncComponent(() => import('./components/BaseComponents/Form/FormSelect')))
app.component('form-select', defineAsyncComponent(() => import('./components/BaseComponents/Form/FormSelect')))
app.component('error-msg', defineAsyncComponent(() => import('./components/BaseComponents/Form/BaseErrorMsg')))

app.component('tooltip', defineAsyncComponent(() => import('./components/BaseComponents/Utility/Tooltip')))

app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount("#app");