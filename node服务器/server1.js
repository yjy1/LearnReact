const express = require('express')
const app = express()
app.use((request, response, next) => {
    console.log("有人请求服务器1了");
    console.log("请求来自于", request.get('Host'))
    console.log("请求的地址是：", request.url)
    next()
})
app.get('/students', (request, response) => {
    const students = [
        { id: '001', name: 'tom', age: 18 }, { id: '002', name: 'jerry ', age: 19 }, { id: '003', name: 'tony', age: 120 }
    ]
    response.send(students)
})
// 3.启动 web 服务器
app.listen(5000, () => {
    console.log('express server running at http://localhost:5000/students');
})