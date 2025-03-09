import type { RouteRecordRaw } from 'vue-router'
export const resident: RouteRecordRaw[] = [
  {
    path: '/resident',
    name: 'resident',
    component: () => import('@/pages/ResidentPage.vue'),
  },
]
