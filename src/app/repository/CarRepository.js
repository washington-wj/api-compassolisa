const CarSchema = require('../schema/CarSchema')

class CarRepository {
  async create (payload) {
    return CarSchema.create(payload)
  }

  async list (payload) {
    return CarSchema.list(payload)
  }

  async findOne (id) {
    return CarSchema.findOne({
      _id: id
    })
  }

  async update (payload) {
    return CarSchema.updateOne(payload)
  }

  async delete (id) {
    return CarSchema.deleteOne(id)
  }
}

module.exports = new CarRepository()
