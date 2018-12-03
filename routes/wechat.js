const AV = require('leanengine')
const Router = require('koa-router')
const WechatAPI = require('co-wechat-api')
const wechat = require('co-wechat')

const router = new Router({ prefix: '/wechat' })

const appid = process.env.WX_APP_ID
const secret = process.env.WX_APP_SC
const token = process.env.WX_TOKEN
const encodingAESKey = process.env.EncodingAESKey

const config = {
  token,
  appid,
  encodingAESKey,
}

router.get('/', async (ctx) => {

})
