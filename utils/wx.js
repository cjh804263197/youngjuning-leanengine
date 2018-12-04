const coWechat = require('co-wechat') // 微信公众平台消息接口服务中间件

const config = {
  appid: process.env.WX_APP_ID,
  token: process.env.WX_TOKEN,
  encodingAESKey: process.env.EncodingAESKey,
}

const wechat = fn => coWechat(config).middleware(fn)

module.exports = {
  wechat,
}
