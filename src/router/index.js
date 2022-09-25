import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarRepairView from '../views/CarRepairView.vue'
import CarWashView from '../views/CarWashView.vue'
import VulcanizationView from '../views/VulcanizationView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/car-repair',
    name: 'CarRepairView',
    component: CarRepairView
  },
  {
    path: '/car-wash',
    name: 'CarWash',
    component: CarWashView
  },
  {
    path: '/vulcanization',
    name: 'VulcanizationView',
    component: VulcanizationView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
