const User = require('../models/User')

const getById = function(req, res) {
  User.findById(req.params.id)
    .then(user => {
      console.log(user)
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ msg: 'User not found', error: err })
    })
}

module.exports = {
  getById
}