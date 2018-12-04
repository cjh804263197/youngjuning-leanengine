const Router = require('koa-router')

const router = new Router({ prefix: '/weui' })

router.get('/', async (ctx) => {
  await ctx.render('./weui.ejs')
})

module.exports = router
