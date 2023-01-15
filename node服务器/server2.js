const express = require('express')
const axios = require('axios')
const app = express()
app.use((request, response, next) => {
  console.log("有人请求服务器2了");
  console.log("请求来自于", request.get('Host'))
  console.log("请求的地址是：", request.url)
  next()
})


/* 
    后台路由
    key : /search/users
    value : function{} 
*/
app.get("/search/users", function (req, res) {
  const { q } = req.query
  axios({
    url: 'https://api.github.com/search/users',
    params: { q }
  }).then(response => {
    res.json(response.data)
  })
})

app.get("/search/users2", function (reg, res) {
  res.json({
    items: [
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url: "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41id: 1,"
      }
    ]
  })
})

// 3.启动 web 服务器
app.listen(5000, () => {
  console.log('express server running at http://localhost:5000/search/users');
})

