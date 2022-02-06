const CarController = require('../app/controller/CarController')
const CheckCreate = require('../app/validation/car/create')

module.exports = (server, routes, prefix = '/api/v1') => {
  routes
    .post('/car', CheckCreate, CarController.create)
    .get('/car', CarController.list)
    .get('/car/:id', CarController.findById)
    .put('/car/:id', CarController.update)
    .delete('/car/:id', CarController.delete)
  server.use(prefix, routes)
}
