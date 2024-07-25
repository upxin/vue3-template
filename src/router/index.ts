import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/repl'
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/home/Home.vue')
    },
    {
      name: 'repl',
      path: '/repl',
      component: () => import('@/views/repl/Repl.vue')
    }
  ]
})

export default router
