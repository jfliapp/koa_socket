const Sequelize = require("sequelize")

const db = require("./index")
// const db = new Sequelize('test', 'root', '0414jian', {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 30000
//   }
// })

const User= db.define('user', {
  name: {
    type: Sequelize.STRING(12),
    allowNull: false
  },
  pwd: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sex: {
    type: Sequelize.STRING(12),
    allowNull: false,
    defaultValue: "boy"
  }
})

User.sync({
  alter: true
})

module.exports = User
