import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'
import {getToken} from '../utils/token'



Vue.use(VueRouter)

const router = new VueRouter({
  mode:"hash",
  routes
})


const whiteList = ['/login','/404'] // no redirect whitelist

router.beforeEach(async(to,from,next) => {
    console.log('路由',to)
    const hasToken = getToken()
    if(hasToken){
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
          }else{
              const userInfo = store.state.user.userInfo
              console.log(userInfo)
              if(userInfo && userInfo.name){
                next()
              }else{
                await store.dispatch('user/getInfo')
                next()
              }
          }
        // next()
    }else{
      next()
        if(whiteList.includes(to.path)){
          next()
        }else{
            console.log(to.path)
            next(`/login?redirect=${to.path}`)
        }
    }
    
})

export default router
