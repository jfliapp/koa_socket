var sequelize = require("./db").sequelize()

var Account = sequelize.import("./account")
var Shop = sequelize.import("./shop")
var Address = sequelize.import("./address")
var Shop_Address = sequelize.import("./shop_address")

Account.hasMany(Shop, {foreignKey: 'Account_id'}) // 1:N
Shop.belongsToMany(Address, {through: Shop_Address, foreignKey: "addressId"}) // N:M
Address.belongsToMany(Shop, {through: Shop_Address, foreignKey: "shopId"}) // N:M

sequelize.sync({
  alter: true
})

exports.Account = Account
exports.Shop = Shop
exports.Address = Address