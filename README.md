【Vue其它教程】

Vue源码、Vant源码
Vue3.0
Vue SSR服务渲染
Vue 项目部署
vue-element-admin


## 1、Node.js安装

* 下载对应平台的稳定版本（LTS版本）
* 环境变量的配置

## 2、Node.js的三大特点

（1）基于Chrome V8的运行时环境。

（2）事件驱动（循环）：
	a、文件读写
	b、数据库操作
	c、调用另一台服务

（3)非阻塞I/O:
	input
	output
	阻塞vs.非阻塞


##3、前端为什么学习Node.js？
	a、前端工程化已离不开node.js/布道者
	b、工作中有不少场景下需要用到node.js数据库开发
	c、Node.js是服务端渲染必须依赖环境


##4、npm简介

* [NPM官网](https://npmjs.com)
```
npm scripts
	npm start = npm run start
	npm test = npm run test
	npm run build

npm command option

npm init [-y] 生成package.json

npm install vue [-g/-S/-D]
	-g 全局安装，比如脚手架工具、启动工具、构建工具
	-S 局部安装，只安装到当前项目node_modules中，业务代码中需要引入的包，用-S
	-D 局部安装，只安装到当前项目node_modules中，当前项目运行、打包所需要的环境包，用-D

当执行install命令时，被安装的包有三种标识：
	1. ^  保留主版本号不变，后面最新
	2. ~  保留主版本和次版本号不变，后面取最新
	3. *  安装最新版本

npm uninstall vue [-g/-S/-D]

npm cache clean --force 强制清除npm缓存数据

npm install  根据当前项目的package.json文件重新安装所有被记录过的依赖
```

##5、使用yarn：
```
npm install yarn -g
yarn init 生成一个package.json文件
yarn add vue 安装一个指定的包
yarn install 根据package.json安装所有依赖包
```

##6、运行node代码的两种方式：

（1）在交互环境(REPL)下运行node代码。
（2）使用node等工具运行node代码。


##7、模块化语法

* ES6模块化：Vue、React
* CommonJS模块化：Node、构建工具、原生小程序
  module.exports 导出模块
  require('') 导入模块

* [模块化有什么好处？前端有哪些模块化解决方案？](https://www.jianshu.com/p/e684bba17917)

##8、三种node模块

* 内置模块：global、fs、path、http
* 第三方模块：不是node内置的，但通过npm安装到node_modules中的模块
* 自定义模块：就是你自己写的.js文件（module.exports）

* node.js加载模块的顺序：内置模块->第三方模块->自定义模块
* 内置模块和第三方模块的导入，不要使用 ./ ../ 路径。
* 自定义模块的导入，建议使用 ./ ../ 路径。
* node环境中，后缀可以省略，找模块的顺序：.js -> .json -> .node


##9、node内置api，参考node api文档


##10、使用node原生代码，搭建服务器

我们频繁修改node代码，要重启服务才能生效。为了解决这个问题，推荐使用进程守护工具：
* nodemon
* supervisor

作业1：自己阅读node.js中文教程
作业2：整理今天的学习内容，安装软件mongodb和robo3T
作业3：本周二检查大家的webapp项目。

##11、node原生代码再体验

* 使用 https 模块请求cnode文章列表数据
* 使用 events 模块封装自定义事件系统(EventEmitter)

##12、Express入门学习

* Express与Koa简介
* Express搭建服务器、实现静态资源服务、动态资源服务
* Express路由的使用、使用中间件
* Express官网和api阅读、源码简单阅读

##13、mongodb数据库操作

* MongoDB，是NoSQL数据库，非关系型数据库、没有SQL的数据库。
* 数据库操作有三种方式：
	(1)通过命令行工具操作
	(2)通过可视化工具来操作
	(3)通过驱动模块来操作：mongodb / mongoose
* 使用mongoose连接数据库、操作users集合
* 使用PostMan 和 curl命令 测试接口
