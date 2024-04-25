// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Settings from '@/views/Settings.vue';
import CurrenciesVue from '@/views/Currencies.vue';
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {viewName: "Dashboard"}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {viewName: 'Settings'}
  },
  {
    path: '/',
    name: 'Currencies',
    component: CurrenciesVue,
    meta: {viewName: "Currencies"}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {viewName: "Login"}
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
