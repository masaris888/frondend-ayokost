import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import index.css untuk styling tailwindcss
import './assets/index.css'

createApp(App).use(router).mount('#app')