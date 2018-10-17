const Koa = require("koa")
const Router = require("koa-router")
const body = require("koa-bodyparser")
const json = require("koa-json")

const app = new Koa()
app.use(json())
app.use(body())
let page = new Router({
  prefix: '/api/'
})

page.get("/", async(ctx, next) => {
  ctx.response.body = {
    code: 1,
    msg: 'ok',
    data: [1,2,3]
  }
})

page.post("/form", async(ctx, next) => {
  console.log(ctx.request.body) // 这个是上面得“koa-bodyparser”才有的request.body 
  const data = ctx.request.body
  ctx.response.body = {
    code: 1,
    msg: 'ok',
    data: data
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