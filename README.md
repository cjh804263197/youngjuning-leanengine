## 初始化项目

> 项目语言选择 NodeJs，Web框架选择koa

```sh
$ lean init
```

## 初始化配置

### 新增 .eslintrc.js

> 使用 http://t.cn/EyZm0dC

### package.json

```diff
"scripts": {
+ "fix": "eslint --fix ./",
+ "lint": "eslint lint ./",
},
```

### server.js

```diff
-// 如果不希望使用 masterKey 权限，可以将下面一行删除
-AV.Cloud.useMasterKey()
...
-const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000)
+const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000, 10)
...
```

## wechat sdk开发常用包

- [wechat](http://t.cn/EywsiRb)：微信公共平台消息接口服务中间件与API SDK
  - 【√】[co-wechat](http://t.cn/EyA7xfJ)：微信公众平台消息接口服务中间件（支持Koa、Co、Egg）
- [wechat-api](http://t.cn/EyA215h)：本模块只负责与 `access_token` 有关的高级接口功能
  - 【√】[co-wechat-api](http://t.cn/EyAG2mf)：Wechat API(ES6版)
- [wechat-oauth](http://t.cn/EywsnyK)：微信公共平台 `OAuth` 接口消息接口服务中间件与API SDK
  - 【√】[co-wechat-oauth](http://t.cn/EyAA5wl)：Wechat OAuth for ES6。微信公共平台OAuth接口消息接口服务中间件与API 

## 开发资源

- [node-webot](http://t.cn/zRG5li2)：是老朴几个人建的org，主要开发微信sdk相关的node modules
  - [node-wechat 微信实践](http://t.cn/RGeW6F6)
- [微信NodeJs机器人搭建](http://t.cn/EyAZICU)
- [微信公众平台技术文档](http://t.cn/RoyMaWU)
