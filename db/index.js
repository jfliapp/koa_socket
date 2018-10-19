
const config = require("../config/index.js")
console.log(config, "---------database------")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  port: config.port,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
sequelize.authenticate().then(() => {
  console.log("连接数据库成功")
}).catch((err) => {
  console.log("连接数据库失败：", err)
})
module.exports = sequelize
