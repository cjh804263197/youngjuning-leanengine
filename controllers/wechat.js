const wechat = require('co-wechat')

const config = {
  appid: process.env.WX_APP_ID,
  token: process.env.WX_TOKEN,
  encodingAESKey: process.env.EncodingAESKey,
}

const wechatConfig = wechat(config).middleware()

const wechatMessageService = wechat(config).middleware(async (message, ctx) => {
  console.log('收到的消息:', message)
  const { Content } = message
  switch (Content) {
    case 'text':
      return 'Hello World！'
    case 'music':
      return {
        title: '小城谣',
        description: '勺子',
        musicUrl: 'http://file.youngjuning.com/demo.mp3',
        hqMusicUrl: 'http://file.youngjuning.com/demo.mp3',
      }
    case 'article':
      return [
        {
          title: '归去来',
          description: '归去来兮，田园将芜胡不归',
          picurl: 'https://i.loli.net/2018/12/04/5c0633fcb416c.jpg',
          url: 'https://baike.baidu.com/item/%E5%94%90%E5%AB%A3',
        },
      ]
    case 'bind':
      return 'http://wzydmx.natappfree.cc/bind'
    default:
      return '请到首页逛一逛：http://wzydmx.natappfree.cc/'
  }
})

module.exports = {
  wechatConfig,
  wechatMessageService,
}
