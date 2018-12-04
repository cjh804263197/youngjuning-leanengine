const Router = require('koa-router')
const wechat = require('co-wechat')

const router = new Router({ prefix: '/wechat' })

const config = {
  token: process.env.WX_TOKEN,
  appid: process.env.WX_APP_ID,
  encodingAESKey: process.env.EncodingAESKey,
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

module.exports = router
