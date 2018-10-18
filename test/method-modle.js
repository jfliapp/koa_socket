const KoaSql = require("./db")
// 添加数据
exports.createKoasql = async(koa) => {
  if(!koa) {
    return {}
  }
  return KoaSql.create(koa)
}
// 根据id来查询数据
exports.getKoasqlById = async(id) => {
  if(id) {
    return KoaSql.findById(id)
  }
}
// 根据名字来查询数据
exports.getKoasqlByname = async(name) => {
  if(name) {
    return KoaSql.findOne({
      "where": {
        "name": name
      }
    })
  }else {
    return "没有这个数"
  }
}
// 查询全部数据
exports.getAllKoasql = async() => {
  return KoaSql.findAll()
}
// 删 数据根据id
exports.delKoasqlById = async(id) => {
  return KoaSql.destroy({
    where: {
      "id": id
    }
  })
}
// 根据id 来修改数据
exports.updateKoaSqlId = async(id, data) => {
  if(id) {
    return KoaSql.update(data,{
      where: {
        "id": id
      }
    })
  }
}