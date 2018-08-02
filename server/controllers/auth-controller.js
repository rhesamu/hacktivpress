const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const login = function(req, res) {
  User.findOne({ username: req.body.username })
  .then(user => {
    let passCheck = bcrypt.compareSync(req.body.password, user.password)
    if (!passCheck) {
      return res.status(400).json({ 
        msg: 'username/password does not match', 
        error: 'Please input correct email / password' 
      })
    }
    let token = jwt.sign({ id: user._id, username: user.username }, 'secretkey')
    console.log('User found', user, token)
    res.status(200).json({ message: 'User found', token })
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({ msg: 'username/password does not match', error: err })
  })
}

const signup = function(req, res) {
  let inputData = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  }

  User.create(inputData)
  .then(newUser => {
    console.log(newUser)
    res.status(201).json({ msg: 'User created', user: newUser })
  })
  .catch(err => {
    console.log(err)
    res.status(400).json({ msg: 'Create user error', error: err })
  })
}

module.exports = {
  login, signup
}