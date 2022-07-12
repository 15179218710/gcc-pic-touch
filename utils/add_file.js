var fs = require('fs')

console.log('进程中的变量', process.argv)

var filePath = './'+process.argv[2]   // './index.html'

fs.writeFile(filePath, 'hello world', function(err) {
  if(err) {
    console.log('创建文件失败')
  }else{
    console.log('文件创建成功')
  }
})
