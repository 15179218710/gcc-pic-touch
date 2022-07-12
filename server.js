var http = require('http')
var fs = require('fs')

// 什么服务器？凡是能够提供服务的软件程序，都叫服务器。
// 服务器的特点，常常一对多。
// 服务器一般可以提供两类资源：静态资源、动态资源

// 创建一台服务器
// 当node运行时，只会创建一台server。
// 每当有客户端访问时，回调函数都会运行一次。
// request是请求体对象，代表是客户端向服务端的请求过程
// response是响应体对象，代表是服务端向客户端的响应过程
var server = http.createServer(function(req, res){
  // console.log('req', req.url)
  // 1、接受请求
  var url = req.url
  url = `./public${url==='/' ? '/index.html' : url}`
  // 2、业务处理
  // 静态资源文件读写
  var read = fs.createReadStream(url)
  // 3、响应请求
  read.pipe(res)
})

server.listen(9001, function() {
  console.log('server is running on 9001')
})

// switch (url) {
//   case '/':
//     // 读取index.html，响应给客户
//     var readStream1 = fs.createReadStream('./public/index.html')
//     readStream1.pipe(res)
//     break;
//   case '/1.png':
//     // 读取1.png，响应给客户端
//     var readStream2 = fs.createReadStream('./public/images/1.png')
//     readStream2.pipe(res)
//     break;
//   case '/getGoodList':
//     // 访问数据库
//     break;
//   default:
//     res.end(url)
// }
