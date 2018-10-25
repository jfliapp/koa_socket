module.exports = function(sequelize, DataType) {
  return sequelize.define('address', {
    place: {
      type: DataType.STRING,
      allowNull:false,
      defaultValue: "大学城南"
    }
  }, {
    tableName: 'address',
    charset: 'utf8'
  })
}