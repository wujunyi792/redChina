import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import Vueaxios from 'vue-axios'

createApp(App).use(store).use(router)
    // .use(Vueaxios, axios)
    .mount('#app')
