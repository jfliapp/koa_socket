const sequelize = require("./db")

const Comments = sequelize.import("./comment.js")
const User = sequelize.import("./user.js")

exports.User = User
exports.Comments = Comments
