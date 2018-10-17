const Router = require("koa-router")
const controller = require("../controller/index")

const router = new Router({
  prefix: '/api'
})

router.get("/", async (ctx, next) => {
  ctx.response.body = "hello world!"
})
router.post("/login", controller.user.login) // 用户登录

router.get('/comment', controller.comment.comments) // 获取评论
router.post('/comment', controller.comment.addComment) // 添加评论
// router.post('/comment/:id', controller.comment.delComments) // 删除评论

module.exports = router