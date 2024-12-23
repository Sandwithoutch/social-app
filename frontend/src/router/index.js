import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('@/views/InformationPage.vue')

  },
  {
    path: '/ground',
    name: 'ground',
    component: () => import('@/views/GroundPage.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    // component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
