const Router = require('koa-router')
const { menu, template } = require('../controllers/wechatAPI')

const router = new Router({ prefix: '/wechatAPI' })

// -----菜单管理----- //

// 创建菜单
router.post('/createMenu', async (ctx) => {
  const { body } = ctx.request
  const { menus } = body
  try {
    const result = await menu.createMenu(menus)
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

// -----模版消息----- //
// 设置所属行业
router.post('/setIndustry', async (ctx) => {
  const { body } = ctx.request
  const { id1, id2 } = body
  try {
    const result = await template.setIndustry(id1, id2)
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

// 获得模板ID
router.get('/addTemplate', async (ctx) => {
  const { templateIdShort } = ctx.query
  try {
    const result = await template.addTemplate(templateIdShort)
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

// 发送模版消息
router.post('/sendTemplate', async (ctx) => {
  const { body } = ctx.request
  try {
    const result = await template.sendTemplate(body)
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

module.exports = router
