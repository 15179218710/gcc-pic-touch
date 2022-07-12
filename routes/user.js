var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

// 增删改查操作的对象是什么粒度？是集合
// Schema
var userSchema = new mongoose.Schema({
  user: String,
  age: Number,
  class: String
})
var userModel = mongoose.model('users', userSchema)

router.get('/login', function(req, res){
  // 如果get请求，入参放在req.params
  // 如果post请求，入参放在req.body
  // 接收入参
  res.json({err: 0, msg: '登录成功'})
})

// /api/user/list
router.get('/list', (req, res)=>{
  // 接收入参
  let { page, size } = req.query
  page = parseInt(page || 1)
  size = parseInt(size || 10)
  console.log('query', req.query)
  userModel.find().skip((page-1)*size).limit(size).then(docs=>{
    res.json({err:0, msg:'success', data: docs})
  })
})

// /api/user/add
router.post('/add', (req, res)=>{
  // 要使用中间件解析body数据，否则会接收不了
  let { user, age } = req.body
  console.log('body', req.body)
  userModel.insertMany([{user,age}]).then(()=>{
    res.json({err:0,msg:'添加用户成功'})
  })
})

module.exports = router
