const Router = require('koa-router')
const { menu } = require('../controllers/wechatAPI')

const router = new Router({ prefix: '/wechatAPI' })

router.get('/createMenu', async (ctx) => {
  try {
    const result = await menu.createMenu()
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

router.get('/removeMenu', async (ctx) => {
  try {
    const result = await menu.removeMenu()
    ctx.body = result
  } catch (err) {
    ctx.body = err
  }
})

module.exports = router
