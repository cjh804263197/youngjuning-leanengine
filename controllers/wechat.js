const wechat = require('co-wechat')

const config = {
  appid: process.env.WX_APP_ID,
  token: process.env.WX_TOKEN,
  encodingAESKey: process.env.EncodingAESKey,
}

const wechatConfig = wechat(config).middleware()

const wechatMessageService = wechat(config).middleware(async (message, ctx) => {
  console.log('收到的消息:', message)
  const { MsgType, Event, EventKey } = message
  if (MsgType === 'event') {
    if (Event === 'subscribe') {
      return '终于等到你，还好没放弃'
    } else if (Event === 'CLICK') {
      if (EventKey === 'button1') {
        return '你点击了按钮一'
      }
    }
  }
  return '非事件消息'

  // switch (message.MsgType) {
  //   case 'text':
  // if (message.Content === 'link') {
  //   return '<a href="http://wpa.qq.com/msgrd?V=1&Uin=806719384">QQ咨询预约</a>'
  // }
  //     return '普通文本消息'
  //   case 'image':
  //     return {
  //       type: 'image',
  //       content: {
  //         mediaId: message.MediaId,
  //       },
  //     }
  //   case 'voice':
  //     return {
  //       type: 'voice',
  //       content: {
  //         mediaId: message.MediaId,
  //       },
  //     }
  //   case 'location':
  //     return `您的位置：${message.Label}`
  //   default:
  //     return '你发送了不支持的消息类型！'
  // }
})

const stuffBindPage = async (ctx) => {
  const title = '账号绑定'
  await ctx.render('wechat/stuffBind', {
    title,
  })
}

module.exports = {
  wechatConfig,
  wechatMessageService,
  stuffBindPage,
}
