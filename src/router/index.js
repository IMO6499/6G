import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Sight from '@/pages/Sight'
import Category from '@/pages/JobCategory'
import Blog from '@/pages/BlogHome'
import BlogDetails from '@/pages/BlogDetails'
import JobSingle from '@/pages/JobSingle'
import PricingPlan from '@/pages/PricingPlan'
import Elements from '@/pages/Elements'
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
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blogDetails',
      name: 'blogDetails',
      component: BlogDetails
    },
    {
      path: '/jobSingle',
      name: 'jobSingle',
      component: JobSingle
    },
    {
      path: '/pricingPlan',
      name: 'pricingPlan',
      component: PricingPlan
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    },
    {
      path: '/development',
      name: 'development',
      component: Development
    }
  ]
})
