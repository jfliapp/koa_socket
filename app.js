const Koa = require("koa")
const onerror = require("koa-onerror")
const json = require("koa-json")
const bodyparser = require("koa-bodyparser")
const { check_token } = require("./utils/token")
const response = require("./midleware/response")
const app = new Koa()

onerror(app)
app.use(bodyparser()) // 这个是用来拿到post数据的
app.use(json()) // 这个是后台返回数据的格式

app.use(check_token) // 检查你的token有没有 没有直接退出
app.use(response) // 定义了 你返回数据的格式 {code: 1, data: {}, msg: 'ok'} {code: 0, data: {}, msg: 'err'}
// routes
const route = require("./routes")

app.use(route.routes(), route.allowedMethods())

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})
app.listen(9999, () => {
  console.log("服务启动")
})
