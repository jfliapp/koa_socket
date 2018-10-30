
var Koa = require('koa')
var app = new Koa()
var server = require('http').createServer(app.callback())

var io = require('socket.io')(server)

server.listen(8080, () => {
  console.log("socket io 链接测试")
})

let usercount = 0;

io.on('connection', (socket) => {
  // 这个连接成功
  console.log("a client connect")
  // 这个断掉连接
  socket.on('disconnect', () => {
    console.log("有一连接断了")
  })

  socket.broadcast.emit('use_connected')
  // 这个只能接受 send 传上来的数据
  socket.on('message', (msg) => {
    console.log(msg,"收到的信息")
  })
})

// 这个 let chat = 这个时不能删除的 删除了  就不能同步了  
let chat = io.of('/chat').on('connection', (socket) => {
  console.log(socket.id, "他是怎么辨别不同的人的")
  usercount++
  chat.emit('usercount', { msg: usercount })

  socket.on('send_msgtoserver', (data) => {
    socket.broadcast.emit('send_msgto_client', data)
  })

  var data2msg;
  socket.on('messagetoserver',(data, callback) => {
    data2msg = data.msg
    callback('已收到')
  })

  socket.emit('messagetoclient', {msg: data2msg, username: 'server'})

  socket.on('disconnect', () => {
    usercount--
    chat.emit('usercount',{msg: usercount})
  })

})

let news = io.of('/news').on('connection', (socket) => {
  let newsInterval = setInterval(() => {
    socket.emit('news', {msg: 'news from ' + Date.now() })
  }, 1000)

  socket.on('disconnect', () => {
    clearInterval(newsInterval)
  })

})

