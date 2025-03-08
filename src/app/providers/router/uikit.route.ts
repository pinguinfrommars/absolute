import type { RouteRecordRaw } from 'vue-router'
export const uiKit: RouteRecordRaw[] = [
  {
    path: '/ui-kit',
    name: 'ui-kit',
    component: () => import('@/pages/UiKitPage.vue'),
  },
]
