const Router = require('koa-router')
const { menu, template } = require('../controllers/wechatAPI')

const router = new Router({ prefix: '/wechatAPI' })

// 创建菜单
router.get('/createMenu', async (ctx) => {
  try {
    const result = await menu.createMenu()
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

// 删除菜单
router.get('/removeMenu', async (ctx) => {
  try {
    const result = await menu.removeMenu()
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

// 发送模版消息
router.post('/sendTemplate', async (ctx) => {
  const { body } = ctx.request
  const data = JSON.parse(body.data)
  try {
    const result = await template.sendTemplate({ ...body, data })
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

module.exports = router
