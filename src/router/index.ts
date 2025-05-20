import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/portfolio/index.vue'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
