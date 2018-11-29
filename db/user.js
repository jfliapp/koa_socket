
module.exports = function(sequelize, DataType) { // sequelize, DataType 这两个参数是固定的
  return sequelize.define('user', {
    name: {
      type: DataType.STRING(12),
      allowNull: false
    },
    pwd: {
      type: DataType.TEXT,
      allowNull: false
    },
    sex: {
      type: DataType.STRING(12),
      allowNull: false,
      defaultValue: "boy"
    }
  })
}
