const comment = require("../model-db/comment")

module.exports = {
  // 这个是get 获取数据
  async comments(ctx, next) {
    let data = await comment.getAllKoasql()
    ctx.body = {
      code: 1,
      msg: "comments 数据",
      data
    }
  },
  // post添加数据
  async addComment(ctx, next) {
    let postData = ctx.request.body
    let data = await comment.createKoasql(postData)
    ctx.response.body = {
      code: 1,
      msg: "添加数据 数据",
      data: data
    }
  },
  // delete 数据
  async delComment(ctx, next) {
    let id = ctx.params.id
    let data = await comment.delKoasqlById(id)
    ctx.response.body = {
      code: 1,
      msg: "ok",
      data
    }
  }
}