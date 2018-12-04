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

router.get('/', wechat(config).middleware(async (message, ctx) => {
  console.log(message, ctx)
  // 微信输入信息就是这个 message
  switch (message.FormUserName) {
    case '屌丝':
      return '呵呵'
    case 'text':
      // 你也可以这样回复text类型的消息
      return {
        content: 'text object',
        type: 'text',
      }
    default:
      return [
        {
          title: '你来我家接我吧',
          description: '这是女神与高富帅之间的对话',
          picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
          url: 'http://nodeapi.cloudfoundry.com/',
        },
      ]
  }
}))
