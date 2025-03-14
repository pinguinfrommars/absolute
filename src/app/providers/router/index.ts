import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { home } from './home.route'
import { resident } from './resident.route'

export const routes: RouteRecordRaw[] = [...home, ...resident]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
