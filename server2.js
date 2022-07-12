var express = require('express')
var app = express()
// 执行数据库连接逻辑
require('./utils/connect')


var userRouter = require('./routes/user')

// 静态资源服务
app.use(express.static('public'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 动态资源服务
// 使用中间件
app.use('/api/user', userRouter)

app.listen(9002, function(){
  console.log('server is running on 9002')
})
