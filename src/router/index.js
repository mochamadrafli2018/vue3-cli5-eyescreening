import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: () => import('../pages/home.vue')
      },
      {
         path: '/guide',
         name: 'guide',
         component: () => import('../pages/guide.vue')
      },
      { 
         path: '/dashboard',
         name: 'dashboard',
         component: () => import('../pages/dashboard.vue'),
      },
      {
         path: '/login',
         name: 'login',
         component: () => import('../pages/login.vue')
      },
      { 
         path: '/register',
         name: 'register',
         component: () => import('../pages/register.vue')
      },
   ]
}) 

export default router;