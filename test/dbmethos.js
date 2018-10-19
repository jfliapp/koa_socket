const model_fn = require("./utils/model_fn.js")
const Sequelize = require("sequelize")
const Notices = model_fn.defineModel('Notie', {
  name: Sequelize.STRING(100),
  major: {
    type: Sequelize.STRING(100),
    defaultValue: "Math"
  },
  score: Sequelize.INTEGER,
  grade: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
})

module.exports = Notices
