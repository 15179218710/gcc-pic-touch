// 事件驱动

var EventEmitter = require('events')

class MyEvent extends EventEmitter{}

var myme = new MyEvent()

myme.on('xxx', function(msg){
  console.log('xxx事件被触发了', msg)
})

myme.on('yyy', function(msg){
  console.log('yyy事件被触发了', msg)
})

module.exports = myme
