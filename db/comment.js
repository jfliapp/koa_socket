
module.exports = function(sequelize, DataType) {
  return sequelize.define('comment', {
    name: {
      type: DataType.STRING(12),
      allowNull: false
    },
    comments: {
      type: DataType.TEXT,
      allowNull: false
    },
    good: {
      type: DataType.BOOLEAN,
      defaultValue: false
    }
  })
}

