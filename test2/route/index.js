var Router = require("koa-router")

var dbAccount = require('../model/index').Account
var dbShop = require('../model/index').Shop
var dbAddress = require('../model/index').Address
var dbShop_Address = require('../model/index').Shop_Address

var router = new Router()

router.get("/account", async(ctx, next) => {
  var data = await dbAccount.findAll({
    include: [{
      model: dbShop,
      // where: { // 这个是查询里面的 id= 2 
      //   id: 2
      // }
    }]
  })
  ctx.response.body = {
    msg: 1,
    data
  }
})

// 查单个的
router.get("/account/:id", async(ctx, next) => {
  var paramId = ctx.params.id
  var data = await dbAccount.findAll({
    where: {
      id: paramId
    },
    include: [{
      model: dbShop,
      // attributes: []
    }]
  })
  ctx.response.body = {
    msg: 1,
    data
  }
})

// 改单个的
router.put("/account/:id", async(ctx, next) => {
  var postData = ctx.request.body
  var paramId = ctx.params.id
  var data = await dbAccount.update( postData ,{
    where: {
      id: paramId
    },
    include: [{
      model: dbShop,
      // attributes: []
    }]
  })
  ctx.response.body = {
    msg: 1,
    data: postData
  }
})

// 删除
router.delete("/account/:id", async(ctx, next) => {
  var paramId = ctx.params.id

  // 一对多 删除了账户 这个账户所对应的商店 也要相应的删除   
  //  但是 这里有个小问题就是先要删除 外键里面的那个先  才能删除 就是说  先要删除这个账户所拥有的商店 在删除 这个账户
  // 如果你先删除账户  你的商店是 删除失败的
  var dataShop = await dbShop.destroy({
    where: {
      "Account_id": paramId
    }
  })
  
  var dataAccount = await dbAccount.destroy({
    where: {
      id: paramId
    }
  })

  ctx.response.body = {
    msg: 1,
    data: paramId
  }
})

// 这个是一个表添加了数据 相应的跟他关联的表也添加数据
router.post("/account", async(ctx, next) => {
  let postBody = ctx.request.body
  let shops = postBody.shops

  let postdata = {} 
  postdata.name = postBody.name
  postdata.password = postBody.password
  var AccountData = await dbAccount.create(postdata)
  let id = AccountData.id
  let len = shops.length
  for(let i = 0; i < len; i++) {
    shops[i]['Account_id'] = id
  }
  // bulkCreate 多条加入
  var ShopData = await dbShop.bulkCreate(shops)
  ctx.response.body = {
    msg: 1,
    data: postBody
  }
})

router.get("/shop", async(ctx, next) => {
  var data = await dbShop.findAll()
  ctx.response.body = {
    msg: 1,
    data
  }
})

// 这个是添加了商店之后 还要给 属于谁的 account 
// 还要提供地址在哪里
router.post("/shop", async(ctx, next) => {
  var postData = ctx.request.body
  var data = await dbShop.create(postData)
  ctx.response.body = {
    msg: 1,
    data: postData
  }
})

router.get("/address", async(ctx, next) => {
  var data = await dbAddress.findAll({
    attributes: {
      exclude: ["createdAt","updatedAt"]
    },
    include: [{
      model: dbShop,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      through: {
        attributes: [] // 这个是关联的表要不要显示里面的内容
      }
    }]    
  })
  ctx.response.body = {
    msg: 1,
    data
  }
})

// 这个是添加地址在哪里 但是你也要添加你是属于那个商店的 外联表
router.post("/address", async(ctx, next) => {
  // 其实这里只要一个 place 跟我属于那个shop的shop_id
  let postdata = ctx.request.body
  let place = postdata.place
  let shopId_id = postdata.shopId
  var data = await dbAddress.create(place)
  let address_id = data.id
  await dbShop_Address.create({addressId: address_id,shopId: shopId_id})
  ctx.response.body = {
    msg: 1,
    data: postdata
  }
})

// 这个是删除地址在哪里 但是你也要删除你是属于那个商店的 外联表
router.delete("/address/:id", async(ctx, next) => {
  let del_id = ctx.params.id
  // 要先删除 外联的表里面的数据
  await dbShop_Address.destroy({
    where: {
      addressId: del_id
    }
  })
  // 在删除  
  await dbAddress.destroy({
    where: {
      id: del_id
    }
  })
  ctx.response.body = {
    msg: "ok",
    data: del_id
  }

})


module.exports = router
