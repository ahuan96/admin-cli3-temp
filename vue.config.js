const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    devServer: {
        open: true, //是否打开默认浏览器
        disableHostCheck: false,
        host: "0.0.0.0",
        port: 8099, // 端口号
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null     // string | Object
    },
    chainWebpack:(config)=>{
        config.resolve.alias
        //set第一个参数：设置的别名，第二个参数：设置的路径
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
        .set('views',resolve('./src/views'))
        .set('network',resolve('./src/network'))
        //注意 store 和 router 没必要配置
　　　　
    }
};