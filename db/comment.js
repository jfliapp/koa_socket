const Sequelize = require("sequelize")

const db = require("./index")

const Comment= db.define('comment', {
  name: {
    type: Sequelize.STRING(12),
    allowNull: false
  },
  comments: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  good: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Comment.sync({
  alter: true
})

module.exports = Comment
