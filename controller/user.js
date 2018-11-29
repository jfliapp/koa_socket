// const User = require('../db').User
const sha1 = require('sha1')
const { PWD_ENCODE_STR } = require('../utils/config')
const { create_token } = require('../utils/token')
const userdb = require("../model-db/user")

module.exports = {
  // 用户登录
  async login(ctx, next) {
    let data = ctx.request.body
    console.log(data)
    let user_id = data.name
    
    try {
      if(data.name == '' || data.password == '' || data.sex == '') {
        ctx.response.body = {
          code: 0,
          msg: "登录失败，请输入登录密码或账号或性别"
        }
        return;
      }
      // 加密 密码不能有明文密码
      user_pwd = sha1(sha1(data.password + PWD_ENCODE_STR))
      // let res = await User.find({user_id, user_pwd});
      // if(res.lenght == 0) {
      //   ctx.response.body = {
      //     code: 0,
      //     msg: "登录失败，用户名或密码错误"
      //   }
      //   return;
      // }
      let userdata = await userdb.createKoasql(
        {
          "name": user_id,
          "pwd": user_pwd,
          "sex": data.sex
        }
      )
      console.log(userdata)
      let token = create_token(user_id)
      // res[0].token = token;
      // res[0].save(); // 这是每次登录token都不一样都要重新保存到数据库 
      ctx.response.body = {
        code: 1,
        msg: "登录成功",
        data: {
          name: user_id,
          data: userdata,
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
    
  },
  // 获取全部用户
  async getAllUser(ctx, next) {
    let data = await userdb.getAllKoasql()
    ctx.state.code = 1
    ctx.state.data = data
  }
}