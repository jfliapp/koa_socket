var sequelize = require("./db").sequelize()

var Account = sequelize.import("./account")
var Shop = sequelize.import("./shop")
var Address = sequelize.import("./address")
var Shop_Address = sequelize.import("./shop_address")

Account.hasMany(Shop, {foreignKey: 'Account_id'}) // 1:N
Shop.belongsToMany(Address, {through: Shop_Address, foreignKey: "shopId"}) // N:M
Address.belongsToMany(Shop, {through: Shop_Address, foreignKey: "addressId"}) // N:M

sequelize.sync({
  // force: false, // 这个是 如果表存在就删了 重新建一个表
  // alter: true // 这个是添加表的 列 就是 字段
})

exports.Account = Account
exports.Shop = Shop
exports.Address = Address
exports.Shop_Address = Shop_Address
