import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { home } from './home.route'
import { uiKit } from './uikit.route'

export const routes: RouteRecordRaw[] = [...home, ...uiKit]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
