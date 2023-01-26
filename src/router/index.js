import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Pages/Home.vue'
import Products from '../components/Pages/Products.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products/:restaurant',
      name: 'products',
      component: Products,
      params: true
    }
  ]
})

export default router
