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
  salary: {
    type: Sequelize.FLOAT(4,2),
    allowNull: false,
    defaultValue: 12.23
  },
  bouns: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 60
  },
  age: {
    type: Sequelize.STRING(12),
    allowNull: false,
    defaultValue: "18"
  }
})
Koasql.sync({
  // force: true, // 这个是 添加之前是否要 删除这个表重新建一个
  alter: true, // 这个是添加或者删除字段 都会自动添加
})
module.exports = Koasql;
