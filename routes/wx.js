const Router = require('koa-router')
const { wechat, menu } = require('../utils/wx')
const WechatAPI = require('co-wechat-api')

const appid = process.env.WX_APP_ID
const appsecret = process.env.WX_APP_SC

const router = new Router({ prefix: '/wx' })
const api = new WechatAPI(appid, appsecret)

router.get('/', wechat()) // 用于服务器配置校验

router.post('/', wechat(async (message, ctx) => {
  console.log('收到的消息:', message)
  const { ToUserName, FromUserName, CreateTime, MsgType, Content, MsgId } = message
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
}))

module.exports = router
