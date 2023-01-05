const experss = require('express')
const {
  createUser,
  getUser,
  getUsers,
} = require('../controllers/userController')

const router = experss.Router()

router
  .get('/user/:id', getUser)
  .get('/users', getUsers)
  .post('/users', createUser)
  .put('/user/:id', () => {})
  .delete('/user/id', () => {})

exports.userroutes = router
