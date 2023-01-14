const express = require('express')
const app = express()
app.use((request, response, next) => {
    console.log("有人请求服务器2了");
    console.log("请求来自于", request.get('Host'))
    console.log("请求的地址是：", request.url)
    next()
})
app.get('/search/users', (request, response) => {
    return new Promise((resolve, reject) => {
        request.get(
          'https://api.github.com/search/users',
          function(error, response, body) {
            if (!error && response.statusCode === 200) {
              body = JSON.parse(body)
              if (body.success) {
                resolve(body )
              } else {
                resolve( body)
              }
            }
          }
        )
      })
    response.send(students)
})
// 3.启动 web 服务器
app.listen(5000, () => {
    console.log('express server running at http://localhost:5000/search/users');
})