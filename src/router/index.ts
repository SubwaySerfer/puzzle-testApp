import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/home/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' });
      }, 500);
    });
  },
});
export default router;
