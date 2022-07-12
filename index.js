
// 一、导入node.js的内置模块
var fs = require('fs')
var os = require('os')
// 二、导入第三方模块
var moment = require('moment')

// 三、导入自定义模块
// 当cal.js是使用 exports / module.exports = {} 这种方式导出时
// var cal = require('./utils/cal.js')
// 当cal.js是使用 module.exports = function() { return {} } 导出时
var cal = require('./utils/cal')()

// 使用内置模块
// console.log(global)
// console.log(fs)
console.log('os', os.platform())
// 使用第三方模块
console.log(moment(Date.now()).format('YYYY年MM月DD日 HH时mm分ss秒'))
// 使用自定义模块
// console.log(cal.add(1,2))
// console.log(cal.sub(2,1))
