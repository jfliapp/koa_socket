const Koa = require("koa")
const Router = require("koa-router")
const body = require("koa-bodyparser")
const json = require("koa-json")
const mysql = require("mysql")

// const modelUser = require("./method-modle")
const modelUser = require("./method-modle.1.js")
// console.log(modelUser)


const app = new Koa()
app.use(json())
app.use(body())
let page = new Router()
// let page = new Router({
//   prefix: '/api'
// })

//获取全部数据 
page.get('/', async(ctx, next) => {
  let allData =  await modelUser.getAllKoasql()
  ctx.response.body = {
    code: 1,
    msg: "success",
    data: allData
  }
})
// 查id
page.get("/api/:id", async(ctx, next) => {
  let id = ctx.params.id
  console.log(ctx.query)
  let aa = await modelUser.getKoasqlById(id)
  if(aa) {
    ctx.response.body = {
      code: 1,
      msg: 'ok',
      data: aa
    }
  }else {
    ctx.response.body = {
      code: 1,
      msg: 'ok',
      data: "不存在这个数据"
    }
  }
  
})

// 删
page.delete("/api/:id", async(ctx, next) => {
  let id = ctx.params.id
  console.log(ctx.query)
  let aa = await modelUser.delKoasqlById(id)
  ctx.response.body = {
    code: 1,
    msg: 'ok'
  }
})
// 根据名字来查
page.get("/:name", async(ctx, next) => {
  let name = ctx.params.name
  let names = await modelUser.getKoasqlByname(name)
  ctx.response.body = {
    code: 1,
    msg: 'ok',
    data: names
  }
})
// 根据名字来修改东西
page.post("/api/:id", async(ctx, next) => {
  let id = ctx.params.id
  let body = ctx.request.body
  let aa = await modelUser.updateKoaSqlId(id, body)
  ctx.response.body = {
    code: 1,
    msg: 'ok'
  }
})
// 添加数据
page.post("/form", async(ctx, next) => {
  const data = ctx.request.body
  console.log(ctx.request.body) // 这个是上面得“koa-bodyparser”才有的request.body 
  try {
    let adf = await modelUser.createKoasql(data)
    ctx.response.body = {
      code: 1,
      msg: 'ok',
      data: adf
    }
  } catch (e) {
    console.log(e)
  }  
})

// 装载所有子路由

app.use(page.routes())
app.use(page.allowedMethods())

// app.use(async(ctx, next) => {
//   let url = ctx.request.url
//   console.log(url)
//   // ctx.body = url
//   ctx.response.body = '<h1>hello koa</h1>'
// })

app.listen(3000, () => {
  console.log("koa服务器启动成功")
})