const Router = require('koa-router')

const router = new Router({ prefix: '/bind' })

router.get('/', async (ctx) => {
  await ctx.render('./bind.ejs')
})

module.exports = router
