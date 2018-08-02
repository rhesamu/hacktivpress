const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  username: {
    type: String,
    unique: [true, 'Username is taken'],
    required: 'Username is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  }
})

module.exports = mongoose.model('User', userSchema)