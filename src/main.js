import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@/permission'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/styles/index.less'

// 注册全局组件
import 'components/golobal.js'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
