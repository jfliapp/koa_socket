const Sequelize = require("sequelize")
const mysql = require("mysql")

var sequelize = new Sequelize('test', 'root', '0414jian', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

var Koasql = sequelize.define('koasql', {
  koa_id: {
    type: Sequelize.STRING(12),
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  sex: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false 
  },
  age: {
    type: Sequelize.STRING(12),
    allowNull: false,
    defaultValue: "18"
  }
})
// Koasql.sync()
module.exports = Koasql;
