// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../views/Settings.vue';
import CurrenciesVue from '../views/Currencies.vue';
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
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
    path: '/currencies',
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
  routes,
});

export default router;
