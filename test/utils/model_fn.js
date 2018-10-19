const Sequelize = require("sequelize")
console.log('init sequelize...');
var sequelize = new Sequelize('test', 'root', '0414jian', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.")
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})
// {
//   id: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   name: Sequelize.TEXT
// }

function defineModel(name, atttributes) {
  var attrs = {}
  for (let key in atttributes) {
    let value = atttributes[key] // 这个是我设置里面的值
    if(typeof value === "object" && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value
    }else {
      attrs[key] = {
        type: value,
        allowNull: false
      }
    }
  }
  attrs.createAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.updateAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  // 状态： 0 表示无效 1是有效 默认是1
  attrs.status = {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }

  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: function(obj) {
        let now = Date.now()
        if(obj.isNewRecord) {
          obj.createAt = now
          obj.updateAt = now
          obj.version = 0
        }else {
          obj.updateAt = now
          obj.version++
        }
      }
    }
  }) 
}
exports.defineModel = defineModel
