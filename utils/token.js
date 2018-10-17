const jwt = require("jsonwebtoken") // 这是用来生成token 识别前端身份的
const {TOKEN_ENCODE_STR, URL_YES_PASS} = require("./config")
// const User = require("../db").User

module.exports = {
  create_token (str) {
    return jwt.sign({str},TOKEN_ENCODE_STR, {expiresIn: '1h'});
  },
  // 验证登录token是否正确 
  async check_token(ctx, next) {
    let url = ctx.url
    if(!URL_YES_PASS.includes(url)) {
      let Token = ctx.header.authorization
      if(Token == '') {
        ctx.response.body = {
          code: -1,
          msg: 'err',
          data: '没有登录'
        }
        return;
      }
      try {
        jwt.verify(Token.substr(7), TOKEN_ENCODE_STR, function(err,decode) {
          if(err) {
            console.log(err)
          }else {
            console.log(decode,"23")
          }
        })
        // let {str = ''} = await jwt.verify(token.substr(7), TOKEN_ENCODE_STR)
        // console.log(str, "这里检测token")
        // let res = await User.find({user_id: str,token})
        // if(res.lenght == 0){
        //   ctx.response.body = {
        //     code: 0,
        //     msg: 'ok',
        //     data: '登录过期'
        //   }
        //   return;
        // }
        // ctx._id = str
      } catch (error) {
        ctx.response.body = {
          code: 0,
          msg: 'err',
          data: '服务器出错'
        }
        return;
      }
    }
    await next()
  }  
}