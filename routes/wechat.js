const Router = require('koa-router')
const wechat = require('co-wechat')

const router = new Router({ prefix: '/wechat' })

const config = {
  token: process.env.WX_TOKEN,
  appid: process.env.WX_APP_ID,
  encodingAESKey: process.env.EncodingAESKey,
}

router.get('/', wechat(config).middleware(async (message, ctx) => {
  console.log('收到微信消息：', { message })
  return 'Hello World!'
}))

module.exports = router
