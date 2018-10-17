// const comment = require("../db").comment

module.exports = {
  // 这个是get 获取数据
  async comments(ctx, next) {
    ctx.body = {
      code: 1,
      msg: "comments 数据",
      data: {
        comments: "comments De 数据"
      }
    }
  },
  // post添加数据
  async addComment(ctx, next) {
    let postData = ctx.request.body
    ctx.response.body = {
      code: 1,
      msg: "添加数据 数据",
      data: postData
    }
  }
}