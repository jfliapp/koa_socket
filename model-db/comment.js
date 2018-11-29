const user = require("../db/index").Comments
// 添加数据
exports.createKoasql = async (data) => {
  if (data) {
    return user.create(data)
  }
}
// 根据id来查询数据
exports.getKoasqlById = async (id) => {
  if (id) {
    return user.findById(id)
  }
}
// 根据名字来查询数据
exports.getKoasqlByname = async (name) => {
  if (name) {
    return user.findOne({
      "where": {
        "name": name
      }
    })
  } else {
    return "没有这个数"
  }
}
// 查询全部数据
exports.getAllKoasql = async () => {
  return user.findAll()
}
// 删 数据根据id
exports.delKoasqlById = async (id) => {
  return user.destroy({
    where: {
      "id": id
    }
  })
}
// 根据id 来修改数据
exports.updateNoticesId = async (id, data) => {
  if (id) {
    return user.update(data, {
      where: {
        "id": id
      }
    })
  }
}