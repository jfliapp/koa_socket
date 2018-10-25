// var DataType = require("sequelize")


module.exports = function(sequelize, DataType) {
  return sequelize.define('account', {
    name: {
      type: DataType.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'account',
    charset: 'utf8'
  })
}