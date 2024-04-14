import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import store from './store'; // Import your Vuex store
import '@mdi/font/css/materialdesignicons.css';


  createApp(App)
  .use(router)
  .use(store)
  .mount('#app')