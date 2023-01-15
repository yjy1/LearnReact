// common js写法
// 注意：此文件更改后需要重启
const {proxy,createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ //遇见 /api1 前缀的请求，就会触发该代理配置
            target:'http://localhost:5000', //请求转发给谁
            /*
                不加时，服务器显示：请求来自于 localhost:3000
                加上 changeOrigin:true时，服务器显示：请求来自于 localhost:5000
                ps：尽量加上
            */
            changeOrigin:true, //控制服务器收到的请求头中Host字段的值
            /* 
                注：将服务器http://localhost:5000/api1/students 里的/api1替换为空字符，以便服务器能找到请求资源
            */
             pathRewrite:{'^/api1':''} //重写请求路径 
        }),
        createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''} //
        })
    ) 
}