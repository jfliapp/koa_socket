const comment = require("../model-db/comment")

module.exports = {
  // 这个是get 获取数据
  async comments(ctx, next) {
    let data = await comment.getAllKoasql()
    ctx.state.code = 1
    ctx.state.data = data
  },
  // post添加数据
  async addComment(ctx, next) {
    let postData = ctx.request.body
    let data = await comment.createKoasql(postData)
    ctx.state.code = 1
    ctx.state.data = data
  },
  // delete 数据
  async delComment(ctx, next) {
    let id = ctx.params.id
    let data = await comment.delKoasqlById(id)
    ctx.state.code = 1
    ctx.state.data = data
  }
}