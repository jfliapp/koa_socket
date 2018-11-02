var Koa = require('koa')
var app = new Koa()
var server = require('http').createServer(app.callback())
var _ = require("underscore")

var io = require('socket.io')(server)

io.use((socket, next) => {
  let handshake = socket.handshake.xdomain;
  console.log(handshake)
  if (handshake) {
    next(new Error('Authorizetion error'))
  }
  next()
})

server.listen(8080, () => {
  console.log("socket io 链接测试")
})

let usercount = 0; // 统计有多少个人连接了我的服务器
let hasName = new Array()

io.on('connection', (socket) => {
  // io.sockets.connected 连接上来id
  if (io.sockets.connected[socket.id]) {
    io.sockets.connected[socket.id].emit('A', '只传给A客户端的')
  }
  console.log(socket.id, "socket.id ---") // 这里是 拿到我连上来的客户端的id
  // 这个连接成功
  console.log("a client connect")

  socket.on('user_login', (data) => {
    var nameId = data.name
    hasName[nameId] = socket.id
    console.log(hasName, "hasNam++++++")
  })

  socket.on('to_user', (data) => {
    var sendname = data.sendname
    var toName = data.toname
    var toId = data.id
    var msg = data.value
    // 这里 客户端传上来的 id 跟我 保存 在服务端的数组id 不一样？？？？？ 

    // if(toId == hasName[toName]){
    //   console.log("to_user------limian ")
    //   var toSocket = _.findWhere(io.sockets.sockets, {id: toId})
    //   toSocket.emit('shoudao', msg)
    // }

    if (hasName[toName]) {
      var toSocket = _.findWhere(io.sockets.sockets, {
        id: hasName[toName]
      })
      toSocket.emit('shoudao', {
        mesage: msg,
        name: sendname
      })
    }
  })
  // 这个断掉连接
  socket.on('disconnect', () => {
    console.log(socket.id + "断了连接")
  })

  socket.broadcast.emit('use_connected')
  // 这个只能接受 send 传上来的数据
  socket.on('message', (msg) => {
    console.log(msg, "收到的信息")
  })
})

// 这个 let chat = 这个时不能删除的 删除了  就不能同步了  
let chat = io.of('/chat').on('connection', (socket) => {
  console.log(socket.id, "他是怎么辨别不同的人的")
  usercount++
  chat.emit('usercount', {
    msg: usercount
  })

  socket.on('send_msgtoserver', (data) => {
    // console.log(io.sockets.sockets, "推送上来的sockets里面有什么")
    socket.broadcast.emit('send_msgto_client', data)
  })

  var data2msg;
  socket.on('messagetoserver', (data, callback) => {
    data2msg = data.msg
    callback('已收到')
  })

  socket.emit('messagetoclient', {
    msg: data2msg,
    username: 'server'
  })

  socket.on('disconnect', () => {
    usercount--
    chat.emit('usercount', {
      msg: usercount
    })
  })

})

let news = io.of('/news').on('connection', (socket) => {
  let newsInterval = setInterval(() => {
    socket.emit('news', {
      msg: 'news from ' + Date.now()
    })
  }, 1000)

  socket.on('disconnect', () => {
    clearInterval(newsInterval)
  })

})