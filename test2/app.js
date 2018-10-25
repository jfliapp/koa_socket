var Koa = require("koa")
var bodyParser = require("koa-bodyparser")
// var onerror = require("koa-onerror")
var json = require("koa-json")
var page = require("./route/index.js")

var app = new Koa()
// onerror(app)
app.use(json())
app.use(bodyParser())

app.use(page.routes())
app.use(page.allowedMethods())

app.listen(4444, () => {
  console.log("4444 服务器启动成功")
})
