import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue'
import Login from 'views/auth/login.vue'
import Register from 'views/auth/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

export default router
