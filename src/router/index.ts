import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/home/Home.vue'),
    },
  ],
});

export default router;
