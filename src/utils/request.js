import axios from 'axios';

// 创建实例
const service = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config => {
        console.log('config',config)
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  export default service