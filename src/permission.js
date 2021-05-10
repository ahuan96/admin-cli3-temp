import router from './router'
import store from './store'
import {getToken} from './utils/token'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to,from,next) => {
    console.log('路由')

    const hasToken = getToken()
    if(hasToken){
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
          }else{
              const userInfo = store.state.userInfo
              console.log(userInfo)
              if(userInfo && userInfo.name){
                next()
              }else{
                await store.dispatch('getInfo')
                next()
              }
          }
        // next()
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            next(`/login?redirect=${to.path}`)
        }
    }
    
})