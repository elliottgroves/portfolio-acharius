import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/home'
import About from '@/components/views/about'
import Projects from '@/components/views/projects'
import IdentityManagement from '@/components/views/projects/identity-management/identity-management'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/identity-management',
      name: 'IdentityManagement',
      component: IdentityManagement
    }
  ]
})
