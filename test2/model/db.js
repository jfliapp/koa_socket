var Sequelize = require("sequelize")

exports.sequelize = function() {
  return new Sequelize('test', 'root', '0414jian', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  })
}
