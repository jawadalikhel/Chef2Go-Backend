const mongoose = require('mongoose');

const coustomerSchema = new mongoose.Schema({
  fullname: String,
  address: String,
  phone: String,
  email: String,
  username: String,
  password: String
})

module.exports = mongoose.model('Coustomer', coustomerSchema);
