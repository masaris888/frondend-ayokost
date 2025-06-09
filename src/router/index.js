import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import KelolaView from '../Views/KelolaView.vue'

// menambahkan route kelola kamar

const routes = [
  { path: '/', component: HomeView },
  { path: '/kelola', component: KelolaView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router