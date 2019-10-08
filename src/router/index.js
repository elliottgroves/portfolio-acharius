import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/home';
import About from '@/components/views/about';
import Projects from '@/components/views/projects';
import IdentityManagement from '@/components/views/projects/identity-management/identity-management';
import Portfolio from '@/components/views/projects/portfolio/portfolio';
import FoodDelivery from '@/components/views/projects/food-delivery/food-delivery';
import VoiceHighlighting from '@/components/views/projects/voice-highlighting/voice-highlighting';
import FarmToSchool from '@/components/views/projects/farm-to-school/farm-to-school';

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
    },
    {
      path: '/projects/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/projects/food-delivery',
      name: 'FoodDelivery',
      component: FoodDelivery
    },
    {
      path: '/projects/voice-highlighting',
      name: 'VoiceHighlighting',
      component: VoiceHighlighting
    },
    {
      path: '/projects/farm-to-school',
      name: 'FarmToSchool',
      component: FarmToSchool
    }
  ]
})
