var Router = require("koa-router")

var dbAccount = require('../model/index').Account
var dbShop = require('../model/index').Shop
var dbAddress = require('../model/index').Address

var router = new Router()

router.get("/account/:id", async(ctx, next) => {
  var id = ctx.params.id
  var data = await dbAccount.findAll({
    where: {
      id: 1
    },
    include: [{
      model: dbShop
    }]
  })
  ctx.response.body = {
    msg: 1,
    data
  }
})

router.post("/account", async(ctx, next) => {
  let postBody = ctx.request.body
  console.log(postBody, "account postData 提交的数据")
  var data = await dbAccount.create(postBody)
  ctx.response.body = {
    msg: 1,
    data
  }
})

router.get("/shop", async(ctx, next) => {
  var data = await dbShop.findAll()
  ctx.response.body = {
    msg: 1,
    data
  }
})

router.get("/address", async(ctx, next) => {
  var data = await dbAddress.findAll({
    include: [{
      model: dbShop,
      through: {
        attributes: [] // 这个是关联的表要不要显示
      }
    }]
  })
  ctx.response.body = {
    msg: 1,
    data
  }
})

module.exports = router