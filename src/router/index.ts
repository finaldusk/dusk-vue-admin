import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/About',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
