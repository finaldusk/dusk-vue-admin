import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import storageFactory from '@/utils/storage'
const storage = new storageFactory()
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
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = storage.get('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
