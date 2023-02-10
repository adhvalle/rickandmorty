import { createRouter, createWebHistory } from 'vue-router'
import fetchCharacters from '@/router/interceptor/fetch-characters'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter: [
        fetchCharacters
      ]
    }
  ]
})

export default router
