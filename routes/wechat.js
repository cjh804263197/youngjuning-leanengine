const Router = require('koa-router')
const { wechat } = require('../utils/wx')

const router = new Router({ prefix: '/wechat' })

router.post('/', wechat(async (message, ctx) => {
  console.log(`收到的消息：{
    ${message}
  }`)
  const { ToUserName, FromUserName, CreateTime, MsgType, Content, MsgId } = message
  return [
    {
      title: '归去来',
      description: '归去来兮，田园将芜胡不归？',
      picurl: 'http://p2.qhimg.com/t01698af9de473dae12.jpg',
      url: 'http://t.cn/Eyb4lD2',
    },
  ]
}))

module.exports = router
