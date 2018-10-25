// var DataType = require("sequelize")

module.exports = function(sequelize, DataType) {
  return sequelize.define('shop_address', {
    name: {
      type: DataType.STRING,
      allowNull: false,
      defaultValue: "连表查询测试"
    }    
  }, {
    tableName: 'shop_address',
    charset: 'utf8'
  })
}