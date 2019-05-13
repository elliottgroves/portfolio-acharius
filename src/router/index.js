import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/home'
import Projects from '@/components/views/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
