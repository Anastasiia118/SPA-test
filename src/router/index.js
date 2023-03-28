import { createRouter, createWebHistory } from 'vue-router'
import TablePage from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/api/data',
      name: 'table',
      component: TablePage
    },
  ]
})

export default router
