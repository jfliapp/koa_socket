const Koa = require("koa")
const onerror = require("koa-onerror")
const json = require("koa-json")
const bodyparser = require("koa-bodyparser")
const { check_token } = require("./utils/token")
const app = new Koa()

onerror(app)
app.use(bodyparser()) // 这个是用来拿到post数据的
app.use(json()) // 这个是后台返回数据的格式

app.use(check_token)

// routes
const route = require("./routes")
app.use(route.routes(), route.allowedMethods())

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})
app.listen(9999, () => {
  console.log("服务启动")
})
