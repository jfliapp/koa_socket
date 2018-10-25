// var DataType = require("sequelize")

module.exports = function(sequelize, DataType) {
  return sequelize.define('shop', {
    name: {
      type: DataType.STRING,
      allowNull: false,
      defaultValue: "阿里"
    },
    address: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'shop',
    charset: 'utf8'
  })
}