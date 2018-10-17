// const User = require('../db').User
const sha1 = require('sha1')
const { PWD_ENCODE_STR } = require('../utils/config')
const { create_token } = require('../utils/token')


module.exports = {
  // 用户登录
  async login(ctx, next) {
    let {user_id='', user_pwd=''} = ctx.request.body
    try {
      if(user_id == '' || user_pwd == '') {
        ctx.response.body = {
          code: 0,
          msg: "登录失败，请输入登录密码或账号"
        }
        return;
      }
      // 加密 密码不能有明文密码
      user_pwd = sha1(sha1(user_pwd + PWD_ENCODE_STR))
      // let res = await User.find({user_id, user_pwd});
      // if(res.lenght == 0) {
      //   ctx.response.body = {
      //     code: 0,
      //     msg: "登录失败，用户名或密码错误"
      //   }
      //   return;
      // }
      let token = create_token(user_id)
      // res[0].token = token;
      // res[0].save(); // 这是每次登录token都不一样都要重新保存到数据库 
      ctx.response.body = {
        code: 1,
        msg: "登录成功",
        data: {
          pwd: user_pwd,
          token: token
        }
        // data: {
        //   _id: res[0]._id,
        //   user_name: res.user_name,
        //   avatar: res[0].avatar,
        //   token
        // }
      }
    } catch(e) {
      console.log(e)
      ctx.response.body = {
        code: 0,
        msg: "登录失败，服务器异常"
      }
    }     
    
  }
}