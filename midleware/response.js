module.exports = async (ctx, next) => {
  try {
    await next()
    ctx.body = ctx.body ? ctx.body : {
      code: ctx.state.code !== undefined ? ctx.state.code : 0,
      msg: "ok",
      data: ctx.state.data !== undefined ? ctx.state.data : {}
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: -1,
      msg: "error",
      error: err && err.message ? err.message : err.toString()
    }
  }
}