import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Sight from '@/pages/Sight'
import Country from '@/pages/Country'
import Development from '@/pages/Development'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/sight',
      name: 'sight',
      component: Sight
    },
    {
      path: '/country',
      name: 'country',
      component: Country
    },
    {
      path: '/development',
      name: 'development',
      component: Development
    }
  ]
})
