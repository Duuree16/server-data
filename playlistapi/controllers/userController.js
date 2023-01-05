const { User } = require('../models')

const createUser = async (req, res) => {
  const body = req.body
  const result = await new User(body).save()
  res.send(result)
}

const getUser = async (req, res) => {
  const id = req.params.id
  const result = await User.findOne({ firebaseId: id })
  res.send(result)
}
const getUsers = async (_req, res) => {
  const result = await User.find({})
  res.send(result)
}

module.exports = { getUser, getUsers, createUser }
