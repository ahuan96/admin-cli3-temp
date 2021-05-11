
import Layout from '@/layout/index.vue'
import Login from 'views/auth/login.vue'
import Register from 'views/auth/register.vue'

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
    },{
      path: '/404',
      component: () => import('@/views/auth/404'),
      hidden: true
    },
    {
      path: '/users',
      name: 'users',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'users',
          component: () => import('@/views/users/index'),
          meta: { title: 'users', icon: 'users' }
        }
      ]
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/workbench',
      children: [{
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/workbench/index'),
        meta: { title: 'workbench', icon: 'workbench' }
      }]
    }
  ]
  
  export default routes