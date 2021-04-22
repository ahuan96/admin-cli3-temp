const path = require('path');//引入path模块
const defaultSettings = require('./src/settings.js')

function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

const title = defaultSettings.title || 'vue Admin Template' // page title

module.exports = {
    devServer: {
        open: true, //是否打开默认浏览器
        disableHostCheck: false,
        host: "0.0.0.0",    // 配置为localost则不能局域网访问
        port: 8099, // 端口号
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null     // string | Object
    },
    chainWebpack:(config)=>{

        // 设置网页标题
       config.plugin('html')
      .tap(args => {
        args[0].title = title;
        return args;
      })

    // 配置路径别名
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('assets',resolve('./src/assets'))
    .set('views',resolve('./src/views'))
    .set('api',resolve('./src/api'))
    .set('utils',resolve('./src/utils'))
    //注意 store 和 router 没必要配置
　　　　
    }
};