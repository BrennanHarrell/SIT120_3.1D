import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import NoPage from '../views/NoPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  {
    path: '/:catchAll(.*)',
    name: 'NoPage',
    compenent: NoPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
