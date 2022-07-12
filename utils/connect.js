var mongoose = require('mongoose')

// 连接的是数据库
mongoose.connect('mongodb://localhost:27017/gp5', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.once('open', ()=>{
  console.log('数据库连接成功')
})
db.on('error', ()=>{
  console.log('数据库连接失败')
})
